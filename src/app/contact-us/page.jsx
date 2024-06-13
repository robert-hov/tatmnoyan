import React from 'react';
import BreadCrumb from "@/Components/Breadcrumb/BreadCrumb";
import styles from './style.module.scss';
import LinkComp from "@/Components/Link/Link";
import {Public_Sans} from "next/font/google";

const publicSans = Public_Sans({subsets: ['latin'], weight: '300'})

const Page = () => {
    return (
        <>
            <BreadCrumb title={'Lookbook'}/>
            <div className={styles.contact}>
                <div className={styles.contactContent}>
                    <div className={styles.contactMapContainer}>
                        <div className={styles.contactMap}>
                            <div className="img-container">

                            </div>
                        </div>
                        <div className={styles.contactMapLink}>
                            <LinkComp href={'/'} color={'black'} size={18}>
                                Find on Map
                            </LinkComp>
                        </div>
                    </div>
                    <ul className={styles.contactSmm}>
                        <li className={styles.smmItem}>
                            <span className={styles.smmItemHeader}>
                                <span className={styles.smmItemIcon}>
                                    <span className="img-container">
                                        <svg className="icon">
                                            <use xlinkHref="#mail"/>
                                        </svg>
                                    </span>
                                </span>
                                <span className={`${styles.smmItemTitle} ${publicSans.className} f-18 f-18--300`}>
                                    E-mail:
                                </span>
                            </span>
                            <span className={`${styles.smmItemText} ${publicSans.className} f-18 f-18--300`}>
                                info@itstatmnoyan
                            </span>
                        </li>
                        <li className={styles.smmItem}>
                            <span className={styles.smmItemHeader}>
                                <span className={styles.smmItemIcon}>
                                    <span className="img-container">
                                        <svg className="icon">
                                            <use xlinkHref="#location"/>
                                        </svg>
                                    </span>
                                </span>
                                <span className={`${styles.smmItemTitle} ${publicSans.className} f-18 f-18--300`}>
                                    Address:
                                </span>
                            </span>
                            <span className={`${styles.smmItemText} ${publicSans.className} f-18 f-18--300`}>
                                Sayat-Nova str. 19
                            </span>
                        </li>
                        <li className={styles.smmItem}>
                            <span className={styles.smmItemHeader}>
                                <span className={styles.smmItemIcon}>
                                    <span className="img-container">
                                        <svg className="icon">
                                            <use xlinkHref="#ig"/>
                                        </svg>
                                    </span>
                                </span>
                                <span className={`${styles.smmItemTitle} ${publicSans.className} f-18 f-18--300`}>
                                    Instagram:
                                </span>
                            </span>
                            <span className={`${styles.smmItemText} ${publicSans.className} f-18 f-18--300`}>
                                @itstatmnoyan
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={styles.contactImage}>
                    <div className="img-container" />
                </div>
            </div>
        </>
    );
};

export default Page;