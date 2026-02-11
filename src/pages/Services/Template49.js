import styles from "./Css/Template49.module.css";
import { useEffect, useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Template49 = ({ serviceResponse, slug }) => {
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
        <div className={styles.gdfbdfdfgdf554}>
          <div className={styles.dfgjhfgd}>
            <div className={`${styles.sdfghdfgdf} col-lg-6`}>
              <h1 className="mt-0 mb-0">
                {serviceResponse.data?.banner_title && serviceResponse.data.banner_title}
              </h1>

              <div
                className="mt-3 mb-5"
                dangerouslySetInnerHTML={{
                  __html: serviceResponse.data?.banner_description && serviceResponse.data.banner_description,
                }}
              />

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
                <img
                  src={`${serviceResponse.image_url}/Templete_49/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}

              {slug === 'professional-poster-design' && ( 
                <div className={styles.pdspics}>
                  <img src="/images/pdsclean.webp" className={styles.pdspic1} alt=""/>

                  <img src="/images/pdstech.webp" className={styles.pdspic2} alt=""/>

                  <img src="/images/pdsvisual.webp" className={styles.pdspic3} alt=""/>

                  <img src="/images/pdssmart.webp" className={styles.pdspic4} alt=""/>

                  <img src="/images/pdsmedia.webp" className={styles.pdspic5} alt=""/>

                  <img src="/images/pdsphoto.webp" className={styles.pdspic6} alt=""/>
                </div>
              )}
            </div>
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

        <ServiceForm loading={setLoading} slug={slug} />

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html: serviceResponse.data?.third_section_description && serviceResponse.data.third_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.fjhjdfdfgdf}>
          <div className="container-grid">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div
                  className={styles.doiewnirnewr_inner}
                  style={{ backgroundImage: "url('./images/retro-gradient-background-with-grain-texture-editable-color_511042-395.jpg')" }}
                >
                  <div className={`${styles.idnwehrwer_overlay} p-5`}>
                    <h4 className="mb-4">
                      {serviceResponse.data?.fourth_section_title && serviceResponse.data.fourth_section_title}
                    </h4>
                    <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html: serviceResponse.data?.fourth_section_description && serviceResponse.data.fourth_section_description,
                      }}
                    />
                    <div className={styles.doewuirhwer + " text-center"}>
                      <div className={`${styles.desonjfreuiwnr} m-auto my-4`}>
                        {serviceResponse.data?.fourth_section_image && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_49/${serviceResponse.data.fourth_section_image}`}
                            alt=""
                            className="img-fluid"
                          />
                        )}
                      </div>
                        <button className="btn126">
                          <a href="tel:8420202891" style={{ color: "inherit", textDecoration: "none" }}>
                          Get In Touch With Us
                          </a>
                    </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className={`${styles.doiewnirnewr_inner} ${styles.sddfgjoidfgkujoj} p-5`}>
                  <div className={`${styles.oijmojowerewr} position-relative`}>
                    {serviceResponse.data?.fifth_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_49/${serviceResponse.data.fifth_section_image}`}
                        alt=""
                        className="img-fluid mb-3"
                      />
                    )}

                    {slug === 'professional-poster-design' && ( 
                      <div className={styles.poster}>
                        <img src="./images/idea1.png" className={styles.a1} data-aos="fade-down-right"alt=""/>
                        <img src="./images/idea2.png" className={styles.a2} data-aos="fade-down" alt=""/>
                        <img src="./images/idea3.png" className={styles.a3} data-aos="fade-down-left" alt=""/>
                        <img src="./images/idea4.png" className={styles.a4} data-aos="fade-up-left" alt=""/>
                        <img src="./images/idea5.png" className={styles.a5} data-aos="fade-up" alt=""/>
                        <img src="./images/idea6.png" className={styles.a6} data-aos="fade-up-right"alt=""/>
                      </div>
                    )}  
                  </div>

                  <h4 className="mb-4">
                    {serviceResponse.data?.fifth_section_title && serviceResponse.data.fifth_section_title}
                  </h4>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html: serviceResponse.data?.fifth_section_description && serviceResponse.data.fifth_section_description,
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-12 mb-4">
                <div className={`row ${styles.doiewnirnewr_inner} ${styles.sddfgjoidfgkujoj} p-5`}>
                  <div className={`${styles.dinihewrer} col-lg-8`}>
                    <h4 className="mb-4">
                      {serviceResponse.data?.sixth_section_title && serviceResponse.data.sixth_section_title}
                    </h4>
                    <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html: serviceResponse.data?.sixth_section_description && serviceResponse.data.sixth_section_description,
                      }}
                    />
                  </div>

                  <div className={`${styles.dinihewrer} col-lg-4 position-relative`}>
                    {serviceResponse.data?.sixth_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_49/${serviceResponse.data.sixth_section_image}`}
                        alt=""
                        className="img-fluid mb-3"
                      />
                    )}

                    {slug === 'professional-poster-design' && ( 
                      <div className={styles.ppspics}>
                        <img src="/images/ppsdesign.webp" className={styles.ppspic1} data-aos="fade-down" alt=""/>

                        <img src="/images/ppsbulb.webp" className={styles.ppspic2} data-aos="fade-down-right" alt=""/>

                        <img src="/images/ppsbar.webp" className={styles.ppspic3} data-aos="fade-right" alt=""/>

                        <img src="/images/ppsinfo.webp" className={styles.ppspic4} data-aos="fade-up-right" alt=""/>

                        <img src="/images/ppseye.webp" className={styles.ppspic5} data-aos="fade-down-left" alt=""/>

                        <img src="/images/ppstick.webp" className={styles.ppspic6} data-aos="fade-left" alt=""/>

                        <img src="/images/ppsprint.webp" className={styles.ppspic7} data-aos="fade-up-left" alt=""/>
                      </div>
                    )}

                    {/* <div className={`${styles.star} ${styles.star1}`}></div>
                    <div className={`${styles.star} ${styles.star2}`}></div>
                    <div className={`${styles.star} ${styles.star3}`}></div>
                    <div className={`${styles.star} ${styles.star4}`}></div>
                    <div className={`${styles.star} ${styles.star5}`}></div>
                    <div className={`${styles.star} ${styles.star6}`}></div>
                    <div className={`${styles.star} ${styles.star7}`}></div>
                    <div className={`${styles.star} ${styles.star8}`}></div>
                    <div className={`${styles.star} ${styles.star9}`}></div>
                    <div className={`${styles.star} ${styles.star10}`}></div> */}
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
