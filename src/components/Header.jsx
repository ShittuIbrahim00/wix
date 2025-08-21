import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import gridSpaceLogo from "../../public/gridspace.png";

const navLinks = ["How it works", "Host a Space", "About"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b px-4 md:px-8 lg:px-20 py-4 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <img src={gridSpaceLogo} alt="Logo" className="w-10 h-10" />
        <span className="text-[#F05A28] font-bold text-xl tracking-tighter font-josefin">GridSpace</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
        {navLinks.map((link) => (
          <motion.a
            key={link}
            href="#"
            whileHover={{ scale: 1.05, color: "#F05A28" }}
            className="transition-colors"
          >
            {link}
          </motion.a>
        ))}
        <motion.button whileHover={{ scale: 1.05 }} className="font-bold">
          Become a Host
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-[#F05A28] text-white px-3 py-1 rounded-lg text-sm font-semibold"
        >
          Sign Up
        </motion.button>
      </nav>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-0 right-0 bg-white z-50 border-t shadow-md p-4 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-sm text-gray-800">
              {link}
            </a>
          ))}
          <button className="font-bold text-sm">Become a Host</button>
          <button className="bg-[#F05A28] text-white px-3 py-1 rounded text-sm">
            Sign Up
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
