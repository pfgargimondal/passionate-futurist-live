import styles from "./Css/Template40.module.css";
import { useState,useEffect } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Template40 = ({ serviceResponse, slug }) => {

useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false, // Animations only happen once
      });
    }, []);

  const [loading, setLoading] = useState(false);
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

          <div className={`${styles.dbfghsdf} col-lg-6 position-relative`}>
            {serviceResponse.data?.banner_image && (
              <img src={`${serviceResponse.image_url}/Templete_40/${serviceResponse.data.banner_image}`} alt="" />
            )}

            {slug === 'video-editing-services' && (
              <>
              <div className={styles.RDI1}>
                <img src="./images/vedio-editing-banner-img1.png" className={styles.RDimg1} data-aos="fade-right" alt="" />
              </div>
              <div className={styles.RDI2}>
                <img src="./images/vedio-editing-banner-img2.png" className={styles.RDimg2} data-aos="fade-left" alt="" />
              </div>
              </>
            )}

          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>{serviceResponse.data?.second_section_title}</h2>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{ __html: serviceResponse.data?.second_section_description }}
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
                    <h2>{serviceResponse.data?.third_section_title}</h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: serviceResponse.data?.third_section_description }}
                    />
                   <Link to="/business-register"><button>  Get started</button></Link> 
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className={styles.dgndfgdfgdf}>
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_40/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}

                  {slug === 'video-editing-services' && (
                      
                    <div className={styles.videoeditimg}>
                      <img src="./images/veglass.png" className={styles.veditimg1} alt=""/>
                      <img src="./images/vecircle.png" className={styles.veditimg2} alt=""/>
                    </div>

                  )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sdcbvghsdcsddvfsd}>
          <div className="custom-container">
            <div className={styles.hsdffdvffdfd}>
              <h2>{serviceResponse.data?.fourth_section_title}</h2>
              <div
                className={`${styles.fdnbujfbf} mt-4`}
                dangerouslySetInnerHTML={{ __html: serviceResponse.data?.fourth_section_description }}
              />
            </div>
          </div>
        </div>

        <div className={styles.fgjbdfgdfgdfg}>
          <div className="custom-container">
            <div className="row">
              <div className="col-lg-6">
                <div className={`${styles.duiewir_inner} ${styles.v_dfgddasf} p-4`}>
                  {serviceResponse.data?.fifth_section_image_one && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_40/${serviceResponse.data.fifth_section_image_one}`}
                      alt=""
                      className="img-fluid mb-3"
                    />
                  )}
                  <h4>{serviceResponse.data?.fifth_section_title_one}</h4>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{ __html: serviceResponse.data?.fifth_section_description_one }}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className={`${styles.duiewir_inner} row ${styles.vddfsddfff} p-4 mb-4`}>
                  <div className={`${styles.dlkewnijnrkwmijewr} col-lg-9`}>
                    <h4>{serviceResponse.data?.fifth_section_title_two}</h4>
                    <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{ __html: serviceResponse.data?.fifth_section_description_two }}
                    />
                  </div>
                  <div className="img-fluid col-lg-3">
                    {serviceResponse.data?.fifth_section_image_two && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_40/${serviceResponse.data.fifth_section_image_two}`}
                        alt=""
                        className="img-fluid mb-3"
                      />
                    )}
                  </div>
                </div>

                <div className={`${styles.duiewir_inner} row ${styles.vddfsddfff} ${styles.csdfvwecvfrtsrfsd} p-4 mb-4`}>
                  <div className={`${styles.dlkewnijnrkwmijewr} col-lg-9`}>
                    <h4>{serviceResponse.data?.fifth_section_title_three}</h4>
                    <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{ __html: serviceResponse.data?.fifth_section_description_three }}
                    />
                  </div>
                  <div className="img-fluid col-lg-3">
                    {serviceResponse.data?.fifth_section_image_three && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_40/${serviceResponse.data.fifth_section_image_three}`}
                        alt=""
                        className="img-fluid mb-3"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className={`${styles.duiewir_inner} ${styles.vddfsddfff} row ${styles.xscvsdfvcsdcsfsdf} p-4`}>
                  <div className={`${styles.dlkewnijnrkwmijewr} col-lg-9`}>
                    <h4>{serviceResponse.data?.fifth_section_title_four}</h4>
                    <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{ __html: serviceResponse.data?.fifth_section_description_four }}
                    />
                  </div>
                  <div className="img-fluid col-lg-3">
                    {serviceResponse.data?.fifth_section_image_four && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_40/${serviceResponse.data.fifth_section_image_four}`}
                        alt=""
                        className="img-fluid mb-3"
                      />
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
              <h2>{serviceResponse.data?.sixth_section_title}</h2>
              <div
                className="mb-0"
                dangerouslySetInnerHTML={{ __html: serviceResponse.data?.sixth_section_description }}
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
