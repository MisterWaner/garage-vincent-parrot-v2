import { Link } from "react-router-dom";
import {
    FaFacebook as FacebookIcon,
    FaInstagram as InstaIcon,
    FaLinkedin as LinkedinIcon,
    FaEnvelope as MailIcon,
    FaPhone as PhoneIcon,
} from "react-icons/fa6";
import Planning from "./Planning";

export default function Footer(): JSX.Element {
    const emailAddress = "garage-vincent.parrot@example.com";
    const phoneNumber = "+33612345678";

    const handleSendEmail = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    const handleDialNumber = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <footer className="sticky top-[100vh] mt-8">
            <div className="bg-yellow-500">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <section className="p-4 lg:my-auto">
                        <p className="font-bold italic text-center">
                            Suivez-nous sur les réseaux sociaux :
                        </p>
                        <div className="flex gap-4 justify-center mt-8">
                            <Link
                                target="_blank"
                                to="https://www.facebook.com/"
                            >
                                <FacebookIcon className="hover:text-red-500" size={26} />
                            </Link>
                            <Link
                                target="_blank"
                                to="https://www.instagram.com/"
                            >
                                <InstaIcon className="hover:text-red-500" size={26} />
                            </Link>
                            <Link
                                target="_blank"
                                to="https://www.linkedin.com/"
                            >
                                <LinkedinIcon className="hover:text-red-500" size={26} />
                            </Link>
                        </div>
                    </section>
                    <section className="p-4 lg:my-auto">
                        <Planning />
                    </section>
                    <section className="p-4 lg:my-auto">
                        <p className="font-bold italic text-center">
                            Nous contacter :
                        </p>
                        <ul className="flex flex-col items-center gap-4 justify-center mt-4">
                            <li className="flex items-center gap-2">
                                <p>Via notre formulaire de contact : </p>
                                <Link
                                    to="/contact"
                                    className="hover:text-red-500"
                                >
                                    Cliquez-ici
                                </Link>
                            </li>
                            <li className="flex gap-2 items-center">
                                <p>Par mail : </p>
                                <MailIcon
                                    className="w-6 h-6 hover:cursor-pointer hover:text-red-500"
                                    onClick={handleSendEmail}
                                />
                            </li>
                            <li className="flex gap-2 items-center">
                                <p>Par téléphone : </p>
                                <PhoneIcon
                                    className="w-6 h-6 hover:cursor-pointer hover:text-red-500"
                                    onClick={handleDialNumber}
                                />
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </footer>
    );
}
