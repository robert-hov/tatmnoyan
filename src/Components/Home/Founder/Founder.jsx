import React from 'react';
import styles from './style.module.scss';
import Image from "next/image";
import img from '../../../../public/img/founder.png';
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import {Public_Sans} from "next/font/google";
import LinkComp from "@/Components/Link/Link";


const publicSans = Public_Sans({subsets: ['latin'], weight: '400'})
const Founder = () => {
    return (
        <section className={styles.founder}>
            <div className={styles.founderContainer}>
                <div className={styles.founderImg}>
                    <div className="img-container">
                        <Image
                            src={img}
                            alt={'founder Tat Mnoyan'}
                            height={520}
                            width={378}
                        />
                    </div>
                </div>
                <div className={styles.founderContent}>
                    <div className={styles.founderTitle}>
                        <SectionTitle color={'black'} size={80}>
                            about the <br/> founder
                        </SectionTitle>
                    </div>
                    <p className={`${styles.founderDesc} ${publicSans.className} f-18`}>
                        Meet Tatev Mnoyan. For our founder, fashion is more than just fabric and stitches; its a canvas for storytelling.  Through her leadership, Itstatmnoyan has become more than a brand; its a movement towards mindful living. Explore our collections and experience Tatevs vision come to life.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Founder;