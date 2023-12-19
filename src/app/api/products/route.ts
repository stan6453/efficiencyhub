import { getProducts } from "../../../../mongoose/utils";
import {type NextRequest} from 'next/server';

export async function GET(request: NextRequest) {
    const page = Number(request.nextUrl.searchParams.get('page'))
    const size = Number(request.nextUrl.searchParams.get('size'))
    const categories = JSON.parse(request.nextUrl.searchParams.get('categories') as string);

    const query = generateQuery(categories)
    const products = await getProducts(query, page, size)

    return Response.json(products)
}

function generateQuery(categories: string[]) {
    const query:any = {}
    if (categories.length > 0) {
        query.category = { $in: categories }
    }
    return query
}