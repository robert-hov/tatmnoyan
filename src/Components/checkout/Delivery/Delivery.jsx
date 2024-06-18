import React from 'react';
import styles from '../style.module.scss';
import Link from "next/link";

const Delivery = () => {
    return (
        <div className={styles.deliveryContainer}>
            <h3 className={styles.deliveryTitle}>
                Add delivery address
            </h3>
            <p className={styles.deliveryInstruction}>
                *Required fields
            </p>
            <form className={styles.form}>
                <div className={styles.inputRow}>
                    <div className={`${styles.inputWrapper} ${styles.small}`}>
                        <label className={styles.label}>
                            Name *
                        </label>
                        <input className={styles.input} type="text"/>
                    </div>
                    <div className={`${styles.inputWrapper} ${styles.small}`}>
                        <label className={styles.label}>
                            Surname *
                        </label>
                        <input className={styles.input} type="text"/>
                    </div>
                </div>
                <div className={styles.inputRow}>
                    <div className={`${styles.inputWrapper}`}>
                        <label className={styles.label}>Country/region *</label>
                        <input className={styles.input} type="text"/>
                    </div>
                </div>
                <div className={styles.inputRow}>
                    <div className={`${styles.inputWrapper}`}>
                        <label className={styles.label}>Address *</label>
                        <input className={styles.input} type="text"/>
                    </div>
                </div>
                <div className={styles.inputRow}>
                    <div className={`${styles.inputWrapper} ${styles.small}`}>
                        <label className={styles.label}>City *</label>
                        <input className={styles.input} type="text"/>
                    </div>
                    <div className={`${styles.inputWrapper} ${styles.small}`}>
                        <label className={styles.label}>State</label>
                        <input className={styles.input} type="text"/>
                    </div>
                </div>
                <div className={styles.inputRow}>
                    <div className={`${styles.inputWrapper} ${styles.small}`}>
                        <label className={styles.label}>Postal or zip code *</label>
                        <input className={styles.input} type="text"/>
                    </div>
                    <div className={`${styles.inputWrapper} ${styles.small}`}>
                        <label className={styles.label}>Phone number *</label>
                        <input className={styles.input} type="text"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Delivery;