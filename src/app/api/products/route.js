export const dynamic = 'force-static'
 
export async function GET() {
  const data = {
    message: "GET successfully",
    error: false,
    status: 200
  }
 
  return Response.json({ data })
}

// post
export async function POST(req){
    const newProducts= await req.json();
    return Response.json({newProducts})
}