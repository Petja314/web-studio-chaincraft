import {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "../../plugins";
import Link from "next/link";
import Portfilio11 from "../../../public/assets/imgs/portfolio/phone1.png";
import Portfilio12 from "../../../public/assets/imgs/portfolio/phone2.png";
import Portfilio13 from "../../../public/assets/imgs/portfolio/phone3.png";
import Portfilio14 from "../../../public/assets/imgs/portfolio/phone4.png";
import Portfilio15 from "../../../public/assets/imgs/portfolio/phone5.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const portfolio = [
  {img : Portfilio11, altImg : "ecommerce nail shop",            title : "Nail Shop",     date : "02 May 2024"  , component : "case_1"},
  {img : Portfilio12, altImg : "crypto project dex exchange",   title : "Gym Personal Training",  date : "23 April 2024" , component : "case_2"},
  {img : Portfilio13, altImg : "crypto landing website",       title : "Crypto Landing",    date : "02 August 2024" , component : "case_3"},
  {img : Portfilio14, altImg : "clothing ecommerce shop",       title : "Fashion Clothing Brand",    date : "15 November 2024" , component : "case_4"},
  {img : Portfilio15, altImg : "personalised gifts shop",       title : "Gifts Shop",    date : "28 January 2025" , component : "case_5"},
]

const DigitalAgencyPortfolio = () => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 767) {
          let portfolioline = gsap.timeline({
            scrollTrigger: {
              trigger: ".portfolio__area",
              start: "top center-=200",
              pin: ".portfolio__text",
              end: "bottom bottom+=80",
              markers: false,
              pinSpacing: false,
              scrub: 1,
            },
          });

          portfolioline.to(".portfolio__text", {
            scale: 3,
            duration: 1,
          });
          portfolioline.to(".portfolio__text", {
            scale: 3,
            duration: 1,
          });
          portfolioline.to(
            ".portfolio__text",
            {
              scale: 1,
              duration: 1,
            },
            "+=2"
          );
        }

        let portfolio_lists = gsap.utils.toArray(".portfolio__item");
        portfolio_lists.forEach((portfolio, i) => {
          gsap.set(portfolio, { opacity: 0.7 });
          let t1 = gsap.timeline();

          t1.set(portfolio, {
            position: "relative",
          });
          t1.to(portfolio, {
            scrollTrigger: {
              trigger: portfolio,
              scrub: 2,
              duration: 1.5,
              start: "top bottom+=100",
              end: "bottom center",
              markers: false,
            },
            scale: 1,
            opacity: 1,
            rotateX: 0,
          });
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="portfolio__area pb-140">
        <div className="container">
          <div className="row top_row">
            <h2 className="portfolio__text">work</h2>

            <div className="portfolio__list-1">
              {portfolio.map((el,index) => (
                  <div  className="portfolio__item" key={index}>
                    {/*<Link href={`/portfolio-details?component=${el.component}`}>*/}
                    <Link href={`/portfolio-details/${el.component}`}>
                      <Image
                          priority
                          style={{ width: "100%", height: "auto" }}
                          className="mover"
                          src={el.img}
                          alt={el.altImg}
                      />
                    </Link>
                    <div className="portfolio__info">
                      <h3 className="portfolio__title">{el.title}</h3>
                      <p>{el.date}</p>
                    </div>
                  </div>
              ))
              }
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default DigitalAgencyPortfolio;
