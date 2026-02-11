import styles from "./Css/Template44.module.css";
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
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Template44 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({      
      duration: 2000,
      once: false,
    });
  }, []);

  gsap.to(".titli1", {
  y: 80,
  scrollTrigger: {
      trigger: ".titli1",
      markers: false,
      scrub: true,
      end: "top 250px",
      start: "top 500px"
  }
});

 gsap.to(".titli2", {
  x: 120,
  scrollTrigger: {
      trigger: ".titli2",
      markers: false,
      scrub: true,
      end: "top 350px",
      start: "top 650px"
  }
});

 gsap.to(".titli4", {
  x: -120,
  scrollTrigger: {
      trigger: ".titli4",
      markers: false,
      scrub: true,
      end: "top 250px",
      start: "top 500px"
  }
});

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
                    src={`${serviceResponse.image_url}/Templete_44/${serviceResponse.data.banner_image}`}
                    alt=""
                  />
                )}

                {slug === 'infographics-design-company' && ( 
                  <div className={styles.infographic_page}>
                    <img src="./images/info1.webp" className={styles.img1} alt=""/> 

                    <img src="./images/info2.webp" className={styles.img2} alt=""/> 

                    <img src="./images/info3.webp" className={styles.img3} alt=""/> 

                    <img src="./images/info4.webp" className={styles.img4} alt=""/> 

                    <img src="./images/info5.webp" className={styles.img5} alt=""/> 
                  </div>
                )}

                {slug === 'website-maintenance-company' && ( 
                  <div className={styles.maintainance_page}>
                    <img src="./images/web1.webp" className={styles.image1} alt=""/> 
                    
                    <img src="./images/web2.webp" className={styles.image2} alt=""/> 

                    <img src="./images/web3.webp" className={styles.image3} alt=""/>

                    <img src="./images/web4.webp" className={styles.image4}  alt=""/>

                    <img src="./images/web5.webp" className={styles.image5}  alt=""/> 

                    <img src="./images/web6.webp" className={styles.image6}  alt=""/> 

                    <img src="./images/web7.webp" className={styles.image7}  alt=""/> 

                    <img src="./images/web8.webp" className={styles.image8}  alt=""/> 

                    <img src="./images/web9.webp" className={styles.image9}  alt=""/> 

                    <img src="./images/web10.webp" className={styles.image10}  alt=""/>                    
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

          <div className={styles.fghsdfgsdfgdfg}>
            <div className="custom-container">
              <div className={styles.fghjkdfghdf}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className={styles.dfbhdfdf6528}>
                      <div className={styles.fghsdfsdf}>
                        {serviceResponse.data?.third_section_image_one && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_44/${serviceResponse.data.third_section_image_one}`}
                            alt=""  data-aos="flip-left"
                          />
                        )}
                      </div>
                      <div className={styles.fdfdfg}>
                        <h4>{serviceResponse.data?.third_section_title_one}</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.third_section_description_one,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className={styles.dfbhdfdf6528}>
                      <div className={styles.fghsdfsdf}>
                        {serviceResponse.data?.third_section_image_two && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_44/${serviceResponse.data.third_section_image_two}`}
                            alt=""  data-aos="flip-right"
                          />
                        )}
                      </div>
                      <div className={styles.fdfdfg}>
                        <h4>{serviceResponse.data?.third_section_title_two}</h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.third_section_description_two,
                          }}
                        />
                      </div>
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

          <div className={styles.dfngjhdfgdfg}>
            <div className="custom-container">
              <div className={styles.dfghdfgdf}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className={styles.fgydfgdfg}>
                      <h2>{serviceResponse.data?.fifth_section_title}</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            serviceResponse.data?.fifth_section_description,
                        }}
                      />
                      <button onClick={() => navigate("/contact-us")}>
                        Contact Us
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className={` ${styles.cfbgjhcfdf} position-relative`}>
                      {serviceResponse.data?.fifth_section_image && (
                        <img
                          src={`${serviceResponse.image_url}/Templete_44/${serviceResponse.data.fifth_section_image}`}
                          alt=""
                        />
                      )}

                      {slug === 'infographics-design-company' && ( 
                        <div className={styles.info2_page}>
                          <img src="./images/infog1.webp" className={styles.pic1} data-aos="zoom-in-up"  alt=""/> 

                          <img src="./images/infog2.webp" className={styles.pic2} data-aos="fade-up-left" alt=""/>

                          <img src="./images/infog3.webp" className={styles.pic3}  data-aos="fade-up-right"   alt=""/>

                          <img src="./images/infog4.webp" className={styles.pic4} data-aos="fade-left" alt=""/>

                          <img src="./images/infog5.webp" className={styles.pic5} data-aos="fade-right" alt=""/>
                        </div>
                      )}

                      {slug === 'website-maintenance-company' && ( 
                        <>
                          <div className={styles.website1}>
                            <img src="./images/website01.webp" className="titli1" style={{ position: "absolute", width: "175px", height: "auto", top: "-60px", left: "58px" }} alt=""/>
                          </div>
                          
                          <div className={styles.website2}>
                            <img src="./images/website02.webp" className="titli2" style={{ position: "absolute", width: "129px", height: "auto", top: "425px", left: "-60px" }}  alt=""/>
                          </div>

                          <div className={styles.website4}>
                            <img src="./images/website04.webp" className="titli4" style={{ position: "absolute", width: "157px", height: "auto", top: "235px", right: "-120px" }} alt=""/>
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
                <h2>{serviceResponse.data?.sixth_section_title}</h2>
                <div
                  className="pt-4"
                  dangerouslySetInnerHTML={{
                    __html: serviceResponse.data?.sixth_section_description,
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
