export interface IInputProps {
  label: string;
  disabled?: boolean;
  placeholder: string;
  value?: string | number;
  type: "text" | "number" | "email" | "password" | "search";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
