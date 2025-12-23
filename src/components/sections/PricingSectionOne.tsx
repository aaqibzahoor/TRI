export default function PricingSectionOne() {
    return (
        <div className="pricing-section section-padding pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">Pricing Plan</h2>
                        </div>
                    </div>
                </div>
                <div className="row gx-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-price-item">
                            <h5>Basic Plan</h5>
                            <div className="price-box">
                                <h3><span>$</span>2,500 - <span>$</span>5,000</h3>
                            </div>
                            <div className="price-list">
                                <ul>
                                    <li><i className="las la-check"></i>Interior Design</li>
                                    <li><i className="las la-check"></i>Custom design concept</li>
                                    <li><i className="las la-check"></i>3D Rendering of proposed design</li>
                                    <li><i className="las la-check"></i>Detailed shopping list of decor items</li>
                                    <li><i className="las la-check"></i>Floor plan and elevations</li>
                                    <li><i className="las la-check"></i>Ideal for refreshing a single room or space</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-price-item active">
                            <h5>Premium Plan</h5>
                            <div className="price-box">
                                <h3><span>$</span>10,000 - <span>$</span>20,000</h3>
                            </div>
                            <div className="price-list">
                                <ul>
                                    <li><i className="las la-check"></i>Architectural Design</li>
                                    <li><i className="las la-check"></i>Consultation with principal architect</li>
                                    <li><i className="las la-check"></i>Detailed site analysis and feasibility study
                                    </li>
                                    <li><i className="las la-check"></i>Custom design concept</li>
                                    <li><i className="las la-check"></i>Full set of construction documentation</li>
                                    <li><i className="las la-check"></i>Assistance with permit applications</li>
                                    <li><i className="las la-check"></i>Ideal for a building new or major renovation
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-price-item">
                            <h5>Deluxe Plan</h5>
                            <div className="price-box">
                                <h3>10% <span>of Project Cost</span></h3>
                            </div>
                            <div className="price-list">
                                <ul>
                                    <li><i className="las la-check"></i>Project Management</li>
                                    <li><i className="las la-check"></i>Full project management services</li>
                                    <li><i className="las la-check"></i>Co-ordination with contractors</li>
                                    <li><i className="las la-check"></i>Project Scheduling</li>
                                    <li><i className="las la-check"></i>Budget Management</li>
                                    <li><i className="las la-check"></i>Quality Control</li>
                                    <li><i className="las la-check"></i>Regular Process Report</li>
                                    <li><i className="las la-check"></i>Ideal for ensuring project highest standard
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}