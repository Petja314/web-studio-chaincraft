"use client"
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import RootLayout from "../components/common/layout/RootLayout";
import DigitalAgencyHero from "../components/hero/DigitalAgencyHero";
import DigitalAgencyRoll from "@/components/roll/DigitalAgencyRoll";
import DigitalAgencyService from "@/components/service/DigitalAgencyService";
import DigitalAgencyWorkflow from "@/components/workflow/DigitalAgencyWorkflow";
import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import DigitalAgencyPortfolio from "@/components/portfolio/DigitalAgencyPortfolio";
import DigitalAgencyAbout from "@/components/about/DigitalAgencyAbout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Head from "next/head";
import Team1 from "@/components/team/Team1";
import DigitalAgencyTestimonial from "@/components/feedback/DigitalAgencyTestimonial";



const DigitalAgency = () => {
    const [openModal,setOpenModal] = useState(false);
    const [openModalTwo,setOpenModalTwo] = useState(false);
    const [openModalThree,setOpenModalThree] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined") {
      playCursor();
    }
  }, []);

  //json
  function playCursor() {
    try {
      let client_cursor = document.getElementById("client_cursor");
      document.addEventListener("mousemove", (e) => {
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

          // Home Page Client Cursor
          if (target.closest(".testimonial__img")) {
            tl.to(
                client_cursor,
                {
                  opacity: 1,
                  ease: "power4.out",
                },
                "-=0.3"
            );
          } else {
            t2.to(
                client_cursor,
                {
                  opacity: 0,
                  ease: "power4.out",
                },
                "-=0.3"
            );
          }
        });
        return () => tHero.revert();
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
        <div>
          <Head>
            <title>Web 3.0 ChainCraft</title>
            <meta/>
            <meta name="description" content="ChainCraft web agency" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <main>
            <div className="cursor" id="client_cursor">
              Play
            </div>
            <RootLayout header="header3" footer="footer1">
              <DigitalAgencyHero />
              <DigitalAgencyRoll />
              {/*<DigitalAgencyAbout />*/}
              <DigitalAgencyService />
              <DigitalAgencyWorkflow />
              {/*<DigitalAgencyBrand />*/}
              <DigitalAgencyPortfolio
              />
              <Team1/>
              {/*<DigitalAgencyTestimonial*/}
              {/*    setOpenModal={setOpenModal}*/}
              {/*    setOpenModalTwo={setOpenModalTwo}*/}
              {/*    setOpenModalThree={setOpenModalThree}*/}
              {/*/>*/}
              {/*<DigitalAgencyCTA />*/}
            </RootLayout>
          </main>

          {/* Modal 1 */}
            { openModal &&
                <div className={`modal__testimonial ${openModal ? 'modal-show' : ''}`} id="modal_testimonial">
                    <div className="modal__testimonial-content">
          <span className="modal__close" id="modal_close" onClick={() => setOpenModal(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
                      <iframe
                          src="https://www.youtube.com/embed/vZgyWfmw_Kw"
                          title="Testimonial Video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                          allowFullScreen
                      ></iframe>
                    </div>
                  </div>
            }

          {/*/!* Modal 2 *!/*/}
            {openModalTwo &&
                <div className={`modal__testimonial ${openModalTwo ? 'modal-show' : ''}`} id="modal_testimonial">
                    <div className="modal__testimonial-content">
          <span className="modal__close" id="modal_close2" onClick={() => setOpenModalTwo(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
                        <iframe
                            src="https://www.youtube.com/embed/JulIeG1V8T4"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            }

          {/*/!* Modal 3 *!/*/}
            {openModalThree &&
                <div className={`modal__testimonial ${openModalThree ? 'modal-show' : ''}`} id="modal_testimonial">
                    <div className="modal__testimonial-content">
          <span className="modal__close" id="modal_close3" onClick={() => setOpenModalThree(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
                        <iframe
                            src="https://www.youtube.com/embed/7QkL-40FRfE"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            }
        </div>
  );
};


export default DigitalAgency;

