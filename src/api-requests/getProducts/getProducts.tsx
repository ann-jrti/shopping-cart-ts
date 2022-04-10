//@ts-ignore
export const getProducts = async (): Promise<CartItemType[]> => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  console.log(data);
  return data;
  // await (await fetch('https://fakestoreapi.com/products')).json();
};
