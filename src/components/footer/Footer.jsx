import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#0F0E0E] relative -mt-20">
      <div className="max-w-screen-2xl mx-auto pt-20 px-5">
        <footer className="text-white py-10">
          <div className="flex flex-col lg:flex-row gap-10 flex-wrap justify-between lg:gap-20">
            {/* Brand Section */}
            <div className="flex-1 sm:w-full">
              <img src={logo} alt="Logo" className="w-[100px] mb-1" />
              <p className="text-sm mb-4 text-justify ">{t("f-descr")}</p>
              <p className="text-sm mb-4 text-justify ">
                Location: Armenia, Yerevan, Vagharshyan Street, 20
              </p>
            </div>
            {/* Links Section */}
            <div className="flex-1 sm:w-full">
              <h4 className="text-lg font-semibold mb-4">{t("Links")}</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a href="#about" className="hover:text-[#FF5B28]">
                    {t("About")}
                  </a>
                </li>
                <li>
                  <a href="#properties" className="hover:text-[#FF5B28]">
                    {t("Properties")}
                  </a>
                </li>
                <li>
                  <a href="#comments" className="hover:text-[#FF5B28]">
                    {t("Comments")}
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-[#FF5B28]">
                    {t("Blog")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Information Section */}
            <div className="flex-1 sm:w-full">
              <h4 className="text-lg font-semibold mb-4">{t("Information")}</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a
                    href="mailto:adconstruction965@gmail.com"
                    className="hover:text-white"
                  >
                    {t("Contact Us")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex-1 sm:w-full">
              <h4 className="text-lg font-semibold mb-4">{t("Contact")}</h4>
              <div className="flex flex-col">
                <a
                  href="tel:+37493260001"
                  className="text-gray-400 text-sm mb-4"
                >
                  +374 93 260-001
                </a>
                <a
                  href="mailto:adconstruction965@gmail.com"
                  className="text-gray-400 text-sm mb-4"
                >
                  adconstruction965@gmail.com
                </a>
                <a
                  href="mailto:d.h.shin@yandex.ru"
                  className="text-gray-400 text-sm mb-4"
                >
                  d.h.shin@yandex.ru
                </a>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}

          <p className="text-sm text-center mt-16 ">
            2025 &copy; A&D CONSTRUCTION. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
