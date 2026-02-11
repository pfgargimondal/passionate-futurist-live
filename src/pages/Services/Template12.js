import styles from "./Css/Template12.module.css";
import { useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template12 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <PageWrapper slug={slug} type="Template">
      {loading && <Loader />}
      <main>
        <div className={styles.dfgjhfgd}>
          <div className={`${styles.sdfghdfgdf} col-lg-6`}>
            <h1 className="mt-0 mb-0">
              {serviceResponse.data?.banner_title &&
                serviceResponse.data.banner_title}
            </h1>

            <p className="mt-3 mb-5">
              {serviceResponse.data?.banner_description &&
                serviceResponse.data.banner_description}
            </p>

            <div className={styles.vbddds}>
              <Link to="/contact-us" className="btn125">
                Contact Us
              </Link>
              <button className="btn126">
                  <a href="tel:8420202891" style={{ color: "inherit", textDecoration: "none" }}>
                  Get In Touch With Us
                  </a>
              </button>
            </div>
          </div>

          <div className={`${styles.dbfghsdf} col-lg-6 position-relative`}>
            {serviceResponse.data?.banner_image && (
              <img
                src={`${serviceResponse.image_url}/Template_12/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}

            {slug === 'pay-per-click-management-services' && (
              <>
                  <div className={styles.RIMMG1}>
                    <img src="./images/PAY_RIIMG2.png" className={styles.RIIMMG1} alt="" />
                  </div>
                  <div className={styles.RIMMG2}>
                    <img src="./images/PAY_RIIMG3.png" className={styles.RIIMMG2} alt="" />
                  </div>
                  <div className={styles.RIMMG3}>
                    <img src="./images/PAY_RIIMG4.png" className={styles.RIIMMG3} alt="" />
                  </div>
                  <div className={styles.RIMMG4}>
                    <img src="./images/PAY_RIIMG5.png" className={styles.RIIMMG4} alt="" />
                  </div>
              </>
            )}
          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>
                {serviceResponse.data?.second_section_title &&
                  serviceResponse.data.second_section_title}
              </h2>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.second_section_description &&
                    serviceResponse.data.second_section_description,
                }}
              />
            </div>
          </div>
        </div>
        <ServiceEnquiryForm loading={setLoading} slug={slug} />

        <div className={styles.dfbjhfdfgdf}>
          <div className="custom-container10">
            <div className={styles.vgbfdf}>
              <div className="row">
                <div className="col-lg-7">
                  <div className={styles.fbgdfgdfgdf}>
                    <h2>
                      {serviceResponse.data?.third_section_title &&
                        serviceResponse.data.third_section_title}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data?.third_section_description &&
                          serviceResponse.data.third_section_description,
                      }}
                    />
                    <Link to="/business-register"><button>  Get started</button></Link> 
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className={` ${styles.dgndfgdfgdf} position-relative`}>
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Template_12/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}

                     {slug === 'pay-per-click-management-services' && (
                        <div className={styles.click_page}>
                          <img src="./images/click_img1.png" className={styles.picture1} alt=""/>

                          <img src="./images/click_img2.png" className={styles.picture2} alt=""/>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>
                {serviceResponse.data?.fourth_section_title &&
                  serviceResponse.data.fourth_section_title}
              </h2>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.fourth_section_description &&
                    serviceResponse.data.fourth_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.vhfdhhgfdfdg}>
          <div className="custom-container">
            <div className={styles.sdnuidsds}>
              <div className="row">
                <div className="col-lg-4">
                  <div className={styles.njvfdgfd}>
                    <div className={styles.bhyudfdg}>
                      {serviceResponse.data?.fourth_section_image_one && (
                        <img
                          src={`${serviceResponse.image_url}/Template_12/${serviceResponse.data.fourth_section_image_one}`}
                          alt=""
                        />
                      )}
                    </div>

                    <div className={styles.fnhjifdfdg}>
                      <h6>
                        {serviceResponse.data?.fourth_section_title_one &&
                          serviceResponse.data.fourth_section_title_one}
                      </h6>

                      <p>
                        {serviceResponse.data?.fourth_section_description_one &&
                          serviceResponse.data.fourth_section_description_one}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className={styles.njvfdgfd}>
                    <div className={styles.bhyudfdg}>
                      {serviceResponse.data?.fourth_section_image_two && (
                        <img
                          src={`${serviceResponse.image_url}/Template_12/${serviceResponse.data.fourth_section_image_two}`}
                          alt=""
                        />
                      )}
                    </div>

                    <div className={styles.fnhjifdfdg}>
                      <h6>
                        {serviceResponse.data?.fourth_section_title_two &&
                          serviceResponse.data.fourth_section_title_two}
                      </h6>

                      <p>
                        {serviceResponse.data?.fourth_section_description_two &&
                          serviceResponse.data.fourth_section_description_two}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className={styles.njvfdgfd}>
                    <div className={styles.bhyudfdg}>
                      {serviceResponse.data?.fourth_section_image_three && (
                        <img
                          src={`${serviceResponse.image_url}/Template_12/${serviceResponse.data.fourth_section_image_three}`}
                          alt=""
                        />
                      )}
                    </div>

                    <div className={styles.fnhjifdfdg}>
                      <h6>
                        {serviceResponse.data?.fourth_section_title_three &&
                          serviceResponse.data.fourth_section_title_three}
                      </h6>

                      <p>
                        {serviceResponse.data
                          ?.fourth_section_description_three &&
                          serviceResponse.data.fourth_section_description_three}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>
                {serviceResponse.data?.fifth_section_title &&
                  serviceResponse.data.fifth_section_title}
              </h2>

              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.fifth_section_description &&
                    serviceResponse.data.fifth_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.dfbjhfdfgdf}>
          <div className="custom-container10">
            <div className={styles.vgbfdf}>
              <div className="row">
                <div className="col-lg-5">
                  <div className={`${styles.dgndfgdfgdf} position-relative`}>
                    {serviceResponse.data?.section_six_image && (
                      <img
                        src={`${serviceResponse.image_url}/Template_12/${serviceResponse.data.section_six_image}`}
                        alt=""
                      />
                    )}

                    {slug === 'pay-per-click-management-services' && (
                      <div className={styles.pay_page}>
                        <img src="./images/pay_img1.png" className={styles.image1} alt=""/>

                        <img src="./images/pay_img2.png" className={styles.image2} alt=""/>

                        <img src="./images/pay_img3.png" className={styles.image3} alt=""/>

                        <img src="./images/pay_img4.png" className={styles.image4} alt=""/>

                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className={styles.fbgdfgdfgdf}>
                    <h2>
                      {serviceResponse.data?.section_six_title &&
                        serviceResponse.data.section_six_title}
                    </h2>

                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data?.section_six_description &&
                          serviceResponse.data.section_six_description,
                      }}
                    />
                    <Link to="/business-register"><button>  Get started</button></Link> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LastSectionComponent />
      </main>
      </PageWrapper>
    </div>
  );
};
