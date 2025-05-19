import { useTranslation } from "react-i18next";
import cardImg1 from "../../assets/property/gulf-1.jpg";
import cardImg2 from "../../assets/property/gulf-2.jpg";
import cardImg3 from "../../assets/property/home-1.jpg";
import cardImg4 from "../../assets/property/home-2.jpg";
import cardImg5 from "../../assets/property/home-4.webp";
import cardImg6 from "../../assets/property/rome-5.jpg";

const UniqueHome = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white mb-10 py-28" id="properties">
      <div className="max-w-screen-2xl container mx-auto px-5">
        {/* header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
            {t("home-title")}{" "}
            <span className="text-orange-500">{t("home-title-1")}</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-[#0F0E0E] mt-4">{t("home-descr")}</p>
          </div>
        </div>

        {/* card section 1*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* card 1 */}
          <div className="relative overflow-hidden">
            <img
              src={cardImg1}
              alt="card image 1"
              className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer rounded-lg"
            />
            <div className="mt-4 flex justify-between items-center">
              <p className="text-[#0F0E0E] font-bold md:text-[20px]">
                {t("home-1")}
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="relative lg:-mb-16 lg:mt-16 overflow-hidden">
            <img
              src={cardImg2}
              alt="card image 2"
              className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer rounded-lg"
            />
            <div className="mt-4 flex justify-between items-center">
              <p className="text-[#0F0E0E] font-bold md:text-[20px]">
                {t("home-1")}
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div className="relative overflow-hidden">
            <img
              src={cardImg3}
              alt="card image 1"
              className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer rounded-lg"
            />
            <div className="mt-4 flex justify-between items-center">
              <p className="text-[#0F0E0E] font-bold md:text-[20px]">
                {t("home-2")}
              </p>
            </div>
          </div>
        </div>

        {/* card section 2 */}
        <div className="md:mt-20 mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* card 4 */}
            <div className="relative overflow-hidden">
              <img
                src={cardImg4}
                alt="card image 4"
                className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer rounded-lg"
              />
              <div className="mt-4 flex justify-between items-center">
                <p className="text-[#0F0E0E] font-bold md:text-[20px]">
                  {t("home-2")}
                </p>
              </div>
            </div>
            <div className="relative lg:-mb-16 lg:mt-16 overflow-hidden">
              <img
                src={cardImg5}
                alt="card image 2"
                className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer rounded-lg"
              />
              <div className="mt-4 flex justify-between items-center">
                <p className="text-[#0F0E0E] font-bold md:text-[20px]">
                  {t("home-2")}
                </p>
              </div>
            </div>

            {/* card 3 */}
            <div className="relative overflow-hidden">
              <img
                src={cardImg6}
                alt="card image 1"
                className="w-full object-cover hover:scale-95 transition-all duration-200 ease-in cursor-pointer rounded-lg"
              />
              <div className="mt-4 flex justify-between items-center">
                <p className="text-[#0F0E0E] font-bold md:text-[20px]">
                  {t("home-3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueHome;
