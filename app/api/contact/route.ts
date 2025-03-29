export async function POST(request: Request){
    const useData = await request.json();
    return Response.json({message: "Hello world ", useData})
}