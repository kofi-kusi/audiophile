import React from 'react'
import ProductDetails from '../components/ProductDetails'
import GoBack from '../components/ui/GoBack';
import { ProductsContext } from '../contexts/ProductsContext';
import { useContext } from 'react';
import { useParams } from 'react-router';
import CategoriesThumbnail from '../components/CategoriesThumbnail';
import BestGear from '../components/BestGear';

export default function ProductPage() {
    const products = useContext(ProductsContext);
    const { category, slug } = useParams()

    const product = products.filter(product => product.slug === slug)[0]

  return (
    <>
    <head>
      <title>{"Audiophile shop - " + product.name}</title>
    </head>
    <main className='max-w-[1150px] mx-auto px-6 mt-4 md:mt-8 lg:mt-20'>
        <GoBack to={"/"+category} />
        <ProductDetails product={product}/>
        <CategoriesThumbnail />
        <BestGear />
    </main>
    </>
  )
}
