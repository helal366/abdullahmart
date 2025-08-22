import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;
const options = {}
let client;
let clientPromise;
if (!uri) {
    throw new Error("Please add your MONGODB_URI to .env.local")
}

client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})
async function getDB(dbName){
    try{
        await client.connect();
        console.log(">>>>connect to db<<<<<<");
        return client.db(dbName)
    }catch(err){
        console.log(err)
    }
}

export async function getCollections(productsCollection){
    const db=await getDB('abdullahMart');
    if(db){
        return db.collection(productsCollection)
    }
    return null;
}