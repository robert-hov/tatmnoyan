import React from 'react';
import styles from './style.module.scss';
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import LinkComp from "@/Components/Link/Link";

const Page = () => {
    return (
        <div className={styles.final}>
            <div className={styles.finalContainer}>
                <div className={styles.finalContent}>
                    <div className={styles.finalTitleWrapper}>
                        <SectionTitle size={50} color={'white'}>
                            Thank you
                            for your order
                        </SectionTitle>
                    </div>
                    <p className={styles.finalDesc}>
                        Congratulations! Your order has been successfully placed. Were thrilled to have you join the
                        Itstatmnoyan family. Youll receive a confirmation email shortly with your order details and
                        tracking information.
                    </p>
                    <div className={styles.finalBtn}>
                        <LinkComp color={'white'} size={18} href={'/'}>
                            Go to Home
                        </LinkComp>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;