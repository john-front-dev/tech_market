import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API;

export const searchProductsByName = async (name: string) => {
  const { data } = await axios.get(`${baseUrl}products`);
  return data.filter((product: { title: string }) =>
    product.title.toLowerCase().includes(name.toLowerCase())
  );
};
