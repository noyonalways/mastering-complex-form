import { useForm } from "react-hook-form";
import { SimpleFormData, SimpleFormProps } from "./types";

const SimpleForm = ({ initialValues }: SimpleFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SimpleFormData>({
    defaultValues: initialValues,
  });

  const onSubmit = (data: SimpleFormData) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Simple Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className={`border rounded-md p-2 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <small className="text-red-500">{errors.name.message}</small>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className={`border rounded-md p-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <small className="text-red-500">{errors.email.message}</small>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className={`border rounded-md p-2 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <small className="text-red-500">{errors.password.message}</small>
          )}
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
