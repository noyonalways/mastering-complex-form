export interface BasicFormData {
  name: string;
  email: string;
  password: string;
  gender: string;
}

export interface BasicFormProps {
  initialValues?: Partial<BasicFormData>;
  onSubmit?: (data: BasicFormData) => void;
} 