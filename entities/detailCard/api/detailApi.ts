import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API;

export const getProductDetail = async (id: string) => {
  const { data } = await axios.get(baseUrl + `products?id=${id}`);
  return data[0];
};
