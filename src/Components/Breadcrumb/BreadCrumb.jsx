'use client'

import React from 'react';
import styles from './style.module.scss';
import {usePathname} from "next/navigation";
import Link from "next/link";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import {Public_Sans} from "next/font/google";

const publicSans = Public_Sans({subsets: ['latin'], weight: ['200', '500']})

const BreadCrumb = ({title}) => {
    const pathname = usePathname();
    const segments = pathname.split('/')


    return (
        <div className={styles.breadcrumbContainer}>
            <div className={styles.breadcrumb}>
                <h3 className={styles.title}>
                    <SectionTitle color={'black'} size={50}>
                        {segments[1].split('-').length > 1 ? segments[1].replace('-', ' ') : segments[1]}
                    </SectionTitle>
                </h3>
                <div className={styles.paths}>
                    <Link href={'/'} className={`${styles.pathLink} ${publicSans.className}`}>home</Link>

                    {segments.map((elem, index) => {
                        if (index > 0 && index !== segments.length - 1) {
                            return (
                                <React.Fragment key={index}>
                                    <span className={styles.pathSeparator}>&gt;</span>
                                    <Link className={`${styles.pathLink} ${publicSans.className}`} href={`/${elem}`}>
                                        {elem}
                                    </Link>
                                </React.Fragment>
                            )
                        } else if (index > 0 && index === segments.length - 1) {
                            return (
                                <React.Fragment key={index}>
                                    <span className={styles.pathSeparator}>&gt;</span>
                                    <span className={`${styles.pathText} ${publicSans.className}`}
                                          key={index}>{elem}</span>
                                </React.Fragment>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;