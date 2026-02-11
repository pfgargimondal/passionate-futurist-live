import styles from "./Css/Template41.module.css";
import { useEffect, useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Template41 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
                  src={`${serviceResponse.image_url}/Templete_41/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}

              {slug === 'photo-sharing-services' && ( 
                <div className={styles.psspics}>
                  <img src="/images/pssmobile.webp" className={styles.psspic1} alt=""/>

                  <img src="/images/pssping.webp" className={styles.psspic2} alt=""/>

                  <img src="/images/pssman.webp" className={styles.psspic3} alt=""/>

                  <img src="/images/psssearch.webp" className={styles.psspic4} alt=""/>

                  <img src="/images/psslock.webp" className={styles.psspic5} alt=""/>

                  <img src="/images/pssprint.webp" className={styles.psspic6} alt=""/>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>{serviceResponse.data?.second_section_title}</h2>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html: serviceResponse.data?.second_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <ServiceForm loading={setLoading} slug={slug} />

        <div className={styles.dfngjhdfgdfg}>
          <div className="custom-container">
            <div className={styles.dfghdfgdf}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={`${styles.cfbgjhcfdf} position-relative`}>
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_41/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}

                    {slug === 'photo-sharing-services' && ( 
                      <div className={styles.photo_page}>
                        <img src="./images/photo1.webp" className={styles.pic1} data-aos="fade-up-left"alt=""/>

                        <img src="./images/photo2.webp" className={styles.pic2} data-aos="fade-up-right"alt=""/>

                        <img src="./images/photo3.webp" className={styles.pic3} data-aos="zoom-in" alt=""/>

                        <img src="./images/photo4.webp" className={styles.pic4} data-aos="fade-up-right" alt=""/>

                        <img src="./images/photo5.webp" className={styles.pic5} data-aos="fade-up-left" alt=""/>

                        <img src="./images/photo6.webp" className={styles.pic6} data-aos="zoom-in" alt=""/>
                      </div>
                    )}

                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.fgydfgdfg}>
                    <h2>{serviceResponse.data?.third_section_title}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: serviceResponse.data?.third_section_description,
                      }}
                    />
                    <button onClick={() => navigate("/contact-us")}>
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>{serviceResponse.data?.fourth_section_title}</h2>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html: serviceResponse.data?.fourth_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.jhbdfbgdfg}>
          <div className="custom-container">
            <div className={styles.dfvgfdfvgdfg}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.dfbdfdf}>
                    <div className="row">
                      <div className="col-lg-2">
                        <div className={styles.fbdf}>
                          {serviceResponse.data?.fifth_section_image && (
                            <img
                              src={`${serviceResponse.image_url}/Templete_41/${serviceResponse.data.fifth_section_image}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className={styles.dfdf55g}>
                          <h4>{serviceResponse.data?.fifth_section_title}</h4>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                serviceResponse.data?.fifth_section_description,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.dfbdfdf}>
                    <div className="row">
                      <div className="col-lg-2">
                        <div className={styles.fbdf}>
                          {serviceResponse.data?.sixth_section_image && (
                            <img
                              src={`${serviceResponse.image_url}/Templete_41/${serviceResponse.data.sixth_section_image}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className={styles.dfdf55g}>
                          <h4>{serviceResponse.data?.sixth_section_title}</h4>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                serviceResponse.data?.sixth_section_description,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className={styles.jhdfbdf55}>
                    <div className="row">
                      <div className="col-lg-2">
                        <div className={styles.fbdf}>
                          {serviceResponse.data?.seven_section_image && (
                            <img
                              src={`${serviceResponse.image_url}/Templete_41/${serviceResponse.data.seven_section_image}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className={styles.dfdf55g}>
                          <h4>{serviceResponse.data?.seven_section_title}</h4>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                serviceResponse.data?.seven_section_description,
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

        <LastSectionComponent />
      </main>
      </PageWrapper>
    </div>
  );
};
