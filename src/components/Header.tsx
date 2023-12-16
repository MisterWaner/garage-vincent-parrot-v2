import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Header(): JSX.Element {
    const links = [
        { label: "Mécanique", to: "/mecanique" },
        { label: "Carrosserie", to: "/carrosserie" },
        { label: "Parc automobile", to: "/occasions" },
        { label: "Contact", to: "/contact" },
        { label: "Accès professionnel", to: "/connexion" },
    ];

    const [open, setOpen] = useState(false);

    function toggleMenu() {
        setOpen(!open);
    }

    return (
        <header className="text-yellow-500 bg-black fixed w-full z-40 top-0 left-0">
            <nav className="lg:flex lg:justify-between items-center">
                <Link to="/" onClick={() => setOpen(false)}>
                    <img
                        className="w-40"
                        src="images/logo-garage.png"
                        alt="logo-garage"
                    />
                </Link>

                <ul
                    className={`w-full lg:w-2/3 h-fit absolute lg:static transition-all duration-300 ease-in flex flex-col items-center py-5 space-y-5 z-[-1] list-none lg:z-auto lg:flex-row lg:space-y-0 lg:py-0 lg:justify-around ${
                        open
                            ? "top-[160px] backdrop-blur-sm lg:bg-transparent z-40 lg:backdrop-blur-sm"
                            : "top-[-490px] backdrop-blur-none"
                    }`}
                >
                    {links.map((link, index) => (
                        <li
                            key={index}
                            className="text-lg lg:text-xl hover:text-red-600"
                            onClick={toggleMenu}
                        >
                            <NavLink 
                            style={({isActive}) => {
                                return {
                                    textDecoration: isActive ? 'underline' : 'none',
                                    textUnderlineOffset: isActive ? "3px" : "0px",
                                }
                            }}
                            to={link.to}>{link.label}</NavLink>
                        </li>
                    ))}
                </ul>
                <button
                    className="absolute top-16 right-6 border-0 icone-toggle bg-transparent p-1 lg:hidden w-9 h-9 hover:text-red-600"
                    onClick={toggleMenu}
                >
                    {open ? <FaXmark /> : <FaBars />}
                </button>
            </nav>
        </header>
    );
}
