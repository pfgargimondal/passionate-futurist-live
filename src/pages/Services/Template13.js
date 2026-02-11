import styles from "./Css/Template13.module.css";
import { useEffect, useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const Template13 = ({ serviceResponse, slug }) => {

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false, // Animations only happen once
      });
    }, []);

    gsap.to(".RRIMGGR1", {
      duration: 3,
      y: -350,
      // repeat:-1,
      // yoyo:true,
      scrollTrigger: {
          trigger: ".RRIMGGR2",
          // markers: true,
          scrub: true,
          end: "top 160px",
          start: "top 440px"
      }
    });

    gsap.to(".RRIMGGR2", {
      duration: 3,
      x: 1045,
      // delay:1,
      // repeat:-1,
      // yoyo:true,
      scrollTrigger: {
          trigger: ".RRIMGGR2",
          // markers: true,
          scrub: true,        
          end: "top 160px",
          start: "top 440px"
      }
    });
    gsap.to(".RRIMGGR3", {
      duration: 3,
      x: -250,
      // repeat:-1,
      // yoyo:true,
      // delay:2,
      scrollTrigger: {
          trigger: ".RRIMGGR2",
          // markers: true,
          scrub: true,        
          end: "top 160px",
          start: "top 440px"
      }
    });
    gsap.to(".RRIMGGR4", {
      duration: 3,
      y: 200,
      opacity:1,
      // repeat:-1,
      // delay:2.5,
      // yoyo:true,
      scrollTrigger: {
          trigger: ".RRIMGGR2",
          // markers: true,
          scrub: true,        
          end: "top 160px",
          start: "top 440px"
      }
    });

    gsap.to(".RRIMGGR5", {
      duration: 3,
      x: -250,
      opacity:1,
      // delay:3,
      // yoyo:true,
      scrollTrigger: {
          trigger: ".RRIMGGR2",
          // markers: true,
          scrub: true,        
          end: "top 160px",
          start: "top 440px"
      }
    });

    gsap.to(".RRIMGGR6", {
      duration: 3,
      x: -250,
      opacity:1,
      // delay:3.3,
      // yoyo:true,
      scrollTrigger: {
          trigger: ".RRIMGGR2",
          // markers: true,
          scrub: true,        
          end: "top 160px",
          start: "top 440px"
      }
    });

    gsap.to(".RRIMGGR7", {
      duration: 3,
      x: -250,
      opacity:1,
      // delay:3.6,
      // yoyo:true,
      scrollTrigger: {
          trigger: ".RRIMGGR2",
          // markers: true,
          scrub: true,        
          end: "top 160px",
          start: "top 440px"
      }
    });

    gsap.to(".RRIMGGR8", {
      duration: 3,
      x: -250,
      opacity:1,
      // delay:3.9,
      // yoyo:true,
      scrollTrigger: {
          trigger: ".RRIMGGR2",
          // markers: true,
          scrub: true,        
          end: "top 160px",
          start: "top 440px"
      }
    });

  const [loading, setLoading] = useState(false);
  return (
    <div>
      <PageWrapper slug={slug} type="Template">
      {loading && <Loader />}
      <main>
        <div className={styles.gdfbdfdfgdf554}>
          <div
            className={styles.dfgjhfgd}
            style={{
              // backgroundImage: "url(./images/afros.png)",
            }}
          >
            <div className={`${styles.sdfghdfgdf} col-lg-6`}>
              <h1 className="mt-0 mb-0">
                {serviceResponse.data?.banner_title &&
                  serviceResponse.data.banner_title}
              </h1>
              <div className="mt-3 mb-5"
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

            <div className={`${styles.dbfghsdf} col-lg-6 position-relative`}>
              {serviceResponse.data?.banner_image && (
                <img
                  src={`${serviceResponse.image_url}/Template_13/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}
              {slug === 'keyword-research-services' && (
                <>
                <div className={styles.ro1}>
                  <img src="./images/keyword-banner-imag_1.png" className={styles.roimg1}  alt=""/>
                </div>
                <div className={styles.ro2}>
                  <img src="./images/keyword-banner-imag_2.png" className={styles.roimg2} data-aos="zoom-in-up" alt=""/>
                </div>
                <div className={styles.ro3}>
                  <img src="./images/keyword-banner-imag_3.png" className={styles.roimg3} data-aos="fade-down" alt=""/>
                </div>
                <div className={styles.ro4}>
                  <img src="./images/keyword-banner-imag_4.png" className={styles.roimg4} data-aos="fade-right" alt=""/>
                </div>
                <div className={styles.ro5}>
                  <img src="./images/keyword-banner-imag_5.png" className={styles.roimg5} data-aos="fade-left" alt=""/>
                </div>
                <div className={styles.ro6}>
                  <img src="./images/keyword-banner-imag_6.png" className={styles.roimg6} data-aos="fade-left" alt=""/>
                </div>
                <div className={styles.ro7}>
                  <img src="./images/keyword-banner-imag_7.png" className={styles.roimg7} data-aos="fade-right" alt=""/>
                </div>
                <div className={styles.ro8}>
                  <img src="./images/keyword-banner-imag_8.png" className={styles.roimg8} data-aos="fade-left" alt=""/>
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

        <div className={`${styles.fjhfdfgdfg} pb-5`}>
          <div className="custom-container pb-5">
            <div className={styles.sdfsdfsdf}>
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
        </div>

        <div className={`${styles.lkfsdmfuisdnfsdf} position-relative mb-4 mt-5`}>
          <div className="custom-container">
            <div className="row">
              <div className="col-lg-7 mb-4">
                <div className={styles.doksjoijfrerr_right}>
                  <h2 className="mb-4">
                    {serviceResponse.data?.fourth_section_title &&
                      serviceResponse.data.fourth_section_title}
                  </h2>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.fourth_section_description &&
                        serviceResponse.data.fourth_section_description,
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-5 mb-4">
                <div className={styles.doksjoijfrerr_left}>
                  {serviceResponse.data?.fourth_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Template_13/${serviceResponse.data.fourth_section_image}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}

                {slug === 'keyword-research-services' && (
                  <div className="col-lg-5 mb-4">
                <div className={styles.doksjoijfrerr_left}>
                    {serviceResponse.data?.fourth_section_image && (
                      <img src="./images/RR-1.png" className={styles.RRBG2} alt="" />
                    )}

                    <div className={styles.RR1}>
                      <img src="./images/RR-2.png" className={styles.RRi1} data-aos="fade-left" alt="" />
                    </div>
                    <div className={styles.RR2}>
                      <img src="./images/RR-3.png" className={styles.RRi2} data-aos="fade-right" alt="" />
                    </div>
                    <div className={styles.RR3}>
                      <img src="./images/RR-4.png" className={styles.RRi3 }data-aos="fade-left" alt="" />
                    </div>

                    
                  </div>
                </div>
            
                )}


                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.ndkasedfnsdifsdff} position-relative mb-4 mt-5 pt-5`}>
          <div className="custom-container pt-5">
            <div className="row">
              <div className="col-lg-5 mb-4">
                <div className={` ${styles.doksjoijfrerr_right} position-relative`}>
                  {serviceResponse.data?.fifth_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Template_13/${serviceResponse.data.fifth_section_image}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}

                  {slug === 'keyword-research-services' && (
                    <>
                      <div className={styles.SS1}>
                        <img src="./images/Key_Features_of_our_SEO_Keyword_Tools_img_2.png" className={styles.SSimg1} alt="" />
                      </div>
                      <div className={styles.SS2}>
                        <img src="./images/Key_Features_of_our_SEO_Keyword_Tools_img_1.png" className={styles.SSimg2} alt="" />
                      </div>
                    </>
                  )}

                </div>
              </div>

              <div className="col-lg-7 mb-4">
                <div className={styles.doksjoijfrerr_left}>
                  <h2 className="mb-4">
                    {serviceResponse.data?.fifth_section_title &&
                      serviceResponse.data.fifth_section_title}
                  </h2>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.fifth_section_description &&
                        serviceResponse.data.fifth_section_description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={` ${styles.sdmsdjhsds} position-relative`}>
          {serviceResponse.data?.sixth_section_image && (
            <img
              src={`${serviceResponse.image_url}/Template_13/${serviceResponse.data.sixth_section_image}`}
              alt=""
            />
          )}

          {slug === 'keyword-research-services' && (
            <>
              <div className={styles.RRIMGG1} >
                <img src="./images/RRIMGG2.png" className="RRIMGGR1" style={{position: 'absolute', width: 'var(--RRIMGGR1-width)', left: 'var(--RRIMGGR1-left)',  bottom: 'var(--RRIMGGR1-bottom)'}} alt="" />
              </div>
              <div className={styles.RRIMGG2} >
                <img src="./images/RRIMGG3.png" className="RRIMGGR2" style={{ position: 'absolute', width: 'var(--RRIMGG2-width)', bottom: 'var(--RRIMGG2-bottom)', left: 'var(--RRIMGG2-left)' }} alt="" />
              </div>
              <div className={styles.RRIMGG3} >
                <img src="./images/RRIMGG4.png" className="RRIMGGR3"style={{ position: 'absolute', width: 'var(--RRIMGG3-width)', top: 'var(--RRIMGG3-top)', right: 'var(--RRIMGG3-right)' }} alt="" />
              </div>
              <div className={styles.RRIMGG4} >
                <img src="./images/RRIMGG5.png" className="RRIMGGR4" style={{ position: 'absolute', width: 'var(--RRIMGGR4-width)', left: 'var(--RRIMGGR4-left)', bottom: 'var(--RRIMGGR4-bottom)', opacity:0 }} alt="" />
              </div>
              <div className={styles.RRIMGG5} >
                <img src="./images/RRIMGG6.png" className="RRIMGGR5" style={{ position: 'absolute', width: 'var(--RRIMGGR5-width)', left: 'var(--RRIMGGR5-left)', top: 'var(--RRIMGGR5-top)', opacity:0 }} alt="" />
              </div>
              <div className={styles.RRIMGG6} >
                <img src="./images/RRIMGG7.png" className="RRIMGGR6" style={{ position: 'absolute', width: 'var(--RRIMGGR6-width)', left: 'var(--RRIMGGR6-left)', bottom: 'var(--RRIMGGR6-bottom)', transform: 'rotateZ(-11deg)', opacity:0 }} alt="" />
              </div>
              <div className={styles.RRIMGG7} >
                <img src="./images/RRIMGG8.png" className="RRIMGGR7" style={{ position: 'absolute', width: 'var(--RRIMGGR7-width)', right: 'var(--RRIMGGR7-right)', bottom: 'var(--RRIMGGR7-bottom)', transform: 'rotateZ(-11deg)', opacity:0 }}  alt="" />
              </div>
              <div className={styles.RRIMGG8} >
                <img src="./images/RRIMGG9.png" className="RRIMGGR8" style={{ position: 'absolute', width: 'var(--RRIMGGR8-width)', right: 'var(--RRIMGGR8-right)', top: 'var(--RRIMGGR8-top)', transform: 'rotateZ(4deg)', opacity:0 }} alt="" />
              </div>
            </>
          )}

        </div>
        <LastSectionComponent />
      </main>
      </PageWrapper>
    </div>
  );
};
