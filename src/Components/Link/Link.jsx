import React from 'react';
import {Public_Sans} from "next/font/google";
import Link from "next/link";
import styles from './style.module.scss';

const publicSans = Public_Sans({subsets: ['latin'], weight: ['200', '300']})
const LinkComp = ({href, color, size, bigLine = false, children}) => {
    return (

        <Link
            scroll={true}
            className={`${styles.btn}${color === 'black' ? ` ${styles.black}` : ''} `}
            href={href}
        >
                <span className={styles.btnText}>
                    <span>
                        {children}
                    </span>
                </span>
        </Link>
        // <Link
        //     href={href}
        //     className={styles.linkCompWrapper}
        // >
        //     <span style={{
        //         color: color,
        //         fontSize: `${size / 16}rem`
        //     }}
        //           className={styles.linkText}>
        //         {children}
        //         <span
        //             className={styles.linkLine}
        //             style={{
        //                 backgroundColor: color,
        //                 // width: bigLine ? 'calc(100% + 1rem)' : '100%'
        //             }}
        //         />
        //     </span>
        // </Link>
    );
};

export default LinkComp;