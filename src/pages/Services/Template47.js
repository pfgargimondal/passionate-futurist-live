import styles from "./Css/Template47.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template47 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
    useEffect(() => {
      AOS.init({
        duration: 1000,
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
              {serviceResponse.data?.banner_title && serviceResponse.data.banner_title}
            </h1>
            <p className="mt-3 mb-5">
              {serviceResponse.data?.banner_description && serviceResponse.data.banner_description}
            </p>
            <div className={styles.vbddds}>
              <Link to="/contact-us" className="btn125">Contact Us</Link>
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
                src={`${serviceResponse.image_url}/Templete_47/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}
            {slug === "social-media-marketing-company" && (
              <>
              <div className={styles.fmdjksdfsdf}>
                <div className={styles.hdfgffdfsd1}>
                  <img src="./images/socialmedia (1).png" alt=""/>
                </div>

                <div className={styles.hdfgffdfsd2}>
                  <img src="./images/socialmedia (2).png" alt=""/>
                </div>

                <div className={styles.hdfgffdfsd3}>
                  <img src="./images/socialmedia (3).png" alt=""/>
                </div>
              </div>
              </>
            )}
          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>{serviceResponse.data?.second_section_title && serviceResponse.data.second_section_title}</h2>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html: serviceResponse.data?.second_section_description && serviceResponse.data.second_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <ServiceEnquiryForm loading={setLoading} slug={slug} />

        <div className={`${styles.dfbghdfgdfgdf} ${styles.sfmlkdfdff}`}>
          <div className="custom-container">
            <div className={styles.mgjhbdfg}>
              <h2 className="mb-4">
                {serviceResponse.data?.third_section_title && serviceResponse.data.third_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: serviceResponse.data?.third_section_description && serviceResponse.data.third_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div className={`mt-5 ${styles.duiewmjroiweorrr}`}>
          <div className="container-fluid px-5">
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className={styles.oidmnewr_left}>
                  {serviceResponse.data?.fourth_section_image_one && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_47/${serviceResponse.data.fourth_section_image_one}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}
                  <h4 className="mb-4">
                    {serviceResponse.data?.fourth_section_title_one && serviceResponse.data.fourth_section_title_one}
                  </h4>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html: serviceResponse.data?.fourth_section_description_one && serviceResponse.data.fourth_section_description_one,
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className={`${styles.oidmnewr_middle} sticky-top`}>
                  {serviceResponse.data?.fourth_section_main_image && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_47/${serviceResponse.data.fourth_section_main_image}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}

                  {slug === "social-media-marketing-company" && (
                  <>
                    <div className={`${styles.sddfsdfdd54a} left-slide`}>
                        <img data-aos="fade-left" src="./images/socia (3).png" alt="" />
                    </div>

                    <div className={`${styles.sddfsdfdd54aa} right-slide`}>
                        <img data-aos="fade-right" src="./images/socia (2).png" alt="" />
                    </div>

                    <div className={`${styles.sddfsdfdd54aaa} left-slide`}>
                        <img data-aos="fade-left" src="./images/socia (1).png" alt="" />
                    </div>

                    <div className={`${styles.sddfsdfdd54aaaa} right-slide`}>
                        <img data-aos="fade-right" src="./images/socia (4).png" alt="" />
                    </div>
                  </>
                  )}


                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className={styles.oidmnewr_right}>
                  {serviceResponse.data?.fourth_section_image_two && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_47/${serviceResponse.data.fourth_section_image_two}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}
                  <h4 className="mb-4">
                    {serviceResponse.data?.fourth_section_title_two && serviceResponse.data.fourth_section_title_two}
                  </h4>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html: serviceResponse.data?.fourth_section_description_two && serviceResponse.data.fourth_section_description_two,
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
