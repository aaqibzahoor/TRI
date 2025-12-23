import HeroSectionOne from "@/components/sections/HeroSectionOne";
import ServiceSectionOne from "@/components/sections/ServiceSectionOne";
import AboutSectionOne from "@/components/sections/AboutSectionOne";
import GallerySectionOne from "@/components/sections/GallerySectionOne";
import ProjectSectionOne from "@/components/sections/ProjectSectionOne";
import ProcessSectionOne from "@/components/sections/ProcessSectionOne";
import TestimonialSectionOne from "@/components/sections/TestimonialSectionOne";
import TeamSectionOne from "@/components/sections/TeamSectionOne";
import BlogSectionOne from "@/components/sections/BlogSectionOne";
import ProcessSectionTwo from "@/components/sections/ProcessSectionTwo";
import ServiceSectionThree from "@/components/sections/ServiceSectionThree";
import ServiceSectionTwo from "@/components/sections/ServiceSectionTwo";
import HeroSectionThree from "@/components/sections/HeroSectionThree";

export default function Home() {
  return (
    <>
      {/*-- Hero Area --*/}
      <HeroSectionOne />

      {/*-- Service Section --*/}
      <ServiceSectionOne />

      {/*-- About Section --*/}
      <AboutSectionOne />

      {/*-- Gallery Section --*/}
      <GallerySectionOne />

      {/*-- Project Section --*/}
      <ProjectSectionOne />

      {/*-- Process Section --*/}
      <ProcessSectionOne />

      {/*-- Testimonial Section --*/}
      <TestimonialSectionOne />

      {/*-- Team Section --*/}
      <TeamSectionOne />

      {/*-- Blog Section --*/}
      <BlogSectionOne />
    </>
  );
}
