import Breadcrumb from "@/components/Breadcrumb";
import TeamSectionFive from "@/components/sections/TeamSectionFive";

export default function TeamPage() {
    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Our Team" bgClass="team"/>

            {/*-- Team Section --*/}
            <TeamSectionFive/>
        </>
    )
}