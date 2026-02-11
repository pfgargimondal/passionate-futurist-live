import styles from "./Css/Template37.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Template37 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({      
      duration: 2000,
      once: false,
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
                src={`${serviceResponse.image_url}/Templete_37/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}

            {slug === 'professional-seo-company' && (
              <>
                <div className={styles.RIMG11} >
                  <img src="./images/profgessional_seo_vbanner_img_2.png" className={styles.RIMGG1} data-aos="fade-up-left"  alt="" />
                </div>
                <div className={styles.RIMG12} >
                  <img src="./images/profgessional_seo_vbanner_img_3.png" className={styles.RIMGG2} data-aos="fade-up-right" data-aos-delay="50" alt="" />
                </div>
                <div className={styles.RIMG13} >
                  <img src="./images/profgessional_seo_vbanner_img_4.png" className={styles.RIMGG3} data-aos="fade-left" data-aos-delay="150" alt="" />
                </div>
                <div className={styles.RIMG14} >
                  <img src="./images/profgessional_seo_vbanner_img_5.png" className={styles.RIMGG4} data-aos="fade-right" data-aos-delay="250" alt="" />
                </div>
                <div className={styles.RIMG15} >
                  <img src="./images/profgessional_seo_vbanner_img_6.png" className={styles.RIMGG5} data-aos="fade-down-left" data-aos-delay="350" alt="" />
                </div>
                <div className={styles.RIMG16} >
                  <img src="./images/profgessional_seo_vbanner_img_7.png" className={styles.RIMGG6} data-aos="fade-down-right" data-aos-delay="450" alt="" />
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

        <div className={styles.dfbjhfdfgdf}>
          <div className="custom-container">
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
                  <div className={styles.dgndfgdfgdf}>
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_37/${serviceResponse.data.third_section_image}`}
                        alt="" className="img-fluid"
                      />
                    )}

                    {slug === 'professional-seo-company' && (
                    <>
                      <div className={styles.on}>
                        <img src="./images/professional_seo_2ndImg_1.png" className={styles.n1} data-aos="fade-down-right" alt="" />
                        <img src="./images/professional_seo_2ndImg_2.png" className={styles.n2} alt="" />
                        <img src="./images/professional_seo_2ndImg_3.png" className={styles.n3}  data-aos="fade-up-right" alt="" />
                        <img src="./images/professional_seo_2ndImg_4.png" className={styles.n4} data-aos="fade-down-left"alt="" />
                        <img src="./images/professional_seo_2ndImg_5.png" className={styles.n5} alt="" />
                        <img src="./images/professional_seo_2ndImg_6.png" className={styles.n6} data-aos="fade-up-left" alt="" />
                      </div>
                    </>
                  )}
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

        <div className={styles.chsdbsdsd}>
          <div className="custom-container">
            <div className={styles.sdbhusdfdvfd}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={` ${styles.mvicfnvfbc} position-relative`}>
                    {serviceResponse.data?.fifth_section_main_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_37/${serviceResponse.data.fifth_section_main_image}`}
                        alt=""
                      />
                    )}

                    {slug === 'professional-seo-company' && ( 
                      <div className={styles.brochure_page}>
                        <img src="./images/seo1.webp" className={styles.img1} alt=""/> 

                        <img src="./images/seo2.webp" className={styles.img2} alt=""/> 

                        <img src="./images/seo3.webp" className={styles.img3} alt=""/> 

                        <img src="./images/seo4.webp" className={styles.img4} alt=""/> 

                        <img src="./images/seo5.webp" className={styles.img5} alt=""/> 
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.fvbfdhfdvf}>
                    <div className={styles.bhjb}>
                      <div className="row">
                        <div className="col-lg-10">
                          <div className={styles.fhvgfdfd}>
                            <div className="row">
                              <div className="col-lg-2">
                                <div className={styles.ujhfgfg}>
                                  {serviceResponse.data
                                    ?.fifth_section_image_one && (
                                    <img
                                      src={`${serviceResponse.image_url}/Templete_37/${serviceResponse.data.fifth_section_image_one}`}
                                      alt=""
                                    />
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-10">
                                <div className={styles.fdbvhjfyfdg}>
                                  <h6>
                                    {serviceResponse.data
                                      ?.fifth_section_title_one &&
                                      serviceResponse.data
                                        .fifth_section_title_one}
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
                        <div className="col-lg-2"></div>
                      </div>
                    </div>

                    <div className={styles.bhjb}>
                      <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-10">
                          <div className={styles.fhvgfdfd}>
                            <div className="row">
                              <div className="col-lg-2">
                                <div className={styles.ujhfgfg}>
                                  {serviceResponse.data
                                    ?.fifth_section_image_two && (
                                    <img
                                      src={`${serviceResponse.image_url}/Templete_37/${serviceResponse.data.fifth_section_image_two}`}
                                      alt=""
                                    />
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-10">
                                <div className={styles.fdbvhjfyfdg}>
                                  <h6>
                                    {serviceResponse.data
                                      ?.fifth_section_title_two &&
                                      serviceResponse.data
                                        .fifth_section_title_two}
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

                    <div className={styles.bhjb}>
                      <div className="row">
                        <div className="col-lg-10">
                          <div className={styles.fhvgfdfd}>
                            <div className="row">
                              <div className="col-lg-2">
                                <div className={styles.ujhfgfg}>
                                  {serviceResponse.data
                                    ?.fifth_section_image_three && (
                                    <img
                                      src={`${serviceResponse.image_url}/Templete_37/${serviceResponse.data.fifth_section_image_three}`}
                                      alt=""
                                    />
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-10">
                                <div className={styles.fdbvhjfyfdg}>
                                  <h6>
                                    {serviceResponse.data
                                      ?.fifth_section_title_three &&
                                      serviceResponse.data
                                        .fifth_section_title_three}
                                  </h6>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        serviceResponse.data
                                          ?.fifth_section_description_three &&
                                        serviceResponse.data
                                          .fifth_section_description_three,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2"></div>
                      </div>
                    </div>
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
