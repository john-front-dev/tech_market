import { Icon, IProduct, Typography } from "@/shared";
import Image from "next/image";
import { FC } from "react";

type CartProps = {
  totalQuantity: number;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cart: IProduct[];
};

export const Cart: FC<CartProps> = ({
  cart,
  clearCart,
  removeFromCart,
  totalQuantity,
}) => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-4">
          <Typography size="headline-l" weight="bold">
            Корзина
          </Typography>
          <Typography className="pt-1" color="alabaster100" weight="bold">
            {totalQuantity} товар
          </Typography>
        </div>
        <button onClick={clearCart}>
          <Typography className="hover:text-main">Очистить корзину</Typography>
        </button>
      </div>
      {cart.map((item) => (
        <div key={item.id} className="border-t p-4 mt-8">
          <div className="flex gap-4 items-center mt-4">
            <Image
              className="object-contain max-w-[120px] max-h-[120px]"
              src={item.image}
              alt={item.title}
              height="120"
              width="120"
            />
            <div className="flex flex-col justify-between w-full">
              <div className="flex justify-between">
                <Typography weight="bold" size="text-l">
                  {item.price} с
                </Typography>
                <button
                  className="text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Icon name="cartRemove" />
                </button>
              </div>
              <Typography size="text-l">{item.title}</Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
