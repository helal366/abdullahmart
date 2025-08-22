export const dynamic = 'force-static'
 
export async function GET() {
  const data = await dbConnect("products").find({}).toArray()
 
  return Response.json(data )
}

// post
export async function POST(req){
    const newProduct= await req.json();
    const result=await dbConnect("products").insertOne(newProduct)
    return Response.json(result)
}