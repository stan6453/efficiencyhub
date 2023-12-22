import { NextRequest } from 'next/server'

import Product from '../../../../../../mongoose/productmodel';


export async function GET(request: NextRequest,
    { params }: { params: { id: string } }) {
    // /api/users/me/wishlist
    let product = await Product.findById(params.id);

    let searchString = product.tags.join(' ');

    let result = await Product.aggregate([
        {
            $match: { $text: { $search: searchString } }
        },
        {
            $addFields: {
                score: { $meta: "textScore" }
            }
        },
        {
            $sort: {
                score: { $meta: "textScore" }
            }
        },
        {
            $limit: 20
        },
    ]);

    // result = result.filter((product:any) => product._id.toString() !== params.id) 

    return Response.json({ status: 200, body: result })
}