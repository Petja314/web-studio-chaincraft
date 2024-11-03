import Detail3 from "../../../public/assets/imgs/portfolio/case3/gamerumble.png";
import Detail6 from "../../../public/assets/imgs/portfolio/case3/macbookruble.png";
import Phone from "../../../public/assets/imgs/portfolio/case3/iphone15rumble.png";
import DetailShape from "../../../public/assets/imgs/portfolio/case1/shape.png";
import Image from "next/image";
import {useEffect, useRef} from "react";
import animationCharCome from "../../lib/utils/animationCharCome";
import Link from "next/link";

const PortfolioDetails3 = () => {
  const projectFeatures = [
    {title: '+ Unique Design', description: 'We crafted a bespoke visual style that reflects the essence and concept of RUMBLE KONG.'},
    {title: '+ Responsive Interface', description: 'The landing page is optimised for all devices, ensuring a seamless experience on both desktops and mobiles.'},
    {title: '+ Clear Structure', description: 'Logically organised content that is easy to navigate, helping users quickly find the information they need.'},
    {title: '+ Interactive Elements', description: 'Animations and interactive components are integrated to enhance the user experience.'},
    {title: '+ SEO Optimisation', description: 'Employing advanced SEO practices to improve site visibility in search engines.'},
  ];

  const projectHierarchy = [
    {
      title: 'Unique Design',
      description: 'The project features a distinct design crafted with Bootstrap, tailored to the client’s specific requirements. We customised Bootstrap components and styles to create a unique, visually appealing interface.'
    },
    {
      title: 'Frontend',
      description: 'React.js was used to develop a responsive and customisable user interface.'
    },
  ];

  const hierarchyFeatures = [
    {title: '+ Customisable Theme'},
    {title: '+ Responsive Design'},
    {title: '+ Accessible Interface'}
  ];

  const techStack = [
    {title: '+ React.js'},
    {title: '+ Bootstrap'},
    {title: '+ SCSS'},
    {title: '+ Animation'},
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
                      RUMBLE KONG LEAGUE
                    </h2>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                  <div className="portfolio__detail-info">
                    <ul>
                      <li>
                        Website
                        <Link href={'https://www.rumblekongleague.com/'}  style={{textTransform : "lowercase"}}>
                          www.rumblekongleague.com
                        </Link>
                      </li>

                      <li>
                        Client
                        <span>RUMBLE KONG LEAGUE</span>
                      </li>
                      <li>
                        End Date
                        <span>
                        20 September 2024
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
                      Developing a crypto landing application
                    </h2>
                  </div>

                  <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                    <div className="portfolio__detail-text">
                      <div className="portfolio__detail-header-text">
                        Our client entrusted us with designing and developing a landing page for a crypto project aimed at cryptocurrency enthusiasts and investors. The result is a modern and visually engaging website, perfectly suited to their needs. Key features and project details include:
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






export default PortfolioDetails3;
