import { useState } from "react";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "@/components/Form/Input";
import { SchemaUserLogin } from "@/schemas/User";
import { FormLoginInterface } from "@/interfaces/User";
import { Button } from "@/components/Button";
import { RegisterPage } from "./Register";

export const LoginPage = () => {
  // const navigate = useNavigate();
  const [state, setState] = useState<number>(0);

  const Forms = useForm<FormLoginInterface>({
    resolver: yupResolver(SchemaUserLogin),
  });

  const onSubmitForm = (data: FormLoginInterface) => {
    console.log(data, "saaaaaaaaaaaaaaaaaaaaa");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          {state === 0 ? "ورود به حساب کاربری" : "ثبت نام"}
        </h2>
        {state == 0 && (
          <FormProvider {...Forms}>
            <form onSubmit={Forms.handleSubmit(onSubmitForm)}>
              <InputField label="کد ملی" name="nationalCode" />
              <InputField label="پسورد" name="password" />
              <Button type="submit">ثبت نام</Button>
            </form>
          </FormProvider>
        )}

        {state == 1 && <RegisterPage />}
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
