"use client";

import { Typography } from "@/shared/ui";
import Image from "next/image";
import { IProduct } from "@/shared/model/types";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { addToRecentlyViewed } from "@/shared/utils";

type DetailCardProps = {
  product: IProduct;
};
export const DetailCard: FC<DetailCardProps> = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    addToRecentlyViewed(product);
  }, [product]);

  return (
    <div>
      <div className="flex gap-2 mb-16">
        <Link href="/">
          <Typography
            className="hover:text-main text-blue cursor-pointer"
            size="text-xs"
            weight="medium"
          >
            Главная <span className="text-alabaster-300">/</span>
          </Typography>
        </Link>
        <Link href={`/categories/${product?.category?.id}`}>
          <Typography
            className="hover:text-main text-blue cursor-pointer"
            size="text-xs"
            weight="medium"
          >
            {product.category?.name}
          </Typography>
        </Link>
      </div>
      <div className="flex justify-between">
        <div className="w-[60%] pl-[80px]">
          <Image
            src={product.image}
            alt="Img"
            className="object-contain min-h-[512px]"
            priority={true}
            width={512}
            height={512}
          />
        </div>
        <div className="w-[40%]">
          <Typography size="text-xl" weight="medium">
            {" "}
            {product.title}
          </Typography>
          <div className="mt-6">
            {product.sale ? (
              <div className="flex items-center gap-4">
                <Typography size="headline-l" weight="bold">
                  {" "}
                  {product.price - product.price * (product.sale / 100)} c.{" "}
                </Typography>
                <span className="line-through text-alabaster-300 text-2xl font-extralight">
                  {" "}
                  {product.price} c.
                </span>
                <span className="bg-red-500 px-2 py-1 rounded-lg text-white text-xs">
                  -{product.sale}%
                </span>
              </div>
            ) : (
              <Typography size="headline-l" weight="medium">
                {" "}
                {product.price} c.
              </Typography>
            )}
          </div>
          <Typography
            className="mt-2"
            color="alabaster100"
            size="text-l"
            weight="regular"
          >
            В рассрочку{" "}
            {product.sale
              ? (
                  ((product.price - product.price * (product.sale / 100)) *
                    1.22) /
                  12
                ).toFixed(0)
              : ((product.price * 1.22) / 12).toFixed(0)}{" "}
            с. / мес.
          </Typography>
          <hr className="my-6" />
          {Object.entries(product?.characteristic)
            .slice(0, isVisible ? 20 : 6)
            .map(([key, value]) => (
              <Typography className="mt-3" key={key}>
                <span className="text-alabaster-100">{key}:</span>{" "}
                <span className="font-semibold">
                  {Array.isArray(value) ? value.join(", ") : value}
                </span>
              </Typography>
            ))}
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="text-blue hover:text-main mt-2"
          >
            {!isVisible ? "Все характеристики" : "Скрыть характеристики"}
          </button>
          <hr className="my-6" />
        </div>
      </div>
    </div>
  );
};
