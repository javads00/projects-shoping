import { useFormContext, FieldValues, Path } from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
}

export const InputField = <T extends FieldValues>({
  label,
  name,
  type = "text",
}: InputFieldProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        {...register(name)} // Automatically uses the `register` from the form context
        className={`w-full px-3 py-2 border ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
      />
      {errors[name]?.message && typeof errors[name]?.message === "string" && (
        <p className="mt-1 text-sm text-red-600">{errors[name]?.message}</p>
      )}
    </div>
  );
};
