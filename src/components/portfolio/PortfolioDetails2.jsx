import Detail3 from "../../../public/assets/imgs/portfolio/case2/rogichplatform.png";
import Phone from "../../../public/assets/imgs/portfolio/case2/iphone15rogich.png";
import Detail6 from "../../../public/assets/imgs/portfolio/case2/macbook.png";
import DetailShape from "../../../public/assets/imgs/portfolio/case1/shape.png";
import Image from "next/image";
import {useEffect, useRef} from "react";
import animationCharCome from "../../lib/utils/animationCharCome";
import Link from "next/link";

const PortfolioDetails2 = () => {
  const projectFeatures = [
    {title: '+ Customized Fitness Packages', description: 'The platform offers a variety of packages tailored to individual customer goals, including mass gain, cutting, and powerlifting.'},
    {title: '+ Personal Mentorship', description: 'Customers can access direct communication with the coach for personalized guidance and support throughout their fitness journey.'},
    {title: '+ Instant Delivery of Training and Nutrition Plans', description: 'Upon selecting a program, customers receive a PDF file containing a detailed training regimen and diet plan, ensuring they have all the resources needed for success.'},
  ];


  const projectHierarchy = [
    {
      title: 'Innovative Fitness Solution',
      description: 'This platform streamlines purchasing gym programs while offering valuable mentorship, making it an essential resource for fitness enthusiasts to reach their goals.'
    },    {
      title: 'Tailored Aesthetic Experience',
      description: 'This project showcases a tailored aesthetic experience, intricately designed to resonate with the client’s vision. We crafted bespoke components and styles, ensuring a visually captivating interface that stands out.'
    },
    {
      title: 'Dynamic Interface Architecture',
      description: 'Employing React.js, we constructed a dynamic interface architecture that adapts fluidly to user interactions. Our approach included the development of modular components and rigorous unit testing to uphold exceptional code quality.'
    },
  ];
  const hierarchyFeatures = [
    { title: '+ Customized Fitness Theme' },
    { title: '+ Dynamic Workout Design' },
    { title: '+ Interactive Training Tools' },
    { title: '+ Easy Navigation' }
  ];
  const techStack = [
    {title : "+ React.js"},
    {title : "+ SCSS"},
    {title : "+ Firebase"},
    {title : "+ WalletConnect"},
    {title : "+ Moralis API"},
    {title : "+ Node.js"},
  ]

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
                      Online Platform for Personal Gym Program Sales
                    </h2>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                  <div className="portfolio__detail-info">
                    <ul>
                      <li>
                        Website
                        <Link href={'https://petja314.github.io/gym-rogich-eng/index.html'}  style={{textTransform : "lowercase"}}>
                          www.rogichpower.co.uk
                        </Link>
                      </li>
                      <li>
                        Client
                        <span>Rogich power</span>
                      </li>
                      <li>
                        End Date
                        <span>
                          3 November 2024
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
                      Custom Gym Programs and Mentorship Hub
                    </h2>
                  </div>

                  <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                    <div className="portfolio__detail-text">
                      <div className="portfolio__detail-header-text">
                        Our client tasked us with creating an online platform for a personal gym coach to enhance the value and practicality of fitness programs for customers.
                        <div>
                          In response, we developed a comprehensive and user-friendly solution that meets all their needs.
                        </div>
                      </div>
                      <ul>
                        {
                          projectFeatures.map((el,index)=> (
                              <li key={index}>
                                <span style={{color : "#fff"}}>
                                {el.title}
                                </span>
                                <div>{el.description}</div>
                              </li>
                          ))
                        }
                      </ul>


                    </div>
                  </div>
                </div>
              </div>

              <div className="block-thumb">
                <Image
                    style={{ width: "auto", height: "auto" }}
                    src={Detail6}
                    alt="Portfolio Image"
                />
              </div>

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
                      {/*<p style={{marginTop : "50px"}}>*/}
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
                            <p style={{marginTop : "10px"}} >
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

              {/*<div className="block-gallery">*/}
              {/*  <Image*/}
              {/*      priority*/}
              {/*      style={{ width: "50%", height: "auto" }}*/}
              {/*      src={Detail5}*/}
              {/*      alt="Portfolio Image"*/}
              {/*  />*/}
              {/*  <Image*/}
              {/*      priority*/}
              {/*      style={{ width: "50%", height: "auto" }}*/}
              {/*      src={Detail4}*/}
              {/*      alt="Portfolio Image"*/}
              {/*  />*/}
              {/*</div>*/}


            </div>
          </div>
        </section>
      </>
  );



};






export default PortfolioDetails2;
