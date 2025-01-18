import { useFormContext } from "react-hook-form";
import { FormSelectProps } from "../../types";

const Select = ({
  name,
  label,
  options,
  placeholder,
  className,
}: FormSelectProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        className={`border border-gray-300 rounded-md outline-none p-2 ${
          error ? "border-red-500" : ""
        } ${className}`}
        {...register(name)}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <small className="text-red-500">{error.message?.toString()}</small>
      )}
    </div>
  );
};

export default Select;
