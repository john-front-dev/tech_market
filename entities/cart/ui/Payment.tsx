import { Button, IProduct } from "@/shared";
import { FC } from "react";

type PaymentProps = {
  cart: IProduct[];
  totalQuantity: number;
};

export const Payment: FC<PaymentProps> = ({ cart, totalQuantity }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const sale = cart.reduce((total, item) => total + item.sale, 0);
  return (
    <div className="bg-alabaster-200 rounded-xl p-5 sticky top-32">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <span>Товары({totalQuantity})</span>
          <span>Скидка</span>
          <span className="mt-4 font-bold text-lg">Итого</span>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <span>{totalPrice} c.</span>
          <span>-{sale} c.</span>
          <span className="mt-4 font-bold text-lg">{totalPrice - sale} c.</span>
        </div>
      </div>
      <Button className="w-full h-[56px] mt-4 text-center">
        Перейти к оформлению
      </Button>
    </div>
  );
};
