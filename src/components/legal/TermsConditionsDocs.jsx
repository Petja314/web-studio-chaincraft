"use client"
import { useEffect, useRef } from "react";
import animationCharCome from "../../../src/lib/utils/animationCharCome"
import RootLayout from "../../../src/components/common/layout/RootLayout";

const TermsConditionsDocs = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
    <RootLayout >
      <section className="faq__area-6">
        <div className="container g-0 line pt-130 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  TERMS & CONDITIONS
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

                <p>These Terms and Conditions contained herein on this webpage, shall govern your use of the website at <a href="https://chaincraft.com">chaincraft.com</a> (referred to herein below as the “website”). These Terms apply in full force and effect to your use of this website and by using this website, you expressly accept all terms and conditions contained herein in full. You must not use this website if you have any objection to any of these Terms and Conditions.</p>
                <p>Please read these Terms and Conditions carefully before using this website.</p>

                <h2>Intellectual Property Rights</h2>
                <p>ChainCraft and/or its affiliates or third parties own all rights to the intellectual property and material contained in this website, and all such rights are reserved. You are granted a limited license only, subject to the restrictions provided in these Terms and Conditions, for purposes of viewing the material contained on this website. You must not republish material from this website (including republication on another website), or reproduce or store material from this website in any public or private electronic retrieval system; you must not reproduce, duplicate, copy, sell, re-sell, visit, or otherwise exploit our website or material on our website for a commercial purpose, without our express written consent. Elements of the website are protected by trade dress, trade secret, and other laws and may not be copied or imitated in whole or in part.</p>
                <p>All custom graphics, icons, and other items that appear on the website are trademarks, service marks, or trade dress of ChainCraft, its affiliates, or other entities that have granted ChainCraft the right and license to use such marks and may not be used or interfered with in any manner without the express written consent of ChainCraft.</p>
                <p>While ChainCraft maintains copyright protection in all publications it places on the Internet, ChainCraft consents to normal downloading, copying, and distribution of the information for non-commercial purposes within the user’s organization only. In consideration of this, users agree that copies of the information will retain all copyright and other proprietary notices.</p>

                <h2>Restrictions</h2>
                <p>You are specifically restricted from using this website in any way that is or may be damaging to this website, using this website contrary to applicable laws and regulations, or in any way that may cause harm to the website, or to any person or business entity.</p>

                <h2>Application Programming</h2>
                <p>For each application programming project, we establish an agreement. If no agreement was formulated and/or no Terms of Use were specified, the following delivery policy will apply:</p>
                <p>If the project is not completed in accordance with the contract and delivery policy, ChainCraft will provide the client with a partial refund. The extent or percentage of the work completed will be evaluated and calculated by ChainCraft, while the remaining portion will be regarded as part of the predetermined scope.</p>

                <h2>Dedicated Hiring</h2>
                <p>ChainCraft provides a complete refund if there is a delay in initiating a project caused by programmers, staff members, or any other resources. However, if the project has already been worked upon, a refund will not be offered for the days it was in progress. This implies that if the project is canceled at any point, a proportional refund will be provided.</p>
                <p>If the client is dissatisfied with any of our work, we request them to promptly contact the Project Manager to explore the possibility of a partial refund. Such requests and negotiations will not be entertained after the project has been completed.</p>

                <h2>Applicability of the Delivery Policy</h2>
                <p><strong>Timely payments:</strong> Clients are required to make payments as agreed upon. Failure to do so may result in the project being considered null and void.</p>
                <p><strong>Client responsibility:</strong> It is the client’s responsibility to provide ChainCraft with regular and timely information to ensure the successful completion of the project. ChainCraft will not be held responsible for any delays or failures caused by miscommunication or lack of communication on the client’s part.</p>
                <p><strong>Completeness of information:</strong> Providing complete and accurate information and scope at the initial stages of the project is essential. ChainCraft will not be obligated to fulfill any requests if the client fails to provide all the necessary information.</p>
                <p><strong>Compensation for delays:</strong> Unless a penalty clause is included in a special agreement between both parties, ChainCraft will not provide compensation for any delays in project delivery.</p>

                <h2>Governing Law</h2>
                <p>No matter where you’re located, the laws of Ukraine will govern these Terms and the parties’ relationship as if you signed these Terms in Ukraine.</p>
                <p>The parties agree to submit to the courts of Ukraine for exclusive jurisdiction of any dispute arising out of or related to your use of the Services or your breach of these Terms.</p>
                <p>You waive any objection based on lack of personal jurisdiction, place of residence, improper venue, or forum non conveniens in any such action.</p>

                <h2>Business Relationships</h2>
                <p>This website contains links to other websites. ChainCraft is not responsible for the content of such websites.</p>

                <h2>Legal Terms</h2>
                <p>This website may contain other proprietary notices and copyright information, the terms of which must be observed and followed. Information on this website may contain typographical errors or technical inaccuracies. Information may be changed or updated without notice. ChainCraft may also make improvements and/or changes in the products and/or the programs described in this information at any time without notice. ChainCraft does not want to receive confidential or proprietary information from you through our Website.</p>

                <h2>Limitation of Liability</h2>
                <p>ChainCraft’s obligations with respect to its products and services are governed solely by the agreements under which they are provided. If you obtain a product or service from ChainCraft via this website that is provided without an agreement, that product or service is provided “AS-IS” with no warranties whatsoever, express or implied, and your use of that product or service is at your own risk. In addition, a link to a non-ChainCraft website does not mean that ChainCraft endorses or accepts any responsibility for the content, or the use, of such website. It is up to you to take precautions to ensure that whatever you select for your use is free of such items as viruses, worms, Trojan horses and other items of a destructive nature.</p>
                <p><strong>ATTENTION:</strong> IN NO EVENT WILL CHAINCRAFT BE LIABLE TO ANY PARTY FOR ANY DIRECT, INDIRECT, SPECIAL OR OTHER CONSEQUENTIAL DAMAGES FOR ANY USE OF THIS WEBSITE, OR ON ANY OTHER HYPERLINKED WEBSITE, INCLUDING, WITHOUT LIMITATION, ANY LOST PROFITS, BUSINESS INTERRUPTION, LOSS OF PROGRAMS OR OTHER DATA ON YOUR INFORMATION HANDLING SYSTEM OR OTHERWISE, EVEN IF WE ARE EXPRESSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

                <h2>Indemnification</h2>
                <p>You hereby indemnify to the fullest extent ChainCraft from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms and Conditions.</p>

                <h2>Modifications</h2>
                <p>ChainCraft may revise and update these Terms and Conditions at any time. Your continued usage of the website after any changes to these Terms of Use will mean you accept those changes. Any aspect of the website may be changed, supplemented, deleted, or updated without notice at the sole discretion of ChainCraft.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
    </>
  );
};

export default TermsConditionsDocs;
