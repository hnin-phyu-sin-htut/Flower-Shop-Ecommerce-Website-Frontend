import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
      <footer className="bg-[#1A1A1A] text-[#F4C2C2] py-12 px-6">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 border-b
         border-[#C21E56]/50 pb-6 px-2">
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-lg">
            {["Home", "Products", "Services", "About", "Contact"].map((item) => (
                <Link
                    key={item}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="border-b-2 border-transparent hover:border-b-[#C21E56] duration-300 cursor-pointer"
                >
                  {item}
                </Link>
            ))}
          </nav>

          <div className="flex gap-6 text-2xl justify-center md:justify-end mt-4 md:mt-0">
            {[FaFacebook, FaInstagram, FaYoutube, FaTiktok].map((Icon, idx) => (
                <Icon
                    key={idx}
                    className="cursor-pointer hover:scale-110 hover:text-[#C21E56] transition-transform duration-300"
                />
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-[#F4C2C2]/90">
          <p className="mb-2">Copyright &copy; {new Date().getFullYear()} - All rights reserved.</p>
          <p>Designed with Love by SnowFlowery.</p>
        </div>
      </footer>
  );
}
