import { type NextRequest } from 'next/server'
import User from '../../../../../../../mongoose/usermodel';
import { auth } from '@clerk/nextjs';


export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
    // /api/users/me/wishlist/[id]
    const productId = params.id;
    const { userId }: { userId: string | null } = auth();
    if (!userId)
        return Response.json({ status: 401, body: { error: "Unauthorized" } })

    const user = await User.findById(userId).exec();
    if (!user.wishlist.includes(productId)) {
        user.wishlist.push(productId);
        await user.save();
    }
    return Response.json({ status: 200, body: { wishlist: user.wishlist } })
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    // /api/users/me/wishlist/[id]
    const productId = params.id;
    
    const { userId }: { userId: string | null } = auth();
    if (!userId)
        return Response.json({ status: 401, body: { error: "Unauthorized" } })

    const user = await User.findById(userId).exec();

    user.wishlist.remove(productId);
    await user.save();

    return Response.json({ status: 200, body: { wishlist: user.wishlist } })
}