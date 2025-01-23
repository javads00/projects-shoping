/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "@/components/Form/Input";
import { SchemaUserRegister } from "@/schemas/User";
import { FormRegisterInterface } from "@/interfaces/User";
import { Button } from "@/components/Button";
import { useFetch } from "@/hooks/useFetch";
import { BaseResponseInterface } from "@/interfaces/BaseResponseInterface";
import { RequestApi } from "@/apis/index";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const RegisterPage = (changeState: any) => {
  const navigate = useNavigate();

  const Forms = useForm<FormRegisterInterface>({
    resolver: yupResolver(SchemaUserRegister),
  });

  const createUser = useFetch<BaseResponseInterface<unknown>, unknown, unknown>(
    {
      request: RequestApi.createUser(),
      onSuccess: () => {
        toast.success("کاربر با موفقیت ثبت نام شد");
        navigate("/login");
        changeState(0);
      },
    }
  );

  return (
    <FormProvider {...Forms}>
      <form onSubmit={Forms.handleSubmit((data) => createUser.reFetch(data))}>
        <InputField label="نام " name="firstName" />
        <InputField label="نام خانوادگی" name="lastName" />
        <InputField label="کد ملی" name="nationalCode" />
        <InputField label="پسورد" name="password" />
        <Button type="submit">ثبت نام</Button>
      </form>
    </FormProvider>
  );
};
