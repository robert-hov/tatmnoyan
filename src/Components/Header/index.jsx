import React from 'react';
import styles from './style.module.scss';
import Nav from "../Header/Nav";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.navContainer}>
                    <Nav/>
                </div>
                <Link href={'/'} className={styles.logo}>
                    <div className="img-container">
                        <svg className="icon">
                            <use xlinkHref="#logo"/>
                        </svg>
                    </div>
                </Link>
                <ul className={styles.loginList}>
                    <li className={styles.loginItem}>
                        <Link className={'f-18 f-18--200'} href={'/contact-us'}>
                            Contact us
                        </Link>
                    </li>
                    <li className={`${styles.loginItem}`}>
                        <Link href={'/'} className={styles.loginCartLogo}>
                        <div className="img-container">
                            <svg className="icon">
                                <use xlinkHref="#cart" />
                            </svg>
                        </div>
                        </Link>
                    </li>
                    <li className={styles.loginItem}>
                        <Link className={'f-18 f-18--200'} href={'/login'}>
                            Log in/Sign up
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;