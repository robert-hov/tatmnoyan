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
                                <iframe  frameBorder="0" scrolling="no" marginHeight="0"
                                        marginWidth="0" id="gmap_canvas"
                                        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Sayat-Nova%20str.%2019%20Yerevan+(ItsTatMnoyan)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                {/*<script type='text/javascript'*/}
                                {/*        src='https://embedmaps.com/google-maps-authorization/script.js?id=f5f363e76cb0116259539244deb710398cbc2117'></script>*/}
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
                    <div className="img-container"/>
                </div>
            </div>
        </>
    );
};

export default Page;