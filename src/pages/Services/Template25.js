import styles from "./Css/Template25.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from "aos";
import "aos/dist/aos.css";

export const Template25 = ({ serviceResponse, slug }) => {
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
                src={`${serviceResponse.image_url}/Templete_25/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )} 
            {slug === 'banner-design-services' && (
                <>
                  <div className={styles.RIIIMMGG1}>
                    <img src="./images/RIIIMMGG2.png" className={styles.RIIIMMG1} data-aos="fade-down-right" alt="" />
                  </div>
                  <div className={styles.RIIIMMGG2}>
                    <img src="./images/RIIIMMGG3.png" className={styles.RIIIMMG2} data-aos="zoom-in-down" alt="" />
                  </div>
                  <div className={styles.RIIIMMGG3}>
                    <img src="./images/RIIIMMGG4.png" className={styles.RIIIMMG3} data-aos="fade-down-left" alt="" />
                  </div>
                  <div className={styles.RIIIMMGG4}>
                    <img src="./images/RIIIMMGG5.png" className={styles.RIIIMMG4} data-aos="fade-up-left" alt="" />
                  </div>
                  <div className={styles.RIIIMMGG5}>
                    <img src="./images/RIIIMMGG6.png" className={styles.RIIIMMG5} data-aos="zoom-in-up" alt="" />
                  </div>
                  <div className={styles.RIIIMMGG6}>
                    <img src="./images/RIIIMMGG7.png" className={styles.RIIIMMG6} data-aos="fade-up-right" alt="" />
                  </div>
                </>
            )}

            {slug === 'buying-advertisement-agency' && (
                <div>
                  <div className={styles.Rppic1} >
                    <img src="./images/Rppic2.webp" className={styles.Rppicc1} data-aos="fade-up-left"  alt="" />
                  </div>

                  <div className={styles.Rppic2} >
                    <img src="./images/Rppic3.webp" className={styles.Rppicc2} data-aos="fade-down-left" data-aos-delay="150" alt="" />
                  </div>

                  <div className={styles.Rppic3} >
                    <img src="./images/Rppic4.webp" className={styles.Rppicc3} data-aos="fade-up-right" data-aos-delay="300"  alt="" />
                  </div>

                  <div className={styles.Rppic4} >
                    <img src="./images/Rppic5.webp" className={styles.Rppicc4} data-aos="fade-down-right" data-aos-delay="450" alt="" />
                  </div>
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
                  <div className={` ${styles.dgndfgdfgdf} position-relative`}>
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_25/${serviceResponse.data.third_section_image}`}
                        alt="" className="img-fluid"
                      />
                    )}

                    {slug === 'banner-design-services' && (
                      <div className={styles.one}>
                        <img src="./images/se1.png" className={styles.g1} data-aos="flip-right" alt=""/>
                        <img src="./images/se2.png" className={styles.g2} alt=""/>
                        <img src="./images/se3.png" className={styles.g3} alt=""/>
                        <img src="./images/se4.png" className={styles.g4} alt=""/>
                        <img src="./images/se5.png" className={styles.g5} alt=""/>
                        <img src="./images/se6.png" className={styles.g6} alt=""/>
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

        <div className={styles.sdjvhyuysbdvsd}>
          <div className="custom-container">
            <div className={styles.fmnbjkfnvf}>
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
            <div className={styles.sdshyudssd}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.dhujhbdsf555} style={{background:" url(../images/d.png)"}}>
                    <div className={`${styles.gbkjg5855} mt-4`}>
                      <div className={styles.fvnjfv55}>
                        {serviceResponse.data?.fifth_section_sub_image_one && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_25/${serviceResponse.data.fifth_section_sub_image_one}`}
                            alt=""
                          />
                        )}
                      </div>
                      <div className={`${styles.dfbhvhfdvgvfd2} mt-4`}>
                        <h4>
                          {serviceResponse.data?.fifth_section_sub_title_one &&
                            serviceResponse.data.fifth_section_sub_title_one}
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.fifth_section_sub_description_one &&
                              serviceResponse.data
                                .fifth_section_sub_description_one,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className={styles.dhujhbdsf555} style={{background:" url(../images/d.png)"}}>
                    <div className={`${styles.gbkjg5855} mt-4`}>
                      <div className={styles.fvnjfv55}>
                        {serviceResponse.data?.fifth_section_sub_image_two && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_25/${serviceResponse.data.fifth_section_sub_image_two}`}
                            alt=""
                          />
                        )}
                      </div>
                      <div className={`${styles.dfbhvhfdvgvfd2} mt-4`}>
                        <h4>
                          {serviceResponse.data?.fifth_section_sub_title_two &&
                            serviceResponse.data.fifth_section_sub_title_two}
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.fifth_section_sub_description_two &&
                              serviceResponse.data
                                .fifth_section_sub_description_two,
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
        <LastSectionComponent />
      </main>
      </PageWrapper>
    </div>
  );
};
