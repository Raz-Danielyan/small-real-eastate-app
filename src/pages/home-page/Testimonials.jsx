import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import aboutImg1 from "../../assets/about-1.png";
import aboutImg2 from "../../assets/about-2.png";
import aboutImg3 from "../../assets/about-3.png";
import aboutImg4 from "../../assets/about-4.jpg";
import aboutImg5 from "../../assets/about-5.jpg";
import aboutImg6 from "../../assets/about-6.jpg";
import quoteIcon from "../../assets/quate_icon.png";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <div id="comments">
      <section className="bg-pink-50 py-16">
        <div className="max-w-screen-2xl container mx-auto px-5">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              {t("t-1")} <span className="text-orange-500">{t("t-2")}</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{t("t-3")}</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-screen-xl container mx-auto px-5">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {[
                {
                  name: "Gor Avagyan",
                  role: t("businessman"),
                  image: aboutImg1,
                  text: t("als-descr"),
                },
                {
                  name: "Hrachya Kirakosyan",
                  role: t("designer"),
                  image: aboutImg2,
                  text: t("als-descr-1"),
                },
                {
                  name: "Karen Martyrosyan",
                  role: t("contractor"),
                  image: aboutImg3,
                  text: t("als-descr-2"),
                },
                {
                  name: "Ani Davtyan",
                  role: t("businessman"),
                  image: aboutImg4,
                  text: t("als-descr-3"),
                },
                {
                  name: "Ashot Hovanisyan",
                  role: t("businessman"),
                  image: aboutImg5,
                  text: t("als-descr-4"),
                },
                {
                  name: "Ara Baghdasaryan",
                  role: t("businessman"),
                  image: aboutImg6,
                  text: t("als-descr-5"),
                },
              ].map((testimonial, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="text-start flex justify-between items-center">
                      <div>
                        <h4 className="text-gray-800 font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                      <div>
                        <img
                          src={quoteIcon}
                          alt="Quote"
                          className="w-6 h-6 opacity-30"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
