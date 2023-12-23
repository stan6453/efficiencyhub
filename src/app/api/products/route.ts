import { getProducts } from "../../../../mongoose/utils";
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const searchString = request.nextUrl.searchParams.get('searchstring')
    const page = Number(request.nextUrl.searchParams.get('page'))
    const size = Number(request.nextUrl.searchParams.get('size'))
    const categories = JSON.parse(request.nextUrl.searchParams.get('categories') as string);

    const query = generateQuery(categories, searchString)


    try {
        const products = await getProducts(query, page, size)
        return Response.json(products)
    } catch (err) {
        console.log(err)
        return Response.json({ products: [], count: 0 })
    }

}

function generateQuery(categories: string[], searchString: string | null) {
    let query: any = {}
    if (categories.length > 0) {
        query.category = { $in: categories }
    }
    if (searchString) {
        query = { ...query, $text: { $search: searchString } }
    }
    return query
}