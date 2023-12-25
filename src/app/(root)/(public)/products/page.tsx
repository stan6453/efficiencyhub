'use client';

import { useState, useEffect, useContext } from "react";

import ProductList from "@/components/ProductList";
import ProductCard from '../../../../components/ProductCard';
import { SelectItems as SelectCategories } from "@/components/formComponents";
import searchContext from "@/utils/searchContext";
import { getAndSetProducts } from "@/utils/products";

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
    const {
        searchString,
        page,
        setPage,
        size,
        setSize,
        selectedCategories,
        setSelectedCategories,
        products,
        setProducts,
        totalProductsFound,
        setTotalProductsFound,
        categories,
        setCategories,
    } = useContext(searchContext);

    useEffect(() => {
        getCategories()
            .then((res) => {
                setCategories(res);
            })
    }, [])

    

    useEffect(() => {
        getAndSetProducts({ searchString, page, size, selectedCategories, setProducts, setTotalProductsFound })
    }, [selectedCategories, page])

    if (products === null) {
        return (
            <div>
                <p>Loading...</p>
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

            {products.length === 0 ?
                <div className="text-center mx-auto mt-20">
                    <p>No Product Found</p>
                </div>
                :
                <div>
                    <div className="text-center mt-10">
                        {totalProductsFound} {totalProductsFound === 1 ? 'product' : 'products'} found
                    </div>
                        <ProductList products={products} DisplayComponent={ProductCard}/>
                </div>
            }
        </div>
    );
}

