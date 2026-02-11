import styles from "./Css/Template11.module.css";
import { useEffect, useState} from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from "aos";
import "aos/dist/aos.css";

export const Template11 = ({ serviceResponse, slug }) => {
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
        <div className={styles.gdfbdfdfgdf554}>
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

            <div className={`${styles.dbfghsdf} col-lg-6 position-relative`}>
              {serviceResponse.data?.banner_image && (
                <img
                  src={`${serviceResponse.image_url}/Templete_11/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}

              {slug === 'website-domain-registration-services' && (

                  <div className={styles.fjhfdfgdfgss}>
                    <div className={styles.fjhfdfgdfg55aa} >
                        <img data-aos="fade-left" src="./images/vvve (2).png" alt=""/>
                    </div>

                    <div className={styles.fjhfdfgdfg55}>
                        <img data-aos="flip-up" src="./images/vvve (3).png" alt=""/>
                    </div>

                    <div className={styles.fjhfdfgdfg55aaa}>
                        <img data-aos="fade-right" src="./images/vvve (1).png" alt=""/>
                    </div>
                  </div>
              )}

              {slug === 'professional-seo-report-services' && (
                <>
                <div className={styles.ssp1}>
                  <img src="./images/Professional_SEO_Report_Services_Company_1.png" className={styles.ssp01} alt=""/>
                </div>
                <div className={styles.ssp2}>
                  <img src="./images/Professional_SEO_Report_Services_Company_4.png" className={styles.ssp02} alt=""/>
                </div>
                <div className={styles.ssp3}>
                  <img src="./images/Professional_SEO_Report_Services_Company_3.png" className={styles.ssp03} alt=""/>
                </div>
                <div className={styles.ssp4}>
                  <img src="./images/Professional_SEO_Report_Services_Company_2.png" className={styles.ssp04} alt=""/>
                </div>
                </>
              )}
            </div>
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

        <ServiceForm loading={setLoading} slug={slug} />

        <div className={`${styles.iamdkmdfinhwrnwr} py-5`}>
          <div className="custom-container">
            <div className="row">
              <div className="col-lg-7">
                <div className={styles.dsrt_inner}>
                  <h2>
                    {serviceResponse.data?.third_section_title &&
                      serviceResponse.data.third_section_title}
                  </h2>

                  <div
                    className="pt-4"
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.third_section_description &&
                        serviceResponse.data.third_section_description,
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-5">
                <div className={`${styles.dsrt_inner} position-relative sticky-top`}>
                  {serviceResponse.data?.third_section_image && (
                    <img data-aos="zoom-in-up"
                      src={`${serviceResponse.image_url}/Templete_11/${serviceResponse.data.third_section_image}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}

                  {slug === 'professional-seo-report-services' && (
                    <>
                    <div className={styles.RRIMGG1}>
                      <img src="./images/Seo_Report_RRIIMMG1.png" className={styles.RRIIMMGG1} data-aos="fade-up-right" data-aos-delay="400" alt="" />
                    </div>
                    <div className={styles.RRIMGG2}>
                      <img src="./images/Seo_Report_RRIIMMG2.png" className={styles.RRIIMMGG2} data-aos="fade-down-left" data-aos-delay="300" alt="" />
                    </div>
                    <div className={styles.RRIMGG3}>
                      <img src="./images/Seo_Report_RRIIMMG3.png" className={styles.RRIIMMGG3} data-aos="fade-up-left" data-aos-delay="500" alt="" />
                    </div>
                    <div className={styles.RRIMGG4}>
                      <img src="./images/Seo_Report_RRIIMMG4.png" className={styles.RRIIMMGG4} data-aos="fade-down-right" data-aos-delay="100" alt="" />
                    </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.doiwerhkwenrwer} py-5`}
          style={{
            backgroundImage:
              "url(./images/abstract-colorful-blurry-background_558873-13639.jpg)",
          }}
        >
          <div className="container-fluid p-5">
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className={`${styles.djniwer_inner} text-center p-4`}>
                  {serviceResponse.data?.fourth_section_image_one && (
                    <img data-aos="flip-left"
                      src={`${serviceResponse.image_url}/Templete_11/${serviceResponse.data.fourth_section_image_one}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}
                  <h4>
                    {serviceResponse.data?.fourth_section_title_one &&
                      serviceResponse.data.fourth_section_title_one}
                  </h4>

                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.fourth_section_description_one &&
                        serviceResponse.data.fourth_section_description_one,
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className={`${styles.djniwer_inner} text-center p-4`}>
                  {serviceResponse.data?.fourth_section_image_two && (
                    <img data-aos="flip-up"
                      src={`${serviceResponse.image_url}/Templete_11/${serviceResponse.data.fourth_section_image_two}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}

                  <h4>
                    {serviceResponse.data?.fourth_section_title_two &&
                      serviceResponse.data.fourth_section_title_two}
                  </h4>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.fourth_section_description_two &&
                        serviceResponse.data.fourth_section_description_two,
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className={`${styles.djniwer_inner} text-center p-4`}>
                  {serviceResponse.data?.fourth_section_image_three && (
                    <img data-aos="flip-right"
                      src={`${serviceResponse.image_url}/Templete_11/${serviceResponse.data.fourth_section_image_three}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}

                  <h4>
                    {serviceResponse.data?.fourth_section_title_three &&
                      serviceResponse.data.fourth_section_title_three}
                  </h4>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data
                          ?.fourth_section_description_three &&
                        serviceResponse.data.fourth_section_description_three,
                    }}
                  />
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
