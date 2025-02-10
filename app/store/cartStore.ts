import { IProduct } from "@/shared/model/types";
import { create } from "zustand";

interface ICartState {
  cart: IProduct[];
  totalQuantity: number;
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  initializeCart: () => void;
}

export const useCartStore = create<ICartState>((set, get) => ({
  cart: [],
  totalQuantity: 0,

  initializeCart: () => {
    if (typeof window === "undefined") return;
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart: IProduct[] = JSON.parse(storedCart);
        const totalQuantity = parsedCart.reduce(
          (total, item) => total + (item.quantity ?? 0),
          0,
        );
        set({ cart: parsedCart, totalQuantity });
      } catch (e) {
        console.error("Ошибка при загрузке данных корзины:", e);
      }
    }
  },

  addToCart: (product) => {
    const { cart } = get();

    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id,
    );

    if (existingProductIndex > -1) {
      return;
    }

    const quantity = product.quantity ?? 1;
    const updatedCart = [...cart, { ...product, quantity }];

    const totalQuantity = updatedCart.reduce(
      (total, item) => total + (item.quantity ?? 0),
      0,
    );

    set({ cart: updatedCart, totalQuantity });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  },

  removeFromCart: (productId) => {
    const { cart } = get();
    const updatedCart = cart.filter((item) => item.id !== productId);

    const totalQuantity = updatedCart.reduce(
      (total, item) => total + (item.quantity ?? 0),
      0,
    );

    set({ cart: updatedCart, totalQuantity });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  },

  clearCart: () => {
    set({ cart: [], totalQuantity: 0 });
    localStorage.removeItem("cart");
  },
}));
