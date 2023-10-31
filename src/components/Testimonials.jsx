import { useEffect, useState } from "react";
import "../styles/testimonial.scss";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <MdArrowBackIos
            className="prevArrow"
            style={{ ...style, display: "block", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <MdArrowForwardIos
            className="nextArrow"
            style={{ ...style, display: "block", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

const Testimonials = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/testimonials.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, []);

    console.log(data)

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div id="testimonials" className="testimonialBg">
            <div>
                <div className="testimonialsHeader">
                    <h4>Testimonials</h4>
                    <h1>What Our <span style={{ color: "#5355DF" }}>Customers Say</span></h1>
                </div>

                <div className="testimonialSlider">
                    <Slider {...settings}>
                        {isLoading ? <p>Loading...</p> :
                            data.map((customer) => (
                                <div key={customer.id}>
                                    <div className="testimonialAlignment">
                                        <div className="testimonialImage">
                                            <img
                                                src={customer.photo}
                                                alt="customerPhoto"
                                                style={{ borderRadius: "50%" }}
                                            />
                                        </div>
                                        <div>
                                            <FaQuoteLeft size={46} color="#FF2C9C" />
                                            <p style={{ margin: "3rem 0", textAlign: "justify", fontWeight: "600" }}>{`"${customer.desc}"`}</p>
                                            <Rating
                                                showTooltip
                                                readonly
                                                allowFraction
                                                initialValue={customer.rating}
                                                SVGstyle={{ display: "inline" }}
                                                size={25}
                                            />
                                            <h4 style={{ fontSize: "18px", fontWeight: "bold", margin: "1rem 0" }} >{customer.customerName}</h4>
                                            <p style={{ color: "gray" }}>{customer.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;