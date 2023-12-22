import { useState, useCallback, memo } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


import ImageSlider from "./ImageSlider";
import ListStores from "./ListStores";
import VideoList from "./videoList";

export default function ProductPage({ product }: { product: any }) {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = useCallback(
    (index: any) => {
      setActiveAccordion(activeAccordion === index ? null : index);
    }, [activeAccordion])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 p-5">
      <div className="p-10 md:p-20">

      <ImageSlider images={product.images} />
      </div>
      <div className="w-full p-1">
        <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
        <div>
          available on:
          <ListStores stores={product.stores} />
        </div>
        <div className="border-t border-gray-300 mt-4 pt-4">

          <div key={1} className="mb-2">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(1)}>
              <h2 className="font-semibold">Product details</h2>
              {
                activeAccordion === 1 ?
                  <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />
              }
            </div>
            {activeAccordion === 1 && (
              <div className="mt-2">
                <pre className="product-description ">
                  {product['description']}
                </pre>
              </div>
            )}
          </div>

          <div key={2} className="mb-2">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(2)}>
              <h2 className="font-semibold">Features</h2>
              {
                activeAccordion === 2 ?
                  <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />
              }
            </div>
            {activeAccordion === 2 && (
              <div className="mt-2">
                {
                  product.features.map((feature: string) => (
                    <div key={feature} className="flex justify-between items-center">
                      <li>
                        {feature}
                      </li>
                    </div>
                  ))
                }
              </div>
            )}
          </div>



          {
            (product.videos !== undefined && product.videos !== null && product.videos.length !== 0) && (
              <div key={3} className="mb-2">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(3)}>
                  <h2 className="font-semibold">Videos</h2>
                  {
                    activeAccordion === 3 ?
                      <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />
                  }
                </div>
                <div className={`${activeAccordion === 3 ? 'block' : 'hidden'}`}>
                  <VideoList videos={product.videos} />
                </div>

              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
