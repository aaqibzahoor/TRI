import HeroSectionOne from "@/components/sections/HeroSectionOne";
import ProcessSectionTwo from "@/components/sections/ProcessSectionTwo";
import ServiceSectionThree from "@/components/sections/ServiceSectionThree";
import ServiceSectionTwo from "@/components/sections/ServiceSectionTwo";
import HeroSectionThree from "@/components/sections/HeroSectionThree";

import serviceImg1 from "@/assets/img/tri/window.jpg";
import serviceImg2 from "@/assets/img/tri/arched_windows.jpg";
import serviceImg3 from "@/assets/img/tri/window2.jpg";
import serviceImg4 from "@/assets/img/tri/window3.jpg";
import TeamSectionTwo from "@/components/sections/TeamSectionTwo";
import ContactSectionOne from "@/components/sections/ContactSectionOne";

const servicesData = [
  {
    subtitle: "Service #1",
    title: "Residential Window Replacements",
    description: (
      <>
        Modernise Your Home’s Performance & Appeal
        <br />
        <br />
        Transform the look and feel of your existing home by replacing tired
        timber or outdated aluminium windows with our modern, high-performance
        systems. We focus on upgrades that immediately improve thermal
        insulation, noise reduction, and security.
        <br />
        <br />
        Our replacement service is designed to be seamless. We remove the old
        and install the new with minimal disruption to your day-to-day life. The
        result is a cleaner, more contemporary aesthetic that not only enhances
        your daily comfort but adds tangible value to your property.
      </>
    ),
    image: serviceImg1,
  },
  {
    subtitle: "Service #2",
    title: "Architectural & Bespoke Windows",
    description: (
      <>
        Complex Shapes & Custom Designs
        <br />
        <br />
        For homeowners and designers who refuse to compromise on vision, we
        specialise in the "too hard" basket. From striking arched and circular
        windows to oversized glazing panels, we fabricate unique shapes locally
        to ensure absolute precision.
        <br />
        <br />
        Because we manufacture in-house, we have full control over the quality
        and accuracy of every curve and corner. We deliver the design
        flexibility you need to create a truly unique facade, ensuring a
        flawless finish that aligns perfectly with your architectural intent.
      </>
    ),
    image: serviceImg2,
  },
  {
    subtitle: "Service #3",
    title: "New Homes & Renovations",
    description: (
      <>
        Reliable Packages for Builders & Homeowners
        <br />
        <br />
        We provide complete aluminium window packages tailored to new builds and
        major renovations. Whether you are an owner-builder or a professional
        construction team, we collaborate closely with you to ensure our windows
        align with your plans, energy ratings, and critical timelines.
        <br />
        <br />
        We understand that reliability is just as important as the product
        itself. You can expect fast quoting, clear communication, and a clean
        installation process. We show up when we say we will, delivering a
        premium result that keeps your project moving forward.
      </>
    ),
    image: serviceImg3,
  },
  {
    subtitle: "Service #4",
    title: "Commercial Aluminium Partitions",
    description: (
      <>
        Functional spaces with an architectural edge
        <br />
        <br />
        Create distinct, modern work zones with our commercial-grade glazing
        systems. From glass office fronts to acoustic meeting room dividers, we
        help you balance essential privacy with an open, light-filled
        atmosphere.
        <br />
        <br />
        We partner with commercial builders and fit-out specialists to ensure
        rapid turnaround times through our local facility. Whether it’s a single
        office or a full floor plate, we deliver a sharp, durable finish that
        keeps your project on schedule.
      </>
    ),
    image: serviceImg4,
  },
];

export default function Home() {
  return (
    <>
      {/*-- Hero Area --*/}
      <HeroSectionOne />

      {/*-- Intro Section --*/}
      <ProcessSectionTwo />

      {/*-- Projects Section --*/}
      <ServiceSectionThree />

      {/*-- Service (Overview) Section --*/}
      <ServiceSectionTwo />

      {/*-- Service Section --*/}
      {servicesData.map((service) => (
        <HeroSectionThree
          key={service.title}
          subtitle={service.subtitle}
          title={service.title}
          description={service.description}
          image={service.image}
        />
      ))}

      {/*-- Team Section --*/}
      <TeamSectionTwo />

      {/*-- Contact Section --*/}
      <ContactSectionOne />
    </>
  );
}
