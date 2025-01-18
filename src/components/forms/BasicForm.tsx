import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
  gender: string;
}

interface BasicFormProps {
  initialValues?: Partial<FormData>;
}

const BasicForm = ({ initialValues }: BasicFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialValues,
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset(); // Reset form after submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Basic Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className={`border border-gray-300 rounded-md outline-none p-2 ${
                  errors.name ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              <small className="text-red-500">
                {errors.name?.message?.toString()}
              </small>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className={`border border-gray-300 rounded-md outline-none p-2 ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <small className="text-red-500">
                {errors.email?.message?.toString()}
              </small>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className={`border border-gray-300 rounded-md outline-none p-2 ${
                  errors.password ? "border-red-500" : ""
                }`}
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <small className="text-red-500">
                {errors.password?.message?.toString()}
              </small>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                className="border border-gray-300 rounded-md outline-none p-2"
                {...register("gender", {
                  required: "Gender is required",
                })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <small className="text-red-500">
                {errors.gender?.message?.toString()}
              </small>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicForm;
