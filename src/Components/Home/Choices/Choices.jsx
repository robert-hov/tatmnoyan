import React, {useEffect, useState} from 'react';
import styles from './style.module.scss';
import Image from "next/image";
import {Italiana} from "next/font/google";
import {Public_Sans} from "next/font/google";
import img from '../../../../public/img/choices/1.png';
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import LinkComp from "@/Components/Link/Link";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";


const italiana = Italiana({subsets: ['latin'], weight: '400'})
const publicSans = Public_Sans({subsets: ['latin'], weight: '400'});
const Choices = () => {
    return (
            <section className={styles.choices}>
                <div className={styles.choicesWrapper}>
                    <div className="page-container">
                        <div className={styles.choicesContainer}>
                            <div className={styles.choicesImg}>
                                <div className="img-container">
                                    <Image width={497} height={773} src={img} alt="Tat Mnoyan model"/>
                                </div>
                            </div>
                            <div className={styles.choicesContent}>
                                <div className={styles.choicesTitleWrapper}>
                                    <SectionTitle size={80} color={'white'}>
                                        Chic <br/> Choices <br/> Await
                                    </SectionTitle>
                                </div>
                                {/*<h2 className={`${styles.choicesTitle} ${italiana.className}`}>*/}
                                {/*    Chic <br/> Choices <br/> Await*/}
                                {/*</h2>*/}
                                <p className={`${styles.choicesDesc} ${publicSans.className} f-20`}>
                                    Get ready to elevate your wardrobe with our latest collections. Step into a world of
                                    elegance and sophistication – shop now and discover your next favorite look.
                                </p>
                                {/*<Link href={'/'} className={styles.choiceLink}>*/}
                                {/*    Shop Now*/}
                                {/*</Link>*/}
                                <div className={styles.choicesLinkWrapper}>
                                    <LinkComp bigLine href={'/'} color={'white'} size={18}>
                                        Shop Now
                                    </LinkComp>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Choices;