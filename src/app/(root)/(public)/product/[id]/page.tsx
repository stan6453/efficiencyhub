'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import DisplayProduct from "@/components/ProductPage";
import SimilarProducts from "@/components/SimilarProducts";

async function getProducts(id: string) {
  try {
    const url = new URL(`/api/products/${id}`, process.env.NEXT_PUBLIC_HOST)
    let res: any = await fetch(url)
    res = await res.json()
    return res.body.product
  } catch (err) {
    console.log(err)
    return null
  }
}

export default function ProductPage() {
  const params = useParams<{ id: string }>()
  const [isFetching, setIsFetching] = useState(true)
  const [product, setProduct] = useState(null)


  useEffect(() => {
    getProducts(params.id)
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
