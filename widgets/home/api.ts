import { axiosInstance } from "@/shared/api";

export const fetchPhones = async () => {
  const { data } = await axiosInstance.get("products?category.id=1");
  return data;
};

export const fetcheLaptops = async () => {
  const { data } = await axiosInstance.get("products?category.id=2");
  return data;
};

export const fetchAppliances = async () => {
  const { data } = await axiosInstance.get("products?category.id=3");
  return data;
};

export const fetchMonitors = async () => {
  const { data } = await axiosInstance.get("products?category.id=4");
  return data;
};

export const fetchSlides = async () => {
  const { data } = await axiosInstance.get("slides");
  return data;
};
