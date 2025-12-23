import Breadcrumb from "@/components/Breadcrumb";
import ServiceSectionFour from "@/components/sections/ServiceSectionFour";
import TestimonialSectionTwo from "@/components/sections/TestimonialSectionTwo";

export default function ServicesPage() {
    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Our Services" bgClass="service" />

            {/*-- Service Section --*/}
            <ServiceSectionFour/>

            {/*-- Testimonial Section --*/}
            <TestimonialSectionTwo classes="pt-0"/>
        </>
    )
}