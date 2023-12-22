import { Products } from '../../global_types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { getWishList } from "../../src/utils/wishlist";


export default function ProductList({ products, DisplayComponent }: { products: Products, DisplayComponent: any }) {
    const [wishList, setWishList] = useState(['']);

    useEffect(() => {
        getWishList()
            .then((res:any) => {
                setWishList(res);
            })
    }, [])

    return (
        <div className="bg-white">
            <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-evenly">
                    {products.map((product) => <DisplayComponent key={product._id} product={product} inWishList={wishList.includes(product._id)} setWishList={setWishList} />)}
                </div>
            </div>
        </div >
    );
}
