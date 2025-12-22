import CategoryPageItem from "./CategoryPageItem";

export default function ProductsList({ products }) {
  const newProducts = products.filter((p) => p.new === true);
  const oldProducts = products.filter((p) => !p.new);

  const orderedProducts = [...newProducts, ...oldProducts];
  return (
    <div className="mt-16 md:mt-30 lg:mt-40 flex flex-col gap-30">
      {orderedProducts.map((product, index) => (
        <CategoryPageItem product={product} index={index} />
      ))}
    </div>
  );
}
