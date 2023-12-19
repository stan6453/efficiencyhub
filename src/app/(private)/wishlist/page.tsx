'use client';
import ProductList from "@/components/ProductList";
import { useEffect,useState } from "react";

import { getWishList } from "../../../../src/utils/wishlist";
import { getWishlistProducts } from "../../../../src/utils/wishlist";


export default function Wishlist() {
  const [wishList, setWishList] = useState([]);
  const [products, setProducts] = useState<null | []>(null);

  useEffect(
    () => {
      getWishlistProducts()
      .then(res =>{
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

    if (products.length === 0) {
        return (
            <div>
                <p>Result is empty</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            <ProductList products={products} wishList={wishList} setWishList={setWishList} />
        </div>
    );
}
