import { ProductInterface } from "@/feature/Products/ProductSliders";
import { useAppDispatch } from "@/hooks/useDispatch";
import {
  createProductItem,
  decreaseProduct,
  increaseProduct,
} from "../../../store/reducers/product";
import { useAppSelector } from "@/hooks/useSelector";
import { toast } from "react-toastify";

export const BoxProduct = ({ data }: { data: ProductInterface }) => {
  const dispatch = useAppDispatch();
  const productList = useAppSelector((state) => state.productReducer);
  const user = useAppSelector((state) => state.userReducer);

  return (
    <div className="max-w-xs w-full rounded-lg bg-white shadow-lg overflow-hidden mb-4 transition-transform transform hover:scale-105">
      <img
        src={data.image}
        alt={data.name}
        className="object-cover w-full h-48 rounded-t-lg transition-transform duration-300 hover:scale-110"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          نام محصول: {data.name}
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          توضیحات محصول: {data.description}
        </p>
        <p className="mt-4 text-xl font-bold text-gray-900">
          قیمت محصول: {data.price} تومان
        </p>

        {/* Quantity Control */}

        {productList?.findIndex((A) => A.id === data.id) >= 0 && (
          <div className="flex items-center mt-4">
            <button
              onClick={() => dispatch(increaseProduct(data))}
              className="bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded-l"
            >
              -
            </button>
            <span className="mx-2">
              {productList?.find((V) => V.id == data.id)?.count || 0}
            </span>
            <button
              onClick={() => dispatch(decreaseProduct(data))}
              className="bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded-r"
            >
              +
            </button>
          </div>
        )}

        {productList?.findIndex((A) => A.id === data.id) == -1 && (
          <button
            className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            onClick={() =>
              !user?.refreshToken
                ? toast.error("لطفا لاگین کنید")
                : dispatch(createProductItem(data))
            }
          >
            خرید
          </button>
        )}
      </div>
    </div>
  );
};
