import { FC } from "react";
import Image from "next/image";
import { Icon, Typography, Button } from "@/shared/ui";
import Link from "next/link";
import { IProduct } from "@/shared/model/types";
import { useCartStore } from "@/app/store/cartStore";

export const ProductCard: FC<IProduct> = ({ ...product }) => {
  const { id, image, sale, price, title } = product;
  const { addToCart } = useCartStore();

  return (
    <div className="min-w-[180px] max-w-[180px]">
      <Link target="_blank" href={`/product/${id}`}>
        <div className="group cursor-pointer">
          <div className="relative">
            <Image
              src={image}
              alt="tel"
              className="min-h-[180px]"
              width={180}
              height={180}
              priority={true}
            />
            {sale && (
              <div className="flex bg-red-500 rounded-lg text-center px-[6px] py-[2.5px] absolute -bottom-1">
                <Typography size="text-sm" color="white">
                  -{sale}%
                </Typography>
              </div>
            )}
          </div>
          <div className="flex gap-x-1 mt-1">
            <Typography color="black" weight="bold">
              {sale ? (
                <span>{price - price * (sale / 100)}</span>
              ) : (
                <span>{price}</span>
              )}
            </Typography>
            <Typography color="black" weight="bold">
              c.
            </Typography>
          </div>
          <div className="flex gap-x-1 mb-1">
            <div className="flex gap-x-1">
              <Typography color="alabaster100" size="text-xs">
                {Math.ceil(((price - price * (sale / 100)) / 12) * 1.22)}
              </Typography>
              <Typography color="alabaster100" size="text-xs">
                c.
              </Typography>
            </div>
            <div className="flex gap-x-1">
              <Typography color="alabaster100" size="text-xs">
                12
              </Typography>
              <Typography color="alabaster100" size="text-xs">
                мес
              </Typography>
            </div>
          </div>
          <div className="flex gap-x-1 mt-1 h-[42px]">
            <Typography
              size="text-xs"
              weight="semibold"
              className="text-black group-hover:text-main leading-5 line-clamp-2 text-wrap ..."
            >
              {title}
            </Typography>
          </div>
        </div>
      </Link>

      <Button
        onClick={() => addToCart(product)}
        className="flex justify-center items-center gap-x-2 mt-7"
      >
        <Icon name="cart" size={16} />
        <Typography size="text-xs" weight="semibold">
          В корзину
        </Typography>
      </Button>
    </div>
  );
};
