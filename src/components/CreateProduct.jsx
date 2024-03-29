import { useState } from "react";
import { useProductsContext } from "../contexts/ProductsContext";

export default function CreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [state, dispatch] = useProductsContext();

  function createProduct() {
    const id = Math.floor(Math.random() * 99999999999);

    dispatch({ type: "add", payload: { id, name, price } });
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={createProduct}>Add product!</button>
    </div>
  );
}
