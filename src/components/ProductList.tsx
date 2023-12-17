import ProductCard from './ProductCard';
import { Products } from '../../global_types';

export default function ProductList({ products, wishList }: { products: Products, wishList: string[] }) {
    return (
        <div className="bg-white">
            <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-evenly">
                    {products.map((product) => <ProductCard product={product} inWishList={wishList.includes(product._id)} key={product._id} />)}
                </div>
            </div>
        </div >
    );
}
