import GallerySectionTwoImages from "@/components/sections/GallerySectionTwoImages";

export default function GallerySectionTwo() {
    return (
        <div className="gallery-section showcase section-padding pt-70">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h3 className="visible-slowly-right">Showcase</h3>
                        <p>Flooring Installation for Homes and Businesses</p>
                    </div>
                </div>
                <GallerySectionTwoImages/>
            </div>
        </div>
    )
}