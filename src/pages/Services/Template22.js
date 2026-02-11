import styles from "./Css/Template22.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from "aos";
import "aos/dist/aos.css";

export const Template22 = ({ serviceResponse, slug }) => {
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
          <div
            className={styles.dfgjhfgd}
            style={{ background: "url(./images/afros.png)" }}
          >
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
                  src={`${serviceResponse.image_url}/Templete_22/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}

              {slug === 'graphics-t-shirt-designing-services' && (
                <div className={styles.graphics}>
                  <img src="./images/graphics1.png" className={styles.png1} data-aos= "fade-down-left" alt=""/>

                  <img src="./images/graphics2.png" className={styles.png2} data-aos= "fade-down-right" alt=""/>

                  <img src="./images/graphics3.png" className={styles.png3} alt=""/>

                  <img src="./images/graphics4.png" className={styles.png4} alt=""/>

                  <img src="./images/graphics5.png" className={styles.png5} alt=""/>

                  <img src="./images/graphics6.png" className={styles.png6} alt=""/>
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

          <div className={styles.dfbghdfgdfgdf}>
            <div className="custom-container">
              <div className={styles.mgjhbdfg}>
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
              </div>
            </div>
          </div>

          <div className={`${styles.iudniuwehirwerr} py-5`}>
            <div className="container-fluid px-5">
              <div className="row align-items-center">
                <div className="col-lg-8 mb-5">
                  <div
                    className={styles.oidenjwiuhrr_inner}
                    style={{
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundImage:
                        "url(/images/16359095_v904-nunny-012.jpg)", // If image is in public folder
                    }}
                  >
                    <div className={`${styles.djnhweber_inner_overlay} p-5`}>
                      <h4>
                        {serviceResponse.data?.fourth_section_title &&
                          serviceResponse.data.fourth_section_title}
                      </h4>

                      <div
                        className="py-3"
                        dangerouslySetInnerHTML={{
                          __html:
                            serviceResponse.data?.fourth_section_description &&
                            serviceResponse.data.fourth_section_description,
                        }}
                      />
                      <button className="btn126 mt-3">
                        Get in Touch{" "}
                        <i className="fa-solid fa-angles-right"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-5">
                  <div className={`${styles.oidenjwiuhrr_inner} position-relative`}>
                    {serviceResponse.data?.fourth_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_22/${serviceResponse.data.fourth_section_image}`}
                        alt=""
                        className="img-fluid"
                      />
                    )}

                    {slug === 'graphics-t-shirt-designing-services' && (
                      <div className={styles.shirt}>
                        <img src="./images/graphic_fourth_img4.png" className={styles.d1} data-aos="zoom-in-up" alt="" />
                        <img src="./images/graphic_fourth_img3.png" className={styles.d2} data-aos="flip-right" alt="" />
                        <img src="./images/graphic_fourth_img2.png" className={styles.d3} alt="" />
                        <img src="./images/graphic_fourth_img1.png" className={styles.d4} alt="" />
                        <img src="./images/graphic_fourth_img5.png" className={styles.d5} alt="" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-4 mb-5">
                  <div className={`${styles.oidenjwiuhrr_inner} position-relative`}>
                    {serviceResponse.data?.fifth_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_22/${serviceResponse.data.fifth_section_image}`}
                        alt=""
                        className="img-fluid"
                      />
                    )}

                    {slug === 'graphics-t-shirt-designing-services' && (
                      <div className={styles.gtdspics}>
                        <img src="/images/gtdscost.png" className={styles.gtdspic1} data-aos="fade-down-right" alt=""/>

                        <img src="/images/gtdsconcept.png" className={styles.gtdspic2} data-aos="fade-up-right" alt=""/>

                        <img src="/images/gtdsdemand.png" className={styles.gtdspic3} data-aos="fade-down-left" alt=""/>

                        <img src="/images/gtdsrevision.png" className={styles.gtdspic4} data-aos="fade-up-left" alt=""/>

                        <img src="/images/gtdstshirt.png" className={styles.gtdspic5} alt=""/>
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-8">
                  <div
                    className={styles.oidenjwiuhrr_inner}
                    style={{
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundImage:
                        "url(/images/14547742_rm218batch4-ning-34.jpg)", // If image is in public folder
                    }}
                  >
                    <div className={`${styles.djnhweber_inner_overlay} p-5`}>
                      <h4>
                        {serviceResponse.data?.fifth_section_title &&
                          serviceResponse.data.fifth_section_title}
                      </h4>

                      <div
                        className="py-3"
                        dangerouslySetInnerHTML={{
                          __html:
                            serviceResponse.data?.fifth_section_description &&
                            serviceResponse.data.fifth_section_description,
                        }}
                      />

                      <button className="btn126 mt-3">
                        Get in Touch{" "}
                        <i className="fa-solid fa-angles-right"></i>
                      </button>
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
