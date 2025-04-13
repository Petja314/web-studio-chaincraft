import Testimonial11 from "../../../public/assets/imgs/testimonial/1/one.png";
import Testimonial12 from "../../../public/assets/imgs/testimonial/1/2.png";
import Testimonial13 from "../../../public/assets/imgs/testimonial/1/three.png";
import Image from "next/image";

const DigitalAgencyTestimonial = ({
                                    setOpenModal,
                                    setOpenModalTwo,
                                    setOpenModalThree
}) => {

  return (
    <>
      <section
        className="testimonial__area"
        style={{ position: "relative" }}
      >
        <div className="container g-0 line pt-150 pb-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="testimonial__wrapper">
                <div className="testimonial__item item-1">
                  {/*trigger*/}
                  <div className="button modal-trigger" onClick={() => setOpenModal(true)}>
                    <div className="testimonial__img b-right">
                      <Image
                        priority
                        width={330}
                        style={{ height: "auto" }}
                        src={Testimonial11}
                        alt="Testimonial Image"
                      />
                    </div>

                    <h2 className="testimonial__title">JUNOVA NAILS E-COMMERCE</h2>
                    {/*<h3 className="testimonial__role"></h3>*/}
                  </div>
                </div>
                <div className="sec-title-wrapper text-anim">
                  {/*<h4 className="sec-sub-title">Testimonials</h4>*/}
                  <h5 className="sec-title title-anim">
                    Clients <br />
                    feedback
                  </h5>
                  <p>
                    Our clients love the results — and they let us know with great feedback on our work and support.
                  </p>
                </div>
              </div>

              <div className="testimonial__item item-2">
                <div className="button modal-trigger-2"  onClick={() => setOpenModalTwo(true)}>
                  <div className="testimonial__img b-left">
                    <Image
                      priority
                      width={220}
                      height={300}
                      src={Testimonial13}
                      alt="Testimonial Image"
                    />
                  </div>

                  <h2 className="testimonial__title">GYM PERSONAL TRAINING PROGRAMS</h2>
                  {/*<h3 className="testimonial__role">Manager, Oitaka</h3>*/}
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="testimonial__item item-3 img-">
                <div className="button modal-trigger-3" onClick={() => setOpenModalThree(true)} >
                  <div className="testimonial__img b-left">
                    <Image
                      priority
                      width={260}
                      height={360}
                      src={Testimonial12}
                      alt="Testimonial Image"
                    />
                  </div>

                  <h2 className="testimonial__title">adam Smith</h2>
                  <h3 className="testimonial__role">Manager, Oitaka</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyTestimonial;
