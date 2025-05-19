import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdClose, MdMenu } from "react-icons/md";
import arrowIcon from "../../assets/arrow.png";
import logo from "../../assets/logo.png";
import LanguageDropdown from "./language-dropdown";

const Header = () => {
  const navContainerRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home"); // Default active link
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu on mobile after clicking
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsNavVisible(true);
        navContainerRef.current?.classList.remove("floating-nav");
      } else if (window.scrollY > lastScrollY) {
        setIsNavVisible(false);
        navContainerRef.current?.classList.add("floating-nav");
      } else if (window.scrollY < lastScrollY) {
        setIsNavVisible(true);
        navContainerRef.current?.classList.add("floating-nav");
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const linkClasses = (link) =>
    link === activeLink
      ? "text-[#FF5B28] font-bold"
      : "text-[#0F0E0E] font-semibold";

  return (
    <div
      className="top-0 left-0 right-0 fixed  z-50 transition-all duration-700"
      ref={navContainerRef}
    >
      <div className="max-w-screen-2xl mx-auto py-1 px-2 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" className="w-[120px]" />
        </a>

        {/* Hamburger Menu for Small Devices */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <MdClose className="text-2xl text-[#FF5B28]" />
            ) : (
              <MdMenu className="text-2xl text-[#FF5B28]" />
            )}
          </button>
        </div>

        {/* Navigation Menu for Large Devices */}
        <div className="hidden lg:block">
          <nav>
            <ul className="flex items-center gap-8">
              {[
                { href: "#home", label: t("Home") },
                { href: "#about", label: t("About") },
                { href: "#properties", label: t("Properties") },
                { href: "#blog", label: t("Blog") },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={linkClasses(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact Us Button */}
        <div className="hidden lg:block space-x-5">
          <LanguageDropdown />

          <button className="text-[#0F0E0E] font-semibold border-2 border-[#FF5B28] px-4 py-2 ">
            <a href="#contact" className="flex items-center gap-2">
              {t("Contact Us")}
              <span>
                <img src={arrowIcon} alt="Arrow Icon" className="w-4" />
              </span>
            </a>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white shadow-md z-50 lg:hidden h-[100vh]">
          <div className="flex justify-between items-center p-4 border-b">
            {/* Logo */}
            <div>
              <img src="/logo.png" alt="Logo" className="w-20" />
            </div>

            {/* Close Button */}
            <button onClick={toggleMenu}>
              <MdClose className="text-2xl text-[#FF5B28]" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4">
            <ul className="flex flex-col gap-6 text-center">
              {[
                { href: "#home", label: t("Home") },
                { href: "#about", label: t("About") },
                { href: "#properties", label: t("Properties") },
                { href: "#blog", label: t("Blog") },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={linkClasses(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button in Drawer */}
          <div className="mt-6 text-center">
            <div className="mb-6">
              <LanguageDropdown />
            </div>
            <button
              className="flex items-center justify-center gap-2 border-2 border-[#FF5B28] px-4 py-2 mx-auto"
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {t("Contact Us")}
              <span>
                <img src={arrowIcon} alt="Arrow Icon" className="w-4" />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
