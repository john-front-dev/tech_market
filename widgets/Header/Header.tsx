import { Icon, Typography, Button } from "@/shared/ui";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCartStore } from "@/app/store/cartStore";
import { searchProductsByName } from "./searchApi";
import { IProduct } from "@/shared";
import Profile from "@/widgets/Profile/Profile";

const Header = () => {
  const router = useRouter();
  const initializeCart = useCartStore((state) => state.initializeCart);
  const totalQuantity = useCartStore((state) => state.totalQuantity);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [value, setValue] = useState("");
  const [products, setProducts] = useState<IProduct[]>([]);

  const search = async () => {
    const products = await searchProductsByName(value);
    setProducts(products);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const menuItems = [
    { id: 1, title: "Худжанд", icon: "location" },
    { id: 2, title: "Профиль", icon: "profile" },
    { id: 3, title: "Корзина", icon: "cart" },
  ];

  const openProfile = (title: string) => {
    if (title === "Профиль") {
      setIsProfile(true);
    } else if (title === "Корзина") {
      router.push("/cart");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    initializeCart();
  }, [initializeCart]);

  useEffect(() => {
    if (value === "") return;
    search();
  }, [value]);

  return (
    <div
      className={`sticky top-0 z-20 bg-white ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto py-6 flex justify-between items-center gap-x-3 text-base">
        <div className="flex items-center w-11/12 mr-[56px]">
          <Link href="/" className="max-h-[42px] object-cover">
            <Icon name="logo" />
          </Link>
          <div className="flex items-center space-x-6 h-full w-10/12 ml-8">
            <Button className="flex">
              <Icon name="menu" />
              <Typography>Каталог товаров</Typography>
            </Button>
            <div className="flex w-full relative">
              <input
                className="py-2 pl-4 pr-[37px] h-[48px] w-full border-2 border-gray-300 hover:border-gray-400 placeholder-gray-400 outline-none focus:border-main focus:ring-0 rounded-md"
                type="text"
                autoComplete="false"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="название товара или артикуль"
              />
              <button className="flex justify-center items-center absolute -right-12 bg-main w-[56px] h-full rounded-r-lg">
                <Icon name="search" />
              </button>
              {value && (
                <div className="absolute bg-white max-h-[400px] top-16 w-[111%] overflow-auto no-scrollbar shadow-lg py-2 rounded-b-lg">
                  {products.length ? (
                    products.map(({ id, title }) => (
                      <Link href={`/product/${id}`} key={id}>
                        <div className="flex flex-col gap-2 py-2 hover:bg-alabaster-200 px-4">
                          <Typography size="text-s" weight="medium">
                            {title.slice(0, 70)}
                          </Typography>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <Typography className="px-4">Нету такого товара</Typography>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        {menuItems.map(({ id, icon, title }) => (
          <button
            onClick={() => openProfile(title)}
            className="text-center mt-1 group relative"
            key={id}
          >
            <Icon name={icon} />
            <Typography
              className="leading-[20px] mb-1 group-hover:text-main"
              weight="semibold"
              size="text-s"
              color="alabaster100"
            >
              {title}
            </Typography>
            {title === "Корзина" && totalQuantity > 0 && (
              <Typography
                className="absolute -top-1 right-1 bg-red-500 w-6 h-3 rounded-full flex justify-center items-center"
                color="white"
                size="text-sm"
              >
                {totalQuantity}
              </Typography>
            )}
          </button>
        ))}
      </div>
      {isProfile && <Profile close={() => setIsProfile(false)} />}
    </div>
  );
};

export default Header;
