import Detail3 from "../../../public/assets/imgs/portfolio/case4/5.png";
import Detail6 from "../../../public/assets/imgs/portfolio/case4/macbook.png";
import Phone from "../../../public/assets/imgs/portfolio/case4/ip.png";
import DetailShape from "../../../public/assets/imgs/portfolio/case1/shape.png";
import Image from "next/image";
import {useEffect, useRef} from "react";
import animationCharCome from "../../lib/utils/animationCharCome";
import Link from "next/link";

const PortfolioDetails4 = () => {
  const projectFeatures = [
    {
      title: '+ Custom Design',
      description: 'We created a bespoke layout and visual language that reflects the heritage, class, and sophistication of the Dandimos brand.'
    },
    {
      title: '+ Shopify Hydrogen Integration',
      description: 'Using Shopify Hydrogen and Storefront API, we developed a fully custom storefront that delivers fast performance and seamless integration with Shopify’s backend.'
    },
    {
      title: '+ React.js Frontend',
      description: 'The interface was built with React.js, ensuring a dynamic and responsive experience across all devices.'
    },
    {
      title: '+ Tailwind CSS Styling',
      description: 'Tailwind was used to maintain design consistency, speed up development, and allow for easy scalability of styles.'
    },
    {
      title: '+ Performance & SEO',
      description: 'Optimised with performance and SEO best practices to help Dandimos rank higher and deliver a smooth user experience.'
    },
  ];


  const projectHierarchy = [
    {
      title: 'Custom Design',
      description: 'The project features a refined and elegant design tailored to the Dandimos brand, evoking the timeless style of old money fashion. All visuals were custom-built from scratch to align with the client’s aesthetic vision.'
    },
    {
      title: 'Frontend Development',
      description: 'We used React.js and Shopify Hydrogen to build a modern, headless eCommerce frontend, offering dynamic interaction and seamless performance.'
    },
  ];

  const hierarchyFeatures = [
    {title: '+ Tailored Visual Identity'},
    {title: '+ Mobile-First Responsive Layout'},
    {title: '+ High Performance & Scalability'}
  ];

  const techStack = [
    {title: '+ React.js'},
    {title: '+ Shopify Hydrogen'},
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
                      DANDIMOS CLOTHING BRAND
                    </h2>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                  <div className="portfolio__detail-info">
                    <ul>
                      <li>
                        Website
                        <Link href={'https://dandimos.com/'}  style={{textTransform : "lowercase"}}>
                         www.dandimos.com
                        </Link>
                      </li>

                      <li>
                        Client
                        <span>Dandimos clothing brand</span>
                      </li>
                      <li>
                        End Date
                        <span>
                        15 November 2024
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
                      Building an eCommerce Website for a Luxury Clothing Brand
                    </h2>
                  </div>

                  <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                    <div className="portfolio__detail-text">
                      <div className="portfolio__detail-header-text">
                        Our agency was tasked with developing a custom eCommerce website for Dandimos — a clothing brand inspired by timeless elegance and the old money aesthetic.

                      </div>
                      <div className="portfolio__detail-header-text mt-10">
                        The goal was to combine refined visual identity with modern development tools to create a premium shopping experience. Key project features include:
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
