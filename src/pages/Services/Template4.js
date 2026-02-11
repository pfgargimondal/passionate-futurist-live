import styles from "./Css/Template4.module.css";
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

export const Template4 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      AOS.init({      
        duration: 2000,
        once: false,
      });
    }, []);

    gsap.to(".Rpicc1", {
  duration: 3,
  y: -100,
  x:100,
  // repeat:-1,
  // yoyo:true,
  scrollTrigger: {
      trigger: ".Rpicc3",
      // markers: true,
      scrub: true,
      end: "top 200px",
      start: "top 500px"
  }
});

 gsap.to(".Rpicc2", {
  duration: 3,
  y: -100,
  x:-100,
  // repeat:-1,
  // yoyo:true,
  scrollTrigger: {
      trigger: ".Rpicc3",
      // markers: true,
      scrub: true,
      end: "top 160px",
      start: "top 440px"
  }
});
  gsap.to(".Rpicc3", {
    duration: 3,
    y: 100,
    // repeat:-1,
    // yoyo:true,
    scrollTrigger: {
        trigger: ".Rpicc3",
        // markers: true,
        scrub: true,
        end: "top 160px",
        start: "top 440px"
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
                  src={`${serviceResponse.image_url}/Template_4/${serviceResponse.data.banner_image}`} alt=""
                />
              )}
              {slug === 'article-submission-seo-service-company' && (
                <>
                  <div className={styles.RRDD1}>
                    <img src="./images/yoiyu8.png" className={styles.RRDG1} alt="" />
                  </div>
                  <div className={styles.RRDD2}>
                    <img src="./images/yuyg.png" className={styles.RRDG2} alt="" />
                  </div>
                  <div className={styles.RRDD3}>
                    <img src="./images/iu.png" className={styles.RRDG3} alt="" />
                  </div>
                  <div className={styles.RRDD4}>
                    <img src="./images/utu.png" className={styles.RRDG4} alt="" />
                  </div>
                  <div className={styles.RRDD5}>
                    <img src="./images/RRD6.png" className={styles.RRDG5} alt="" />
                  </div>
                </>
              )}

              {slug === 'sport-advertisement-service' && (
                <div className={styles.sports_page}>
                  <img src="./images/s_img1.webp" className={styles.img1} data-aos="fade-up" alt=""/> 

                  <img src="./images/s_img2.webp" className={styles.img2} data-aos="fade-down" alt=""/> 

                  <img src="./images/s_img3.webp" className={styles.img3} data-aos="fade-down" alt=""/> 
                  
                  <img src="./images/s_img4.webp" className={styles.img4} data-aos="fade-up" alt=""/> 

                  <img src="./images/s_img5.webp" className={styles.img5}  data-aos="fade-left" alt=""/> 

                  <img src="./images/s_img6.webp" className={styles.img6} data-aos="fade-right" alt=""/> 
                </div>
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

        <div
          className={`${styles.dvbrgdvyhyerrrr} position-realtive my-5`}
          style={{
            backgroundImage: "url(./images/wmremove-transformed.jpeg)",
          }}
        >
          <div className={styles.dvbrgdvyhyerrrr_overlay}>
            <div className="custom-container py-5">
              <div className={styles.sdfsdfsdf}>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h2 className="mb-0">
                    {serviceResponse.data?.third_section_title &&
                      serviceResponse.data.third_section_title}
                  </h2>

                   <button className="btn126">
                    <a href="tel:8420202891" style={{ color: "inherit", textDecoration: "none" }}>
                      Get In Touch With Us
                    </a>
                  </button>
                </div>

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
        </div>

        <div className={styles.fjhjdfdfgdf}>
          <div className="container-fluid px-5">
            <div className={`${styles.diksijfejor_wrapper} bg-white p-5`}>
              <div className={styles.aoidjniehrrrr_right}>
                <h2 className="position-relative mb-3">
                  {serviceResponse.data?.fourth_section_title &&
                    serviceResponse.data.fourth_section_title}
                </h2>

                <div className="row align-items-center">
                  <div className="col-lg-7 mb-4">
                    <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data?.fourth_section_description &&
                          serviceResponse.data.fourth_section_description,
                      }}
                    />
                  </div>

                  <div className="col-lg-5 mb-4">
                    <div className={`${styles.aoidjniehrrrr_left} position-relative`}>
                      {serviceResponse.data?.fourth_section_image && (
                        <img
                          src={`${serviceResponse.image_url}/Template_4/${serviceResponse.data.fourth_section_image}`}
                          className="img-fluid" alt=""
                        />
                      )}
                      {slug === 'article-submission-seo-service-company' && (
                        <>
                          <div className={styles.RRRD1} >
                            <img src="./images/best_articel_img1.png" className={styles.RRRDD1} data-aos="fade-up-left" alt="" />
                          </div>
                          <div className={styles.RRRD2} >
                            <img src="./images/best_articel_img2.png" className={styles.RRRDD2} data-aos="fade-down-right" alt="" />
                          </div>
                          <div className={styles.RRRD3} >
                            <img src="./images/best_articel_img3.png" className={styles.RRRDD3} data-aos="fade-down-left" alt="" />
                          </div>
                          <div className={styles.RRRD4} >
                            <img src="./images/best_articel_img4.png" className={styles.RRRDD4} data-aos="zoom-out-down" alt="" />
                          </div>
                        </>
                      )}

                      {slug === 'sport-advertisement-service' && (
                        <div>
                          <div className={styles.Rpic1}>
                            <img src="./images/Rpic1.webp" className="Rpicc1" style={{ position: "absolute", width: "11rem", bottom: "-73px", left: "-91px" }} alt="" />
                          </div>

                          <div className={styles.Rpic2}>
                            <img src="./images/Rpic2.webp" className="Rpicc2" style={{ position: "absolute", width: "10.5rem", bottom: "-70px", right: "-81px" }} alt="" />
                          </div>

                          <div className={styles.Rpic3}>
                            <img src="./images/Rpic3.webp" className="Rpicc3" style={{ position: "absolute", width: "10rem", top: "-95px", left: "166px" }} alt="" />
                          </div>
                        </div>
                      )} 
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sdfsdcdrerrrr}>
          <div className="container-fluid">
            <div className={`${styles.diksijfejor_wrapper} text-center position-relative bg-white`}>
              <h2 className="position-relative mb-3">
                {serviceResponse.data?.fifth_section_title &&
                  serviceResponse.data.fifth_section_title}
              </h2>
              <div
                className="mb-5"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.fifth_section_description &&
                    serviceResponse.data.fifth_section_description,
                }}
              />
              {serviceResponse.data?.fifth_section_image && (
                <img
                  src={`${serviceResponse.image_url}/Template_4/${serviceResponse.data.fifth_section_image}`}
                  className="img-fluid" alt=""
                />
              )}
              {slug === 'article-submission-seo-service-company' && (
                <div className={styles.article_sub}>
                    <img src="./images/artical_sub_last_img1.png" className={styles.g1} alt="" />

                    <img src="./images/artical_sub_last_img2.png" className={styles.g2} alt="" />

                    <img src="./images/artical_sub_last_img4.png" className={styles.g3} alt="" />

                    <img src="./images/artical_sub_last_img3.png" className={styles.g4} alt="" />
                </div>
              )}

              {slug === 'sport-advertisement-service' && ( 
                <div className={styles.sasimgs}>
                  <img src="/images/saskey.webp" className={styles.sasimg1} alt=""/>

                  <img src="/images/sascomp.webp" className={styles.sasimg2} alt=""/>

                  <img src="/images/sasboard.webp" className={styles.sasimg3} alt=""/>

                  <img src="/images/sasshirt.webp" className={styles.sasimg4} alt=""/>
                </div>
              )}
            </div>
          </div>
        </div>

        <LastSectionComponent />
      </main>
      </PageWrapper>
    </div>
  );
};
