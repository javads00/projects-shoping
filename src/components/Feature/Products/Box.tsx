import { ProductInterface } from "@/feature/Products/ProductSliders";

export const BoxProduct = ({ data }: { data: ProductInterface }) => {
  return (
    <div className="max-w-xs w-full rounded-lg bg-white shadow-lg overflow-hidden mb-4 transition-transform transform hover:scale-105">
      <img
        src={data.image}
        alt={data.title}
        className="object-cover w-full h-48 rounded-t-lg transition-transform duration-300 hover:scale-110"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          نام محصول: {data.title}
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          توضیحات محصول: {data.description}
        </p>
        <p className="mt-4 text-xl font-bold text-gray-900">
          قیمت محصول: {data.price} تومان
        </p>
        <button className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          خرید
        </button>
      </div>
    </div>
  );
};
