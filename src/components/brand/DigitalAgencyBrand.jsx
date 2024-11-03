import {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "../../plugins";
import Coin1 from "../../../public/assets/imgs/brand/coins/arb.png";
import Coin2 from "../../../public/assets/imgs/brand/coins/apt.png";
import Coin3 from "../../../public/assets/imgs/brand/coins/atom.png";
import Coin4 from "../../../public/assets/imgs/brand/coins/ton.png";
import Coin5 from "../../../public/assets/imgs/brand/coins/avax.png";
import Coin6 from "../../../public/assets/imgs/brand/coins/bnb.png";
import Coin7 from "../../../public/assets/imgs/brand/coins/dot.png";
import Coin8 from "../../../public/assets/imgs/brand/coins/etc.png";
import Coin9 from "./../../../public/assets/imgs/brand/coins/near.png";
import Coin10 from "../../../public/assets/imgs/brand/coins/opt.png";
import Coin11 from "../../../public/assets/imgs/brand/coins/sol.png";
import Coin12 from "../../../public/assets/imgs/brand/coins/strk.png";
import Image from "next/image";
import {useTranslations} from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const coinList = [Coin1, Coin2, Coin3, Coin4, Coin5, Coin6, Coin7, Coin8, Coin9, Coin10, Coin11, Coin12]

const DigitalAgencyBrand = () => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom", {
            scrollTrigger: {
              trigger: ".fade_bottom",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="brand__area">
        <div className="container g-0 line pt-130 pb-130">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper" style={{position: "relative"}} >
                <h2 className="sec-sub-title title-anim">
                  BlockChains
                </h2>
                <h3 className="sec-title title-anim">
                  Мы работаем со всеми новыми
                  <br />
                  блокчейн технологиями
                </h3>

              </div>
            </div>

            <div className="col-xxl-12">
              <div className="brand__list">
                { coinList.map((el,index) => (
                    <div className="brand__item fade_bottom" key={index}>
                      <Image
                          style={{borderRadius : "50px"}}
                          priority
                          width={70}
                          height={70}
                          src={el}
                          alt="Brand Logo"
                      />
                    </div>
                ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyBrand;
