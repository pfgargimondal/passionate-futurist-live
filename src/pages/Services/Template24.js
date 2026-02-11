import styles from "./Css/Template24.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Template24 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({      
      duration: 2000,
      once: false,
    });
  }, []);

  gsap.to(".RRIMMG11", {
    duration: 2,
    y: -150,
    scale: 1,
    opacity:1,
    // repeat:-1,
    // yoyo:true,
    scrollTrigger: {
        trigger: ".RRIMMG12",
        // markers: true,
        scrub: true,
        end: "top 420px",
        start: "top 700px"
    }
    });
    gsap.to(".RRIMMG12", {
    duration: 2,
    y:-150,
    x:150,
    scale: 1,
    opacity:1,
    // repeat:-1,
    // yoyo:true,
    scrollTrigger: {
        trigger: ".RRIMMG12",
        // markers: true,
        scrub: true,
        end: "top 420px",
        start: "top 700px"
    }
    });
    gsap.to(".RRIMMG13", {
    duration: 2,
    y:150,
    x:150,
    scale: 1,
    opacity:1,
    // repeat:-1,
    // yoyo:true,
    scrollTrigger: {
        trigger: ".RRIMMG12",
        // markers: true,
        scrub: true,
        end: "top 420px",
        start: "top 700px"
    }
    });
    gsap.to(".RRIMMG14", {
    duration: 2,
    y: 150,
    scale: 1,
    opacity:1,
    // repeat:-1,
    // yoyo:true,
    scrollTrigger: {
        trigger: ".RRIMMG12",
        // markers: true,
        scrub: true,
        end: "top 420px",
        start: "top 700px"
    }
    });
    gsap.to(".RRIMMG15", {
    duration: 2,
    y: 150,
    x:-150,
    scale: 1,
    opacity:1,
    // repeat:-1,
    // yoyo:true,
    scrollTrigger: {
        trigger: ".RRIMMG12",
        // markers: true,
        scrub: true,
        end: "top 420px",
        start: "top 700px"
    }
    });
    gsap.to(".RRIMMG16", {
    duration: 2,
    y:-150,
    x:-150,
    scale: 1,
    opacity:1,
    // repeat:-1,
    // yoyo:true,
    scrollTrigger: {
        trigger: ".RRIMMG12",
        // markers: true,
        scrub: true,
        end: "top 420px",
        start: "top 700px"
    }
    });

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

       <div className={`${styles.dbfghsdf} col-lg-6`}>
            {serviceResponse.data?.banner_image && (
              <img
                src={`${serviceResponse.image_url}/Templete_24/${serviceResponse.data.banner_image}`}
                className={styles.banner_bg}
                alt=""
              />
            )}


            {slug === 'catalogue-design-services' && (
              <div className={styles.cdsimgs}>
                <img src="/images/cdscontent.png" className={styles.cdsimg1} data-aos="fade-down-right" alt=""/>

                <img src="/images/cdslayouts.png" className={styles.cdsimg2} data-aos="fade-down-left" alt=""/>

                <img src="/images/cdsprint.png" className={styles.cdsimg3} data-aos="fade-up-right" alt=""/>

                <img src="/images/cdsbrand.png" className={styles.cdsimg4} data-aos="fade-up-left" alt=""/>
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

        <div className={styles.sdvggsdcsd}>
          <div className="custom-container">
            <div className={styles.bjvbffbgf}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={`${styles.fdnvhjfdv} mt-5 position-relative`}>
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_24/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}
                    {slug === 'catalogue-design-services' && (
                      <div className={styles.one}>
                        <img src="./images/catelog_pre2.png" className={styles.im1} data-aos="fade-down-left" alt=""/>
                        <img src="./images/catelog_pre3.png" className={styles.im2} data-aos="zoom-in-right"alt="" />
                        <img src="./images/catelog_pre4.png" className={styles.im3} data-aos="fade-up" data-aos-duration="3000" alt=""/>
                        <img src="./images/catelog_pre5.png" className={styles.im4}  data-aos="fade-up-left" alt=""/>
                        <img src="./images/catelog_pre6.png" className={styles.im5} data-aos="fade-up-right" alt=""/>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.sdbghcsdcsd}>
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
                    <button onClick={() => navigate('/contact-us')}>
                        Contact Us <i className="fa-solid fa-angles-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ServiceEnquiryForm loading={setLoading} slug={slug} />

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
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

        <div className={styles.sdvggsdcsd}>
          <div className="custom-container">
            <div className={styles.bjvbffbgf}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.sdbghcsdcsd}>
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
                    <button onClick={() => navigate('/contact-us')}>
                        Contact Us <i className="fa-solid fa-angles-right"></i>
                    </button>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className={styles.fdnvhjfdv} style={{marginTop:"15%"}}>
                    {serviceResponse.data?.fifth_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_24/${serviceResponse.data.fifth_section_image}`}
                        alt=""
                      />
                    )}

                    {slug === 'catalogue-design-services' && (
                      <>
                        <div className={styles.RRIMMGG1} >
                          <img src="./images/catelog_2ndImg_2.png" className="RRIMMG11" style={{position: 'absolute', width: 'var(--RRIMMG11-width)', height: 'auto', left: 'var(--RRIMMG11-left)', top: 'var(--RRIMMG11-top)',transform: "scale(0.2)", opacity: 0.2}} alt="" />
                        </div>
                        <div className={styles.RRIMMGG2} >
                          <img src="./images/catelog_2ndImg_3.png" className="RRIMMG12" style={{position: 'absolute', width: 'var(--RRIMMG12-width)', height: 'auto', right: 'var(--RRIMMG12-right)', top: 'var(--RRIMMG12-top)', transform: "scale(0.2)", opacity: 0.2}} alt="" />
                        </div>
                        <div className={styles.RRIMMGG3} >
                          <img src="./images/catelog_2ndImg_4.png" className="RRIMMG13" style={{position: 'absolute', width: 'var(--RRIMMG13-width)', height: 'auto', right: 'var(--RRIMMG13-right)', bottom: 'var(--RRIMMG13-bottom)', transform: "scale(0.2)", opacity: 0.2}} alt="" />
                        </div>
                        <div className={styles.RRIMMGG4} >
                          <img src="./images/catelog_2ndImg_5.png" className="RRIMMG14" style={{position: 'absolute', width: 'var(--RRIMMG14-width)', height: 'auto', left: 'var(--RRIMMG14-left)', bottom: 'var(--RRIMMG14-bottom)', transform: "scale(0.2)", opacity: 0.2}} alt="" />
                        </div>
                        <div className={styles.RRIMMGG5} >
                          <img src="./images/catelog_2ndImg_6.png" className="RRIMMG15" style={{position: 'absolute', width: 'var(--RRIMMG15-width)', height: 'auto', left: 'var(--RRIMMG15-left)', top: 'var(--RRIMMG15-top)', transform: "scale(0.2)", opacity: 0.2}} alt="" />
                        </div>
                        <div className={styles.RRIMMGG6} >
                          <img src="./images/catelog_2ndImg_7.png" className="RRIMMG16" style={{position: 'absolute', width: 'var(--RRIMMG16-width)', height: 'auto', left: 'var(--RRIMMG16-left)', top: 'var(--RRIMMG16-top)', transform: "scale(0.2)", opacity: 0.2}} alt="" />
                        </div>
             
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fdnbvgdfgdfgdf}>
          <div className="custom-container">
            <div className={styles.cfbvhdfgdf}>
              <h2 className="text-center">
                {serviceResponse.data?.sixth_section_title &&
                  serviceResponse.data.sixth_section_title}
              </h2>

              <div
                className="text-center py-4 mb-0"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.sixth_section_description &&
                    serviceResponse.data.sixth_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div className={` ${styles.xnjhxffgdf} position-relative`}>
          {serviceResponse.data?.featured_image && (
            <img
              src={`${serviceResponse.image_url}/Templete_24/${serviceResponse.data.featured_image}`}
              alt=""
            />
          )}

          {slug === 'catalogue-design-services' && (
            <div className={styles.lead_page}>
                <img src="./images/catalogue_img_book.png" className={styles.book} alt=""/>

                <img src="./images/catalogue_img_design.png" className={styles.design} data-aos="zoom-out-up" alt=""/>

                <img src="./images/catalogue_img_graph.png" className={styles.graph} data-aos="zoom-out-down" alt=""/>

                <img src="./images/catalogue_img1.png" className={styles.pic1} data-aos="fade-right" alt=""/>

                <img src="./images/catalogue_img2.png" className={styles.pic2} data-aos="fade-down" alt=""/>

                <img src="./images/catalogue_img3.png" className={styles.pic3} alt=""/>

                <img src="./images/catalogue_img4.png" className={styles.pic4} data-aos="fade-left" alt=""/>

                <img src="./images/catalogue_img5.png" className={styles.pic5} data-aos="fade-down" alt=""/>

                <img src="./images/catalogue_img6.png" className={styles.pic6} alt=""/>
           </div>
          )}
        </div>
        <LastSectionComponent />
      </main>
      </PageWrapper>
    </div>
  );
};
