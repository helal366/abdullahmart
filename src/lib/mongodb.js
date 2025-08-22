import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error("Please add your MONGODB_URI to .env.local")
}

function dbConnection(collectionName){
    const client = new MongoClient(uri, {
        serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    })
    return client.db(process.env.DB_NAME).collection(collectionName)
}


