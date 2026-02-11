import styles from "./Css/Template3.module.css";
import { useEffect, useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const Template3 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false, // Animations only happen once
      });
    }, []);

    gsap.to(".llspic1", {
      x: "-80%",
      duration: 3,
      opacity: 1,
      scrollTrigger:{
        trigger: ".llspic1",
        scrub: true,
        end: "top 230px"
      }
    });

    gsap.to(".llspic3", {
      x: 55,
      duration: 3,
      opacity: 1,
      scrollTrigger:{
        trigger: ".llspic3",
        scrub: true,
        start: "top 700px",
        end: "top 230px"
      }
    });



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
                {serviceResponse.data?.banner_title && serviceResponse.data.banner_title}
              </h1>

              <p className="mt-3 mb-5">
                {serviceResponse.data?.banner_description && serviceResponse.data.banner_description}
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

            <div className={`${styles.dbfghsdf} position-relative col-lg-6`}>
              {serviceResponse.data?.banner_image && (
                <img
                  src={`${serviceResponse.image_url}/Templete_3/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}

              {slug === 'local-listing-services' && (
                <>
                  <div className={styles.spp01}>
                    <img src="./images/local_list_img_2.png" className={styles.sss1} alt=""/>
                  </div>
                  <div className={styles.spp02}>
                    <img src="./images/local_list_img_1.png" className={styles.sss2} alt=""/>
                  </div>
                  <div className={styles.spp03}>
                    <img src="./images/local_list_img_4.png" className={styles.sss3} alt=""/>
                  </div>
                  <div className={styles.spp04}>
                    <img src="./images/local_list_img_3.png" className={styles.sss4} alt=""/>
                  </div>
                </>
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
                  __html: serviceResponse.data?.second_description && serviceResponse.data.second_description,
                }}
              />
            </div>
          </div>
        </div>

        <ServiceForm loading={setLoading} slug={slug} />

        <div className={`${styles.fjhfdfgdfg} pb-5`}>
          <div className="custom-container pb-5">
            <div className={styles.sdfsdfsdf}>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.second_another_description &&
                    serviceResponse.data.second_another_description,
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.duiewmjroiweorrr}>
          <div className="custom-container">
            <div className={`row ${styles.ndjiwenkndfuiwehrwer}`}>
              <div className="col-lg-8 mb-4">
                <div className={`${styles.dienwm_iuemrer} position-relative`}>
                  <h2 className="my-4">
                    {serviceResponse.data?.third_section_title && serviceResponse.data.third_section_title}
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

              <div className="col-lg-4">
                <div className={`${styles.dlkeomwlkmroewr_inner} sticky-top`}>
                  {serviceResponse.data?.third_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_3/${serviceResponse.data.third_section_image}`}
                      className="img-fluid"
                      alt=""
                    />
                  )}
                  {slug === 'local-listing-services' && (
                    <div className={styles.llspics}>
                      <img 
                          src="./images/llshouse.png" 
                          className="llspic1" 
                          style={{ 
                            position: "absolute",
                            width: "var(--llspic1-width)",
                            top: "var(--llspic1-top)",
                            right: "var(--llspic1-right)",
                            opacity: "0"
                          }} 
                          alt=""
                        />

                      <img src="./images/llslocation.png" className={styles.llspic2} alt=""/>

                      <img
                          src="./images/llsrmcus.png"
                          className="llspic3"
                          style={{
                            position: "absolute",
                            width: "var(--llspic3-width)", 
                            left: "var(--llspic3-left)",
                            bottom: "var(--llspic3-bottom)"
                          }}
                          alt=""
                        />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={`row ${styles.ndjiwenkndfuiwehrwer}`}>
              <div className="col-lg-4">
                <div className={`${styles.dlkeomwlkmroewr_inner} sticky-top`}>
                  {serviceResponse.data?.fourth_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_3/${serviceResponse.data.fourth_section_image}`}
                      className="img-fluid"
                      alt=""
                    />
                  )}
                  {slug === 'local-listing-services' && (
                    <div className={styles.listing}>
                      <img src="./images/local_list_fourth_1.png" className={styles.l1} alt="" />
                      <img src="./images/local_list_fourth_2.png" className={styles.l2} data-aos="fade-down-left" alt="" />
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-8 mb-4">
                <div className={`${styles.dienwm_iuemrer} ${styles.uienniuhwerwewe_jdiuewr} position-relative`}>
                  <h2 className="my-4">
                    {serviceResponse.data?.fourth_section_title && serviceResponse.data.fourth_section_title}
                  </h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.fourth_section_description &&
                        serviceResponse.data.fourth_section_description,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className={`row ${styles.ndjiwenkndfuiwehrwer}`}>
              <div className="col-lg-8 mb-4">
                <div className={`${styles.dienwm_iuemrer} position-relative`}>
                  <h2 className="my-4">
                    {serviceResponse.data?.fifth_section_title && serviceResponse.data.fifth_section_title}
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

              <div className="col-lg-4">
                <div className={`${styles.dlkeomwlkmroewr_inner} sticky-top`}>
                  {serviceResponse.data?.fifth_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_3/${serviceResponse.data.fifth_section_image}`}
                      className="img-fluid"
                      alt=""
                    />
                  )}

                  {slug === 'local-listing-services' && (
                    <>
                      <div className={styles.ss1}>
                        <img src="/images/local_listing_fifth_1.png" className={styles.ss01} data-aos="fade-down-left"alt=""/>
                      </div>
                      <div className={styles.ss2}>
                        <img src="/images/local_listing_fifth_2.png" className={styles.ss02} data-aos="fade-up-right"alt=""/>
                      </div>
                      <div className={styles.ss3}>
                        <img src="/images/local_listing_fifth_3.png" className={styles.ss03}data-aos="fade-up-left" alt=""/>
                      </div>
                      <div className={styles.ss4}>
                        <img src="/images/local_listing_fifth_4.png" className={styles.ss04}data-aos="fade-down-right" alt=""/>
                      </div>
                    </>
                  )} 

                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className={`${styles.dlkeomwlkmroewr_inner} sticky-top`}>
                  {serviceResponse.data?.sixth_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_3/${serviceResponse.data.sixth_section_image}`}
                      className="img-fluid"
                      alt=""
                    />
                  )}

                  {slug === 'local-listing-services' && (
                    <>
                      <div className={styles.RIMG1} >
                        <img src="./images/RIMG1.png" className={styles.RIMGG1} data-aos="zoom-out-right" alt="" />
                      </div>
                      <div className={styles.RIMG2} >
                        <img src="./images/RIMG2.png" className={styles.RIMGG2} data-aos="zoom-out-left" alt="" />
                      </div>
                      <div className={styles.RIMG3} >
                        <img src="./images/RIMG3.png" className={styles.RIMGG3} data-aos="zoom-out-down" alt="" />
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="col-lg-8 mb-4">
                <div className={`${styles.dienwm_iuemrer} ${styles.uienniuhwerwewe_jdiuewr} position-relative`}>
                  <h2 className="my-4">
                    {serviceResponse.data?.sixth_section_title && serviceResponse.data.sixth_section_title}
                  </h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.sixth_section_description &&
                        serviceResponse.data.sixth_section_description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.sdmsdjhsds}>
          {serviceResponse.data?.featured_image && (
            <img
              src={`${serviceResponse.image_url}/Templete_3/${serviceResponse.data.featured_image}`}
              alt=""
            />
          )}
        </div> */}

        <LastSectionComponent />
      </main>
      </PageWrapper>
    </div>
  )
}
