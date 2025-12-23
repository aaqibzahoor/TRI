import HeroSectionTwo from "@/components/sections/HeroSectionTwo";
import ServiceSectionTwo from "@/components/sections/ServiceSectionTwo";
import AboutSectionTwo from "@/components/sections/AboutSectionTwo";
import ProjectSliderSection from "@/components/sections/ProjectSliderSection";
import ProcessSectionTwo from "@/components/sections/ProcessSectionTwo";
import BlogSectionTwo from "@/components/sections/BlogSectionTwo";
import TestimonialSectionTwo from "@/components/sections/TestimonialSectionTwo";
import TeamSectionTwo from "@/components/sections/TeamSectionTwo";
import ProjectSectionTwo from "@/components/sections/ProjectSectionTwo";
import CtaSectionOne from "@/components/sections/CtaSectionOne";

export default function HomeTwo() {
    return (
        <>
            {/*-- Hero Area --*/}
            <HeroSectionTwo/>

            {/*-- Service Section --*/}
            <ServiceSectionTwo/>

            {/*-- About Section --*/}
            <AboutSectionTwo/>

            {/*-- Project Slider --*/}
            <ProjectSliderSection/>

            {/*-- Process Section --*/}
            <ProcessSectionTwo/>

            {/*-- Blog Section --*/}
            <BlogSectionTwo/>

            {/*-- Testimonial Section --*/}
            <TestimonialSectionTwo/>

            {/*-- Team Section --*/}
            <TeamSectionTwo/>

            {/*-- Project Section --*/}
            <ProjectSectionTwo/>

            {/*-- CTA Section --*/}
            <CtaSectionOne/>
        </>
    )
}
