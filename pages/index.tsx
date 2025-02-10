import { CategoriesBlock } from "@/entities/categoriesBlock";
import { Slider } from "@/widgets/swaper";
import { IProduct } from "@/shared";
import {
  fetcheLaptops,
  fetchPhones,
  fetchAppliances,
  fetchMonitors,
  fetchSlides,
} from "@/widgets/home";

type Category = "Телефоны" | "Ноутбуки" | "Бытовая техника" | "Мониторы";
type Slides = {
  id: number;
  image: string;
};

type HomeProps = {
  slides: Slides[];
} & {
  [K in Category]: IProduct[];
};

export default function Home({ slides, ...products }: HomeProps) {
  return (
    <>
      <Slider data={slides} />
      <div className="flex flex-col gap-[72px] rounded-b-3xl mt-10">
        {Object.entries(products).map(([key, value]) => (
          <CategoriesBlock key={key} title={key} products={value} />
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const [phones, laptops, appliances, monitors, slides] = await Promise.all([
    fetchPhones(),
    fetcheLaptops(),
    fetchAppliances(),
    fetchMonitors(),
    fetchSlides(),
  ]);

  return {
    props: {
      slides,
      Телефоны: phones,
      Ноутбуки: laptops,
      "Бытовая техника": appliances,
      Мониторы: monitors,
    },
  };
}
