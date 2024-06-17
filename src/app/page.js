'use client'
import Hero from "../Components/Home/Hero/Hero";
import Choices from "../Components/Home/Choices/Choices";
import Available from "../Components/Home/Available/Available";
import Founder from "../Components/Home/Founder/Founder";
import New from "../Components/Home/New/New";
import React, {Suspense, useEffect, useRef, useState} from "react";
import Loading from "./loading";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";


export default function Home() {
    const [offsetY, setOffsetY] = useState();
    const {scrollY} = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (scrollY.current < 500) {
            setOffsetY(-scrollY.current * 1.5)
        }
    })
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Hero/>
                <motion.div
                    style={{translateY: `${offsetY}px`}}
                >
                    <Choices/>
                </motion.div>
                <div
                    style={{marginTop: `${offsetY}px`}}
                >
                    <Available/>
                </div>
                <Founder/>
                <New/>
            </Suspense>
        </>
    )
        ;
}
