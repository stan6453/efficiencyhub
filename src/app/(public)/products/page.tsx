'use client';

import { useState, useEffect } from "react";

import ProductList from "@/components/ProductList";


async function getProducts(url: URL) {
    try {
        const res = await fetch(url);
        const jsonRes = await res.json();
        return jsonRes
    } catch (err) {
        console.log(err)
    }
}

async function getWishList() {
    const url = new URL('/api/users/me/wishlist', process.env.NEXT_PUBLIC_HOST)
    let res: any = await fetch(url)
    res = await res.json()
    if (res.status == 401) {
        console.log('not logged in');
        return [];
    }
    return res.body.wishlist;
}


export default function ProductIndex() {
    const [wishList, setWishList] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(20);
    const [products, setProducts] = useState<null | []>(null);

    useEffect(() => {
        getWishList()
            .then((res) => {
                setWishList(res);
            })
    }, [])

    useEffect(() => {
        const url = new URL('/api/products', process.env.NEXT_PUBLIC_HOST)
        url.searchParams.set('page', `${page}`);
        url.searchParams.set('size', `${size}`);

        const productList = getProducts(url)
            .then((res) => {
                setProducts(res);
            })
    }, [page, size])

    if (products === null) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    if (products.length === 0) {
        return (
            <div>
                <p>Result is empty</p>
            </div>
        )
    }

    return (
        <div>
            <ProductList products={products} wishList={wishList} />
        </div>
    );
}
