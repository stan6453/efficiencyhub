export async function GET(request:Request){
    const data = await request.json()
    return Response.json({message:"ok"})
}