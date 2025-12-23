import Breadcrumb from "@/components/Breadcrumb";
import PricingSectionOne from "@/components/sections/PricingSectionOne";
import ProjectSliderSection from "@/components/sections/ProjectSliderSection";
import ProcessSectionThree from "@/components/sections/ProcessSectionThree";

export default function PricePage(){
    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Pricing" bgClass="price" />

            {/*-- Pricing Section  --*/}
            <PricingSectionOne/>

            {/*-- Project Slider --*/}
            <ProjectSliderSection/>

            {/*-- Process Section --*/}
            <ProcessSectionThree/>
        </>
    )
}