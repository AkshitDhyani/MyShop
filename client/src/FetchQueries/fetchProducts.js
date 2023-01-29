import Port from "../Strings";

const fetchProducts = async () => {
  const apiRes = await fetch(`http://localhost:${Port()}/api/product`);

  if (!apiRes.ok) {
    throw new Error(`products fetch not ok`);
  }

  return apiRes.json();
};

export default fetchProducts;
