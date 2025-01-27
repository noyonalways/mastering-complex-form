
export interface FormInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

export interface FormSelectProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
} 