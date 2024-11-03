import { useEffect, useRef } from "react";
import Image from "next/image.js";
import CCRAFTLOGO from "../../../public/assets/imgs/logo/CCRAFTLOGO.svg";
import animationWordCome from "../../lib/utils/animationWordCome";
import Link from "next/link";
import {useTranslations} from "next-intl";

const AboutHero = () => {
  const wordAnim = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
  }, []);
  return (
    <>
      <section className="hero__about">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
                <h1 className="hero-title animation__word_come" ref={wordAnim}>
                  ChainCraft is a team of experts in web design and development.
                </h1>
                <div className="hero__about-info">
                  <div className="hero__about-btn">
                    <div className="btn_wrapper">
                      <Link
                        href="/contact"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> Contact<br />
                        us
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="hero__about-text title-anim">
                    <p>
                      Our mission is to help your business thrive in the digital age with innovative web solutions and services.
                    </p>
                  </div>
                  <div className="hero__about-award">
                    <Image
                      priority
                      width={160}
                      height={90}
                      src={CCRAFTLOGO}
                      alt="chain craft"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutHero;
