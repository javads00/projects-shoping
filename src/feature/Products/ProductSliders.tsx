// Home.tsx
import React, { useEffect, useState } from "react";
import { ProductSlider } from "@/components/SliderProduct";
import { SwiperSlide } from "swiper/react";
import { BoxProduct } from "@/components/Feature";
import { BaseResponseInterface } from "@/interfaces/BaseResponseInterface";
import { useFetch } from "@/hooks/useFetch";
import { RequestApi } from "@/apis/index";
import { useAppSelector } from "@/hooks/useSelector";

export interface ProductInterface {
  name: string;
  description: string;
  price: string;
  image: string;
  id: string;
}
const ProductSliders: React.FC = () => {
  const user = useAppSelector((state) => state.userReducer);
  const [listSlider, setListSlider] = useState<ProductInterface[]>([]);

  const products: ProductInterface[] = [
    {
      name: "Product 1",
      description: "This is a description of product 1",
      price: "$100",
      image: "product.webp",
      id: "11",
    },
    {
      name: "Product 2",
      description: "This is a description of product 2",
      price: "$150",
      image: "product2.webp",
      id: "12",
    },
    {
      name: "Product 3",
      description: "This is a description of product 3",
      price: "$200",
      image: "product.webp",
      id: "13",
    },
    {
      name: "Product 4",
      description: "This is a description of product 4",
      price: "$250",
      image: "product4.webp",
      id: "14",
    },
    {
      name: "Product 5",
      description: "This is a description of product 5",
      price: "$300",
      image: "product5.webp",
      id: "15",
    },
    {
      name: "Product 6",
      description: "This is a description of product 6",
      price: "$350",
      image: "product.webp",
      id: "16",
    },
    {
      name: "Product 7",
      description: "This is a description of product 7",
      price: "$400",
      image: "product2.webp",
      id: "17",
    },
    {
      name: "Product 8",
      description: "This is a description of product 8",
      price: "$450",
      image: "product4.webp",
      id: "18",
    },
    {
      name: "Product 9",
      description: "This is a description of product 9",
      price: "$500",
      image: "product5.webp",
      id: "19",
    },
    {
      name: "product.webp",
      description: "This is a description of product 10",
      price: "$550",
      image: "product.webp",
      id: "20",
    },
  ];

  const getDataSports = useFetch<
    BaseResponseInterface<ProductInterface[]>,
    unknown,
    unknown
  >({
    request: RequestApi.getProducts(user.accessToken!, user.refreshToken!),
    onSuccess: (data) => {
      console.log(data.data, "ssssssssssssssasa");

      const productItem = data.data.map((I) => {
        return {
          name: I.name,
          description: I.description,
          price: I.price,
          image: `${import.meta.env.VITE_APP_URL_MEDIA}/${I.image}`,
          id: I.id,
        };
      });

      setListSlider(productItem);
    },
  });

  useEffect(() => {
    getDataSports.reFetch(null, { news: true });
  }, []);

  return (
    <div>
      <h1 className="text-black text-balance text-xl text-center mt-2">
        محصولات
      </h1>
      <div className="w-full bg-red-700 mt-2">
        <ProductSlider>
          <div className="flex">
            {listSlider?.length > 0
              ? listSlider.map((product) => {
                  return (
                    <SwiperSlide>
                      <BoxProduct data={product} />
                    </SwiperSlide>
                  );
                })
              : products.map((product) => {
                  return (
                    <SwiperSlide>
                      <BoxProduct data={product} />
                    </SwiperSlide>
                  );
                })}
          </div>
        </ProductSlider>
      </div>
    </div>
  );
};

export default ProductSliders;
