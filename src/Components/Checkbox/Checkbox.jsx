import React, {useState} from 'react';
import styles from './style.module.scss'

const Checkbox = ({name}) => {
    const [checked, setChecked] = useState(false);

    const checkHandler = () => {
        setChecked(!checked);
    }

    return (
        <div className={styles.checkWrapper}>
            <input id={name || null} className={styles.check} type="checkbox" checked={checked} onChange={checkHandler}/>
            <span className={`${styles.checkMark}${checked ? ` ${styles.checked}` : ''}`}/>
            {checked && (
                <span className={styles.checkIcon}>
                        <svg className="icon">
                          <use xlinkHref="#check"/>
                        </svg>
                </span>
            )}
        </div>

    );
};

export default Checkbox;