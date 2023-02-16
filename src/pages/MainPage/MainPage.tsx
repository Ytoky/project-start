import React, {FC} from 'react';
import styles from './MainPage.module.css'


export const MainPage: FC = () => {


    return (
        <div className={styles.wrap}>
            {process.env.API_KEY_APEX}
        </div>
    );
};
