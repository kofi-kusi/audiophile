import CategoryPageItem from "./CategoryPageItem";

export default function ProductsList({ products }) {
  const newProducts = products.filter((p) => p.new === true);
  const oldProducts = products.filter((p) => !p.new);

  const orderedProducts = [...newProducts, ...oldProducts];
  return (
    <div className="my-16 md:my-30 lg:my-40 flex flex-col gap-30">
      {orderedProducts.map((product, index) => (
        <CategoryPageItem product={product} index={index} />
      ))}
    </div>
  );
}
