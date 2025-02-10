import { FC, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import TopBarProgress from "react-topbar-progress-indicator";

type RouterProgressProps = {
  color: string;
};

export const RouterProgress: FC<RouterProgressProps> = ({ color }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useMemo(() => {
    TopBarProgress.config({
      barColors: {
        "0": color,
      },
      shadowBlur: 0,
    });
  }, [color]);

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeEnd = () => setLoading(false);

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router]);

  return loading ? (
    <>
      <TopBarProgress />
      <div className="fixed inset-0 bg-gray-100 z-50"></div>
    </>
  ) : null;
};
