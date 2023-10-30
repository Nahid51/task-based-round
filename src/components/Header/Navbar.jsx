import { Link } from "react-router-dom";
import { navItems } from "../../assets/navItems";
import "../../styles/header.scss";

const Navbar = ({ setOpen }) => {
    return (
        <div className="navbarLink">
            {
                navItems.map((link) => (
                    <div key={link.id}>
                        <Link
                            to={link.path}
                            className="navLink"
                            onClick={() => {
                                link.path && setOpen(false)
                            }}
                        >
                            {link.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Navbar;