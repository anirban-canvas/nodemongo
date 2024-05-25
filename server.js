import  express  from 'express';
import mongoose from 'mongoose';
const server=express();
server.use(express.json())
let password=encodeURIComponent('guvi#245');
console.log(password)
await mongoose.connect(`mongodb+srv://guvi:${password}@cluster0.4soxw27.mongodb.net/Academy?retryWrites=true&w=majority&appName=Cluster0`)
console.log("database connected")
const Schema = mongoose.Schema;

const user = new Schema({
    name:String,
    dept:String
  });

const UserModel = mongoose.model('users', user);

server.get('/users',async (req,res)=>{

    let response=await UserModel.find()
    res.send(response)

})



server.post('/users',async (req,res)=>{

    let newuser=new UserModel({
        name:req.body.name,
        dept:req.body.dept
    })
    await newuser.save()


    res.status(201)
    res.send("created")


})


server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

