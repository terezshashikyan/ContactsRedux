import { IButtonProps } from "./types";

import styles from "./Button.module.scss";

const Button: React.FC<IButtonProps> = ({
  onClick,
  className,
  disabled,
  children,
  ...rest
}) => (
  <button
    type="button"
    {...rest}
    onClick={onClick}
    disabled={disabled}
    className={styles.button}
  >
    {children}
  </button>
);

export default Button;
