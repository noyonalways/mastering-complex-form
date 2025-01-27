import { useFormContext } from "react-hook-form";
import { FormInputProps } from "../../types";

const Input = ({
  name,
  label,
  type = "text",
  placeholder,
  className,
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        className={`border border-gray-300 rounded-md outline-none p-2 ${
          error ? "border-red-500" : ""
        } ${className}`}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && (
        <small className="text-red-500">{error.message?.toString()}</small>
      )}
    </div>
  );
};

export default Input;
