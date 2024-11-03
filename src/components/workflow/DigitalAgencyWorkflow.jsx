import {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "../../plugins";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import {useLocale, useTranslations} from "next-intl";

gsap.registerPlugin(ScrollTrigger);



const DigitalAgencyWorkflow = () => {
    const workProcess = [
        { step : 'Step 01',
            stepNumber : "01" ,
            title : 'Analysis and consulting',
            description : 'We assess your needs and recommend the best solutions.'
        },
        { step : 'Step 02' ,
            stepNumber : "02" ,
            title : 'Project tech specification' ,
            description : 'In a simple Q&A format, we prepare the technical specification'
        },
        { step : 'Step 03' ,
            stepNumber : "03" ,
            title :'Design and prototyping',
            description : 'We create a corporate style, design, and user action logic'
        },
        { step : 'Step 04' ,
            stepNumber : "04" ,
            title : 'Development and testing',
            description : 'We write clean, efficient code to ensure high quality.'
        },
        { step : 'Step 05' ,
            stepNumber : "05" ,
            title : 'Launch and support',
            description : 'We help with product implementation and launch.'
        }
    ]
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".fade_left", { x: -20, opacity: 0 });
        gsap.to(".fade_left", {
          scrollTrigger: {
            trigger: ".fade_left",
            start: "top center+=300",
          },
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
          stagger: {
            each: 0.2,
          },
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="workflow__area">
        <div className="container g-0 line pt-140 pb-100">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim"> Workflow</h2>
                <h3 className="sec-title title-anim">
                    Work format
                </h3>
              </div>
            </div>

            <div className="col-xxl-12 workflow__slider">
                <div className="workflow-wrapper">
                    {
                        workProcess.map((el,index) => (
                          <div className="workflow-items" key={index}>
                              <div className="workflow__slide fade_left">
                                  <h4 className="workflow__step">{el.step}</h4>
                                  <h5 className="workflow__number">{el.stepNumber}</h5>
                                  <h6 className="workflow__title">{el.title}</h6>
                                  <p>
                                      {el.description}
                                  </p>
                              </div>
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

export default DigitalAgencyWorkflow;
