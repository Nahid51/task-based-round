import "../styles/footer.scss";
import { useForm } from "react-hook-form";
import { MdLocationPin, MdCall, MdEmail } from "react-icons/md";
import { FaGlobe, FaCalendarAlt, FaYoutube, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import MotionLeft from "./MotionLeft";

const Footer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data)

    return (
        <main id="contact" className="footerBg" >
            <div className="footerOpacity">
                <div className="footerAlignment">
                    <MotionLeft>
                        <div className="footerText footterAddress">
                            <h4>Our Office Location</h4>
                            <p><MdLocationPin size={22} /> <span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></p>
                            <p><MdCall size={22} /> <span> +88 017********</span></p>
                            <p><FaGlobe size={20} /> <span> https://somewhere.com/</span></p>
                            <p><FaCalendarAlt size={20} /> <span> Ofline: Sun-Thu (10.00am-6.00pm)</span></p>
                            <p><FaCalendarAlt size={20} /> <span> Online: Always (24/7)</span></p>
                        </div>
                    </MotionLeft>
                    <div className="footerText">
                        <h4>Usefull links</h4>
                        <ul className="linkAlignment">
                            <li><Link href="#">Home</Link></li>
                            <li><Link href="#">Course</Link></li>
                            <li><Link href="#">Workshop</Link></li>
                            <li><Link href="#">Career</Link></li>
                            <li><Link href="#">Privacy & Policy</Link></li>
                            <li><Link href="#">Services</Link></li>
                            <li><Link href="#">Event</Link></li>
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">FAQ</Link></li>
                            <li><Link href="#">Terms & Condition</Link></li>
                        </ul>
                    </div>
                    <div className="footerText">
                        <h4>Subscribe</h4>
                        <form onSubmit={handleSubmit(onSubmit)} className="footerInput">
                            <input placeholder="Enter your email" {...register("email", { required: true, maxLength: 20 })} style={{ padding: "12px", border: "none", borderRadius: "5px" }} />
                            <button type="submit" style={{ backgroundColor: "blue", padding: "12px", border: "none", borderRadius: "5px", color: "white" }} >Subscribe</button>
                            {errors.email && <p style={{ color: "red", fontWeight: "300", fontSize: "14px" }}>This field is required</p>}
                        </form>

                        <h6>Follow Us</h6>
                        <nav>
                            <Link to="#">
                                <FaFacebookSquare size={24} className="faFacebook" />
                            </Link>
                            <Link to="#">
                                <MdEmail size={28} className="mdEmail" />
                            </Link>
                            <Link to="#">
                                <FaYoutube size={28} className="faYoutube" />
                            </Link>
                            <Link to="#">
                                <FaTwitter size={26} className="faTwitter" />
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Footer;