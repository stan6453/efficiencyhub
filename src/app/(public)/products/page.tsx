'use client';

import { useState, useEffect } from "react";

import ProductList from "@/components/ProductList";
import { SelectItems as SelectCategories } from "@/components/formElements";
import { Category } from "../../../../global_types";
import { getWishList } from "../../../../src/utils/wishlist";



async function getProducts(url: URL) {
    try {
        const res = await fetch(url);
        const jsonRes = await res.json();
        return jsonRes
    } catch (err) {
        console.log(err)
    }
}

async function getCategories() {
    try {
        const url = new URL('/api/products/categories', process.env.NEXT_PUBLIC_HOST)
        let res: any = await fetch(url)
        res = await res.json()
        return res.body.categories
    } catch (err) {
        console.log(err)
        return []
    }

}


export default function ProductIndex() {
    const [wishList, setWishList] = useState([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [totalProductsFound, setTotalProductsFound] = useState(0);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(20);
    const [products, setProducts] = useState<null | []>(null);

    useEffect(() => {
        console.log('getting categories')
        getCategories()
            .then((res) => {
                setCategories(res);
                console.log('categories:', res)
            })
    }, [])

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
        url.searchParams.set('categories', JSON.stringify(selectedCategories));

        console.log(url.toString())

        const productList = getProducts(url)
            .then((res) => {
                setProducts(res.products);
                setTotalProductsFound(res.count)
            })
    }, [page, size, selectedCategories])

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
        <div className="flex flex-col">
            <div className="z-10 my-10 relative">
                <div className="text-center">Filter:</div>
                <div className="flex justify-center absolute right-0 left-0">
                    <div>
                        <SelectCategories categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-10">
                {totalProductsFound} products found
            </div>
            <ProductList products={products} wishList={wishList} setWishList={setWishList} />
        </div>
    );
}

