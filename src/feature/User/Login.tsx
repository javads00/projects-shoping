import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "@/components/Form/Input";
import { SchemaUserLogin } from "@/schemas/User";
import { FormLoginInterface, UserInterface } from "@/interfaces/User";
import { Button } from "@/components/Button";
import { RegisterPage } from "./Register";
import { RequestApi } from "@/apis/index";
import { useFetch } from "@/hooks/useFetch";
import { BaseResponseObjectInterface } from "@/interfaces/BaseResponseInterface";

import { loginUser } from "../../store/reducers/userReducer";
import { useAppDispatch } from "@/hooks/useDispatch";
import { useAppSelector } from "@/hooks/useSelector";
export const LoginPage = () => {
  const navigate = useNavigate();
  const user = useAppSelector((user) => user.userReducer);

  const [state, setState] = useState<number>(0);
  const dispatch = useAppDispatch();
  const Forms = useForm<FormLoginInterface>({
    resolver: yupResolver(SchemaUserLogin),
  });

  const handelState = (state: number) => {
    setState(state);
  };

  const loginUserFetch = useFetch<
    BaseResponseObjectInterface<UserInterface>,
    unknown,
    unknown
  >({
    request: RequestApi.loginUser(),
    onSuccess: (data) => {
      console.log(data.data.data, "datadata");
      dispatch(loginUser(data.data.data));
      toast.success("ورود با موفقیت انجام شد");
      navigate("/");
    },
  });

  useEffect(() => {
    if (user?.accessToken) {
      navigate("/");
      toast.success("شما ثبت نام کردید");
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          {state === 0 ? "ورود به حساب کاربری" : "ثبت نام"}
        </h2>
        {state == 0 && (
          <FormProvider {...Forms}>
            <form
              onSubmit={Forms.handleSubmit((data) =>
                loginUserFetch.reFetch(data)
              )}
            >
              <InputField label="کد ملی" name="nationalCode" />
              <InputField label="پسورد" name="password" />
              <Button type="submit">ورود</Button>
            </form>
          </FormProvider>
        )}

        {state == 1 && <RegisterPage changeState={handelState} />}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            {state == 0 ? "حساب کاربری ندارید؟" : "برای ورود کلید کنید"}
          </span>
          <a
            onClick={() => (state == 0 ? setState(1) : setState(0))}
            className="ml-2 text-blue-500 font-semibold hover:text-blue-700 transition duration-300 ease-in-out"
          >
            {state === 0 ? "ثبت‌ نام" : "ورود"}
          </a>
        </div>
      </div>
    </div>
  );
};
