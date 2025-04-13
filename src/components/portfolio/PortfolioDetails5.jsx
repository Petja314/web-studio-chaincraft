import Detail3 from "../../../public/assets/imgs/portfolio/case5/prev.png";
import Detail6 from "../../../public/assets/imgs/portfolio/case5/macbook.png";
import Phone from "../../../public/assets/imgs/portfolio/case5/phone.png";
import DetailShape from "../../../public/assets/imgs/portfolio/case1/shape.png";
import Image from "next/image";
import {useEffect, useRef} from "react";
import animationCharCome from "../../lib/utils/animationCharCome";
import Link from "next/link";

const PortfolioDetails4 = () => {
  const projectFeatures = [
    {
      title: '+ Heritage-Inspired Design',
      description: 'We crafted a warm, elegant design that captures the charm of Emma Bridgewater’s handmade pottery and timeless British character.'
    },
    {
      title: '+ Enterprise-Level Shopify Integration',
      description: 'Leveraged Shopify Plus to power a high-volume, content-rich storefront capable of handling seasonal campaigns, product launches, and personalized shopping flows.'
    },
    {
      title: '+ Seamless React Experience',
      description: 'Built with React.js to deliver smooth navigation, real-time interaction, and a responsive shopping experience tailored to modern customer expectations.'
    },
    {
      title: '+ Utility-First Styling with Tailwind',
      description: 'Used Tailwind CSS for flexible and maintainable UI development that stays true to the brand’s soft, handcrafted aesthetic.'
    },
    {
      title: '+ Personalized & Optimized Shopping',
      description: 'Integrated product customization, performance enhancements, and SEO best practices to elevate both discoverability and customer satisfaction.'
    }
  ];


  const projectHierarchy = [
    {
      title: 'Heritage-Driven Design',
      description: 'We developed a custom design that embodies Emma Bridgewater’s artisanal spirit, drawing inspiration from their iconic hand-painted pottery and warm British heritage. Every visual element was crafted to feel inviting, personal, and true to the brand’s legacy.'
    },
    {
      title: 'E-Commerce Architecture',
      description: 'The frontend was engineered using React.js and Shopify Plus, delivering a smooth, scalable, and content-rich shopping experience for customers worldwide, while supporting personalization and promotional flexibility.'
    },
  ];

  const hierarchyFeatures = [
    {title: '+ Brand-Authentic Aesthetics'},
    {title: '+ Mobile-Optimized Experience'},
    {title: '+ Personalized Product Options'}
  ];

  const techStack = [
    {title: '+ React.js'},
    {title: '+ Shopify Plus'},
    {title: '+ Tailwind CSS'},
    {title: '+ Storefront API'}
  ];

  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);


  return (
      <>
        <section className="portfolio__detail">
          <div className="portfolio__detail-top">
            <div className="container g-0 line pt-110 pb-130">
              <span className="line-3"></span>

              <div className="row">
                <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-7">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-title animation__char_come" ref={charAnim}>
                      EMMA BRIDGEWATER
                    </h2>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                  <div className="portfolio__detail-info">
                    <ul>
                      <li>
                        Website
                        <Link href={'https://www.emmabridgewater.co.uk/'}  style={{textTransform : "lowercase"}}>
                          www.emmabridgewater.co.uk
                        </Link>
                      </li>

                      <li>
                        Client
                        <span>Emma bridgewater gift shop</span>
                      </li>
                      <li>
                        End Date
                        <span>
                        Still in progress...
                      </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="portfolio__detail-thumb">*/}
          {/*  <Image*/}
          {/*      priority*/}
          {/*      style={{ width: "auto", height: "auto" }}*/}
          {/*      src={Detail3}*/}
          {/*      alt="Portfolio Thumbnail"*/}
          {/*      data-speed="auto"*/}
          {/*  />*/}
          {/*</div>*/}

          <Image
              style={{ width: "100%", height: "auto" }}
              src={Detail3}
              alt="Portfolio Thumbnail"
          />


          <div className="portfolio__detail-content">
            <div className="container g-0 line pt-140">
              <span className="line-3"></span>

              <div className="block-content">
                <div className="row">
                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                    <h2 className="portfolio__detail-title title-anim">
                      Developing a Bespoke E-Commerce Platform for Emma Bridgewater
                    </h2>
                  </div>

                  <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                    <div className="portfolio__detail-text">
                      <div className="portfolio__detail-header-text">
                        Emma Bridgewater, celebrated for its handcrafted pottery and distinctive patterns, partnered with us to enhance their online presence with a custom e-commerce solution.

                      </div>
                      <div className="portfolio__detail-header-text mt-10">
                        Our objective was to encapsulate the brands artisanal heritage while delivering a seamless shopping experience. Key project features include:
                      </div>
                      <ul>
                        {
                          projectFeatures.map((el,index)=> (
                              <li key={index}>
                                {el.title}
                                <p>{el.description}</p>
                              </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/*<div className="block-thumb">*/}
              {/*  <Image*/}
              {/*      priority*/}
              {/*      style={{ width: "auto", height: "auto" }}*/}
              {/*      src={Detail6}*/}
              {/*      alt="Portfolio Image"*/}
              {/*      data-speed="0.5"*/}
              {/*  />*/}
              {/*</div>*/}

              <Image
                  // priority
                  style={{ width: "auto", height: "auto" }}
                  src={Detail6}
                  alt="Portfolio Image"
                  // data-speed="0.5"
              />


              <div className="block-content  pt-140">
                <div className="row">
                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                    <h2 className="portfolio__detail-title title-anim">
                      Visual and Code project hierarchy
                    </h2>

                    <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Phone}
                        alt="Portfolio Image"
                    />


                    {/*<p*/}
                    {/*    style={{marginTop : "50px"}}*/}
                    {/*>*/}
                    {/*  Technology Stack and Testing*/}
                    {/*</p>*/}
                    {/*<ul className={"tech-wrapper"} >*/}
                    {/*  {*/}
                    {/*    techStack.map((el,index) => (*/}
                    {/*        <li key={index}>*/}
                    {/*          {el.title}*/}
                    {/*        </li>*/}
                    {/*    ))*/}
                    {/*  }*/}
                    {/*</ul>*/}


                  </div>
                  <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                    <div className="portfolio__detail-text">
                      {projectHierarchy.map((el,index) => (
                          <div key={index}>
                            <span style={{color : "#fff"}}>
                            {el.title}
                            </span>
                            <p
                                style={{marginTop : "10px"}} >
                              {el.description}
                            </p>
                          </div>
                      ))}

                      <div className="fonts">
                        <Image
                            priority
                            style={{ width: "253px", height: "auto" }}
                            src={DetailShape}
                            alt="Font Style"
                        />
                        <ul>
                          {
                            hierarchyFeatures.map((el,index) => (
                                <li style={{display : "flex"}}  key={index}>
                                  {el.title}
                                </li>
                            ))
                          }
                        </ul>
                      </div>
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






export default PortfolioDetails4;
