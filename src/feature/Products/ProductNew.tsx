// Home.tsx
import React from "react";
import { BoxProduct } from "@/components/Feature";

export interface ProductInterface {
  title: string;
  description: string;
  price: string;
  image: string;
}
const ProductNew: React.FC = () => {
  const products: ProductInterface[] = [
    {
      title: "Product 1",
      description: "This is a description of product 1",
      price: "$100",
      image: "product.webp",
    },
    {
      title: "Product 2",
      description: "This is a description of product 2",
      price: "$150",
      image: "product2.webp",
    },
    {
      title: "Product 3",
      description: "This is a description of product 3",
      price: "$200",
      image: "product.webp",
    },
    {
      title: "Product 4",
      description: "This is a description of product 4",
      price: "$250",
      image: "product4.webp",
    },
    {
      title: "Product 5",
      description: "This is a description of product 5",
      price: "$300",
      image: "product5.webp",
    },
    {
      title: "Product 6",
      description: "This is a description of product 6",
      price: "$350",
      image: "product.webp",
    },
    {
      title: "Product 7",
      description: "This is a description of product 7",
      price: "$400",
      image: "product2.webp",
    },
    {
      title: "Product 8",
      description: "This is a description of product 8",
      price: "$450",
      image: "product4.webp",
    },
    {
      title: "Product 9",
      description: "This is a description of product 9",
      price: "$500",
      image: "product5.webp",
    },
    {
      title: "product.webp",
      description: "This is a description of product 10",
      price: "$550",
      image: "product.webp",
    },
  ];

  return (
    <div>
      <h1 className="text-black text-balance text-xl text-center mt-2">
        محصولات جدید
      </h1>
      <div className="grid  grid-cols-2 md:grid-cols-5 gap-2 mt-2 mx-2">
        {products.map((product) => {
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
