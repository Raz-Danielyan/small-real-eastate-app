import gulfLogo from "../../assets/company-logos/gulf.png";

const LogoList = () => {
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 my-10 p-5 justify-items-end">
      <div className="">
        <img
          src={gulfLogo}
          alt="Logo 1"
          className="w-full h-auto max-w-[120px] object-contain"
        />
      </div>
    </div>
  );
};

export default LogoList;
