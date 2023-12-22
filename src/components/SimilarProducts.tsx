import { useContext, useEffect, useState } from "react";

import ProductList from "./ProductList";
import searchContext from "@/utils/searchContext";
import SmallProductCard from "./SmallProductCard";

async function getSimilarProducts({ productId }: { productId: string }) {
    try {
        const url = new URL(`/api/products/${productId}/recommend`, process.env.NEXT_PUBLIC_HOST)
        let res: any = await fetch(url)
        res = await res.json()
        return(res.body)
    } catch (err) {
        console.log(err)
        return []
    }

}


export default function SimilarProducts({ id }: { id: string }) {
    const [products, setProducts] = useState([]);

    const {
        searchString,
        page,
        setPage,
        size,
        setSize,
        selectedCategories,
        setSelectedCategories,
        totalProductsFound,
        setTotalProductsFound,
        categories,
        setCategories,
    } = useContext(searchContext);


    useEffect(() => {
        getSimilarProducts({ productId: id })
        .then((res) => {
            setProducts(res);
        })
    }, [])

    return (
        <div>
            <p className="pl-5">
            Similar Products:
            </p>
            <ProductList products={products} DisplayComponent={SmallProductCard}/>
        </div>
    );
}
