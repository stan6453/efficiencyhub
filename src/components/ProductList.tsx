import ProductCard from './ProductCard';
import { Products } from '../../global_types';
import { Dispatch, SetStateAction } from 'react';

export default function ProductList({ products, wishList, setWishList }: { products: Products, wishList: string[], setWishList:Dispatch<SetStateAction<never[]>> }) {
    return (
        <div className="bg-white">
            <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-evenly">
                    {products.map((product) => <ProductCard product={product} inWishList={wishList.includes(product._id)} key={product._id} setWishList={setWishList} />)}
                </div>
            </div>
        </div >
    );
}
