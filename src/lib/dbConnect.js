import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNames = {
    USERS: "users",
    PRODUCTS: "products"
}

const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error("Please add your MONGODB_URI to .env.local")
}

let client;
let clientPromise;

if(!global._mongoClientPromise){
    client=new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    });
    global._mongoClientPromise=client.connect()
}
clientPromise=global._mongoClientPromise;

async function dbConnect(collectionName){
    const client = await clientPromise;
    return client.db(process.env.DB_NAME).collection(collectionName)
}

export default dbConnect;