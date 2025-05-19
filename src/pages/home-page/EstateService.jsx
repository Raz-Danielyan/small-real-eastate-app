import { useTranslation } from "react-i18next";
import realEstateAgent from "../../assets/real-estate-agent.png";
import starVectorIcon from "../../assets/start-vector.png";

const EstateService = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#FDF3EE] my-5 py-24" id="about">
      <section className="max-w-screen-2xl mx-auto">
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:py-24 gap-10 lg:gap-20">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className=" lg:text-4xl font-bold text-gray-800">
              {t("find")}
              <br /> {t("construction")}
              <span className="text-orange-500 px-2">{t("services")}</span>
              <br /> {t("all")}։
            </h2>
            <div className=" mt-4 lg:mt-10 flex justify-center lg:justify-start">
              <img
                src={realEstateAgent}
                alt="Professional Real Estate Agent"
                className=" rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">
            {/* Vector Image */}
            <div className="relative flex justify-center mb-3 lg:mb-10">
              <img src={starVectorIcon} className="  " alt="Vector Graphic" />
            </div>

            {/* Service 1 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl  font-bold text-gray-800">01</h3>
              <div className="w-full md:w-[400px]">
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  {t("est-1")}
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  {t("est-descr")}
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">02</h3>
              <div className="w-full md:w-[400px]">
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  {t("est-2")}
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  {t("est-2-descr")}
                </p>
                <div className="border-t-2 my-1 lg:my-3"></div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex items-start space-x-4">
              <h3 className="lg:text-3xl font-bold text-gray-800">03</h3>
              <div className="w-full md:w-[400px]">
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  {t("est-3")}
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-3">
                  {t("est-3-descr")}
                </p>
                <div className="border-t-2 my-3"></div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex items-start space-x-4">
              <h3 className="lg:text-3xl font-bold text-gray-800">04</h3>
              <div className="w-full md:w-[400px]">
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  {t("est-4")}
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-3">
                  {t("est-4-descr")}
                </p>
                <div className="border-t-2 my-3"></div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="flex items-start space-x-4">
              <h3 className="lg:text-3xl font-bold text-gray-800">05</h3>
              <div className="w-full md:w-[400px]">
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  {t("est-5")}
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-3">
                  {t("est-5-descr")}
                </p>
                <div className="border-t-2 my-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstateService;
