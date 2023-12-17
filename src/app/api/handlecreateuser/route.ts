import User from "../../../../mongoose/usermodel";

//TODO: Add authentication middleware

export async function POST(request: Request) {
    const body = await request.json()
    const newUser = {
        _id: body.data.id,
        wishlist: [],
    }

    try {
        await new User(newUser).save()
    } catch (err) {
        console.log(err)
        return Response.json({ error: `${err}` })
    }
    return Response.json({ status: 200 });
}

export const runtime = 'nodejs';