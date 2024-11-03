import Service11 from "../../../public/assets/imgs/service/web.svg";
import Service12 from "../../../public/assets/imgs/service/defi.svg";
import Service13 from "../../../public/assets/imgs/service/nft.svg";
import Service15 from "../../../public/assets/imgs/service/design.svg";
import Image from "next/image";
import {useTranslations} from "next-intl";


const AboutStory = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            <div className="from-text">
              Web <span>3.0</span>
            </div>

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">ChainCraft</h2>
                <h3 className="sec-title title-anim">
                  Our story
                </h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                    ChainCraft is an innovative agency specializing in web design and development. We offer comprehensive services to create custom websites and e-commerce solutions. Our mission is to help businesses and individuals succeed online by providing user-friendly and effective digital solutions.
                  </p>
                  <p>
                    At ChainCraft, we know every project is unique. That’s why we take a personalized approach for each client, maintaining professionalism and attention to detail throughout the process. Our team of skilled developers, designers, and consultants is dedicated to creating innovative and secure solutions for your digital needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={300}
                  style={{ height: "auto" }}
                  src={Service13}
                  alt="Story Thumbnail"
                  className="w-100"
                />
              </div>
            </div>


            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="story__img-wrapper img-anim">
                <Image
                  priority
                  width={520}
                  style={{ height: "auto" }}
                  src={Service11}
                  alt="Story Thumbnail"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={230}
                  style={{ height: "auto" }}
                  src={Service12}
                  alt="Story Thumbnail"
                />
                <Image
                  priority
                  width={410}
                  style={{ height: "auto" }}
                  src={Service15}
                  alt="Story Thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;
