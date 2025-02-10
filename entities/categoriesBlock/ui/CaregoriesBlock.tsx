"use client";

import { ProductCard } from "@/entities/productCard";
import { IProduct } from "@/shared/model/types";
import { Typography, Icon, Button } from "@/shared/ui";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";

type CategoriesBlockProps = {
  products: IProduct[];
  title: string;
  isSeeAll?: boolean;
};

export const CategoriesBlock: FC<CategoriesBlockProps> = ({
  products = [],
  title,
  isSeeAll = true,
}) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (container.current) {
      const { scrollLeft, scrollWidth, clientWidth } = container.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const rightScroll = () => {
    if (container.current) {
      container.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const leftScroll = () => {
    if (container.current) {
      container.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScrollPosition();
    if (container.current) {
      container.current.addEventListener("scroll", checkScrollPosition);
      return () => {
        container.current?.removeEventListener("scroll", checkScrollPosition);
      };
    }
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-x-4">
          <Typography size="text-xl" weight="bold">
            {title}
          </Typography>
          {isSeeAll && (
            <Link href={`/categories/${products[0].category.id}`}>
              <Typography className="text-color hover:text-main cursor-pointer">
                Смотреть все
              </Typography>
            </Link>
          )}
        </div>
        {products.length > 5 && (
          <div className="flex gap-x-4">
            <Button
              rounded="rounded-full"
              className="w-10 h-10"
              bgColor={canScrollLeft ? "main" : "alabaster200"}
              onClick={rightScroll}
            >
              <Icon
                name="leftIcon"
                color={canScrollLeft ? "#222222" : "#73787d"}
              />
            </Button>
            <Button
              rounded="rounded-full"
              className="w-10 h-10"
              bgColor={canScrollRight ? "main" : "alabaster200"}
              onClick={leftScroll}
            >
              <Icon
                name="rightIcon"
                color={canScrollRight ? "#222222" : "#73787d"}
              />
            </Button>
          </div>
        )}
      </div>
      <div className="flex gap-x-14 overflow-auto no-scrollbar" ref={container}>
        {products.map((item: IProduct) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
