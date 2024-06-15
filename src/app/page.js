'use client'
import Hero from "../Components/Home/Hero/Hero";
import Choices from "../Components/Home/Choices/Choices";
import Available from "../Components/Home/Available/Available";
import Founder from "../Components/Home/Founder/Founder";
import New from "../Components/Home/New/New";
import React, {Suspense, useEffect, useRef, useState} from "react";
import Loading from "./loading";
import {motion, useScroll} from "framer-motion";


export default function Home() {
    const {scrollYProgress} = useScroll();

    return (
        <>
            <motion.div style={{scaleX: scrollYProgress}}/>
            <motion.div style={{transform: `translate(0, ${-scrollYProgress.current}px)`}}>
                <Suspense fallback={<Loading/>}>
                    <Hero/>
                    <Choices/>
                    <Available/>
                    <Founder/>
                    <New/>
                </Suspense>
            </motion.div>
        </>
    )
        ;
}
