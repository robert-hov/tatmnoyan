'use client'
import {Inter, Public_Sans} from "next/font/google";
import "./globals.scss";
import React, {Suspense, useEffect, useState} from "react";
import Loading from "./loading";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SVG from "../Components/SVG";
import {useMotionValueEvent, useScroll} from "framer-motion";
import {usePathname} from "next/navigation";

const inter = Inter({subsets: ["latin"]});
const publicSans = Public_Sans({subsets: ['latin'], weight: ['100', '200', '300' ,'400']});


// export const metadata = {
//     title: "Tat Mnoyan",
//     description: "The Lookbook of Tat Mnoyans dresses",
// };

export default function RootLayout({children}) {
    const pathname = usePathname();
    const segments = pathname.split('/');

    const [scrolled, setScrolled] = useState(false);
    const {scrollY} = useScroll();
    const [innerPage, setInnerPage] = useState(false);
   useEffect(() => {
       if (segments.join('').length > 0) {
           setInnerPage(true)
       } else  {
           setInnerPage(false)
       }

       if (segments.join('').length > 0 || scrollY.current > 50) return setScrolled(true)

       setScrolled(false)
   }, [pathname])
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (segments.join('').length > 0) return setScrolled(true)


        if (scrollY.current > 50) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    })


    return (
        <html lang="en">
        <body className={`${inter.className}${innerPage ? ` inner-page` : ''}`}>
        <SVG />
        <Header scrolled={scrolled}/>
        <div className={publicSans.className}>
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}
