'use client';

import { useEffect, useState } from "react";

import ProductList from "@/components/ProductList";
import ProductCard from '../../../../components/ProductCard';

import { getWishList } from "../../../../../src/utils/wishlist";
import { getWishlistProducts } from "../../../../../src/utils/wishlist";


export default function Wishlist() {
    const [wishList, setWishList] = useState([]);
    const [products, setProducts] = useState<null | []>(null);

    useEffect(
        () => {
            getWishlistProducts()
                .then(res => {
                    console.log(res)
                    setProducts(res)
                })
        }, [])


    useEffect(() => {
        getWishList()
            .then((res) => {
                setWishList(res);
            })
    }, [])

    if (products === null) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col mt-10">
            <h1 className="text-center">Wishlist</h1>
            {products.length === 0 ?
                <div className="justify-center items-center flex py-40">
                    <p>There is nothing in your wishlist</p>
                </div>
                :
                <ProductList products={products}  DisplayComponent={ProductCard} />
            }
        </div>
    );
}
