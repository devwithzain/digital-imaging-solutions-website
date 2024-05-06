import React from 'react'
import Image from 'next/image'
import { diCuttingProductData } from '@/constant'

export default function Product() {
  return (
    <section className="w-full flex flex-col gap-8 padding-x py-20">
      {diCuttingProductData.map((item) => (
        <div className="w-full flex sm:flex-col xm:flex-col sm:odd:flex-col-reverse xm:odd:flex-col-reverse even:flex-row-reverse sm:even:flex-col-reverse xm:even:flex-col-reverse justify-between gap-6" key={item.id}>
          <div className="flex-1">
            <Image src={item.src}
              alt="product_01_img"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <h1 className="text-3xl text-black uppercase">{item.title}</h1>
            <p className="text-[18px] text-black">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
