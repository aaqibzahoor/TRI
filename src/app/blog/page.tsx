import Breadcrumb from "@/components/Breadcrumb";
import BlogSectionFour from "@/components/sections/BlogSectionFour";

export default function BlogPage() {
    return (
        <>
            {/*-- Breadcrumb Area  --*/}
            <Breadcrumb title="Blogs" bgClass="blog"/>

            {/*-- Blog Section --*/}
            <BlogSectionFour/>
        </>
    )
}