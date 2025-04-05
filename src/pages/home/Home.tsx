import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Home = () => {
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
          <SwiperSlide>
            <div className="bg-[url('/src/assets/images/hero5.webp')] bg-cover bg-center bg-no-repeat h-screen">
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative z-10 ">
                <Header />
                <div className="pt-44">
                  <div>
                    <h1 className="text-white text-7xl font-bold">
                      Madaniy meros
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('/src/assets/images/hero4.webp')] bg-cover bg-center bg-no-repeat h-screen">
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative z-10  px-10">
                <Header />
                <div className="pt-44">
                  <div>
                    <h1 className="text-white text-7xl font-bold">
                      Xalq sanoati
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section>
        <h1>O‘zbekistonni o‘zingiz uchun kashf eting!!</h1>
        <h4>
          O‘zbekiston Sharqning sirli mamlakatidir. U yerda tarixlar afsonalarda
          to‘plangan, quyosh yil bo‘yi porlab, tabiatning betakrorligi va
          odamlarning yuraklari tozaligi buning nishonasidir
        </h4>
        <p>
          Ushbu muborak zaminga kelgan har bir mehmon xursandchilik bilan kutib
          olinadi va bir marta tashrif buyurgan kishi yana qaytib kelishni
          xohlaydi.
        </p>
        <Button variant={"destructive"}>Batafsil</Button>
      </section>
    </div>
  );
};

export default Home;
