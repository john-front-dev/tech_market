import { useCartStore } from "@/app/store/cartStore";
import { Cart } from "./Cart";
import { Payment } from "./Payment";
import { useEffect } from "react";

export const CartList = () => {
  const { cart, totalQuantity, removeFromCart, clearCart, initializeCart } =
    useCartStore();

  useEffect(() => {
    initializeCart();
  }, [initializeCart]);

  return (
    <div className="pt-10 grid grid-cols-8 gap-10">
      <div className="col-span-5">
        <Cart
          cart={cart}
          clearCart={clearCart}
          totalQuantity={totalQuantity}
          removeFromCart={removeFromCart}
        />
      </div>
      <div className="col-span-3 relative">
        <Payment cart={cart} totalQuantity={totalQuantity} />
      </div>
    </div>
  );
};
