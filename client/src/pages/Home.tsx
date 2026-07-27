import Features from "../components/home/Features";
import { Hero } from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Pricing from "../components/home/Pricing";
import Navbar from "../components/Navbar";

export default function Home(){   
    return( 
        <>
            <Navbar/>
            <Hero/>
            <Features/>
            <HowItWorks/>
            <Pricing/>
        </>
    )}