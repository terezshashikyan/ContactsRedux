export interface IButtonProps extends React.ComponentProps<"button"> {
  children: string;
  disabled: boolean;
  onClick: () => void;
}
