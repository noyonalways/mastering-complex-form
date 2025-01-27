import { z } from "zod";
import { BasicFormData, BasicFormProps } from "./types";
import FormProvider from "../../FormProvider";
import { Input, Select } from "../../FormElements";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  gender: z.string().min(1, "Gender is required"),
});

const BasicForm = ({ initialValues, onSubmit }: BasicFormProps) => {
  const handleSubmit = (data: BasicFormData) => {
    console.log(data);
    onSubmit?.(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Basic Form</h2>
        <FormProvider<BasicFormData>
          defaultValues={initialValues}
          schema={schema}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <Input name="name" label="Name" placeholder="Enter your name" />
            <Input
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
            />
            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <Select
              name="gender"
              label="Gender"
              placeholder="Select Gender"
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default BasicForm;
