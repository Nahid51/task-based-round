import "../styles/service.scss";
import ServiceSlider from "./ServiceSlider";

const Services = () => {

    return (
        <div id="services" className="serviceBg">
            <div>
                <div className="serviceHeader">
                    <h4>Our Services</h4>
                    <h1>All The <span>Services</span> That We Provide To Our Clients</h1>
                    <p>{`Our customers appreciate our approach of ongoing improvement, comprehensive product development, innovative business solutions, and close integration with our client's business processes.`}</p>
                </div>

                <div>
                    <ServiceSlider />
                </div>

            </div>
        </div>
    )
}

export default Services;