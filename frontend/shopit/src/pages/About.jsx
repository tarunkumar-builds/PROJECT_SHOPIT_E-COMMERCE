import AboutIntro from "../components/AboutIntro";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SectionTitle } from "../components/SectionTitle";
import { Subscribe } from "../components/Subscribe";
import WhyChooseUs from "../components/WhyChooseUs";

export function About() {
    return (
        <>
            <SectionTitle title="About Us"/>

            <AboutIntro />

            <SectionTitle
                title="Why Choose Us"
            />
            <WhyChooseUs />
            <Subscribe />
        </>
    );
}