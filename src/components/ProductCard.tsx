import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import { TfiHeart } from "react-icons/tfi";

import { IProduct } from "../../global_types";


async function addToWishList(productId: string) {
    const url = new URL(`/api/users/me/wishlist/${productId}`, process.env.NEXT_PUBLIC_HOST)
    const res = await fetch(url, { method: 'POST' })
    return (await res.json()).body.wishlist;
}

async function removeFromWishlist(productId: string) {
    const url = new URL(`/api/users/me/wishlist/${productId}`, process.env.NEXT_PUBLIC_HOST)
    const res = await fetch(url, { method: 'DELETE' })
    return (await res.json()).body.wishlist;
}


export default function ProductCard({ product, inWishList, setWishList }: { product: IProduct, inWishList: boolean, setWishList:Dispatch<SetStateAction<never[]>> }) {
    const [hover, setHover] = useState(false);

    return (
        <div className="mb-10 flex flex-col justify-evenly w-[300px] h-[400px] md:w-[250px] rounded-lg border border-gray-200 product-card relative">
            <div className="relative h-full w-full">
                <Image
                    onMouseEnter={(e) => { setHover(true) }}
                    onMouseLeave={(e) => { setHover(false) }}
                    src={hover ? product.images[1] : product.images[0]}
                    sizes="(max-width: 768px) 100px, (max-width: 1200px) 50vw, 33vw"
                    fill={true}
                    alt={`Image of ${product.name}`}
                />

                <div
                    className="absolute bottom-5 right-5 flex justify-center items-center bg-white rounded-full shadow-lg p-4"
                >
                    {
                        //TODO : add onClick event to add to wishlist
                        //TODO: add check to see if product is in wishlist
                        inWishList ?
                            <FaHeart
                                style={{
                                    backgroundColor: 'transparent',
                                    color: 'black',
                                }}
                                size='1em'
                                onClick={ async () => {
                                    setWishList(await removeFromWishlist(product._id))
                                }}
                            />
                            :
                            <TfiHeart
                                style={{
                                    backgroundColor: 'transparent',
                                    color: 'black',
                                }}
                                size='1em'
                                onClick={ async () => {
                                    setWishList( await addToWishList(product._id))
                                }}
                            />
                    }
                </div>
            </div>

            <div className="mt-2 text-sm px-4 pb-3">
                <p className="text-gray-900 font-semibold">{product.name}</p>
                <p className="text-gray-600">Category: {product.category}</p>
            </div>
        </div>
    );
}