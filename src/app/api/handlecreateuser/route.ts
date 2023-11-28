import User from "../../../../mongoose/usermodel";
export async function POST(request:Request){
    const body = await request.json()
    const newUser = {
        _id : body.data.id,
        username: body.data.username,
    }
    new User(newUser).save()
}

export const runtime = 'nodejs';