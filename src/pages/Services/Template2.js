import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Css/Template2.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template2 = ({ serviceResponse, slug }) => {
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
            <h1 className="mt-0 mb-0">{serviceResponse.data?.banner_title && (serviceResponse.data.banner_title)}</h1>

            <p className="mt-3 mb-5">
              {serviceResponse.data?.banner_description && (serviceResponse.data.banner_description)}
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
                  src={`${serviceResponse.image_url}/Template_2/${serviceResponse.data.banner_image}`}
                  alt=""
                />
            )}
            {slug === 'search-engine-marketing-services' && (
            <> 
                <div className={styles.rohitp01}>
                  <img src="./images/search-engine-image-2.png" className={styles.rohitimg01} data-aos="fade-right" alt=""/>
                </div>
                <div className={styles.rohitp02}>
                  <img src="./images/search-engine-image-1.png" className={styles.rohitimg02} data-aos="fade-right" alt=""/>
                </div>
                <div className={styles.rohitp03}>
                  <img src="./images/search-engine-image-4.png" className={styles.rohitimg03} data-aos="fade-left" alt=""/>
                </div>
                <div className={styles.rohitp04}>
                  <img src="./images/search-engine-image-3.png" className={styles.rohitimg04} data-aos="fade-left" alt=""/>
                </div>
              </>
              )}

              {slug === 'transit-advertising-and-wraps' && (
              <> 
                <div className={styles.maintainance_page}>
                  <img src="./images/trans1.webp" className={styles.image1} alt=""/> 
                  <img src="./images/trans2.webp" className={styles.image2} alt=""/>
                  <img src="./images/trans3.webp" className={styles.image3} alt=""/>  
                  <img src="./images/trans4.webp" className={styles.image4} alt=""/>  
               </div>
              </>
            )}

          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>
                {serviceResponse.data?.second_section_title && (serviceResponse.data.second_section_title)}
              </h2>

                <div
                    className="pt-4"
                    dangerouslySetInnerHTML={{
                        __html: serviceResponse.data?.second_section_description && (serviceResponse.data.second_section_description),
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
                      {serviceResponse.data?.third_section_title && (serviceResponse.data.third_section_title)}
                    </h2>

                    <div
                        dangerouslySetInnerHTML={{
                            __html: serviceResponse.data?.third_section_description && (serviceResponse.data.third_section_description),
                        }}
                    />

                    <Link to="/business-register"><button>  Get started</button></Link> 
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className={styles.dgndfgdfgdf}>
                    {serviceResponse.data?.third_section_image && (
                    <img
                        src={`${serviceResponse.image_url}/Template_2/${serviceResponse.data.third_section_image}`}
                        alt=""
                        />
                    )}

                    {slug === 'search-engine-marketing-services' && (
                  
                      <div className={styles.gfgfgfgfgfg}>
                          <img src="./images/i1.png" className={styles.t1} data-aos="flip-up" alt="" />

                          <img src="./images/i2.png" className={styles.t2} data-aos="fade-right" alt="" />

                          <img src="./images/i3.png" className={styles.t3} data-aos="fade-right" alt="" />

                          <img src="./images/i4.png" className={styles.t4} data-aos="fade-left" alt="" />

                          <img src="./images/i5.png" className={styles.t5} data-aos="fade-left" alt="" />
                      </div>
                                   
                    )}

                    {slug === 'transit-advertising-and-wraps' && (
                      <>
                        <div className={styles.leading1}>
                          <img src="./images/leading01.webp" className={styles.transit01} data-aos="zoom-out-down" alt=""/>
                        </div>
                        <div className={styles.leading2}>
                          <img src="./images/leading02.webp" className={styles.transit02} data-aos="zoom-out-left" alt=""/>
                        </div>
                        <div className={styles.leading5}>
                          <img src="./images/leading05.webp" className={styles.transit05} data-aos="zoom-out-right" alt=""/>
                        </div> 
                      </>                               
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
                {serviceResponse.data?.fourth_section_title && (serviceResponse.data.fourth_section_title)}
              </h2>

                <div className="pt-4"
                    dangerouslySetInnerHTML={{
                        __html: serviceResponse.data?.fourth_section_description && (serviceResponse.data.fourth_section_description),
                    }}
                />
            </div>
          </div>
        </div>

        <div className={styles.dfbjhfdfgdf}>
          <div className="custom-container10">
            <div className={styles.vgbfdf}>
              <div className="row">
                <div className="col-lg-5">
                  <div className={`${styles.dgndfgdfgdf} mt-4`}>
                    {serviceResponse.data?.fifth_section_image && (
                    <img data-aos="zoom-in-right"
                        src={`${serviceResponse.image_url}/Template_2/${serviceResponse.data.fifth_section_image}`}
                        alt=""
                        />
                    )}

                    {slug === 'transit-advertising-and-wraps' && (
                      <div className={styles.img}>
                        <img src="./images/bulb1.webp" className={styles.bu1} alt="" />

                        <img src="./images/bulb2.webp" className={styles.bu2}  alt="" />

                        <img src="./images/bulb3.webp" className={styles.bu3}  alt="" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className={styles.fbgdfgdfgdf}>
                    <h2>
                      {serviceResponse.data?.fifth_section_title && (serviceResponse.data.fifth_section_title)}
                    </h2>

                    <div
                        dangerouslySetInnerHTML={{
                            __html: serviceResponse.data?.fifth_section_description && (serviceResponse.data.fifth_section_description),
                        }}
                    />

                     <Link to="/business-register"><button>  Get started</button></Link> 
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
