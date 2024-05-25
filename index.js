import  express  from 'express';
import { MongoClient } from 'mongodb';

const server=express();
server.use(express.json())
const client = new MongoClient('mongodb://localhost:27017');
//mongodb://localhost:27017

await client.connect();
console.log("connected to Database")
const DB = client.db('Academy');


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

