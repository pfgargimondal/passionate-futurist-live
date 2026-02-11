import styles from "./Css/Template10.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Template10 = ({ serviceResponse, slug }) => {
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
              <Link to="/contact-us" className={styles.btn125}>
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
                src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}

            {slug === 'professional-lead-generation-service' && (
              <div className={styles.plgspics}>
                <img src="/images/plgsmarket.png" className={styles.plgspic1} alt=""/>

                <img src="/images/plgscrm.png" className={styles.plgspic2} alt=""/>

                <img src="/images/plgsanalytics.png" className={styles.plgspic3} alt=""/>
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
        <div className="duiewmjroiweorrr my-5">
          <div className="custom-container">
            <div className={`row ${styles.ndjiwenkndfuiwehrwer}`}>
              <div className="col-lg-4">
                <div className={`${styles.dlkeomwlkmroewr_inner} position-relative `} style={{marginTop: "26%"}}>
                  {serviceResponse.data?.third_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.third_section_image}`}
                      alt=""
                      className="img-fluid" style={{height: "25rem"}}
                    />
                  )}

                  {slug === 'professional-lead-generation-service' && (
                    <div className={styles.plgsimgs}>
                      <img src="/images/plgstarget.png" className={styles.plgsimg1} alt=""/>

                      <img src="/images/plgsleadgen.png" className={styles.plgsimg2} alt=""/>

                      <img src="/images/plgsprospect.png" className={styles.plgsimg3} alt=""/>

                      <img src="/images/plgsconversion.png" className={styles.plgsimg4} alt=""/>
                    </div>
                  )}
                </div>
              </div>

              <div className={`${styles.vbddds} col-lg-8 mb-4`}>
                <div className={`${styles.dienwm_iuemrer} position-relative`}>
                  <h2 className="my-4">
                    {serviceResponse.data?.third_section_title &&
                      serviceResponse.data.third_section_title}
                  </h2>
                  <div
                    className={`${styles.vbddds} pt-4`}
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.third_section_description &&
                        serviceResponse.data.third_section_description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={` ${styles.xnjhxffgdf} position-relative`}>
          {serviceResponse.data?.mid_section_image && (
            <img
              src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.mid_section_image}`}
              alt=""
            />
          )}
          {slug === 'professional-lead-generation-service' && (
            <div className={styles.lead_page}>
              <img src="./images/lead_rocket.png" className={styles.lead_rocket_main} data-aos="fade-up" alt=""/>

              <img src="./images/lead_pic_1.png" className={styles.lead_pic1} data-aos="fade-up-right" alt=""/>

              <img src="./images/lead_pic_2.png" className={styles.lead_pic2} data-aos="fade-up-right" alt=""/>

              <img src="./images/lead_pic_3.png" className={styles.lead_pic3}  data-aos="fade-up-left" alt=""/>

              <img src="./images/lead_pic_4.png" className={styles.lead_pic4} data-aos="fade-up-left" alt=""/>

              <img src="./images/lead_pic_5.png" className={styles.lead_pic5} data-aos="fade-up-left" alt=""/>
           </div>
          )}

        </div>

        <div className={`${styles.duiewmjroiweorrr} mb-5 pt-5`}>
          <div className="custom-container">
            <div className={`${styles.dienwm_iuemrer} position-relative`}>
              <h2 className="my-4">
                {serviceResponse.data?.fourth_section_title &&
                  serviceResponse.data.fourth_section_title}
              </h2>

              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.fourth_section_description_one &&
                    serviceResponse.data.fourth_section_description_one,
                }}
              />
              <ul className="mb-0 ps-0">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      serviceResponse.data?.fourth_section_description_two &&
                      serviceResponse.data.fourth_section_description_two,
                  }}
                />
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`${styles.dfbjhfdfgdf} py-5`}
          style={{
            backgroundImage: "url(./images/d.png)",
          }}
        >
          <div className="custom-container">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className={`${styles.vgbfdf} bg-white`}>
                  <div className={styles.fbgdfgdfgdf}>
                    <h4>
                      {serviceResponse.data?.fifth_section_title_one &&
                        serviceResponse.data.fifth_section_title_one}
                    </h4>

                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data?.fifth_section_description_one &&
                          serviceResponse.data.fifth_section_description_one,
                      }}
                    />

                     <Link to="/business-register"><button>  Get started</button></Link> 
                  </div>

                  <div className={`${styles.dgndfgdfgdf} mt-3 position-relative`}>
                    {serviceResponse.data?.fifth_section_image_one && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.fifth_section_image_one}`}
                        alt=""
                      />
                    )}

                    {slug === 'professional-lead-generation-service' && (
                      <>
                        <div className={styles.IIRMG1} >
                          <img src="./images/IIRMG1.png" className={styles.IIRRMG1} data-aos="zoom-in-down" alt="" />
                        </div>
                        <div className={styles.IIRMG2} >
                          <img src="./images/IIRMG2.png" className={styles.IIRRMG2} data-aos="fade-down-right" alt="" />
                        </div>
                        <div className={styles.IIRMG3} >
                          <img src="./images/IIRMG3.png" className={styles.IIRRMG3} data-aos="fade-down-left" alt="" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className={`${styles.vgbfdf} bg-white`}>
                  <div className={styles.fbgdfgdfgdf}>
                    <h4>
                      {serviceResponse.data?.fifth_section_title_two &&
                        serviceResponse.data.fifth_section_title_two}
                    </h4>

                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data?.fifth_section_description_two &&
                          serviceResponse.data.fifth_section_description_two,
                      }}
                    />
                    <Link to="/business-register"><button>  Get started</button></Link> 
                  </div>

                  <div className={`${styles.dgndfgdfgdf} mt-3 position-relative overflow-hidden`}>
                    {serviceResponse.data?.fifth_section_image_two && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.fifth_section_image_two}`}
                        alt=""
                      />
                    )}

                    {slug === 'professional-lead-generation-service' && (
                      <>
                      <div className={styles.titli01}>
                        <img src="./images/professional5.png" className={styles.titli1} alt=""/>
                      </div>
                      <div className={styles.titli02}>
                        <img src="./images/professional4.png" className={styles.titli2} alt=""/>
                      </div>
                      <div className={styles.titli03}>
                        <img src="./images/professional3.png" className={styles.titli3} alt=""/>
                      </div>
                      <div className={styles.titli04}>
                        <img src="./images/professional2.png" className={styles.titli4} alt=""/>
                      </div>
                      <div className={styles.titli05}>
                        <img src="./images/professional6.png" className={styles.titli5} alt=""/>
                      </div>
                      </>
                    )}

                  </div>
                </div>
              </div>

              <div className="col-lg-12 mb-4">
                <div className={`${styles.vgbfdf} bg-white`}>
                  <div className="row">
                    <div className="col-lg-7">
                      <div className={styles.fbgdfgdfgdf}>
                        <h4>
                          {serviceResponse.data?.sixth_section_title &&
                            serviceResponse.data.sixth_section_title}
                        </h4>

                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data?.sixth_section_description &&
                              serviceResponse.data.sixth_section_description,
                          }}
                        />
                        <Link to="/business-register"><button>  Get started</button></Link> 
                      </div>
                    </div>

                    <div className="col-lg-5">
                      <div className={`${styles.dgndfgdfgdf} position-relative `}>
                        {serviceResponse.data?.sixth_section_image && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.sixth_section_image}`}
                            alt=""
                          />
                        )}

                        {slug === 'professional-lead-generation-service' && (
                          <div className={styles.lead_page}>
                            <img src="./images/lead1.png" className={styles.lead_img1} data-aos="fade-down-right" alt=""/>

                            <img src="./images/lead2.png" className={styles.lead_img2} data-aos="fade-down-left" alt=""/>

                            <img src="./images/lead3.png" className={styles.lead_img3} data-aos="zoom-in-up" alt=""/>

                            <img src="./images/lead4.png" className={styles.lead_img4} data-aos="fade-down-right" alt=""/>

                            <img src="./images/lead5.png" className={styles.lead_img5} data-aos="fade-down-left" alt=""/>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className={`${styles.vgbfdf} bg-white`}>
                  <div className={styles.fbgdfgdfgdf}>
                    <h4>
                      {serviceResponse.data?.seventh_section_title_one &&
                        serviceResponse.data.seventh_section_title_one}
                    </h4>

                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data
                            ?.seventh_section_description_one &&
                          serviceResponse.data.seventh_section_description_one,
                      }}
                    />
                    <Link to="/business-register"><button>  Get started</button></Link> 
                  </div>

                  <div className={`${styles.dgndfgdfgdf} mt-3 position-relative overflow-hidden`}>
                    {serviceResponse.data?.seventh_section_image_one && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.seventh_section_image_one}`}
                        alt=""
                      />
                    )}

                    {slug === 'professional-lead-generation-service' && (
                      <div className={styles.professional}>
                        <img src="./images/ps1.png" className={styles.pf1} alt="" />
                        <img src="./images/ps2.png" className={styles.pf2} alt="" />
                      </div>
                    )}

                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className={`${styles.vgbfdf} bg-white`}>
                  <div className={styles.fbgdfgdfgdf}>
                    <h4>
                      {serviceResponse.data?.seventh_section_title_two &&
                        serviceResponse.data.seventh_section_title_two}
                    </h4>

                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data
                            ?.seventh_section_description_two &&
                          serviceResponse.data.seventh_section_description_two,
                      }}
                    />
                     <Link to="/business-register"><button>  Get started</button></Link> 
                  </div>

                  <div className={`${styles.dgndfgdfgdf} mt-3 position-relative overflow-hidden`}>
                    {serviceResponse.data?.seventh_section_image_two && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.seventh_section_image_two}`}
                        alt=""
                      />
                    )}

                    {slug === 'professional-lead-generation-service' && (
                      <>
                      <div className={styles.RRimmg1} >
                        <img src="./images/RRimmg_seventhSection2.png" className= {styles.RRImmg1} data-aos="fade-up-left"  alt="" />
                      </div>
                      <div className={styles.RRimmg2} >
                        <img src="./images/RRimmg_seventhSection3.png" className= {styles.RRImmg2} data-aos="fade-down-left" alt="" />
                      </div>
                      <div className={styles.RRimmg3} >
                        <img src="./images/RRimmg_seventhSection4.png" className= {styles.RRImmg3} data-aos="zoom-in-right" alt="" />
                      </div>
                      </>
                    )}
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
