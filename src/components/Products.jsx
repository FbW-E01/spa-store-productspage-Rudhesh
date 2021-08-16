import { useLocaleContext } from "../contexts/LocaleContext";
import { useProductsContext } from "../contexts/ProductsContext";
import "./App.css";

export default function Products() {
  const [state, dispatch] = useProductsContext();
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

  return (
    <div className="Products">
      {state.map((prod) => (
        <div className="data">
          <div>
            {prod.name}: {prod.price} {currencySelect()}
          </div>
          <button
            type="button"
            onClick={() =>
              dispatch({ type: "delete", payload: { id: prod.id } })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
