import styles from "./Css/Template32.module.css";
import { useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template32 = ({ serviceResponse, slug }) => {
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

          <div className={`${styles.dbfghsdf} position-relative col-lg-6`}>
            {serviceResponse.data?.banner_image && (
              <img
                src={`${serviceResponse.image_url}/Template_32/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}

            {slug === 'sales-copywriting-services' && (
              <div className={styles.ones}>
                <img src="./images/Sales_Copywriting_Service_banner_4.png" className={styles.on1} alt="" />
                <img src="./images/Sales_Copywriting_Service_banner_2.png" className={styles.on2} alt="" />
                <img src="./images/Sales_Copywriting_Service_banner_3.png" className={styles.on3} alt="" />
                <img src="./images/Sales_Copywriting_Service_banner_1.png" className={styles.on4} alt="" />
              </div>
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
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.second_section_description &&
                    serviceResponse.data.second_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.dfbjhfdfgdf}>
          <div className="custom-container">
            <div className={styles.vgbfdf}>
              <div className="row">
                <div className="col-lg-5">
                  <div className={` ${styles.dgndfgdfgdf} position-relative`}>
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Template_32/${serviceResponse.data.third_section_image}`}
                        alt="" style={{width: "100%"}}
                      />
                    )}

                    {slug === 'sales-copywriting-services' && (
                      <div className={styles.sales_page}>
                        <img src="./images/sales_copy_thirdImg_1.png" className={styles.picture1} alt=""/>

                        <img src="./images/sales_copy_thirdImg_2.png" className={styles.picture2} alt=""/>

                        <img src="./images/sales_copy_thirdImg_3.png" className={styles.picture3} alt=""/>

                        <img src="./images/sales_copy_thirdImg_4.png" className={styles.picture4} alt=""/>

                        <img src="./images/sales_copy_thirdImg_5.png" className={styles.picture5} alt=""/>

                        <img src="./images/sales_copy_thirdImg_6.png" className={styles.picture6} alt=""/>
                      </div>
                    )}
                  </div>
                </div>
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
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fhfgjhsdfgsdfg}>
          <div className="custom-container">
            <div className={styles.bhffsdf}>
              <div className="row">
                <div className="col-lg-12">
                  <div className={styles.dfbgjhdfg}>
                    <div className={`${styles.fgdf} d-flex`}>
                      <div className={styles.fgdfjg}></div>
                      <div className={styles.fgdfjg2}></div>
                    </div>
                    <div className={styles.fhgdfg}>
                      <h2>
                        {serviceResponse.data?.fourth_section_title &&
                          serviceResponse.data.fourth_section_title}
                      </h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            serviceResponse.data?.fourth_section_description &&
                            serviceResponse.data.fourth_section_description,
                        }}
                      />
                      <div className={styles.dsfbsdf}>
                        <button className="btn125">Call Anytime</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className={styles.dfngjhdfgdf}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className={styles.fbgfjhg}>
                          <div className={styles.nbgdfgdf}>
                            <h2>
                              {serviceResponse.data?.fifth_section_title &&
                                serviceResponse.data.fifth_section_title}
                            </h2>
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  serviceResponse.data
                                    ?.fifth_section_description &&
                                  serviceResponse.data
                                    .fifth_section_description,
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className={` ${styles.mnbfd55} position-relative`} style={{width: "100%"}}>
                          {serviceResponse.data?.fifth_section_image && (
                            <img
                              src={`${serviceResponse.image_url}/Template_32/${serviceResponse.data.fifth_section_image}`}
                              alt=""
                            />
                          )}
                          {slug === 'sales-copywriting-services' && (
                              <div className={styles.sales_copy}>
                                <img src="./images/sales_copy_writing_last_1.png" className={styles.sales1} data-aos="flip-left" alt=""/> 
                                <img src="./images/sales_copy_writing_last_2.png" className={styles.sales2} alt=""/>
                                <img src="./images/sales_copy_writing_last_3.png" className={styles.sales3} alt=""/>
                                <img src="./images/sales_copy_writing_last_4.png" className={styles.sales4} data-aos="flip-right" alt=""/>
                                <img src="./images/sales_copy_writing_last_5.png" className={styles.sales5} alt=""/>
                              </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ServiceEnquiryForm loading={setLoading} slug={slug} />

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>
                {serviceResponse.data?.sixth_section_title &&
                  serviceResponse.data.sixth_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.sixth_section_description &&
                    serviceResponse.data.sixth_section_description,
                }}
              />
            </div>
          </div>
        </div>
        <LastSectionComponent />
      </main>
      </PageWrapper>
    </div>
  );
};
