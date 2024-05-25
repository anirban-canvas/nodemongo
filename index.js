import  express  from 'express';
//import { MongoClient } from 'mongodb';
import DB from './db.js';
const server=express();
server.use(express.json())
let password=encodeURIComponent('guvi#245');
console.log(password)
// const client = new MongoClient(`mongodb+srv://guvi:${password}@cluster0.4soxw27.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);


// await client.connect();
// console.log("connected to Database")
// const DB = client.db('Academy');


// client.connect().then((res)=>{
//     console.log("connected to database ")
//     const db = client.db('Academy');
// })
// .catch((err)=>{
//     console.log("connection error")
// })




server.get('/books',async (req,res)=>{

    const collection = DB.collection('books');

    let response=await collection.find().toArray()

    res.send(response)

})



server.post('/books',async (req,res)=>{

    console.log(req.body)
    const collection = DB.collection('books');
    await collection.insertOne({name:req.body.name,catagory:req.body.catagory})

    res.status(201)
    res.send("created")


})


server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

