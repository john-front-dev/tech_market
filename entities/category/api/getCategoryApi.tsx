import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API;

export const getCategory = async (id: number) => {
  const { data } = await axios.get(baseUrl + `products?category.id=${id}`);
  return data;
};
