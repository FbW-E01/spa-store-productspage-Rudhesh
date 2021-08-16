import { useLocaleContext } from "../contexts/LocaleContext";
import { useProductsContext } from "../contexts/ProductsContext";

export default function Header() {
  const [products] = useProductsContext();
  const [, setLocale] = useLocaleContext();

  return (
    <header>
      <h1>Product manager</h1>
      <p>Now with {products.length} products</p>

      <label>Currency:</label>
      <select onChange={(e) => setLocale(e.target.value)}>
        <option value="de-de">Euro</option>
        <option value="en-us">Dollar</option>
        <option value="en-gb">Pound</option>
      </select>
    </header>
  );
}
