import gsap from "gsap";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import arrowIcon from "../../assets/arrow.png";
const RealEstateSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const { t } = useTranslation();

  const toggleText = () => {
    const contentHeight = contentRef.current.offsetHeight;

    if (!isOpen) {
      gsap.to(wrapperRef.current, {
        height: contentHeight,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(wrapperRef.current, {
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }

    setIsOpen(!isOpen);
  };
  return (
    <div className="max-w-screen-2xl mx-auto lg:my-12 my-7 p-5">
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="max-w-md">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                {t("year")}{" "}
                <span className="text-orange-500">A&D Construction</span>{" "}
                {t("company")}
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-gray-800">{t("about-1")}</p>
              <div
                ref={wrapperRef}
                style={{
                  overflow: "hidden",
                  height: 0,
                  transition: "height 0.5s ease",
                }}
              >
                <p ref={contentRef} className="text-gray-800 pt-2">
                  {t("about-2")}
                </p>
              </div>
            </div>
            {/* Button Section */}
            <div className="mt-7 lg:mt-12">
              <button
                className="px-6 py-3 border text-gray-800 border-orange-600 flex items-center gap-2 text-sm lg:text-base font-medium rounded-md transition-transform transform hover:scale-105"
                onClick={() => {
                  toggleText();
                }}
              >
                {t("more")}
                <img
                  src={arrowIcon}
                  alt="Arrow Icon"
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { count: "50+", label: t("label-1") },
              { count: "100%", label: t("label-2") },
              { count: "4+", label: t("label-3") },
              { count: "5+", label: t("label-4") },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-orange-50 p-6 text-start rounded-lg shadow-md"
              >
                <h2 className="text-lg font-bold text-gray-800 lg:text-3xl">
                  {item.count}
                </h2>
                <p className="text-gray-700 mt-2 inline-block break-all">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateSection;
