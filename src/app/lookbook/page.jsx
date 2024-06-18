import React from 'react';
import BreadCrumb from "@/Components/Breadcrumb/BreadCrumb";
import styles from './style.module.scss';
import img1 from '../../../public/img/lookbook/1.png';
import img2 from '../../../public/img/lookbook/2.png';
import img3 from '../../../public/img/lookbook/3.png';
import img4 from '../../../public/img/lookbook/4.png';
import img5 from '../../../public/img/lookbook/5.png';
import img6 from '../../../public/img/lookbook/6.png';
import img7 from '../../../public/img/lookbook/7.png';
import img8 from '../../../public/img/lookbook/8.png';
import img9 from '../../../public/img/lookbook/9.png';
import img10 from '../../../public/img/lookbook/10.png';
import img11 from '../../../public/img/lookbook/11.png';
import img12 from '../../../public/img/lookbook/12.png';
import img13 from '../../../public/img/lookbook/13.png';
import img14 from '../../../public/img/lookbook/14.png';
import img15 from '../../../public/img/lookbook/15.png';
import img16 from '../../../public/img/lookbook/16.png';
import img17 from '../../../public/img/lookbook/17.png';
import img18 from '../../../public/img/lookbook/18.png';
import img19 from '../../../public/img/lookbook/19.png';
import Link from "next/link";
import Image from "next/image";
import {Public_Sans} from "next/font/google";

const publicSans = Public_Sans({subsets: ['latin'], weight: '200'});

const lookbookData = [
    {
        img: img1,
        alt: 'model- Ani Bagratyan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Ani Bagratyan'
    },
    {
        img: img2,
        alt: 'model - Ani Safaryan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Ani Safaryan'
    },
    {
        img: img3,
        alt: 'model - Moni Yekshatyan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Moni Yekshatyan'
    },
    {
        img: img4,
        alt: 'model - Eliza',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Eliza'
    },
    {
        img: img5,
        alt: 'model - Nana Dashyan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Nana Dashyan'
    },
    {
        img: img6,
        alt: 'model - Svetlana Zaxaryan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Svetlana Zaxaryan'
    },
    {
        img: img7,
        alt: 'model - Ani Bagratyan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Ani Bagratyan'
    },
    {
        img: img8,
        alt: 'model - Ani Safaryan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Ani Safaryan'
    },
    {
        img: img9,
        alt: 'model - Nana Dashyan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Nana Dashyan'
    },
    {
        img: img10,
        alt: 'model - Ani Safaryan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Ani Safaryan'
    },
    {
        img: img11,
        alt: 'model - Moni Yekshatyan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Moni Yekshatyan'
    },
    {
        img: img12,
        alt: 'model & founder - Tat Mnoyan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Tat Mnoyan'
    },
    {
        img: img13,
        alt: 'model - Ani Safaryan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Ani Safaryan'
    },
    {
        img: img14,
        alt: 'model & founder - Tat Mnoyan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Tat Mnoyan'
    }, {
        img: img15,
        alt: 'model - Moni Yekshatyan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Moni Yekshatyan'
    },
    {
        img: img16,
        alt: 'model - Ani Safaryan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Ani Safaryan'
    },
    {
        img: img17,
        alt: 'model & founder - Tat Mnoyan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Tat Mnoyan'
    },
    {
        img: img18,
        alt: 'model - Ani Safaryan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Ani Safaryan'
    },
    {
        img: img19,
        alt: 'model & founder - Tat Mnoyan',
        href: '/',
        designer: 'Tat Mnoyan',
        Photographer: 'Petrov Photo',
        model: 'Tat Mnoyan'
    },


]

const Page = () => {
    return (
        <>
            <BreadCrumb title={'Lookbook'}/>
            <div className={styles.lookbookContainer}>
                <div className={styles.lookbook}>
                    {
                        lookbookData.map((elem, index) => {
                            return (
                                <Link className={styles.lookCard} key={index} href={elem.href}>
                                    <div className={styles.lookImg}>
                                        <div className="img-container">
                                            <Image
                                                src={elem.img}
                                                alt={elem.alt}
                                                width={1360}
                                                height={689}
                                                />
                                        </div>
                                    </div>
                                    <div className={`${styles.lookContent} ${publicSans.className}`}>
                                        <p>
                                            Designer - {elem.designer}
                                        </p>
                                        <p>
                                            Photographer - {elem.Photographer}
                                        </p>
                                        <p>
                                            Model - {elem.model}
                                        </p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Page;