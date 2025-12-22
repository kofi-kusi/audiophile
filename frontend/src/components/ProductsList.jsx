import CategoryPageItem from "./CategoryPageItem";

export default function ProductsList({ products }) {
  return (
    <div className="mt-16 md:mt-30 lg:mt-40 flex flex-col gap-30">
      {products.map((product, index) => (
        <CategoryPageItem product={product} index={index} />
      ))}
    </div>
  );
}
