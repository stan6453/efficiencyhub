'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getProduct } from "@/utils/products";
import DisplayProduct from "@/components/DisplayProduct";
import SimilarProducts from "@/components/SimilarProducts";

export default function ProductPage() {
  const params = useParams<{ id: string }>()
  const [isFetching, setIsFetching] = useState(true)
  const [product, setProduct] = useState(null)


  useEffect(() => {
    getProduct(params.id)
      .then((res) => {
        setProduct(res)
        setIsFetching(false)
      })
  }, [])

  if (isFetching) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <DisplayProduct product={product}/>
      <SimilarProducts id={(product as any)._id} />
    </div>
  );
}
