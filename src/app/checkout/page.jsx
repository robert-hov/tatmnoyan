'use client'
import React, {useState} from 'react';
import styles from './style.module.scss';
import Image from "next/image";
import img1 from "../../../public/img/lookbook/1.png";
import img2 from "../../../public/img/lookbook/2.png";
import Delivery from "@/Components/Delivery/Delivery";
import Payment from "@/Components/Payment/Payment";
import Link from "next/link";
import {Public_Sans} from "next/font/google";

const publicSans = Public_Sans({subsets: ['latin'], weight: ['200', '100', '400']});

const Page = () => {
    const [activeTab, setActiveTab] = useState('tab1')
    const tabHandler = ({tab}) => {
        setActiveTab(tab)
    }
    return (
        <div className={styles.checkout}>
            <div className={styles.checkoutContainer}>
                <div className={styles.tabsContainer}>
                    <div className={styles.tabsBtnContainer}>
                        <button className={`${styles.tabBtn}${activeTab === 'tab1' ? ` ${styles.active}` : ''}`} onClick={() => setActiveTab('tab1')}>
                            1. Delivery
                        </button>
                        <button className={`${styles.tabBtn}${activeTab === 'tab2' ? ` ${styles.active}` : ''}`} onClick={() => setActiveTab('tab2')}>
                            2. Payment
                        </button>
                    </div>
                    <div style={{height: '29.5rem'}}>
                        {
                            activeTab === 'tab1' && (
                                <Delivery/>
                            )
                        }
                        {
                            activeTab === 'tab2' && (
                                <Payment/>
                            )
                        }
                    </div>
                    <div className={styles.tabsSaveContainer}>
                        <Link href={'/'} className={styles.cancelBtn}>
                            Cancel
                        </Link>
                        <button className={styles.continueBtn} onClick={() => setActiveTab('tab2')}>
                            Save and Continue
                        </button>
                    </div>
                </div>
                <div className={styles.sumContainer}>
                    <h3 className={styles.sumTitle}>
                        Summary
                    </h3>

                    <ul className={styles.sumProdList}>
                        <li className={styles.sumProdItem}>
                            <div className={styles.sumProdImg}>
                                <div className="img-container">
                                    <Image src={img1} alt={'corset'} width={114} height={114}/>
                                </div>
                            </div>
                            <div className={`${styles.sumProdContent} ${publicSans.className}`}>
                                <h4>
                                    Corset with Skirt
                                </h4>
                                <p>120.000 AMD</p>
                            </div>
                        </li>
                        <li className={styles.sumProdItem}>
                            <div className={styles.sumProdImg}>
                                <div className="img-container">
                                    <Image src={img2} alt={'corset'} width={114} height={114}/>
                                </div>
                            </div>
                            <div className={`${styles.sumProdContent} ${publicSans.className}`}>
                                <h4>
                                    Corset with Skirt
                                </h4>
                                <p>120.000 AMD</p>
                            </div>
                        </li>
                    </ul>

                    <div className={styles.finalPriceWrapper}>
                        <div className={styles.deliveryContainer}>
                            <p>Delivery</p>
                            <p>2000 AMD</p>
                        </div>
                        <div className={styles.finalLine} />
                        <div className={styles.totalContainer}>
                            <b>Total</b>
                            <p>272.000 AMD</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Page;