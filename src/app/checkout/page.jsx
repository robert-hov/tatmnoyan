'use client'
import React, {useState} from 'react';
import styles from './style.module.scss';
import Image from "next/image";
import img1 from "../../../public/img/lookbook/1.png";
import img2 from "../../../public/img/lookbook/2.png";
import Delivery from "@/Components/checkout/Delivery/Delivery";
import Payment from "@/Components/checkout/Payment/Payment";
import Link from "next/link";
import {Public_Sans} from "next/font/google";

const publicSans = Public_Sans({subsets: ['latin'], weight: ['200', '100', '400']});

const Page = () => {
    const [activeTab, setActiveTab] = useState('tab1')
    return (
        <div className={styles.checkout}>
            <div className={styles.checkoutContainer}>
                <div className={styles.tabsContainer}>
                    <div className={styles.tabsBtnContainer}>
                        <div className={`${styles.tabBtn}${activeTab === 'tab2' ? ` ${styles.active}` : ''}`}>
                            1. Delivery
                        </div>
                        <div className={`${styles.tabBtn}${activeTab === 'tab1' ? ` ${styles.disabled}` : ''}`}>
                            2. Payment
                        </div>
                    </div>
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
                    <div className={styles.tabsSaveContainer}>
                        <Link href={'/'} className={styles.cancelBtn}>
                            Cancel
                        </Link>
                        {
                            activeTab === 'tab1' ? (
                                <button className={styles.continueBtn} onClick={() => setActiveTab('tab2')}>
                                    Continue
                                </button>
                            ) : (
                                <Link className={styles.continueBtn} href={'/final'}>
                                    Save and Continue
                                </Link>
                            )
                        }
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
                        <div className={styles.finalLine}/>
                        <div className={styles.totalContainer}>
                            <b>Total</b>
                            <p>242.000 AMD</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Page;