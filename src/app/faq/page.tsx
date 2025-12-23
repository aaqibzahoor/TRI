import Breadcrumb from "@/components/Breadcrumb";
import FaqSectionOne from "@/components/sections/FaqSectionOne";

export default function FaqPage() {
    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Frequently Asked Question" bgClass="faq" />

            {/*-- FAQ Section  --*/}
            <FaqSectionOne/>
        </>
    )
}