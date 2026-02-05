import ContactContent from "../components/ContactContent";
import { SectionTitle } from "../components/SectionTitle";
import { Subscribe } from "../components/Subscribe";

export function Contact() {
    return (
        <>
            <SectionTitle title="Contact Us"/>
            <ContactContent />
            <Subscribe />
        </>
    );
}