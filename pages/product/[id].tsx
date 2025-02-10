import { getProductDetail } from "@/entities/detailCard/api/detailApi";
import { DetailCard } from "@/entities/detailCard/ui";
import { IProduct } from "@/shared";
import { RecentlyViewed } from "@/widgets/RecentlyViewed";
import { GetServerSideProps } from "next";

interface ProductDetailPageProps {
  product: IProduct;
}

export default function ProductDetail({ product }: ProductDetailPageProps) {
  return (
    <div className="flex flex-col gap-20 pt-6">
      <DetailCard product={product} />
      <RecentlyViewed />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.params!;

    if (!id || Array.isArray(id)) {
      return {
        notFound: true,
      };
    }

    const product = await getProductDetail(id);

    if (!product) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching product detail:", error);
    return {
      notFound: true,
    };
  }
};
