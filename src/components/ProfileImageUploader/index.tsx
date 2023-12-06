import { FC } from "react";
import { IProfileImageProps } from "./types";

import styles from "./ProfileImage.module.scss";

const ProfileImageUploader: FC<IProfileImageProps> = ({
  img,
  handleImageChange,
}) => (
  <div className={styles.wrapper}>
    <img className={styles.wrapper__img} src={img} alt="img" />
    <label htmlFor="files" className={styles.wrapper__label}>
      Select Image
    </label>
    <input
      id="files"
      type="file"
      accept="image/*"
      style={{ visibility: "hidden" }}
      className={styles.wrapper__input}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleImageChange(e)
      }
    />
  </div>
);

export default ProfileImageUploader;
