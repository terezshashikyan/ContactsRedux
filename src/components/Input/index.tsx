import { IInputProps } from "./types";

import styles from "./Input.module.scss";

const Input: React.FC<IInputProps> = ({
  type,
  label,
  value,
  placeholder,
  disabled,
  onChange,
}) => (
  <div className={styles.wrapper}>
    <input
      type={type}
      id={label}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={styles.wrapper__input}
      placeholder={placeholder}
    />
  </div>
);

export default Input;
