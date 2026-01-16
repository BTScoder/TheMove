import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Leaders = () => {
  const leadersDetails = [
    {
      name: "Godwin Ibok",
      role: "Pastor",
      imageUrl: "",
    },
    {
      name: "Samuel Elizabeth",
      role: "Head of Logistics",
      imageUrl: "",
    },
    {
      name: "Cyril Bassey",
      role: "Head of Media",
      imageUrl: "",
    },
    {
      name: "Onawumi Precious",
      role: "Head of Hospitality",
      imageUrl: "",
    },
  ];
  return (
    <>
      <section className="mt-16 px-4 lg:mt-24">
        <h2 className="text-4xl font-bold uppercase lg:text-6xl">
          Meet our Leaders
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides on tablets
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // 3 slides on desktop
              spaceBetween: 30,
            },
          }}
          className="mt-20 w-full"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center gap-3">
              <div className="h-50 w-50 rounded-full shadow-xl">
                <img
                  src="/Prayer3.png"
                  alt="leader"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <h2 className="uppercase">Godwin Ibok</h2>
              <p className="text-gray-500 italic">Head Pastor</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-3">
              <div className="h-50 w-50 rounded-full shadow-xl">
                <img
                  src="/Prayer3.png"
                  alt="leader"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <h2 className="uppercase">Godwin Ibok</h2>
              <p className="text-gray-500 italic">Head Pastor</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center gap-3">
              <div className="h-50 w-50 rounded-full shadow-xl">
                <img
                  src="/Prayer3.png"
                  alt="leader"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <h2 className="uppercase">Godwin Ibok</h2>
              <p className="text-gray-500 italic">Head Pastor</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-3">
              <div className="h-50 w-50 rounded-full shadow-xl">
                <img
                  src="/Prayer3.png"
                  alt="leader"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <h2 className="uppercase">Godwin Ibok</h2>
              <p className="text-gray-500 italic">Head Pastor</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Leaders;
