import { type NextRequest } from 'next/server'
import { auth } from '@clerk/nextjs';
import User from '../../../../../../../mongoose/usermodel';


export async function GET(request: NextRequest) {
    // /api/users/me/wishlist
    const { userId } : { userId: string | null } = auth();
    if (!userId)
        return Response.json({ status: 401, body: { error: "Unauthorized"}})

    const user = await User.findById(userId).populate('wishlist').exec();
    return Response.json({ status: 200, body: { wishlist: user.wishlist }})
}