import Detail3 from "../../../public/assets/imgs/portfolio/case1/1800.png";
import Phone from "../../../public/assets/imgs/portfolio/case1/iphone15pro.png";
import Detail6 from "../../../public/assets/imgs/portfolio/case1/macbook.png";
import DetailShape from "../../../public/assets/imgs/portfolio/case1/shape.png";
import Image from "next/image";
import {useEffect, useRef} from "react";
import animationCharCome from "../../lib/utils/animationCharCome";
import Link from "next/link";

const PortfolioDetails1 = () => {
  const projectFeatures = [
    {title: '+ Inventory Management', description: 'Real-time inventory tracking ensures that product availability is always up-to-date, avoiding over-selling and stockouts.'},
    {
      title: '+ Quick Checkout Process',
      description: 'Designed for convenience, the checkout is streamlined to be fast and straightforward, minimizing steps so customers can complete their purchases effortlessly.'
    },
    {
      title: '+ Favourites and Wishlist',
      description: 'Customers can save items they love to a wishlist, making it easy to revisit and purchase their favorite products at any time.'
    },
    {
      title: '+ Tailored Email Notifications',
      description: 'Automated yet personalized emails keep customers updated on their orders, special discounts, and new product arrivals based on their interests.'
    },
    // {title: '+ WooCommerce Integration', description: 'Built on WooCommerce, the platform provides robust e-commerce functionality, from product listing to order management.'},
    // {title: '+ Stripe Payment System', description: 'Integrated with Stripe for secure and fast payment processing, allowing customers to pay effortlessly with their preferred methods.'},
  ];
  const projectHierarchy = [
    {
      title: 'Elegant Visual Design',
      description: 'With a clean, sophisticated aesthetic, this shop is crafted to appeal to beauty enthusiasts. Every detail, from the product display to the colour palette, is chosen to enhance the allure of nail art and accessories.'
    },
    {
      title: 'Seamless Shopping Journey',
      description: 'Designed for ease and simplicity, the platform allows customers to browse, select, and purchase with minimal effort. The intuitive interface guides them smoothly from product discovery to checkout.'
    },
    {
      title: 'Secure Payment Processing',
      description: 'Integrated with Stripe, the site offers a secure and straightforward payment experience, providing customers with trusted options to complete their purchases confidently.'
    },
    {
      title: 'Automated Order Fulfilment',
      description: 'The admin panel features automated shipping label creation, allowing orders to be dispatched promptly and accurately, ensuring customer satisfaction from start to finish.'
    },
    {
      title: 'Efficient Management System',
      description: 'Built on WooCommerce, the backend handles product inventory, customer data, and transactions with reliability, giving administrators full control over daily operations.'
    },
  ];
  const hierarchyFeatures = [
    {title: '+ Customizable Theme'},
    {title: '+ Responsive Design'},
    {title: '+ Enhanced Interactivity'},
    {title: '+ Accessible Interface'},
  ];
  const techStack = [
    {title : "+ HTML"},
    {title : "+ Javascript"},
    {title : "+ PHP"},
    {title : "+ Woocommerce"},
    {title : "+ Stripe"},
    {title : "+ Wordpress"},
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
                    Product Store for Nail Gel & Accessories
                    {/*Junova <br />*/}
                    {/*Nails Ecommerce shop*/}
                  </h2>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                <div className="portfolio__detail-info">
                  <ul>
                    <li>
                      Website
                      <Link href={'https://junovanails.co.uk/'}  style={{textTransform : "lowercase"}}>
                        www.junovanails.co.uk
                      </Link>
                    </li>
                    <li>
                      Client
                      <span>Junova nails </span>
                    </li>
                    <li>
                      End Date
                      <span>
                        20 May 2024
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
        {/*    // priority*/}
        {/*    style={{ width: "auto", height: "auto" }}*/}
        {/*    src={Detail3}*/}
        {/*    alt="Portfolio Thumbnail"*/}
        {/*    // data-speed="auto"*/}
        {/*  />*/}
        {/*</div>*/}

        <Image
            // priority
            style={{ width: "100%", height: "auto" }}
            src={Detail3}
            alt="Portfolio Thumbnail"
            // data-speed="auto"
        />


        <div className="portfolio__detail-content">
          <div className="container g-0 line pt-140">
            <span className="line-3"></span>

            <div className="block-content">
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 className="portfolio__detail-title title-anim">
                    Project Vision and Core Features
                  </h2>
                </div>

                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                    <div className="portfolio__detail-header-text">
                      Our client entrusted us with creating a comprehensive e-commerce platform specializing in nail gel and accessories.
                      <div style={{marginTop : "10px"}}>
                      The result is a sleek, fully responsive online store that caters to nail art enthusiasts and professionals alike.
                      </div>
                    </div>


                    <ul>
                      {
                        projectFeatures.map((el,index)=> (
                              <li key={index}>
                                {el.title}
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
                // priority
                style={{ width: "auto", height: "auto" }}
                src={Detail6}
                alt="Portfolio Image"
                // data-speed="0.5"
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
            {/*    priority*/}
            {/*    style={{ width: "50%", height: "auto" }}*/}
            {/*    src={Detail5}*/}
            {/*    alt="Portfolio Image"*/}
            {/*  />*/}
            {/*  <Image*/}
            {/*    priority*/}
            {/*    style={{ width: "50%", height: "auto" }}*/}
            {/*    src={Detail4}*/}
            {/*    alt="Portfolio Image"*/}
            {/*  />*/}
            {/*</div>*/}


            <div className="block-img-text">
              {/*<Image*/}
              {/*  priority*/}
              {/*  width={375}*/}
              {/*  style={{ height: "auto" }}*/}
              {/*  src={Detail77}*/}
              {/*  alt="Portfolio Image"*/}
              {/*/>*/}
              {/*<Image*/}
              {/*  priority*/}
              {/*  width={375}*/}
              {/*  style={{ height: "auto" }}*/}
              {/*  src={Detail78}*/}
              {/*  alt="Portfolio Image"*/}
              {/*/>*/}

              {/*<div  className={'tech-box-container'} >*/}
              {/*  <p >*/}
              {/*    Technology Stack and Testing*/}
              {/*  </p>*/}
              {/*  <ul className={"tech-wrapper"} >*/}
              {/*    {*/}
              {/*      techStack.map((el,index) => (*/}
              {/*          <li key={index}>*/}
              {/*            {el.title}*/}
              {/*          </li>*/}
              {/*      ))*/}
              {/*    }*/}
              {/*  </ul>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );



};






export default PortfolioDetails1;
