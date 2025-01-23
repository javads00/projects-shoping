// Home.tsx
import React, { useEffect, useState } from "react";
import { BoxProduct } from "@/components/Feature";
import { useFetch } from "@/hooks/useFetch";
import { BaseResponseInterface } from "@/interfaces/BaseResponseInterface";
import { RequestApi } from "@/apis/index";
import { useAppSelector } from "@/hooks/useSelector";

export interface ProductInterface {
  name: string;
  description: string;
  price: string;
  image: string;
  id: string;
}
const ProductNew: React.FC = () => {
  const user = useAppSelector((state) => state.userReducer);
  const [listSlider, setListSlider] = useState<ProductInterface[]>([]);

  const products: ProductInterface[] = [
    {
      name: "Product 1",
      description: "This is a description of product 1",
      price: "$100",
      image: "product.webp",
      id: "1",
    },
    {
      name: "Product 2",
      description: "This is a description of product 2",
      price: "$150",
      image: "product2.webp",
      id: "2",
    },
    {
      name: "Product 3",
      description: "This is a description of product 3",
      price: "$200",
      image: "product.webp",
      id: "3",
    },
    {
      name: "Product 4",
      description: "This is a description of product 4",
      price: "$250",
      image: "product4.webp",
      id: "4",
    },
    {
      name: "Product 5",
      description: "This is a description of product 5",
      price: "$300",
      image: "product5.webp",
      id: "5",
    },
    {
      name: "Product 6",
      description: "This is a description of product 6",
      price: "$350",
      image: "product.webp",
      id: "6",
    },
    {
      name: "Product 7",
      description: "This is a description of product 7",
      price: "$400",
      image: "product2.webp",
      id: "7",
    },
    {
      name: "Product 8",
      description: "This is a description of product 8",
      price: "$450",
      image: "product4.webp",
      id: "8",
    },
    {
      name: "Product 9",
      description: "This is a description of product 9",
      price: "$500",
      image: "product5.webp",
      id: "9",
    },
    {
      name: "product.webp",
      description: "This is a description of product 10",
      price: "$550",
      image: "product.webp",
      id: "10",
    },
  ];

  const getDataSports = useFetch<
    BaseResponseInterface<ProductInterface[]>,
    unknown,
    unknown
  >({
    request: RequestApi.getProducts(user.accessToken!, user.refreshToken!),
    onSuccess: (data) => {
      console.log(data.data, "asa");

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
    getDataSports.reFetch();
  }, []);

  return (
    <div>
      <h1 className="text-black text-balance text-xl text-center mt-2">
        محصولات جدید
      </h1>
      <div className="grid  grid-cols-2 md:grid-cols-5 gap-2 mt-2 mx-2">
        {listSlider?.length > 0
          ? listSlider.map((product) => {
              return (
                <div>
                  <BoxProduct data={product} />
                </div>
              );
            })
          : products.map((product) => {
              return (
                <div>
                  <BoxProduct data={product} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ProductNew;
