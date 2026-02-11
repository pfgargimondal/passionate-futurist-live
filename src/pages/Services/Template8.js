import styles from "./Css/Template8.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
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

export const Template8 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({      
      duration: 2000,
      once: false,
    });
  }, []);

  gsap.to(".dmweijwer", {
    duration: 3,
    rotation: 360,
    x: 300,
    scrollTrigger: {
        trigger: ".dmweijwer",
        markers: false,
        scrub: true,        
        end: "top 230px"
    }
  });

  const imagePaths = [
    "./images/creative(1).png",
    "./images/creative(2).png",
    "./images/creative(3).png",
    "./images/creative(4).png",
  ];

  const [images, setImages] = useState(imagePaths);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages(prev => [...prev.slice(1), prev[0]]);
    }, 2000); // rotate every 2 seconds

    return () => clearInterval(interval);
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
                src={`${serviceResponse.image_url}/Template_8/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}
            {slug === 'wordpress-web-design-services' && (
              <>
              <div className={styles.doenrjewrwer}>
                <img src="./images/gy.png" className="position-absolute" data-aos="fade-down" alt="" />

                <img src="./images/mi (1).png" className="position-absolute" data-aos="fade-down" alt="" />
              </div>
              </>
            )}

            {slug === 'creative-digital-marketing-strategy' && (
              <>
              <div className={styles.dsfsdfsdf654df}>
                  <div className={styles.uhfju55d88}>
                    <img src={images[0]} alt=""/>
                  </div>
                  <div className={styles.uhfju55d88}>
                    <img src={images[1]} alt=""/>
                  </div>
                  <div className={styles.uhfju55d88}>
                    <img src={images[2]} alt=""/>
                  </div>
                  <div className={styles.uhfju55d88}>
                    <img src={images[3]} alt=""/>
                  </div>
              </div>
              </>
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

        <div className={`${styles.dfbghdfgdfgdf} ${styles.sfmlkdfdff}`}>
          <div className="custom-container">
            <div className={styles.mgjhbdfg}>
              <h2 className="mb-4">
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

        <div className={`${styles.doieflmeoiwjrowe} pt-5`}>
          <div className="container-fluid px-5">
            <div className={`${styles.idewhrwer_inner_wrapper} row`}>
              <div className="col-lg-4">
                <div className={`${styles.asedifoje_inner} p-2 sticky-top`}>
                  {serviceResponse.data?.fourth_section_image && (
                    <img src={`${serviceResponse.image_url}/Template_8/${serviceResponse.data.fourth_section_image}`} className="img-fluid" alt="" />
                  )}

                  {slug === 'creative-digital-marketing-strategy' && (
                  <>
                    <ul className={`${styles.blb_list} mb-0 position-absolute ps-0`}>
                      <li><img src="./images/lr.png" alt="" data-aos="fade-right" /></li>

                      <li><img src="./images/mi.png" alt="" data-aos="fade-left" /></li>

                      <li><img src="./images/csertfertwert.png" alt="" data-aos="fade-right" /></li>

                      <li><img src="./images/cd.png" alt="" data-aos="fade-left" /></li>

                      <li><img src="./images/fghdfc.png" alt="" data-aos="fade-right" /></li>
                    </ul>
                  </>
                  )}

                  {slug === 'wordpress-web-design-services' && (
                    <>
                      <div className={`${styles.askdjnerwer} position-absolute`}>
                        <div className="col-6">
                          <div className={styles.diheuiwhrewrwer}>
                            <img src="./images/Our Services Include (1).png" data-aos="fade-right" alt="" />
                          </div>
                        </div>

                        <div className="col-6 offset-6">
                          <div className={styles.diheuiwhrewrwer}>
                            <img src="./images/Our Services Include (2).png" data-aos="fade-left" alt="" />
                          </div>
                        </div>

                        <div className="col-6">
                          <div className={styles.diheuiwhrewrwer}>
                            <img src="./images/Our Services Include (3).png" data-aos="fade-right" alt="" />
                          </div>
                        </div>

                        <div className="col-6 offset-6">
                          <div className={styles.diheuiwhrewrwer}>
                            <img src="./images/Our Services Include (4).png" data-aos="fade-left" alt="" />
                          </div>
                        </div>

                        <div className="col-6">
                          <div className={styles.diheuiwhrewrwer}>
                            <img src="./images/Our Services Include (5).png" data-aos="fade-right" alt="" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                </div>
              </div>

              <div className="col-lg-8">
                <div className={`${styles.odijweirwerr_right} bg-white`}>
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
            </div>

            <div
              className={`idewhrwer_inner_wrapper row ${styles.cdfbikerfsdfsfeeqwe} mt-5`}
            >
              <div className="col-lg-8">
                <div className={`${styles.odijweirwerr_right} bg-white pe-0`}>
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

              <div className="col-lg-4">
                {slug === 'wordpress-web-design-services' ? (
                <>
                <div className={`${styles.asedifoje_inner} p-5 sticky-top`}>
                  {serviceResponse.data?.fifth_section_image && (
                    <img data-aos="zoom-in-up"
                      src={`${serviceResponse.image_url}/Template_8/${serviceResponse.data.fifth_section_image}`}
                      className="img-fluid" alt=""
                    />
                  )}
                </div> 
                </>
                ) : (
                  <>
                  <div className={`${styles.asedifoje_inner} p-5`}>
                    {serviceResponse.data?.fifth_section_image && (
                      <img data-aos="zoom-in-up"
                        src={`${serviceResponse.image_url}/Template_8/${serviceResponse.data.fifth_section_image}`}
                        className="img-fluid" alt="" 
                      />
                    )}
                  </div> 
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.xnjhxffgdf} position-relative`}>
          {serviceResponse.data?.sixth_section_image && (
            <img
              src={`${serviceResponse.image_url}/Template_8/${serviceResponse.data.sixth_section_image}`} alt=""
            />
          )}
          {slug === 'creative-digital-marketing-strategy' && (
              <>
              <ul className={styles.ikdjewkrwer}>
                <li>
                  <img src="/images/3z.png" className="dmweijwer position-absolute" alt="" />
                </li>

                <li>
                  <img src="/images/4z.png" className={`${styles.akmdlkcsjhke} position-absolute`} alt="" />
                </li>

                <li>
                  <img src="/images/2z.png" className="oidmewroekwrwe position-absolute" data-aos="fade-top" alt="" />
                </li>

                <li>
                  <img src="/images/1z.png" className="position-absolute" data-aos="fade-left" alt="" />
                </li>
              </ul>
              </>
          )}

          {slug === 'wordpress-web-design-services' && (
          <>
            <div className={styles.dolewjorwrwer}>
              <div className={`${styles.doijewkjwer} position-absolute`}>
                <img src="images/Digital Marketing Agency FAQs (4) (1).png" data-aos="fade-down-right" alt="" />
              </div>

              <div className={`${styles.doijewkjwer} position-absolute`}>
                <img src="images/Digital Marketing Agency FAQs (4) (2).png" data-aos="fade-up-right" alt="" />
              </div>

              <div className={`${styles.doijewkjwer} position-absolute`}>
                <img src="images/Digital Marketing Agency FAQs (4) (3).png" data-aos="fade-down-left" alt="" />
              </div>

              <div className={`${styles.doijewkjwer} position-absolute`}>
                <img src="images/Digital Marketing Agency FAQs (4) (4).png" data-aos="fade-up-left" alt="" />
              </div>
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
