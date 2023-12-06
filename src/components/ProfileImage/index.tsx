import { FC } from 'react';
import { IProfileImageProps } from './types';

import styles from './ProfileImage.module.scss';

const ProfileImage: FC<IProfileImageProps> = ({img, size, alt}) => 
    (
        <div className={styles.wrapper}>
            <img className= {`${styles.wrapper__img} ${styles[size]}`} src= {img} alt={alt} />
        </div>
    );

export default ProfileImage;