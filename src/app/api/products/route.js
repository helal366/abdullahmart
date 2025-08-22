import dbConnect, { collectionNames } from "@/lib/dbConnect"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server";
 
export async function GET() {
  const data = await dbConnect(collectionNames.PRODUCTS).find({}).toArray()
 
  return NextResponse.json(data);
}

// post
export async function POST(req){
    const newProduct= await req.json();
    const result=await dbConnect(collectionNames.PRODUCTS).insertOne(newProduct);
    revalidatePath("/products");
    return NextResponse.json(data);
}