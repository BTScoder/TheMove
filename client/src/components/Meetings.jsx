import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Meetings = () => {
  const meeting = [
    {
      day: "Monday",
      image: "/prayer1.jpeg",
      time: "9:00 PM - 10 PM",
      title: "Prayer Meeting",
      description:
        "Join us every Monday at 8:45 PM for our weekly prayer meeting. Come together with fellow members to pray, reflect, and seek spiritual guidance.",
    },
    {
      day: "Tuesday",
      image: "/bible-study.jpg",
      time: "8:45 PM - 11 PM",
      title: "Bible Study",
      description:
        "Join us every Tuesday at 8:45 PM for our engaging Bible study sessions. Dive deep into the scriptures, discuss interpretations, and grow in your faith alongside fellow believers.",
    },
    {
      day: "Thursday",
      image: "/spirit.jpg",
      time: "9:00 PM - 10 PM",
      title: "School of the Spirit",
      description:
        "Join us every Thursday at 9:00 PM for our School of the Spirit sessions. Engage in spiritual teachings, worship, and fellowship to deepen your connection with the Holy Spirit.",
    },
    {
      day: "Friday",
      time: "9:00 PM - 10 PM",
      image: "/prayer.jpg",
      title: "Prayer Meeting",
      description:
        "Join us every Friday at 9:00 PM for our weekly prayer meeting. Come together with fellow members to pray, reflect, and seek spiritual guidance.",
    },
    {
      day: "Saturday",
      image: "/study.jpg",
      time: "9:00 PM - 10 PM",
      title: "Bible Study",
      description:
        "Join us every Saturday at 9:00 PM for our weekly Bible study sessions. Dive deep into the scriptures, discuss interpretations, and grow in your faith alongside fellow believers.",
    },
  ];
  return (
    <>
      <section className="mt-16 px-5 lg:mt-30">
        <div className="space-y-10">
          <h2 className="text-4xl text-gray-500 uppercase">
            Committed to your Spiritual growth
          </h2>
          <h2 className="text-6xl">Our Online Meetings</h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1} // 1 slide on mobile
          spaceBetween={20}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
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
          className="mt-20"
        >
          {meeting.map((meet, index) => (
            <SwiperSlide key={index} className="px-2">
              <div className="overflow-hidden rounded-4xl">
                <div className="h-50 w-full">
                  <img
                    src={meet.image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div></div>
                <div className="space-y-5 bg-white px-8 py-5 text-center">
                  <h2 className="text-2xl uppercase">{meet.title}</h2>
                  <p className="text-sm">{meet.description}</p>
                  <button className="bg-primary rounded-2xl px-3 py-2 text-white">
                    Read More{" "}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Physical meetings */}
        <div className="mt-10 lg:mt-20">
          <div className="lg:text-end">
            <h2 className="text-4xl uppercase lg:text-6xl lg:capitalize">
              Online Meetings not enough?
            </h2>
            {/* <p className="font-light text-gray-600">We meet in person too</p> */}
          </div>

          <div className="items-center gap-10 lg:mt-10 lg:grid lg:grid-cols-2">
            <div className="relative grid h-full w-full grid-cols-2 gap-6 px-5 py-10">
              <div
                className="h-full w-full"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <img
                  src="/physical1.jpg"
                  alt=""
                  className="z-50 h-full w-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <div
                  className="h-40 w-full"
                  data-aos="slide-up"
                  data-aos-duration="1000"
                >
                  <img
                    src="/physical2.jpg"
                    alt=""
                    className="aspect-video h-full w-full"
                  />
                </div>
                <div
                  className="h-24 w-24"
                  data-aos="slide-up"
                  data-aos-duration="1000"
                >
                  <img
                    src="/physical3.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Diagonal Lines */}
              <svg
                className="absolute bottom-0 left-0 z-0 w-full"
                viewBox="0 0 400 80"
                xmlns="http://www.w3.org/2000/svg"
              >
                {[...Array(8)].map((_, i) => (
                  <line
                    key={i}
                    x1={i * 50}
                    y1="80"
                    x2={i * 50 + 40}
                    y2="0"
                    stroke="#9ca3af"
                    strokeWidth="2"
                  />
                ))}
              </svg>
            </div>
            <div className="space-y-5 lg:px-10 lg:py-20">
              <h2 className="text-4xl uppercase">
                No Problem. We meet in person to
              </h2>
              <p className="text-sm font-light text-gray-600">
                We hold physical gatherings where members come together for
                prayer, teaching, and fellowship. Join us as we grow together,
                encourage one another, and experience community face to face.
              </p>
              <div>
                <button className="bg-black px-6 py-2 text-white">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Meetings;
