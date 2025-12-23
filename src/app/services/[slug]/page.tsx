import Breadcrumb from "@/components/Breadcrumb";
import ServiceDetailsSection from "@/components/sections/ServiceDetailsSection";

export default function ServiceDetails() {
    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Service Details" bgClass="service"/>

            {/*-- Service Details  --*/}
            <ServiceDetailsSection/>
        </>
    )
}