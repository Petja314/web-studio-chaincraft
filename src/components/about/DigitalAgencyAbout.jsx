import {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollSmoother, ScrollTrigger} from "../../plugins";
import Link from "next/link";
import Image from "next/image";
import About12 from "../../../public/assets/imgs/about/appmobile.png";
import Service11 from "../../../public/assets/imgs/service/web.svg";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const DigitalAgencyAbout = () => {


  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="about__area">
        <div className="container line g-0 pt-140 pb-130">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="about__title-wrapper">
                <h3 className="sec-title title-anim">
                  We will unlock the potential of your business with technology and expertise.
                </h3>
              </div>

              <div className="about__content-wrapper">
                <div className="about__img">
                  <div className="img-anim about__img_left">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service11}
                      alt="About Image"
                      // data-speed="0.3"
                    />
                  </div>

                  <div className="about__img-right">
                    <Image
                      priority
                      width={220}
                      style={{ height: "auto" }}
                      src={About12}
                      alt="About Image Right"
                      data-speed="0.5"
                    />
                    <div className="shape">
                      <div className="secondary" data-speed="0.9"></div>
                      <div className="primary"></div>
                    </div>
                  </div>
                </div>

                <div className="about__content text-anim">
                  <p>
                    We are a team of web design and development experts focused on helping businesses establish or refresh their online presence.
                  </p>

                  <p>
                    Whether you are starting from scratch or reinventing an existing website, we create custom, user-friendly solutions tailored to your goals.
                  </p>

                  <p>
                    Our mission is to support businesses without websites or those looking to innovate, ensuring they stand out and succeed in the digital space.
                  </p>



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyAbout;
