import styles from "./Css/Template9.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from "aos";
import "aos/dist/aos.css";

export const Template9 = ({ serviceResponse, slug }) => {

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

          <div className={`${styles.dbfghsdf} col-lg-6 position-relative`}>
            {serviceResponse.data?.banner_image && (
              <img
                src={`${serviceResponse.image_url}/Template_9/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}
            {slug === 'social-bookmarking-services' && (
              <div className={styles.bookm}>
                <img src="./images/social_bookmarking_banner_1.png" className={styles.m1} alt="" />
                <img src="./images/social_bookmarking_banner_2.png" className={styles.m2} alt="" />
                <img src="./images/social_bookmarking_banner_3.png" className={styles.m3} alt="" />
                <img src="./images/social_bookmarking_banner_4.png" className={styles.m4} alt="" />
              </div>
            )}

            {slug === 'best-research-paper-writing-services' && ( 
              <div className={styles.brpwsimgs}>
                <img src="/images/brpwshat.webp" className={styles.brpwsimg1} alt=""/>

                <img src="/images/brpwscoin.webp" className={styles.brpwsimg2} alt=""/>

                <img src="/images/brpwscircle.webp" className={styles.brpwsimg3} alt=""/>
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
        <div
          className={`${styles.dfbjhfdfgdf}  py-5 mt-5`}
          style={{
            backgroundImage: "url(./images/d.png)",
          }}
        >
          <div className="container-fluid p-5">
            <div className="row justify-content-center">
              <div className="col-lg-5 mb-4">
                <div className={`${styles.woije_inner}  p-4`}>
                  <h4>
                    {serviceResponse.data?.third_section_title &&
                      serviceResponse.data.third_section_title}
                  </h4>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.third_section_description &&
                        serviceResponse.data.third_section_description,
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-5 mb-4">
                <div
                  className={`${styles.woije_inner} ${styles.fdvdfbrrscvd} p-4`}
                >
                  <h4>
                    {serviceResponse.data?.fourth_section_title &&
                      serviceResponse.data.fourth_section_title}
                  </h4>
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

            <div className="row justify-content-center">
              <div className="col-lg-5 mb-4">
                <div className={`${styles.woije_inner} position-relative ${styles.dscsdfsrrrr}`}>
                  {serviceResponse.data?.fifth_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Template_9/${serviceResponse.data.fifth_section_image}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}
                  {slug === 'social-bookmarking-services' && (
                    <>
  
                      <div className={styles.sp2}>
                        <img src="./images/social_book2.png" className={styles.sp02}  alt=""/>
                      </div>
                      <div className={styles.sp3}>
                        <img src="./images/social_book3.png" className={styles.sp03}alt=""/>
                      </div>
                      <div className={styles.sp4}>
                        <img src="./images/social_book4.png" className={styles.sp04} alt=""/>
                      </div>
                    </>
                  )}

                  {slug === 'best-research-paper-writing-services' && ( 
                    <div className={styles.ones}>
                      <img src="./images/best_research_2nd_img_1.png" className={styles.s1} alt=""/>
                      <img src="./images/best_research_2nd_img_2.png" className={styles.s2} alt=""/>
                      <img src="./images/best_research_2nd_img_3.png" className={styles.s3} alt=""/>
                      <img src="./images/best_research_2nd_img_4.png" className={styles.s4} alt=""/>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-5 mb-4">
                <div className={`${styles.woije_inner} p-4`}>
                  <h4>
                    {serviceResponse.data?.fifth_section_title &&
                      serviceResponse.data.fifth_section_title}
                  </h4>
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
        <LastSectionComponent />
      </main>
      </PageWrapper>
    </div>
  );
};
