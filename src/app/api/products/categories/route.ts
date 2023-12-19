import { type NextRequest } from 'next/server'

import Product from '../../../../../mongoose/productmodel';


export async function GET(request: NextRequest) {
    // /api/users/me/wishlist
    let categories = await Product.aggregate([
        {
            $group: {
                _id: "$category", count: { $sum: 1 }
            }
        },
        {
            $project: {
                'name': '$_id',
                'count': 1,
                '_id': 0
            }
        }
    ]);

    return Response.json({ status: 200, body: { categories } })
}