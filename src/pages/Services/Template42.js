import styles from "./Css/Template42.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from "aos";
import "aos/dist/aos.css";

export const Template42 = ({ serviceResponse, slug }) => {
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

          <div className={`${styles.dbfghsdf} col-lg-6`}>
            {serviceResponse.data?.banner_image && (
              <img
                src={`${serviceResponse.image_url}/Templete_42/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}

            {slug === 'whiteboard-animation-services' && ( 
              <div className={styles.white_page}>
                <img src="./images/white1.webp" className={styles.img1} alt=""/>

                <img src="./images/white2.webp" className={styles.img2} alt=""/>

                <img src="./images/white3.webp" className={styles.img3} alt=""/>
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
                      className="pt-4"
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
                        src={`${serviceResponse.image_url}/Templete_42/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}

                    {slug === 'whiteboard-animation-services' && ( 
                      <div className={styles.wasimgs}>
                        <img src="/images/wasconcept.webp" className={styles.wasimg1} data-aos="fade-down-right" alt=""/>

                        <img src="/images/wasvoice.webp" className={styles.wasimg2} data-aos="fade-up-right" alt=""/>

                        <img src="/images/wasillus.webp" className={styles.wasimg3} data-aos="fade-down-left" alt=""/>

                        <img src="/images/wasfinal.webp" className={styles.wasimg4} data-aos="fade-up-left" alt=""/>

                        <img src="/images/wasboard.webp" className={styles.wasimg5}  data-aos="zoom-in" alt=""/>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.fgjbdfgdfgdfg} position-relative py-0 my-5`}
          style={{
            backgroundImage: "url('../images/holographic-foil-background-iridescent-holographic-foil-hologram-texture-pastel-neon-rainbow_961004-137.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className={`${styles.coidhswine_overlay} py-5`}>
            <div className="custom-container py-5">
              <div className="row">
                <div className="col-lg-6">
                  <div className={`${styles.duiewir_inner} ${styles.v_dfgddasf} mb-4 p-4`}>
                    {serviceResponse.data?.fourth_section_image_one && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_42/${serviceResponse.data.fourth_section_image_one}`}
                        alt="" className="img-fluid mb-3" data-aos="fade-up-right"
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
                          serviceResponse.data
                            ?.fourth_section_description_one &&
                          serviceResponse.data.fourth_section_description_one,
                      }}
                    />
                  </div>

                  <div className={`${styles.duiewir_inner} ${styles.v_dfgddasf} mb-4 p-4`}>
                    <h4>
                      {serviceResponse.data?.fourth_section_title_two &&
                        serviceResponse.data.fourth_section_title_two}
                    </h4>

                    <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data
                            ?.fourth_section_description_two &&
                          serviceResponse.data.fourth_section_description_two,
                      }}
                    />
                    {serviceResponse.data?.fourth_section_image_two && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_42/${serviceResponse.data.fourth_section_image_two}`}
                        alt="" className="img-fluid mb-3" data-aos="zoom-out-right"
                      />
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="pt-5">
                    <div className={`${styles.duiewir_inner} ${styles.v_dfgddasf} mb-4 p-4`}>
                      {serviceResponse.data?.fourth_section_image_three && (
                        <img
                          src={`${serviceResponse.image_url}/Templete_42/${serviceResponse.data.fourth_section_image_three}`}
                          alt="" className="img-fluid mb-3" data-aos="fade-up-left"
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
                            serviceResponse.data
                              .fourth_section_description_three,
                        }}
                      />
                    </div>

                    <div className={`${styles.duiewir_inner} ${styles.v_dfgddasf} mb-4 p-4`}>
                      <h4>
                        {serviceResponse.data?.fourth_section_title_four &&
                          serviceResponse.data.fourth_section_title_four}
                      </h4>

                      <div
                        className="mb-0"
                        dangerouslySetInnerHTML={{
                          __html:
                            serviceResponse.data?.fourth_section_description_four &&
                            serviceResponse.data.fourth_section_description_four,
                        }}
                      />
                      {serviceResponse.data?.fourth_section_image_four && (
                        <img
                          src={`${serviceResponse.image_url}/Templete_42/${serviceResponse.data.fourth_section_image_four}`}
                          alt="" className="img-fluid mb-3" data-aos="zoom-out-left"
                        />
                      )}
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
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.fifth_section_description &&
                    serviceResponse.data.fifth_section_description,
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
