import React from 'react';
import styles from './style.module.scss';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <Link href={'/'} className={styles.logo}>
                    <div className="img-container">
                        <svg className="icon">
                            <use xlinkHref="#footerLogo"/>
                        </svg>
                    </div>
                </Link>
                <ul className={styles.footerNav}>
                    <li className={styles.footerNavLink}>
                        <Link className={'f-18 f-18--200'} href={'/'}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.footerNavLink}>
                        <Link className={'f-18 f-18--200'} href={'/'}>
                            Collection
                        </Link>
                    </li>
                    <li className={styles.footerNavLink}>
                        <Link className={'f-18 f-18--200'} href={'/'}>
                            Shop
                        </Link>
                    </li>
                    <li className={styles.footerNavLink}>
                        <Link className={'f-18 f-18--200'} href={'/'}>
                            Lookbook
                        </Link>
                    </li>
                    <li className={styles.footerNavLink}>
                        <Link className={'f-18 f-18--200'} href={'/'}>
                            price request
                        </Link>
                    </li>
                    <li className={styles.footerNavLink}>
                        <Link className={'f-18 f-18--200'} href={'/'}>
                            contact us
                        </Link>
                    </li>
                </ul>
                <div className={styles.footerContact}>
                    <div className={styles.footerContactBlock}>
                        <div className={styles.footerContactTitleContainer}>
                            <span className={styles.footerContactIcon}>
                                <span className="img-container">
                                    <svg className="icon">
                                      <use xlinkHref="#mail"/>
                                    </svg>
                                </span>
                            </span>
                            <span className={`${styles.footerContactTitle} f-18`}>
                                E-mail:
                            </span>
                        </div>
                        <span className={`${styles.footerContactText} f-18 f-18--300`}>
                            info@itstatmnoyan
                        </span>
                    </div>
                    <div className={styles.footerContactBlock}>
                        <div className={styles.footerContactTitleContainer}>
                            <span className={styles.footerContactIcon}>
                                <span className="img-container">
                                    <svg className="icon">
                                      <use xlinkHref="#location"/>
                                    </svg>
                                </span>
                            </span>
                            <span className={`${styles.footerContactTitle} f-18`}>
                                Address:
                            </span>
                        </div>
                        <span className={`${styles.footerContactText} f-18 f-18--300`}>
                            Sayat-Nova str. 19
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;