import styles from './style.module.scss';
import React from 'react';
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import Image from "next/image";
import img1 from '../../../../public/img/available/1.png';
import img2 from '../../../../public/img/available/2.png';
import img3 from '../../../../public/img/available/3.png';
import img4 from '../../../../public/img/available/4.png';
import img5 from '../../../../public/img/available/5.png';
import img6 from '../../../../public/img/available/6.png';
import Link from "next/link";
import {Public_Sans} from "next/font/google";
import LinkComp from "@/Components/Link/Link";
import {motion} from "framer-motion";

const publicSans = Public_Sans({subsets: ['latin'], weight: ['100', '300']})

const availableImages = [
    {
        img: img1,
        alt: 'model1',
        href: '/',
    },
    {
        img: img2,
        alt: 'model2',
        href: '/',
    },
    {
        img: img3,
        alt: 'model3',
        href: '/',
    },
    {
        img: img4,
        alt: 'model4',
        href: '/',
    },
    {
        img: img5,
        alt: 'model5',
        href: '/',
    },
    {
        img: img6,
        alt: 'model6',
        href: '/',
    },
]

const cardVariants = {
    offscreen: {
        y: 500
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.8
        }
    }
};
const Available = () => {
    return (
        <section className={styles.available}>
            <div className="page-container">
                <div className={styles.availableContainer}>
                    <div className={styles.availableTitleWrapper}>
                        <SectionTitle>
                            available now
                        </SectionTitle>
                    </div>
                    {/*<motion.div*/}
                    {/*    className={styles.availableContent}*/}
                    {/*    initial="offscreen"*/}
                    {/*    whileInView="onscreen"*/}
                    {/*    // transition={{ease: "linear", duration: 0.8}}*/}
                    {/*    viewport={{once: true, amount: 0.2}}*/}
                    {/*>*/}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once: true, amount: 0.01}}
                        variants={cardVariants}
                        className={styles.availableCardMotion}
                    >
                        <div
                            className={styles.availableContent}
                        >


                            {
                                availableImages.map((elem, index) => {
                                    return (

                                        <Link key={index} href={elem.href} className={styles.availableCard}>
                                            <div className={styles.availableCardImg}>
                                                <div className="img-container">
                                                    <Image
                                                        src={elem.img}
                                                        alt={elem.alt}
                                                        width={325}
                                                        height={393}
                                                    />
                                                </div>
                                            </div>
                                            <div className={styles.availableCardText}>
                                                <p className={`${publicSans.className} f-18 f-18--100`}>
                                                    Midi Dress
                                                </p>
                                            </div>
                                            <span></span>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </motion.div>
                    <LinkComp href={'/'} color={'black'} size={24}>
                        See more
                    </LinkComp>

                    {/*<Link href={'/'} className={`${styles.availableMoreLink} ${publicSans.className}`}>*/}
                    {/*    See More*/}
                    {/*</Link>*/}
                </div>
            </div>
        </section>
    );
};

export default Available;