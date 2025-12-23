import Breadcrumb from "@/components/Breadcrumb";
import ProjectSectionThree from "@/components/sections/ProjectSectionThree";
import ProjectSliderTwo from "@/components/sliders/ProjectSliderTwo";
import ProcessSectionTwo from "@/components/sections/ProcessSectionTwo";

export default function ProjectsPage() {
    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Our Work" bgClass="work"/>

            {/*-- Project Section --*/}
            <ProjectSectionThree/>

            {/*-- Project Slider --*/}
            <ProjectSliderTwo/>

            {/*-- Process Section --*/}
            <ProcessSectionTwo/>
        </>
    )
}