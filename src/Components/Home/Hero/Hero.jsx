import React from 'react';
import styles from './style.module.scss';
import {Italiana} from "next/font/google";

const italiana = Italiana({subsets: ['latin'], weight: '400'})

const Hero = () => {
        return (
            <div className={styles.hero}>
                <h1 className={`${styles.heroTitle} ${italiana.className}`}>
                    Find <br/>
                    your <br/>
                    own style
                </h1>
            </div>
        );
    }
;

export default Hero;