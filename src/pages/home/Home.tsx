import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Tabiat",
    description:
      "Xushmanzara tog‘lar, gullagan vodiylar, jazirama cho‘llar, daryolar va zilol ko‘llar - bu go‘zallikning barchasidan O‘zbekistonda bahramand bo‘lishingiz mumkin!",
    link: "/nature",
    image: "/src/assets/images/hero1.webp",
  },
  {
    id: 2,
    title: "O'zbek taomlari",
    description:
      "Xushbo‘y palov, ishtahani qo‘zg‘atadigan qozon kabob, somsa, yopgan non va sho‘rva – o‘z rang-barangligi va betakror ta’mi bilan O‘zbekiston aholisi va mehmonlarining hayratga soladi.",
    link: "/food",
    image: "/src/assets/images/hero2.webp",
  },
  {
    id: 3,
    title: "Madaniy meros",
    description:
      "O‘zbekiston madaniyati, Markaziy Osiyo xalqlarining ko‘p asrlik an’analari va turmush tarzi bilan chambarchas bog‘liq boy tarixga ega",
    link: "/culture",
    image: "/src/assets/images/hero3.webp",
  },
  {
    id: 4,
    title: "Xalq san'ati",
    description:
      "Noyob naqshlar bilan burkangan O‘zbekiston amaliy san’ati asarlarining mazmuni va ahamiyati ko‘p asrlar davomida rivojlanib kelgan",
    link: "/art",
    image: "/src/assets/images/hero4.webp",
  },
  {
    id: 5,
    title: "Me’morchlik",
    description:
      "Moviy rang naqshlar va rang-barang rasmlar bilan bezatilgan ulug‘vor me’moriy ansambllar, saroylar, masjidlar va minoralar O‘zbekistonga tashrif buyuruvchi millionlab mehmonlarni ko‘p asrlar davomida hayratga solib kelmoqda.",
    link: "/architecture",
    image: "/src/assets/images/hero5.webp",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className={`bg-cover bg-center bg-no-repeat h-screen`}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 ">
                  <Header />
                  <div className="pt-44">
                    <div className="px-10 w-3/5">
                      <h1 className="text-white text-7xl font-bold mb-8">
                        {item.title}
                      </h1>
                      <p className="text-white text-2xl mb-16">
                        {item.description}
                      </p>
                      <Button
                        className="text-xl py-6 px-8"
                        variant={"destructive"}
                      >
                        Batafsil
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="text-center bg-white py-20 px-32">
        <h1 className="text-[2.6rem] font-medium mb-10">
          O‘zbekistonni o‘zingiz uchun kashf eting!!
        </h1>
        <h4 className="text-[26px] leading-normal text-[#222] italic mb-7">
          O‘zbekiston Sharqning sirli mamlakatidir. U yerda tarixlar afsonalarda
          to‘plangan, quyosh yil bo‘yi porlab, tabiatning betakrorligi va
          odamlarning yuraklari tozaligi buning nishonasidir
        </h4>
        <p className="text-[21px] text-[#919193] mb-5 ">
          Ushbu muborak zaminga kelgan har bir mehmon xursandchilik bilan kutib
          olinadi va bir marta tashrif buyurgan kishi yana qaytib kelishni
          xohlaydi.
        </p>
        <Button
          onClick={() => navigate("/uzbekistan")}
          className="text-xl py-6 px-8"
          variant={"destructive"}
        >
          Batafsil
        </Button>
      </section>
      <section className="categorySlider px-10">
        <h1 className="text-#1F2937 text-4xl sm:font-medium font-medium">
          Eng yaxshi joylar
        </h1>
        <Swiper
          spaceBetween={20}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          navigation={true}
          loop={true}
          className="mySwiper mt-5 sm:mt-0 rounded-2xl"
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="autoslider_wrap">
                  <div className="autoslider_img">
                    <img
                      className="w-[100%] rounded-2xl"
                      src={`${item.image}`}
                      alt=""
                    />
                    <div>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default Home;
