import { FC } from "react";
import { IParagraphProps } from "./types";

import styles from "./Paragraph.module.scss";

const Paragraph: FC<IParagraphProps> = ({ children }) => (
  <p className={styles.p}>{children}</p>
);

export default Paragraph;
