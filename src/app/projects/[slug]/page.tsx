import Breadcrumb from "@/components/Breadcrumb";
import ProjectDetailsSection from "@/components/sections/ProjectDetailsSection";

export default function ProjectDetailsPage() {
    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Work Details" bgClass="work"/>

            {/*-- Project Details  --*/}
            <ProjectDetailsSection/>
        </>
    )
}