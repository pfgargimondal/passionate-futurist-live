import styles from "./Css/Template36.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template36 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animations only happen once
    });
  }, []);

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

              <div
                className="mt-3 mb-5"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.banner_description &&
                    serviceResponse.data.banner_description,
                }}
              />

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

            <div className={`${styles.dbfghsdf} col-lg-6`}>
              {serviceResponse.data?.banner_image && (
                <img
                  src={`${serviceResponse.image_url}/Template_36/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}
              {slug === "local-seo-service" && (
                <>
                  <div className={styles.bgjhdf5f5}>
                    <div className={styles.image558c}>
                      <img
                        src="./images/Rank Higher in Local Searches pointer.png"
                        alt="Blinking Imagess"
                        className={styles.blinkimage}
                      />
                    </div>
                  </div>

                  <div className={styles.bgjhdf5f5545}>
                    <div className={styles.image558c}>
                      <img
                        src="./images/Rank Higher in Local Searches pointer.png"
                        alt="Blinking Images"
                        className={styles.blinkimage}
                      />
                    </div>
                  </div>

                  <div className={styles.bgjhdf5f5545aaa}>
                    <div className={styles.boxpath}>
                      <img
                        src="./images/bv.png"
                        alt="Magnifying Glass"
                        className={styles.movingimg}
                      />
                    </div>
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
            <div className="custom-container">
              <div className={styles.vgbfdf}>
                <div className="row">
                  <div className="col-lg-5">
                    {slug === "local-seo-service" && (
                      <>
                        <div className={styles.animationContainer}>
                          <div className={styles.staticText}>
                            <span className={styles.highlightRed}>What</span>
                          </div>
                          <div className={styles.revealContainer}>
                            <span className={styles.animatedText}>
                              Sets Our <br />
                              <span className={styles.highlightBlue}>
                                Agency Apart
                              </span>
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                    <div
                      className={styles.dgndfgdfgdf}
                      style={{ marginTop: "10px" }}
                    >
                      {serviceResponse.data?.third_section_image && (
                        <img
                          src={`${serviceResponse.image_url}/Template_36/${serviceResponse.data.third_section_image}`}
                          alt=""
                          style={{ width: '100%' }}
                        />
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

          <div className={styles.fjhfdfgdfg}>
            <div className="custom-container">
              <div className={styles.sdfsdfsdf}>
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
              </div>
            </div>
          </div>

          <div
            className={styles.vnhdfiuvhfdbfd}
            style={{ backgroundImage: "url(./images/d.png)" }}
          >
            <div className="custom-container">
              <div className={styles.fkuyfdfrdgf}>
                <h2>
                  {serviceResponse.data?.fifth_section_title &&
                    serviceResponse.data.fifth_section_title}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      serviceResponse.data?.fifth_section_description &&
                      serviceResponse.data.fifth_section_description,
                  }}
                />
              </div>

              <div className={styles.fvbnjfdvfdgfd}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className={styles.fhvgfdfd}>
                      <div className="row">
                        <div className="col-lg-2">
                          <div className={styles.ujhfgfg}>
                            {serviceResponse.data?.fifth_section_image_one && (
                              <img
                                src={`${serviceResponse.image_url}/Template_36/${serviceResponse.data.fifth_section_image_one}`}
                                alt=""
                              />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className={styles.fdbvhjfyfdg}>
                            <h6>
                              {serviceResponse.data?.fifth_section_title_one &&
                                serviceResponse.data.fifth_section_title_one}
                            </h6>
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  serviceResponse.data
                                    ?.fifth_section_description_one &&
                                  serviceResponse.data
                                    .fifth_section_description_one,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className={styles.fhvgfdfd}>
                      <div className="row">
                        <div className="col-lg-2">
                          <div className={styles.ujhfgfg}>
                            {serviceResponse.data?.fifth_section_image_two && (
                              <img
                                src={`${serviceResponse.image_url}/Template_36/${serviceResponse.data.fifth_section_image_two}`}
                                alt=""
                              />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className={styles.fdbvhjfyfdg}>
                            <h6>
                              {serviceResponse.data?.fifth_section_title_two &&
                                serviceResponse.data.fifth_section_title_two}
                            </h6>
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  serviceResponse.data
                                    ?.fifth_section_description_two &&
                                  serviceResponse.data
                                    .fifth_section_description_two,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.vhfdhhgfdfdg}>
            <div className="custom-container">
              <div className={styles.hdbchbd55}>
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className={styles.gbgfhgf}
                      style={{ marginTop: "84px" }}
                    >
                      {serviceResponse.data?.sixth_section_image && (
                        <img
                          src={`${serviceResponse.image_url}/Template_36/${serviceResponse.data.sixth_section_image}`}
                          alt=""
                          data-aos="flip-up"
                        />
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className={styles.sdfdsffd}>
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
              </div>
            </div>
          </div>
          <LastSectionComponent />
        </main>
      </PageWrapper>
    </div>
  );
};
