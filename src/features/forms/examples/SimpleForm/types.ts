export interface SimpleFormData {
  name: string;
  email: string;
  password: string;
}

export interface SimpleFormProps {
  initialValues?: Partial<SimpleFormData>;
} 