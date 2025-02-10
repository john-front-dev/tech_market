"use client";

import { ProductCard } from "@/entities/productCard";
import { IProduct, Typography } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getCategory } from "../api/getCategoryApi";

export const Category = () => {
  const router = useRouter();
  const { query, push } = router;
  const { id } = query;

  const currentSort = (query.sort as string) || "default";

  const { data, isLoading, isError } = useQuery<IProduct[]>({
    queryKey: ["phones", id],
    queryFn: () => getCategory(Number(id)),
    enabled: Boolean(id),
  });

  const handleSortChange = (newSort: string) => {
    const updatedQuery = { ...query, sort: newSort };
    if (newSort === "default") {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { sort, ...rest } = updatedQuery;
      push({ query: rest });
    } else {
      push({ query: updatedQuery });
    }
  };

  const sortedData = data?.sort((a, b) => {
    if (currentSort === "cheap") return a.price - b.price;
    if (currentSort === "expensive") return b.price - a.price;
    if (currentSort === "default") return a.id - b.id;
    return 0;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Typography size="headline-l" weight="bold">
          Загрузка...
        </Typography>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Typography size="headline-l" weight="bold">
          Ошибка загрузки данных.
        </Typography>
      </div>
    );
  }

  const categoryName = data[0]?.category?.name || "Категория не найдена";
  const productCount = data.length || 0;

  return (
    <div className="pt-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Typography size="headline-l" weight="bold">
            {categoryName}
          </Typography>
          <Typography className="pt-2" weight="medium" color="alabaster100">
            {productCount} товаров
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <Typography weight="medium" color="alabaster100">
            Сортировать
          </Typography>
          <select
            value={currentSort}
            onChange={(e) => handleSortChange(e.target.value)}
            className="w-[220px] h-[46px] border border-alabaster-100 rounded-md "
          >
            <option value="default">По умолчанию</option>
            <option value="cheap">Сначала дешевые</option>
            <option value="expensive">Сначала дорогие</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-14 mt-10">
        {sortedData?.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
