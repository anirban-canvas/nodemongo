
import { MongoClient } from 'mongodb';
let password=encodeURIComponent('guvi#245');
console.log(password)
const client = new MongoClient(`mongodb+srv://guvi:${password}@cluster0.4soxw27.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
//mongodb://localhost:27017
//mongodb+srv://<username>:<password>@cluster0.4soxw27.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//fsd55@$123

await client.connect();
console.log("connected to Database")
const DB = client.db('Academy');
export default DB