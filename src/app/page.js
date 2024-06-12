'use client'
import Hero from "../Components/Home/Hero/Hero";
import Choices from "../Components/Home/Choices/Choices";
import Available from "../Components/Home/Available/Available";
import Founder from "../Components/Home/Founder/Founder";
import New from "../Components/Home/New/New";
import React, {Suspense} from "react";
import Loading from "./loading";


export default function Home() {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Hero/>
                <Choices/>
                <Available/>
                <Founder/>
                <New/>
            </Suspense>
        </>
    );
}
