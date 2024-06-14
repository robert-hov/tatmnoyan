import React from 'react';
import BreadCrumb from "@/Components/Breadcrumb/BreadCrumb";
import styles from './style.module.scss';
import LinkComp from "@/Components/Link/Link";
import Image from "next/image";
import img from '../../../../public/img/lookbook/2.png';

const Page = () => {
    return (
        <>
            <BreadCrumb/>
            <div className={styles.requestWrapper}>
                <div className={styles.request}>
                    <form className={styles.form}>
                        <div className={styles.inputs}>
                            <div className={styles.inputCard}>
                                <label className={styles.label} htmlFor="request-name">
                                    Name
                                </label>
                                <input className={styles.input} type="text" id="request-name" name="name"/>
                            </div>
                            <div className={styles.inputCard}>
                                <label className={styles.label} htmlFor="request-mail">
                                    Email
                                </label>
                                <input className={styles.input} type="email" id="request-mail" name="mail"/>
                            </div>
                            <div className={styles.inputCard}>
                                <label className={styles.label} htmlFor="request-message">
                                    Hey beauty! Feel free to leave a message to us
                                </label>
                                <textarea className={`${styles.input} ${styles.inputTextArea}`} name="message"
                                          id="request-message"></textarea>
                            </div>
                        </div>
                        <div className={styles.formBtnWrapper}>
                            <LinkComp href={'/'} color={'black'} size={18}>
                                Send Request
                            </LinkComp>
                        </div>
                    </form>
                </div>
                <div className={styles.requestImg}>
                    <div className="img-container">
                        <Image
                            src={img}
                            alt={'model'}
                            width={497}
                            height={773}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;