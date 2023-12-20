import { useState, useCallback } from "react";

import ImageSlider from "./ImageSlider";

export default function DisplayProduct({ product }: { product: any }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = useCallback(
    (index: any) => {
      setActiveAccordion(activeAccordion === index ? null : index);
    }, [activeAccordion])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 p-10">
      <ImageSlider images={product.images} />
      <div className="w-full p-5">
        <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
        <div>
          available on:
          <div className='flex flex-wrap'>
          {
            product.stores.map((store: any) => {
              return (
                <div key={store.name}>
                  <div>{store.name}</div>
                  <div dangerouslySetInnerHTML={{ __html: store.link }}></div>
                </div>
              )
            }
            )
          }
          </div>
        </div>
        <div className="border-t border-gray-300 mt-4 pt-4">
          {['Product Details', 'Brand', 'Size & Fit', 'Look After Me', 'About Me'].map((item, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(index)}>
                <h2 className="font-semibold">{item}</h2>
                <i className={`fas ${activeAccordion === index ? 'fa-minus' : 'fa-plus'}`}></i>
              </div>
              {activeAccordion === index && (
                <div className="mt-2">
                  <p>Content for {item}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
