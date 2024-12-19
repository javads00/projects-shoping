import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "@/components/Form/Input";
import { SchemaUserRegister } from "@/schemas/User";
import { FormRegisterInterface } from "@/interfaces/User";
import { Button } from "@/components/Button";

export const RegisterPage = () => {
  const Forms = useForm<FormRegisterInterface>({
    resolver: yupResolver(SchemaUserRegister),
  });

  const onSubmitForm = (data: FormRegisterInterface) => {
    console.log(data, "saaaaaaaaaaaaaaaaaaaaa");
  };

  return (
    <FormProvider {...Forms}>
      <form onSubmit={Forms.handleSubmit(onSubmitForm)}>
        <InputField label="نام " name="firstName" />
        <InputField label="نام خانوادگی" name="lastName" />
        <InputField label="کد ملی" name="nationalCode" />
        <InputField label="پسورد" name="password" />
        <Button type="submit">ثبت نام</Button>
      </form>
    </FormProvider>
  );
};
