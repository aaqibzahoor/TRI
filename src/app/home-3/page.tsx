import HeroSectionThree from "@/components/sections/HeroSectionThree";
import ServiceSectionThree from "@/components/sections/ServiceSectionThree";
import AboutSectionThree from "@/components/sections/AboutSectionThree";
import CounterSectionOne from "@/components/sections/CounterSectionOne";
import ProjectSectionOne from "@/components/sections/ProjectSectionOne";
import ProcessSectionThree from "@/components/sections/ProcessSectionThree";
import ProjectSliderTwo from "@/components/sliders/ProjectSliderTwo";
import TestimonialSectionThree from "@/components/sections/TestimonialSectionThree";
import TeamSectionThree from "@/components/sections/TeamSectionThree";
import BlogSectionThree from "@/components/sections/BlogSectionThree";
import CtaSectionTwo from "@/components/sections/CtaSectionTwo";

export default function HomeThree() {
    return (
        <>
            {/*-- Hero Area --*/}
            <HeroSectionThree index={0} title="" description="" image=""/>

            {/*-- Service Section --*/}
            <ServiceSectionThree/>

            {/*-- About Section --*/}
            <AboutSectionThree/>

            {/*-- Counter Section --*/}
            <CounterSectionOne/>

            {/*-- Project Section --*/}
            <ProjectSectionOne/>

            {/*-- Process Section --*/}
            <ProcessSectionThree classes="pt-0"/>

            {/*-- Project Slider --*/}
            <ProjectSliderTwo/>

            {/*-- Testimonial Section --*/}
            <TestimonialSectionThree/>

            {/*-- Team Section --*/}
            <TeamSectionThree/>

            {/*-- Blog Section --*/}
            <BlogSectionThree/>

            {/*-- CTA Section --*/}
            <CtaSectionTwo/>
        </>
    )
}
