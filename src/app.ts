import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: Number = 8000;

const userrouter = require("./Routes/User");

const url: string =
  "mongodb+srv://root:salman@cluster0.rvau9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

import mongoose from "mongoose";

export const conn = mongoose.connect(url, (err: any) => {
  if (err) {
    return err;
  } else {
    console.log("Successfull");
  }
});

app.use(bodyParser.json());

app.use("/user", userrouter);

app.listen(port);
