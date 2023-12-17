import { getProducts } from "../../../../mongoose/utils";
import {type NextRequest} from 'next/server'

export async function GET(request: NextRequest) {
    const page = Number(request.nextUrl.searchParams.get('page'))
    const size = Number(request.nextUrl.searchParams.get('size'))

    const products = await getProducts({}, page, size)

    return Response.json(products)
}