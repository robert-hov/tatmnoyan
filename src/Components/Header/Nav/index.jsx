import React from 'react';
import Link from "next/link";
import styles from './style.module.scss';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navLink}>
                    <Link className={'f-18 f-18--200'} href={'/'}>Home</Link>
                </li>
                <li className={styles.navLink}>
                    <Link className={'f-18 f-18--200'} href={'/collection'}>Collection</Link>
                </li>
                <li className={styles.navLink}>
                    <Link className={'f-18 f-18--200'} href={'/lookbook'}>Lookbook</Link>
                </li>
            </ul>

        </nav>
    );
};

export default Nav;