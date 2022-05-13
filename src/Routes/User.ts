import { Router } from 'express';
import express,{Request,Response} from 'express';
import { addUser, deleteUser, getUser, updateUser ,getUserbyid} from '../controller/userController';
import { userSchema } from '../models/userSchema';
const router=express.Router()
router.get('/',(req:Request,res:Response)=>{
    res.send("hello")
    
})
router.get('/user',getUser)
router.get('/user/:id',getUserbyid)
router.post('/user',addUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)

module.exports=router