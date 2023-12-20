import { NextRequest } from 'next/server'

import Product from '../../../../../mongoose/productmodel';


export async function GET(request: NextRequest,
    {params}: {params: {id: string}}) {
    // /api/users/me/wishlist
    let product = await Product.findById(params.id);

    return Response.json({ status: 200, body: { product } }) 
}