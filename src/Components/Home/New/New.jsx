import React from 'react';
import styles from './style.module.scss';
import Image from "next/image";
import img from '../../../../public/img/newCollection.png';
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import Link from "next/link";
import LinkComp from "@/Components/Link/Link";

const New = () => {
    return (
        <section className={styles.new}>
            <div className={styles.newContainer}>
                <div className={styles.newImg}>
                    <div className="img-container">
                        <Image
                            src={img}
                            alt={'new collection'}
                            width={591}
                            height={778}
                        />
                    </div>
                </div>
                <div className={styles.newContent}>
                    <div className={styles.newTitle}>
                        <SectionTitle
                            color={'black'}
                            size={100}
                        >
                            new <br/> collection
                        </SectionTitle>
                    </div>
                    <div className={styles.newLink}>
                        <LinkComp bigLine href={'/'} color={'black'} size={18}>
                            Shop Now
                        </LinkComp>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default New;