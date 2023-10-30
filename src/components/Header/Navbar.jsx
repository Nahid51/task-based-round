import { HashLink } from "react-router-hash-link";
import { navItems } from "../../assets/navItems";
import "../../styles/header.scss";

const Navbar = ({ setOpen }) => {
    return (
        <div className="navbarLink">
            {
                navItems.map((link) => (
                    <div key={link.id}>
                        <HashLink
                            to={link.path}
                            className="navLink"
                            onClick={() => setOpen && setOpen(false)}
                        >
                            {link.title}
                        </HashLink>
                    </div>
                ))
            }
        </div>
    )
}

export default Navbar;