import { useEffect, useRef } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import Team11 from "../../../public/assets/imgs/team/1.png";
import Team12 from "../../../public/assets/imgs/team/2.png";
import Team13 from "../../../public/assets/imgs/team/3.png";
import Team14 from "../../../public/assets/imgs/team/4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";

const Team1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", mousemoveHandler);
  }
  function mousemoveHandler(e) {
    let team_cursor = document.getElementById("team_cursor");
    const target = e.target;
    let tHero = gsap.context(() => {
      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });
      let t2 = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });

      // Team Page Team Cursor
      if (target.closest(".team__slider")) {
        tl.to(
          team_cursor,
          {
            opacity: 1,
            ease: "power4.out",
          },
          "-=0.3"
        );
      } else {
        t2.to(
          team_cursor,
          {
            opacity: 0,
            ease: "power4.out",
          },
          "-=0.3"
        );
      }
    });
    return () => tHero.revert();
  }
  return (
    <>
      <section className="team__area-6">
        <div className="container line pt-120 ">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 offset-xxl-4 offset-xl-4">
              <div className="sec-title-wrapper">
                <h3 className="sec-title animation__char_come" ref={charAnim}>
                  Meet our Team{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="team__slider pb-120">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            speed={2000}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className="team__slide">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team11}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name-6">Dmitrijs Petrovs</h4>
                    <h5 className="team__member-role-6">Founder & CEO</h5>
                  </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team12}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name-6">Samantha Sondore</h4>
                    <h5 className="team__member-role-6">Designer</h5>
                  </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team13}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name-6">Daniils Petrovs</h4>
                    <h5 className="team__member-role-6">Full Stack Developer</h5>
                  </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="team__slide">
                  <Image
                    priority
                    style={{ width: "100%", height: "auto" }}
                    src={Team14}
                    alt="Team Member"
                  />
                  <div className="team__info">
                    <h4 className="team__member-name-6">Jason Dixon  </h4>
                    <h5 className="team__member-role-6">Full Stack Developer</h5>
                  </div>
              </div>
            </SwiperSlide>


          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Team1;
