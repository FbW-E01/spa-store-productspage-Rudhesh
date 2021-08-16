import { useLocaleContext } from "../contexts/LocaleContext";
import { useProductsContext } from "../contexts/ProductsContext";
import "./App.css";

export default function Products() {
  const [products, setProducts] = useProductsContext();
  const [locale] = useLocaleContext();

  function currencySelect() {
    switch (locale) {
      case "en-us":
        return "$";
      case "en-gb":
        return "£";
      case "de-de":
        return "€";
    }
  }

  const handleRemove = (id) => {
    const newList = products.filter((item) => item.id !== id);

    setProducts(newList);
  };

  return (
    <div className="Products">
      {products.map((prod) => (
        <div className="data">
          <div>
            {prod.name}: {prod.price} {currencySelect()}
          </div>
          <button type="button" onClick={() => handleRemove(prod.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
