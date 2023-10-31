import "../styles/about.scss";
import MotionRight from "./MotionRight";
import aboutImage from "/images/about-img.png";

const About = () => {
    return (
        <div id="about" className="aboutBg">
            <div className="aboutAlignment">
                <div className="aboutImage">
                    <img src={aboutImage} alt="hero image" />
                </div>
                <MotionRight>
                    <div className="aboutText">
                        <h4>About SoftTech</h4>
                        <h2>{`We Offer The World's Best Web Design And Digital Marketing Services!`}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi earum fugiat magnam odio voluptatum possimus laboriosam tenetur reiciendis mollitia laudantium.</p>
                        <h5>Who We Are</h5>
                        <MotionRight>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore non aliquid rem provident, dolore assumenda aliquam velit debitis eaque laboriosam labore molestias repellat explicabo quidem facere. Fugiat corrupti atque dolorum.</p>
                        </MotionRight>
                        <h5>Our History</h5>
                        <MotionRight>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore non aliquid rem provident, dolore assumenda aliquam velit debitis eaque laboriosam labore molestias repellat explicabo quidem facere. Fugiat corrupti atque dolorum.</p>
                        </MotionRight>
                        <h5>Our Mission</h5>
                        <MotionRight>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore non aliquid rem provident, dolore assumenda aliquam velit debitis eaque laboriosam labore molestias repellat explicabo quidem facere. Fugiat corrupti atque dolorum.</p>
                        </MotionRight>
                    </div>
                </MotionRight>
            </div>
        </div>
    )
}

export default About;