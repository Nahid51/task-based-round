import "../styles/hero.scss";
import heroImage from "/images/hero_banner_image_7.webp";
import MotionLeft from "./MotionLeft";

const Hero = () => {
    return (
        <div className="heroBg">
            <div className="heroContainer">
                <MotionLeft>
                    <div className="heroText">
                        <h4>SoftTech,</h4>
                        <h3>One Of The Leading Provider Of IT Services In Bangladesh.</h3>
                        <p>We are committed to delivering industry-leading IT solutions offering competitive pricing, best services, and superb customer care and support.</p>
                        <button>Contact Us</button>
                    </div>
                </MotionLeft>
                <div className="heroImage">
                    <img src={heroImage} alt="hero image" />
                </div>
            </div>
        </div>
    )
}

export default Hero;