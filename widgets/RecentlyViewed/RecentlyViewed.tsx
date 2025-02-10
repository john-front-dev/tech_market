"use client";

import { CategoriesBlock } from "@/entities/categoriesBlock";
import { IProduct } from "@/shared/model/types";
import { getRecentlyViewed } from "@/shared/utils";
import { useEffect, useState } from "react";

export const RecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState<IProduct[]>([]);

  useEffect(() => {
    const viewedProducts = getRecentlyViewed();

    if (viewedProducts && viewedProducts.length > 0) {
      setRecentlyViewed(viewedProducts);
    }
  }, []);

  return (
    <div>
      {recentlyViewed.length > 0 && (
        <CategoriesBlock
          title="Вы недавно смотрели"
          products={recentlyViewed}
          isSeeAll={false}
        />
      )}
    </div>
  );
};
