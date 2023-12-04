import User from "../../../../mongoose/usermodel";
export async function POST(request: Request) {
    // const body = await request.json()
    const newUser = {
        _id: 'body.data.id',
        username: 'body.data.username',
    }

    try {
        await new User(newUser).save()
    } catch (err) {
        console.log(err)
        return Response.json({error:`${err}`})
    }

    return Response.json(newUser);
}

export const runtime = 'nodejs';