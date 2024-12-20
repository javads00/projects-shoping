// Home.tsx
import React from "react";
import { ProductNew, ProductSliders } from "../Products";
import SliderComponent from "@/components/Sliders/Sliders";

const Home: React.FC = () => {
  return (
    <div>
      <SliderComponent
        images={["slider1.webp", "slider2.webp", "slider3.webp"]}
      />

      <ProductNew />

      <ProductSliders />
    </div>
  );
};

export default Home;
