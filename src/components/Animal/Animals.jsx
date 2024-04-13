import React from "react";
import "./animals.css";
import AnimalsBackground from "../../assets/animals-bg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import AnimalPic from "../../assets/434366799_3982995711927708_468111836068429309_n.jpg";

function Animals() {
  return (
    <div id="animals" className="h-fit w-full relative">
      <img
        src={AnimalsBackground}
        alt=""
        className="absolute z-0 max-h-[850px] hidden lg:block"
      />
      <div className="grid grid-cols-2 px-8 lg:px-36 relative gap-4 pt-10">
        <div className="grid col-span-2 content-end justify-self-center lg:justify-self-end text-center lg:text-end gap-3 mb-4">
          <h1
            className="text-darkbrown font-nunito font-bold"
            style={{
              fontSize: "clamp(1.25rem, 1.1107rem + 0.6369vw, 1.875rem)",
            }}
          >
            Animals
          </h1>
          <h1
            className="text-black font-nunito font-extrabold"
            style={{ fontSize: "clamp(1.25rem, 1.1943rem + 0.2548vw, 1.5rem)" }}
          >
            Dogs and cats that are looking for their new parents.
          </h1>
        </div>
        <div className="grid col-span-2 gap-y-4">
          <h1
            className="text-black font-nunito font-extrabold"
            style={{ fontSize: "clamp(1rem, 0.8885rem + 0.5096vw, 1.5rem)" }}
          >
            ❗Pets that will be euthanized❗
          </h1>
          <div className="min-w-0">
            <Swiper
              slidesPerView={1}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                450: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="grid col-span-1 gap-y-5">
          <h1
            className="text-black font-nunito font-extrabold"
            style={{ fontSize: "clamp(1rem, 0.8885rem + 0.5096vw, 1.5rem)" }}
          >
            Dogs
          </h1>
          <div className="min-w-0">
            <Swiper
              slidesPerView={1}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="grid col-span-1 gap-y-5">
          <h1
            className="text-black font-nunito font-extrabold"
            style={{ fontSize: "clamp(1rem, 0.8885rem + 0.5096vw, 1.5rem)" }}
          >
            Cats
          </h1>
          <div className="min-w-0">
            <Swiper
              slidesPerView={1}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide className="">
                <img
                  src={AnimalPic}
                  alt=""
                  className="h-56 w-96 object-cover rounded-xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animals;
