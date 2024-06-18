import React from 'react';
import styles from '../style.module.scss';

const ShoppingQuantity = ({quantity}) => {
    return (
        <p className={styles.prodQuantitySum}>
            {quantity}
        </p>
    );
};

export default ShoppingQuantity;