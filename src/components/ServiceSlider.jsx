import Slider from "react-slick";
import { BsArrowLeftCircle, BsArrowRightCircle, BsLightbulb, BsCart2 } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { TbSeo } from "react-icons/tb";
import { SlSocialDribbble } from "react-icons/sl";
import { Link } from "react-router-dom";
import "../styles/serviceSlider.scss";

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <BsArrowLeftCircle
            className="prevArrow"
            style={{ ...style, display: "block", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <BsArrowRightCircle
            className="nextArrow"
            style={{ ...style, display: "block", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};

const ServiceSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="serviceSlider">
            <Slider {...settings}>
                <div>
                    <div className="sliderAlignment">
                        <FaLaptopCode size={60} />
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque delectus eos soluta illum, quis corporis eligendi ratione fuga sequi nobis doloribus minus dolorem sint sapiente, quibusdam quod sit voluptates officiis?</p>
                        <Link to="#"><button className="sliderButton">See More</button></Link>
                    </div>
                </div>
                <div>
                    <div className="sliderAlignment">
                        <CgWebsite size={60} />
                        <h2>Web Application Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque delectus eos soluta illum, quis corporis eligendi ratione fuga sequi nobis doloribus minus dolorem sint sapiente, quibusdam quod sit voluptates officiis?</p>
                        <Link to="#"><button className="sliderButton">See More</button></Link>
                    </div>
                </div>
                <div>
                    <div className="sliderAlignment">
                        <BsLightbulb size={60} />
                        <h2>Digital Marketing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque delectus eos soluta illum, quis corporis eligendi ratione fuga sequi nobis doloribus minus dolorem sint sapiente, quibusdam quod sit voluptates officiis?</p>
                        <Link to="#"><button className="sliderButton">See More</button></Link>
                    </div>
                </div>
                <div>
                    <div className="sliderAlignment">
                        <TbSeo size={60} />
                        <h2>SEO Optimization</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque delectus eos soluta illum, quis corporis eligendi ratione fuga sequi nobis doloribus minus dolorem sint sapiente, quibusdam quod sit voluptates officiis?</p>
                        <Link to="#"><button className="sliderButton">See More</button></Link>
                    </div>
                </div>
                <div>
                    <div className="sliderAlignment">
                        <SlSocialDribbble size={60} />
                        <h2>Social Media Marketing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque delectus eos soluta illum, quis corporis eligendi ratione fuga sequi nobis doloribus minus dolorem sint sapiente, quibusdam quod sit voluptates officiis?</p>
                        <Link to="#"><button className="sliderButton">See More</button></Link>
                    </div>
                </div>
                <div>
                    <div className="sliderAlignment">
                        <BsCart2 size={60} />
                        <h2>eCommerce Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque delectus eos soluta illum, quis corporis eligendi ratione fuga sequi nobis doloribus minus dolorem sint sapiente, quibusdam quod sit voluptates officiis?</p>
                        <Link to="#"><button className="sliderButton">See More</button></Link>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default ServiceSlider;