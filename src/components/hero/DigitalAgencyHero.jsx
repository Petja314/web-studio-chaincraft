import React, {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {SplitText} from "../../plugins/index";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ArrowDownBig from "../../../public/assets/imgs/icon/arrow-down-big.png";
import Hero1bg from "../../../public/assets/imgs/hero/1-bg.png";
import Link from "next/link";
import Image from "next/image";


const DigitalAgencyHero = () => {
  const heroTitle = useRef();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".experience", {
          y: 50,
          opacity: 0,
        });
        let split_hero__title = new SplitText(heroTitle.current, {
          type: "chars",
        });

        gsap.from(split_hero__title.chars, {
          duration: 1,
          x: 70,
          autoAlpha: 0,
          stagger: 0.1,
        });

        gsap.to(
          ".experience",
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "-=1.5"
        );
      });
      return () => tHero.revert();
    }
  }, []);

  if (!isClient) {
    // Render a loading state or placeholder content during SSR
    return null;
  }

  return (
    <>
      <section className="hero__area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__content animation__hero_one">

                <div className={"buttonWrapper"} >
                  <Link href={`/contact`} style={{padding : "0px" , border : "none" , display : "inline-table" }}>
                    <button className={"translate_btn"}>
                      Contacts
                    </button>
                  </Link>

                  {/*<LanguageButton/>*/}
                </div>

                <Link href="" style={{fontSize : "30px"}}>
                  ChainCraft {" "}
                </Link>
                <div className="hero__title-wrapper">
                  <h1 className="hero__title" ref={heroTitle}>
                    Your expert in web design & development
                  </h1>
                  <p className="hero__sub-title">
                    We are a creative agency focused on
                    <span> web design and branding,  </span>
                    committed to crafting distinctive work that helps you stand out.
                  </p>
                </div>

                <Image
                  priority
                  width={170}
                  style={{ height: "auto" }}
                  src={ArrowDownBig}
                  alt="Arrow Down Icon"
                />
                <div className="experience">
                  <h2 className="title">10+</h2>
                  <p>
                   Successfully completed <br />
                    projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          style={{ width: "auto", height: "auto" }}
          src={Hero1bg}
          alt="image"
          className="hero1_bg"
        />
      </section>
    </>
  );
};

export default DigitalAgencyHero;
