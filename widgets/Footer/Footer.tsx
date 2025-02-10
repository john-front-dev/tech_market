import { Icon, Typography } from "@/shared/ui";

const Footer = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="grid grid-cols-3 gap-4 container mx-auto">
        <div className="flex flex-col justify-start">
          <span className="w-[150px] mb-6">
            <Icon name="logo" />
          </span>
          <ul className="flex flex-col gap-3">
            <li>О нас</li>
            <li>Вакансии</li>
            <li>Новости в Tech Shop</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start">
          <Typography
            size="text-xs"
            color="alabaster100"
            weight="semibold"
            className="mb-4"
          >
            Для покупателей
          </Typography>
          <ul className="flex flex-col gap-3">
            <li>Рассрочка</li>
            <li>Реквизиты</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start">
          <Typography
            size="text-xs"
            color="alabaster100"
            weight="semibold"
            className="mb-4"
          >
            Для партнеров
          </Typography>
          <ul className="flex flex-col gap-3">
            <li>Продовать на Tech shop</li>
            <li>Личный кабинет продовца</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer