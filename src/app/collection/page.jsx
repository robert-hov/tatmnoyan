'use client'
import React from 'react';
import BreadCrumb from "@/Components/Breadcrumb/BreadCrumb";
import styles from './style.module.scss';
import Link from "next/link";
import Image from "next/image";
import img1 from '../../../public/img/collection/1.png';
import img2 from '../../../public/img/collection/2.png';
import img3 from '../../../public/img/collection/3.png';
import img4 from '../../../public/img/collection/4.png';
import img5 from '../../../public/img/collection/5.png';
import img6 from '../../../public/img/collection/6.png';
import img7 from '../../../public/img/collection/7.png';
import img8 from '../../../public/img/collection/8.png';
import img9 from '../../../public/img/collection/9.png';
import img10 from '../../../public/img/collection/10.png';
import img11 from '../../../public/img/collection/11.png';
import img12 from '../../../public/img/collection/12.png';
import LinkComp from "@/Components/Link/Link";

const collectionData = [
    {img: img1, href: '/', alt: 'model 1'},
    {img: img2, href: '/', alt: 'model 2'},
    {img: img3, href: '/', alt: 'model 3'},
    {img: img4, href: '/', alt: 'model 4'},
    {img: img5, href: '/', alt: 'model 5'},
    {img: img6, href: '/', alt: 'model 6'},
    {img: img7, href: '/', alt: 'model 7'},
    {img: img8, href: '/', alt: 'model 8'},
    {img: img9, href: '/', alt: 'model 9'},
    {img: img10, href: '/', alt: 'model 10'},
    {img: img11, href: '/', alt: 'model 11'},
    {img: img12, href: '/', alt: 'model 12'},
]
export default function Page() {
    return (
        <>
            <BreadCrumb title={'Corset with skirt'}/>
            {/*className="btn btn--white"*/}
            {/*className="btn__text"*/}
            <div className={styles.collectionContainer}>
                <div className={styles.collection}>
                    {
                        collectionData.map((elem, index) => {
                            return (
                                <div key={index} className={styles.collectionCard}>
                                    <div className="img-container">
                                        <Image
                                            src={elem.img}
                                            alt={elem.alt}
                                            width={440}
                                            height={775}
                                        />
                                    </div>
                                    <div className={styles.collectionCardBg}>
                                        <div className={styles.collectionCardBtnWrapper}>
                                            <LinkComp
                                                size={18}
                                                color={'black'}
                                                href={'/collection/request'}
                                            >
                                                Request
                                            </LinkComp>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};
