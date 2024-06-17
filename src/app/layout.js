'use client'
import {Inter} from "next/font/google";
import "./globals.scss";
import React, {Suspense, useState} from "react";
import Loading from "./loading";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SVG from "../Components/SVG";
import {useMotionValueEvent, useScroll} from "framer-motion";

const inter = Inter({subsets: ["latin"]});

// export const metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
// };

export default function RootLayout({children}) {
    const [scrolled, setScrolled] = useState(false);
    const {scrollY} = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (scrollY.current > 15) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    })
    return (
        <html lang="en">
        <body className={inter.className}>
        <SVG />
        <Header scrolled={scrolled}/>
            {children}
        <Footer/>
        </body>
        </html>
    );
}
