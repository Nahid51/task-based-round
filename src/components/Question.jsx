import "../styles/question.scss";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import MotionLeft from "./MotionLeft";
import MotionRight from "./MotionRight";

const Question = () => {
    return (
        <div>
            <section className="questionInMindBg">
                <div className="questionSection">
                    <div className="questionAlignment">
                        <MotionLeft>
                            <div style={{ color: "white" }}>
                                <h2 style={{ fontSize: "2rem" }}>Have a project in mind?</h2>
                                <p style={{ fontSize: "1rem", marginTop: ".5rem" }} className="text-white font-medium text-lg mt-3">{`Let's get to work`}</p>
                            </div>
                        </MotionLeft>
                        <MotionRight>
                            <Link to="#" style={{ textDecoration: "none" }}>
                                <button className="questionButton"><span>Contact Us</span> <MdOutlineArrowForwardIos /></button>
                            </Link>
                        </MotionRight>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Question;