import { useEffect, useState } from "react";
import "../../styles/header.scss";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState("");

    // for sticky navbar
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);


    const isSticky = () => {
        /* Method that will fix header after a specific scrollable */
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 100 ? "is-sticky" : "";
        setSticky(stickyClass);
    };

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <nav className={`headerBg ${sticky}`}>
            <div className="headerContainer">
                <div className="headerDisplay">
                    <div className="headBar">
                        <Link to="/" onClick={goToTop}><h1>TechSoft</h1></Link>
                        <div className="toggleMenu" onClick={() => setOpen(!open)}>
                            {open ? <MdClose /> : <MdMenu />}
                        </div>
                    </div>
                    <ul className="desktopNav">
                        <Navbar />
                    </ul>
                    <ul className={`mobileNav ${open ? "toggleOn" : "toggleOff"} ${sticky ? "stickyNav" : ""}`}>
                        <Navbar setOpen={setOpen} />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;