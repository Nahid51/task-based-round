import { useEffect, useState } from "react";
import "../../styles/header.scss";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";

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

    return (
        <nav className={`headerBg ${sticky}`}>
            <div className="headerContainer">
                <div className="headerDisplay">
                    <div className="headBar">
                        <h1>TechSoft</h1>
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