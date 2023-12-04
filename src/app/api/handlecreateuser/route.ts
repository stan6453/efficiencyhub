import User from "../../../../mongoose/usermodel";
export async function POST(request: Request) {
    const body = await request.json()
    const newUser = {
        _id: body.data.id
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