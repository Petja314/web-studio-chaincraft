import animationCharCome from "../../lib/utils/animationCharCome";
import animationWordCome from "../../lib/utils/animationWordCome";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import TelegramIcon from "../../../public/assets/imgs/logo/telegram-circle-blue-logo.svg";
import WhatsAppIcon from "../../../public/assets/imgs/logo/whatsapp-logo-.svg";
import EmailIcon from "../../../public/assets/imgs/logo/mail.svg";
import emailjs from '@emailjs/browser';

const getInTouch = [
  {icon : TelegramIcon ,    text : "@chaincraft_dev" , href : "https://t.me/chaincraft_dev"},
  {icon : WhatsAppIcon ,    text : "+44 7914640779" , href : "https://wa.me/447914640779" },
  {icon : EmailIcon ,       text : "chainccraft@outlook.com" , href : "mailto:chainccraft@outlook.com" },
]

const Contact1 = () => {
  const charAnim = useRef();
  const wordAnim = useRef();

  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);
  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  {`Let’s get in touch`}
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  We are eagerly looking forward to your call and are prepared to embark on creating something truly unique with you.
                </p>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3
                  className="sub-title-anim-top animation__word_come"
                  ref={wordAnim}
                >
                  {`Don't be afraid!`}
                  <br />
                  Contact us
                </h3>

                <ul>
                  {
                    getInTouch.map((el,index) => (
                        <li key={index}>
                          <a href={el.href}  target="_blank" style={{display : "flex" , alignItems : "center" , marginTop : "20px" , gap : "10px" ,  textDecoration: "none!important"}} >
                            <Image
                                priority
                                width={40}
                                height={40}
                                src={el.icon}
                                alt={"contact icon"}
                            />
                            <div>{el.text}</div>
                          </a>
                        </li>
                    ))
                  }
                </ul>

              </div>
            </div>

            <ContactMe/>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;


const ContactMe = () => {
  const [name, setName] = useState('')
  const [emailText, setEmailText] = useState('')
  const [message, setMessage] = useState('')
  const [warning, setWarning] = useState('')
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
        setWarning('')
    },3000)
  },[warning])

  const sendEmail = (e) => {
    e.preventDefault();
    if(name == ''){
        setWarning('Please write your name!')
        return;
    }
    if(emailText == ''){
      setWarning('Please write your email!')
      return;
    }
    if(message == ''){
      setWarning('Please write your message!')
      return;
    }
    emailjs.sendForm('service_7vp0j0l', 'template_9ft4u0r', form.current, {publicKey: 'xKrkvxfqAEWM5h4dd',})
        .then(
            () => {
              setName('')
              setEmailText('')
              setMessage('')
              setWarning('Your message was sent successfully!')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
        );
  };
  return (
      <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">

      <form ref={form} onSubmit={sendEmail}  className="contact__form">

        <div className="row g-3">
          <div className="col-xxl-6 col-xl-6 col-12">
            <input
                onChange={(event) => (setName(event.currentTarget.value))}
                value={name}
                type="text"
                name="user_name"
                placeholder="Name *"
            />
          </div>
        </div>

        <div className="row g-3">
          <div className="col-xxl-6 col-xl-6 col-12">
            <input
                onChange={(event) => (setEmailText(event.currentTarget.value))}
                value={emailText}
                type="text"
                name="user_email"
                placeholder="Email *"
            />
          </div>
        </div>

        <div className="row g-3">
          <div className="col-12">
        <textarea
            onChange={(event) => (setMessage(event.currentTarget.value))}
            value={message}
            name="message"
            placeholder="Messages *"
        />
          </div>
        </div>




        <div className="row g-3">
          <div className="col-12 ">
              <input  type="submit" value="Send Message"  className={"contact-form-input"}
              />
          </div>
        </div>

        <div className={'warning-text'}>
          {warning}
        </div>


      </form>
      </div>
  )
}
