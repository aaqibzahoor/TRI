import Breadcrumb from "@/components/Breadcrumb";
import ContactSectionOne from "@/components/sections/ContactSectionOne";

export default function ContactPage() {
    return (
        <>
            {/*-- Breadcrumb Area  --  */}
            <Breadcrumb title="Contact" bgClass='contact'/>

            {/*-- Contact Section  --*/}
            <ContactSectionOne/>
        </>
    )
}