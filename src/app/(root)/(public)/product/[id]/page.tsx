import ProductPage from "@/components/ProductPage";
import { getProduct } from "@/utils/products";

export async function generateMetadata({ params }: { params: { id: string } }) {

  const product = await getProduct(params.id)
    
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image[0],
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    
  };
}

export default function Page() {
  return (
    <div>
      <ProductPage />
    </div>
  );
}
