import * as yup from "yup";

export const SchemaUserOptional = yup
  .object({
    nationalCode: yup.string().required("کد ملی را وارد کنید"),
    password: yup.string().required("پسورد را وارد کنید"),
  })
  .required();

export const SchemaUserLogin = SchemaUserOptional;

export const SchemaUserRegister = yup
  .object({
    firstName: yup.string().required("نام را وارد کنید"),
    lastName: yup.string().required("نام خانوادگی را وارد کنید"),
  })
  .concat(SchemaUserOptional)
  .required();
