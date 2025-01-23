// Home.tsx
import React, { useEffect, useState } from "react";
import { ProductNew, ProductSliders } from "../Products";
import SliderComponent from "@/components/Sliders/Sliders";
import { BaseResponseInterface } from "@/interfaces/BaseResponseInterface";
import { RequestApi } from "@/apis/index";
import { useFetch } from "@/hooks/useFetch";
import { useAppSelector } from "@/hooks/useSelector";
import { SliderItemInterface } from "@/interfaces/User";

const Home: React.FC = () => {
  const user = useAppSelector((state) => state.userReducer);
  const [listSlider, setListSlider] = useState<string[]>([]);
  const listBeforeSlider = ["slider1.webp", "slider2.webp", "slider3.webp"];
  const products = useAppSelector((R) => R.productReducer);
  console.log(products, "products");
  const getDataSports = useFetch<
    BaseResponseInterface<SliderItemInterface[]>,
    unknown,
    unknown
  >({
    request: RequestApi.getSliderItem(user.accessToken!, user.refreshToken!),
    onSuccess: (data) => {
      const result: string[] = data.data.map((I) => {
        return `${import.meta.env.VITE_APP_URL_MEDIA}/${I.image}`;
      });
      setListSlider(result);
    },
  });

  useEffect(() => {
    getDataSports.reFetch();
  }, []);

  return (
    <div>
      <SliderComponent
        images={listSlider?.length > 0 ? listSlider : listBeforeSlider}
      />

      <ProductNew />

      <ProductSliders />
    </div>
  );
};

export default Home;
