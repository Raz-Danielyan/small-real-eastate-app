import { useTranslation } from "react-i18next";
import { ChevronDown } from "react-ionicons";
import bg from "../../assets/landing.png";
const Banner = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="bg-[#fef8f5] md:py-36 py-12 mx-auto w-full h-screen relative bg-cover bg-center"
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col gap-2 items-start mt-24 xl:ml-[150px] ml-0">
          <div className="bg-black/60 xl:p-6 p-0 rounded-md flex w-fit">
            <span className="text-[#fff] aurora-text lg:text-[50px] md:text-[40px] text-[35px] font-semibold z-3 text-left md:max-w-[1100px] max-w-full md:leading-[70px]">
              &quot;{t("banner")}&quot;
            </span>
          </div>
        </div>

        <div className="absolute bottom-5 w-full px-[150px] z-50 flex items-center justify-center gap-5">
          <ChevronDown
            color="#fff7ee"
            width={"30px"}
            height={" 30px"}
            cssClasses={"animate-bounce"}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
