"use client"
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import animationCharCome from "@/lib/utils/animationCharCome";
import RootLayout from "@/components/common/layout/RootLayout";

const PrivacyPolicyDocs = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
        <RootLayout>
      <section className="faq__area-6">
        <div className="container g-0 line pt-130 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  PRIVACY POLICY
                </h2>
                <p className="">
                  Chain  Craft
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__list-6">
                  <h2>Privacy Policy</h2>
                  <p>At ChainCraft, we are committed to protecting and respecting your privacy in compliance with EU-General Data Protection Regulation (GDPR) 2016/679, dated April 27th, 2016.</p>
                  <p>This privacy statement explains when and why we collect personal information, how we use it, the conditions under which we may disclose it to others, and how we keep it
                    secure.</p>
                  <p>This Privacy Statement applies to the use of our products and to our sales, marketing, and customer contract fulfillment activities. It also applies to individuals seeking a job
                    at ChainCraft.</p>

                  <h2>Who Are We?</h2>
                  <p>ChainCraft is a blockchain development team providing a wide range of outsourced blockchain software development services. This includes building blockchain ecosystems, smart
                    contracts, dApps, as well as integrating blockchains and enterprise solutions.</p>
                  <p>Our company’s headquarters is located in Cambrdigeshire, United Kindgdom. The headquarters’ registered office address is 38 Avocet Grove, Soham, Ely, United Kingdom, CB7 5GN.</p>
                  <p>ChainCraft is the data controller and our Data Protection Officer can be contacted by email: <a href="mailto:info@chaincraft.com">info@chaincraft.com</a>.</p>

                  <h2>When Do We Collect and Process Personal Data About You?</h2>
                  <ul>
                    <li>When you interact with us in person, through correspondence, by phone, by social media, or through our websites. This also includes when you interact with us as a
                      representative of a company, such as entering into a contract with us, contacting us for support, or other issues. Note that we do not transfer personal data from social media
                      and process the personal data on any other way outside the social media platform.
                    </li>
                    <li>When we collect personal information from other legitimate sources, such as third-party data aggregators, ChainCraft marketing partners, public sources, or social networks. We
                      only use this data if you have given your consent to them to share your personal data with others.
                    </li>
                    <li>We may collect personal data if it is considered to be of legitimate interest, and if this interest is not overridden by your privacy interests. Before data is collected, we
                      make sure an assessment is made, ensuring that there is an established mutual interest between you and ChainCraft.
                    </li>
                  </ul>

                  <h2>Why Do We Collect and Use Personal Data?</h2>
                  <p>We collect and use personal data mainly to perform direct sales, direct marketing, and customer service. We also collect data about suppliers, partners, and persons seeking a job
                    or working in our company.</p>
                  <p>We may use your information for the following purposes:</p>
                  <ul>
                    <li>Send you marketing communications which you have requested. These may include information about our products and services, events, activities, and promotions of our associated
                      partners’ products and services. This communication is subscription-based and requires your consent.
                    </li>
                    <li>Send you information about the services that you have purchased from us.</li>
                    <li>Perform direct sales activities in cases where legitimate and mutual interest is established.</li>
                    <li>Reply to a “Contact us” or other web forms you have completed on our website. Once a form is filled out and sent, we will track your activities on our website for the purpose
                      of contacting you personally.
                    </li>
                    <li>Follow up on incoming requests (customer support, emails, chats, or phone calls).</li>
                    <li>Perform contractual obligations such as order confirmation, license details, invoice, reminders, and similar. The contract may be entered into digitally for more efficient
                      contract and customer handling, including to meet with legal requirements.
                    </li>
                    <li>Notify you about any disruptions to our services (system messages).</li>
                    <li>Contact you to conduct surveys about your opinion on our products and services.</li>
                    <li>Recruitment and processing job applications.</li>
                  </ul>

                  <h2>Collecting Personal Data Based on Consents</h2>
                  <p>The collection of personal data based on consent from the data subject will be done by using “Consent Forms” that will store documentation related to the consent given by the
                    individual.</p>
                  <p>Individual consents will always be stored and documented in our systems. We may send digital marketing to persons who have consented, such as marketing per email.</p>

                  <h2>Collecting Personal Data Based on Contracts</h2>
                  <p>We use personal information for fulfilling our obligations related to contracts and agreements with customers, partners, and suppliers.</p>

                  <h2>Collecting Personal Data Based on Legitimate Interest</h2>
                  <p>We have the option to utilize personal information if it is deemed to be of valid interest, as long as the privacy concerns of the individuals involved are not deemed more
                    important than this interest. Typically, to establish the legal justification for gathering data, an evaluation is conducted to identify a shared interest between ChainCraft and
                    the individual. This legal justification primarily pertains to our sales and marketing objectives, allowing us to send product and service details to our customers based on
                    legitimate interest. We will consistently notify individuals about their rights regarding privacy and the intended aim of collecting their personal information.</p>

                  <h2>What Type of Personal Data is Collected?</h2>
                  <p>We collect name, phone number, title, and email address, in addition to your company’s name and contact information. If you are a representative for your company, we process your
                    personal contact information with regard to the company. When entering into a contract with us, the signature may be made electronically comprising the processing of your personal
                    data. We may also collect feedback, comments, and questions received from you in service-related communication and activities, such as meetings, phone calls, documents, and emails.
                    From our websites, we may collect IP address and actions taken on the site.</p>
                  <p>If you apply for a job at ChainCraft, we collect the data you provide during the application process.</p>
                  <p>ChainCraft does not collect or process any special categories of personal data, such as public unique identifiers or sensitive personal data.</p>

                  <h2>How Long Do We Keep Your Personal Data?</h2>
                  <p>We keep personal data stored for as long as it remains necessary to fulfill the original purpose for which it was collected. Additionally, we take into account the need to address
                    any inquiries or resolve potential issues, comply with applicable legal requirements, handle legal claims or complaints, and ensure security measures are in place. Consequently, we
                    may retain your personal data for a reasonable duration following your most recent interaction with us. Once the collected personal data is no longer needed, we will securely
                    delete it. In some instances, we may utilize data for statistical analysis, but in those cases, the data will be anonymized to protect individual identities.</p>

                  <h2>Your Rights to Your Personal Data</h2>
                  <p>You have the following rights with respect to your personal data:</p>
                  <ul>
                    <li><strong>The right to access</strong> – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                    <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that
                      we complete the information you believe is incomplete.
                    </li>
                    <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
                    <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                    <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
                    <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you,
                      under certain conditions.
                    </li>
                  </ul>
                  <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us. Any query about your Privacy Rights should be
                    sent to <a href="mailto:info@chaincraft.com">info@chaincraft.com</a>.</p>

                  <h2>What Are Cookies?</h2>
                  <p>A cookie is a small text file that a website stores on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences
                    (such as login, language, font size, and other display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse
                    from one page to another.</p>
                  <p>First-party cookies are cookies set by the website you’re visiting. Only that website can read them. In addition, a website might potentially use external services, which also set
                    their own cookies, known as third-party cookies.</p>
                  <p>Persistent cookies are cookies that are saved on your computer and are not deleted automatically when you quit your browser, unlike a session cookie, which is deleted when you
                    quit your browser.</p>
                  <p>Every time you visit the ChainCraft website, you will be prompted to accept or refuse cookies.</p>
                  <p>Cookies can also be used to establish anonymized statistics about the browsing experience on our site.</p>

                  <h2>The Use of Cookies</h2>
                  <p>We use cookies to collect information as you navigate the company’s websites.</p>
                  <p>Website Navigational Information includes standard information from your web browser, such as browser type and browser language; your Internet Protocol (“IP”) address; and the
                    actions you take on the company’s websites, such as the web pages viewed and the links clicked.</p>
                  <p>This information is used to make websites work more efficiently, as well as to provide business and marketing information to the owners of the site, and to gather such personal
                    data as browser type and operating system, referring page, path through site, domain of ISP, etc. for the purposes of understanding how visitors use a website.</p>
                  <p>Cookies and similar technologies help us tailor our website to your personal needs, as well as to detect and prevent security threats and abuse. If used alone, cookies do not
                    personally identify you.</p>
                  <p>If you want to withdraw your acceptance of cookies on our websites, you can go to your web browser and deactivate it. You can find more information on how to administer cookies in
                    your browser here: <a href="http://www.aboutcookies.org.uk/managing-cookies" target="_blank">http://www.aboutcookies.org.uk/managing-cookies</a>.</p>

                  <h2>Tracking</h2>
                  <p>To offer a better customer experience to the people visiting our website, ChainCraft uses a number of marketing tools. They allow us to analyze aggregated data, such as visitors’
                    scrolling patterns or clicks, in order to determine which pages result in the best actions. However, ChainCraft does not use your personally identifiable information by employing
                    any of these marketing tools. We use Google Analytics as the third-party service provider: <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a>.</p>

                  <h2>Remarketing</h2>
                  <p>ChainCraft uses remarketing tracking cookies and conversion pixels from Google, LinkedIn, and Facebook, in order to present you with special offers for our products or services
                    over the Google Content Network and via social networks. This may result in you seeing an ad for one of our products or services after you have visited our website.</p>
                  <p>Moreover, ChainCraft also creates custom audiences based on emails of subscribers and customers, in order to present special offers for our products and services via social media
                    and the Google Content Network. However, ChainCraft does not use your personally identifiable information by employing any of the remarketing services, other than to present you
                    special offers from us. When using remarketing, some personal data to identify the user, such as name, email, and/or phone number, may be transferred to the provider of the
                    advertising or a social media network (such as Facebook).</p>
                  <p>ChainCraft uses retargeting to both exclude individual persons from retargeting (such as existing users of ChainCraft) and to include individual persons (such as potential new
                    users of ChainCraft). In some instances, we anonymize data between ChainCraft and the aforementioned services with hashing to safeguard your security.</p>

                  <h2>Do We Share Your Data with Anyone?</h2>
                  <p>We do not share, sell, rent, or trade your information with any third parties without your consent, except from what is described below:</p>
                  <h3>Third-party service providers working on our behalf:</h3>
                  <p>We may pass your information on to our distributors, agents, sub-contractors, and other associated organizations with the purpose of them providing services to you on our
                    behalf.</p>
                  <h3>Third-party product providers we work in association with:</h3>
                  <p>We work closely with various third-party product providers to bring you a range of services. In some cases, our third-party product providers will be acting as data processors of
                    your information and, therefore, we advise you to read their Privacy Policy and sign a Data Processing Agreement. These third-party product providers will share your information
                    with us, which we will use in accordance with this Privacy Statement.</p>
                  <p>We use the following third-party service providers:</p>
                  <ul>
                    <li>Zoho CRM</li>
                    <li>Albacross</li>
                    <li>Leadfeeder</li>
                  </ul>

                  <h3>If required by law:</h3>
                  <p>We will disclose your personal information if required by law or if we, as a company, reasonably believe that disclosure is necessary to protect our company’s rights and/or to
                    comply with a judicial proceeding, court order, or legal process. However, we will do what we can to ensure that your privacy rights continue to be protected.</p>

                  <h2>Use of Sub-contractors (Processors and Sub-processors)</h2>
                  <p>We may use sub-contractors to process personal data on our behalf, we are responsible for making sure they commit themselves to adhere to this Privacy Policy and applicable data
                    protection legislation by signing a Data Processing Agreement.</p>
                  <p>If the sub-contractor processes Personal Data outside the EU/EEA area, such processing must be in accordance with the EU Privacy Shield Framework, EU Standard Contractual Clauses
                    for transfer to third countries, or another specifically stated lawful basis for the transfer of personal data to a third country. In some instances, we anonymize data between
                    ChainCraft and the aforementioned services with hashing to safeguard your security.</p>

                  <h2>Changes to This Privacy Statement</h2>
                  <p>ChainCraft reserves the right to amend this Privacy Statement at any time. The applicable version will always be found on our websites.</p>
                  <p>We encourage you to check this Privacy Statement occasionally to ensure that you are happy with any changes. If we make changes that significantly alter our privacy practices, we
                    will notify you by email or post a notice on our websites prior to the change taking effect.</p>

                  <h2>Your Right to Complain with a Supervisory Authority</h2>
                  <p>If you are unhappy with the way in which your personal data has been processed, you may, in the first instance, contact <a
                      href="mailto:info@chaincraft.com">info@chaincraft.com</a>.</p>
                  <p>If you remain dissatisfied, then you have the right to apply directly to your national supervisory authority for a decision. The supervisory authorities can be contacted at:</p>
                  <ul>
                    <li><strong>Norway:</strong> Datatilsynet <a href="https://www.datatilsynet.no" target="_blank">www.datatilsynet.no</a></li>
                    <li><strong>Sweden:</strong> Datainspektionen <a href="https://www.datainspektionen.se" target="_blank">www.datainspektionen.se</a></li>
                    <li><strong>Denmark:</strong> Datatilsynet <a href="https://www.datatilsynet.dk" target="_blank">www.datatilsynet.dk</a></li>
                    <li><strong>Germany:</strong> Each individual German state has a Data Protection Authority which is responsible for the enforcement of data protection laws and competent in respect
                      of data controllers established in the relevant state.
                    </li>
                    <li><strong>Netherlands:</strong> Autoriteit Persoonsgegevens <a href="https://autoriteitpersoonsgegevens.nl" target="_blank">autoriteitpersoonsgegevens.nl</a></li>
                    <li><strong>United Kingdom:</strong> Information Commissioner’s Office (ICO) <a href="https://ico.org.uk" target="_blank">ico.org.uk</a></li>
                    <li><strong>Switzerland:</strong> Federal Data Protection and Information Commissioner (FDPIC) <a href="https://www.edoeb.admin.ch" target="_blank">www.edoeb.admin.ch</a></li>
                    <li><strong>Lithuania:</strong> Valstybinė duomenų apsaugos inspekcija <a href="https://www.ada.lt" target="_blank">www.ada.lt</a></li>
                  </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
        </RootLayout>
    </>
  );
};

export default PrivacyPolicyDocs;
