import CategoryPageItem from './CategoryPageItem'

export default function ProductsList({ products }) {
  return (
    <div className='mt-16 md:mt-30 lg:mt-40 flex flex-col gap-30'>
        {
            products.map(product => <CategoryPageItem product={product}/>)
        }
    </div>
  )
}
