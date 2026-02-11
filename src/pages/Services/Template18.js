import styles from "./Css/Template18.module.css";
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

export const Template18 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      AOS.init({      
        duration: 2000,
        once: false,
      });
    }, []);

  gsap.to(".RRIIMG1", {
    duration: 2,
    y:-100,
    scale:1,
    opacity:1,
    // repeat:-1,
    // yoyo:true,
    scrollTrigger: {
        trigger: ".RRIIMG1",
        // markers: true,
        scrub: true,
        end: "top 300px",
        start: "top 600px"
    }
    });

    gsap.to(".RRIIMG2", {
    duration: 2,
    delay:1,
    y:-50,
    x:50,
    scale:1,
    opacity:1,
    // repeat:-1,
    // yoyo:true,
    scrollTrigger: {
        trigger: ".RRIIMG1",
        // markers: true,
        scrub: true,
        end: "top 300px",
        start: "top 600px"
    }
    });
    gsap.to(".RRIIMG3", {
    duration: 2,
    delay:1.5,
    y:-50,
    x:-50,
    scale:1,
    opacity:1,
    // repeat:-1,
    // yoyo:true,
    scrollTrigger: {
        trigger: ".RRIIMG1",
        // markers: true,
        scrub: true,
        end: "top 300px",
        start: "top 600px"
    }
    });



  return (
    <div>
      <PageWrapper slug={slug} type="Template">
      {loading && <Loader />}
      <main>
        <div class={styles.dfgjhfgd}>
          <div class={`${styles.sdfghdfgdf} col-lg-6`}>
            <h1 class="mt-0 mb-0">
              {serviceResponse.data?.banner_title &&
                serviceResponse.data.banner_title}
            </h1>

            <p class="mt-3 mb-5">
              {serviceResponse.data?.banner_description &&
                serviceResponse.data.banner_description}
            </p>

            <div class={styles.vbddds}>
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

          <div class={`${styles.dbfghsdf} col-lg-6 position-relative`}>
            {serviceResponse.data?.banner_image && (
              <img
                src={`${serviceResponse.image_url}/Templete_18/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}

            {slug === 'authority-building-service' && (
              <>
                <div className="sp2">
                  <img src="./images/authority_build_banner_1.png" className={styles.titlii02} data-aos="fade-right" data-aos-delay="600" alt="" />
                </div>
                <div className="sp3">
                  <img src="./images/authority_build_banner_6.png" className={styles.titlii03} data-aos="fade-up-right" data-aos-delay="300"alt="" />
                </div>
                <div className="sp4">
                  <img src="./images/authority_build_banner_3.png" className={styles.titlii04}data-aos="fade-up-left" data-aos-delay="300"alt="" />
                </div>
                <div className="sp5">
                  <img src="./images/authority_build_banner_4.png" className={styles.titlii05} data-aos="fade-left" data-aos-delay="600" alt="" />
                </div>
                <div className="sp6">
                  <img src="./images/authority_build_banner_5.png" className={styles.titlii06}data-aos="fade-down-left" alt="" />
                </div>
                <div className="sp7">
                  <img src="./images/authority_build_banner_2.png" className={styles.titlii07} data-aos="fade-down-right" alt="" />
                </div>
              </>
            )}
          </div>
        </div>

        <div class={styles.fjhfdfgdfg}>
          <div class="custom-container">
            <div class={styles.sdfsdfsdf}>
              <h2>
                {serviceResponse.data?.second_section_title &&
                  serviceResponse.data.second_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.second_section_description &&
                    serviceResponse.data.second_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div class={styles.sdjvhyuysbdvsd}>
          <div class="custom-container">
            <div class={styles.fmnbjkfnvf}>
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
            <div class={styles.sdshyudssd}>
              <div class="row">
                <div class="col-lg-6">
                  <div
                    class={styles.dhujhbdsf555}
                    style={{ backgroundImage: "url(./images/d.png)" }}
                  >
                    <div class={`${styles.gbkjg5855} mt-4`}>
                      <div class={styles.fvnjfv55}>
                        {serviceResponse.data?.third_section_sub_image_one && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_18/${serviceResponse.data.third_section_sub_image_one}`}
                            alt=""
                          />
                        )}
                      </div>
                      <div class={styles.dfbhvhfdvgvfd2}>
                        <h4>
                          {serviceResponse.data?.third_section_sub_title_one &&
                            serviceResponse.data.third_section_sub_title_one}
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.third_section_sub_description_one &&
                              serviceResponse.data
                                .third_section_sub_description_one,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class={styles.dhujhbdsf555} style={{ backgroundImage: "url(./images/d.png)" }}>
                    <div class={`${styles.gbkjg5855} mt-4`}>
                      <div class={styles.fvnjfv55}>
                        {serviceResponse.data?.third_section_sub_image_two && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_18/${serviceResponse.data.third_section_sub_image_two}`}
                            alt=""
                          />
                        )}
                      </div>
                      <div class={styles.dfbhvhfdvgvfd2}>
                        <h4>
                          {serviceResponse.data?.third_section_sub_title_two &&
                            serviceResponse.data.third_section_sub_title_two}
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.third_section_sub_description_two &&
                              serviceResponse.data
                                .third_section_sub_description_two,
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

        <ServiceEnquiryForm loading={setLoading} slug={slug} />

        <div class={styles.sdhdvbusdsfs}>
          <div class="custom-container">
            <div class={styles.hbdhdcsdsds}>
              <div class="row">
                <div class="col-lg-6">
                  <div class={`${styles.cjdjcdc} position-relative mt-5`}>
                    {serviceResponse.data?.fourth_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_18/${serviceResponse.data.fourth_section_image}`}
                        alt=""
                      />
                    )}
                    {slug === 'authority-building-service' && (
                      <>
                        <div className={styles.RRIIMMG1}>
                          <img src="./images/authrity_build_2ndImg_1.png" className="RRIIMG1" style={{ position: "absolute", width: "var(--RRIIMG1-width)", height: "auto", top: "var(--RRIIMG1-top)", right: "var(--RRIIMG1-right)", transform: "scale(0.2)" , opacity:"0.2" }} alt="" />
                        </div>
                        <div className={styles.RRIIMMG2}>
                          <img src="./images/authrity_build_2ndImg_2.png" style={{ position: "absolute", width: "var(--RRIIMG2-width)", height: "auto", bottom: "var(--RRIIMG2-bottom)", right: "var(--RRIIMG2-right)", transform: "scale(0.2)" , opacity:"0.2" }} className="RRIIMG2" alt="" />
                        </div>
                        <div className={styles.RRIIMMG3}>
                          <img src="./images/authrity_build_2ndImg_3.png" className="RRIIMG3" style={{ position: "absolute", width: "var(--RRIIMG3-width)", height: "auto", bottom: "var(--RRIIMG3-bottom)", left: "var(--RRIIMG3-left)", transform: "scale(0.2)" , opacity:"0.2"  }} alt="" />
                        </div>
                      </>
                    )}

                  </div>
                </div>
                <div class="col-lg-6">
                  <div class={styles.fdhjhj}>
                    <h2>
                      {serviceResponse.data?.fourth_section_title &&
                        serviceResponse.data.fourth_section_title}
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
            </div>
          </div>
        </div>

        <div class={styles.fjhfdfgdfg}>
          <div class="custom-container">
            <div class={styles.sdfsdfsdf}>
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
