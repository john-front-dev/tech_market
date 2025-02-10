import { IProduct } from "../model/types";

const RECENTLY_VIEWED_KEY = "recentlyViewedProducts";

export const addToRecentlyViewed = (product: IProduct) => {
  const existing = getRecentlyViewed();
  const updated = [
    product,
    ...existing.filter((item) => item.id !== product.id),
  ];
  localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(updated));
};

export const getRecentlyViewed = (): IProduct[] => {
  const data = localStorage.getItem(RECENTLY_VIEWED_KEY);
  return data ? JSON.parse(data) : [];
};

export const clearRecentlyViewed = () => {
  localStorage.removeItem(RECENTLY_VIEWED_KEY);
};
