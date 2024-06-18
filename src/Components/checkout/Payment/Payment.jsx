import React from 'react';
import styles from '../style.module.scss';
import Link from "next/link";
import Checkbox from "@/Components/Checkbox/Checkbox";

const Payment = () => {
    return (
        <div className={styles.paymentContainer}>
            <h3 className={styles.paymentTitle}>
                Select your payment method
            </h3>
            <form className={styles.form}>
                <div className={styles.inputRow}>
                    <div className={`${styles.inputWrapper}`}>
                        <label className={styles.label}>
                            Cardholder name
                        </label>
                        <input className={styles.input} type="text"/>
                    </div>
                </div>
                <div className={styles.inputRow}>
                    <div className={`${styles.inputWrapper}`}>
                        <label className={styles.label}>
                            Card number
                        </label>
                        <input className={styles.input} type="text"/>
                    </div>
                </div>
                <div className={styles.inputRow}>
                    <div className={`${styles.inputWrapper} ${styles.small}`}>
                        <label className={styles.label}>Expiration date</label>
                        <input className={styles.input} type="text"/>
                    </div>
                    <div className={`${styles.inputWrapper} ${styles.small}`}>
                        <label className={styles.label}>CVV</label>
                        <input className={styles.input} type="text"/>
                    </div>
                </div>
                <div className={styles.helper}>
                    <div className={styles.checkWrapper}>
                        <Checkbox name={'pay-check'} />
                    </div>
                    <label htmlFor={'pay-check'}>
                        Save payment details for future use
                    </label>
                </div>
            </form>

        </div>
    );
};

export default Payment;