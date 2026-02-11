import styles from "./Css/Template46.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PageWrapper } from "../../SEOComponent/PageWrapper";

import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Template46 = ({ serviceResponse, slug }) => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animations only happen once
    });
  }, []);

  gsap.to(".sdvfdvvv", {
    duration: 4,
    x: 350,
    opacity: 1,
    scrollTrigger: {
      trigger: ".sdvfdvvv",
      markers: false,
      scrub: true,
      end: "top 250px"
    }
  });

  gsap.to(".cdfscs", {
    duration: 4,
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: ".cdfscs",
      markers: false,
      scrub: true,      
      end: "top 200px"
    }
  });

  gsap.to(".sdvsfrsfer", {
    duration: 4,
    x: -350,
    opacity: 1,
    scrollTrigger: {
      trigger: ".sdvsfrsfer",
      markers: false,
      scrub: true,
      end: "top 250px"
    }
  });

  const line1 = "Professional Academic";
  const line2 = "Writing Services";
 
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

            <div className={`${styles.dbfghsdf} position-relative col-lg-6`}>
              {serviceResponse.data?.banner_image && (
                <img
                  src={`${serviceResponse.image_url}/Templete_46/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}
       
              {slug === 'content-writing-services' && (
                <>
                  <div className={styles.dfdsf52d1}>
                    <div className={`${styles.box} ${styles.updown}`}>
                      <img src="./images/contentimg (2).png" alt="" />
                    </div>
                  </div>

                  <div className={styles.dfdsf52d2}>
                    <div className={`${styles.box} ${styles.leftright}`}>
                      <img src="./images/contentimg (3).png" alt="" />
                    </div>
                  </div>

                  <div className={styles.dfdsf52d}>
                    <div className={`${styles.box} ${styles.updown}`}>
                      <img src="./images/contentimg (1).png" alt="" />
                    </div>
                  </div>
                </>
              )}

              {slug === 'professional-academic-writing-services' && (
                <>
                  <ul className={`${styles.idewjknrwer} ps-0 mb-0`}>
                    <li><img src="./images/z4.png" className="position-absolute" data-aos="fade-top" alt="" /></li>

                    <li><img src="./images/c5.png" className="position-absolute" data-aos="fade-top" alt="" /></li>
                  </ul>

                  <div className={styles.wrapperfrsdbgdf}>
                    <div className={styles.rhsbdsxngSbghfxfcg}>
                      {line1.split("").map((char, index) => (
                        <div
                          key={`line1-${index}`}
                          className={`${styles.char} ${styles[`w${index + 1}`]}`}
                        >
                          {char === " " ? "\u00A0" : char}
                        </div>
                      ))}
                    </div>

                    <div className={styles.rhsbdsxngSbghfxfcg}>
                      {line2.split("").map((char, index) => (
                        <div
                          key={`line2-${index}`}
                          className={`${styles.char} ${styles[`w${index + line1.length + 1}`]}`}
                        >
                          {char === " " ? "\u00A0" : char}
                        </div>
                      ))}
                    </div>

                    <div className={styles.lineContainer}>
                      <div className={styles.dot} style={{ color: '#1dd1a1' }}></div>
                      <div className={styles.dot} style={{ color: '#54a0ff' }}></div>
                      <div className={styles.dot} style={{ color: '#a29bfe' }}></div>
                      <div className={styles.dot} style={{ color: '#f368e0' }}></div>
                      <div className={styles.dot} style={{ color: '#ff9f43' }}></div>
                    </div>
                  </div>
                </>
              )}

              {slug === 'professional-website-development-services' && (
                <div className={styles.qwqe7ccxd}>
                  <div className={styles.dfdsf52d1hh8}>
                    <div className={styles.ghh52d1hh8}>
                      <div className="row align-items-center">
                        <div className="col-1">
                          <div className={styles.trewrr88}>
                            <img src="./images/appdevo.png" alt=""/>
                          </div>
                        </div>
                        <div className="col-11">
                          <div className={styles.wwrexd5854}>
                            <h4>Responsive Web Design</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.dfdsf52d1hh8}>
                    <div className={styles.ghh52d1hh8}>
                      <div className="row align-items-center">
                        <div className="col-1">
                          <div className={styles.trewrr88}>
                            <img src="./images/appdevo.png" alt=""/>
                          </div>
                        </div>
                        <div className="col-11">
                          <div className={styles.wwrexd5854}>
                            <h4>E-commerce Design</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {slug === 'email-copywriting-services' && ( 
                <div className={styles.ecsimgs}>
                  <img src="/images/ecstime.webp" className={styles.ecsimg1} alt=""/>

                  <img src="/images/ecsline.webp" className={styles.ecsimg2} alt=""/>

                  <img src="/images/ecsbulb.webp" className={styles.ecsimg3} alt=""/>
                </div>
              )}

              {slug === 'online-business-promotion' && (             
                <div className={styles.promo2_page}>
                  <img src="./images/business1.webp" className={styles.img1} data-aos="fade-up-right" alt=""/>

                  <img src="./images/business2.webp" className={styles.img2} data-aos="fade-up-left" alt=""/>

                  <img src="./images/business3.webp" className={styles.img3} data-aos="fade-up-left" alt=""/>

                  <img src="./images/business4.webp" className={styles.img4} data-aos="fade-down" alt=""/>

                  <img src="./images/business5.webp" className={styles.img5} data-aos="fade-up-right" alt=""/>                     
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

        <ServiceEnquiryForm loading={setLoading} slug={slug} />

        <div className={styles.ndfyhdf}>
          <div className="custom-container">
            <div className={styles.fgdfgfdg}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.cfbfjhf}>
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
                </div>
                <div className="col-lg-6 pt-5">
                  <div className={`${styles.dfbghdfd} position-relative mt-4`}>
                    {serviceResponse.data?.third_section_image && (
                      <img data-aos="fade-left"
                        src={`${serviceResponse.image_url}/Templete_46/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}


                    {slug === 'email-copywriting-services' && ( 
                      <div className={styles.ecspics}>
                        <img src="/images/ecsquick.webp" className={styles.ecspic1} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" alt=""/>

                        <img src="/images/ecsengage.webp" className={styles.ecspic2} data-aos="fade-left" alt=""/>

                        <img src="/images/ecsscale.webp" className={styles.ecspic3} data-aos="fade-left" alt=""/>
                      </div>
                    )}

                    {slug === 'professional-website-development-services' && (
                      <>
                      <div className={styles.dfbghdfdqq1}>
                          <img src="./images/appdevelop1 (1).png" alt="" />
                      </div>

                      <div className={styles.dfbghdfdqq2}>
                        <img src="./images/appdevelop1 (2).png" alt="" />
                      </div>

                      <div className={styles.dfbghdfdqq3}>
                        <img src="./images/appdevelop1 (3).png" alt="" />
                      </div>

                      <div className={styles.dfbghdfdqq4}>
                        <img src="./images/appdevelop1 (4).png" alt="" />
                      </div>
                      </>
                    )}

                    {slug === 'professional-academic-writing-services' && (
                    <>
                    <ul className={`${styles.doasnifwer} mb-0 ps-0`}>
                      <li>
                        <img src="./images/Professional Academic Writing Services (1).png" className="xvxfvfdscds sdvfdvvv position-absolute" alt="" />
                      </li>

                      <li>
                        <img src="./images/Professional Academic Writing Services (2).png" className="xvxfvfdscds cdfscs position-absolute" alt="" />
                      </li>

                      <li>
                        <img src="./images/Professional Academic Writing Services (3).png" className="xvxfvfdscds sdvsfrsfer position-absolute" alt="" />
                      </li>

                      <li>
                        <img src="./images/Professional Academic Writing Services (4).png" className="xvxfvfdscds scewerwer position-absolute" data-aos="fade-right" alt="" />
                      </li>

                      <li>
                        <img src="./images/Professional Academic Writing Services (5).png" className="xvxfvfdscds sdcsferwer position-absolute" data-aos="fade-top" alt="" />
                      </li>

                      <li>
                        <img src="./images/Professional Academic Writing Services (6).png" className="xvxfvfdscds sdfrfdvre position-absolute" data-aos="fade-left" alt="" />
                      </li>

                      <li>
                        <img src="./images/Professional Academic Writing Services (7).png" className="xvxfvfdscds sdfvweewrt position-absolute" data-aos="zoom-in" alt="" />
                      </li>
                    </ul>
                    </>
                    )}

                    {slug === 'online-business-promotion' && ( 
                      <div className={styles.info2_page}>
                          <img src="./images/promo_img1.webp" className={styles.pic1} data-aos="fade-right" alt=""/> 

                          <img src="./images/promo_img2.webp" className={styles.pic2} data-aos="fade-down" alt=""/> 
                          
                          <img src="./images/promo_img3.webp" className={styles.pic3} data-aos="fade-up-left" alt=""/>                    
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.dbfsdbgdfgdfg}>
          <div className="container">
            <div className={styles.fdfgdfgfg}>
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

            <div className={styles.fgfhdfgdfg}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.dfbdfhgdfg}>
                    <div className={styles.dfbdf}>
                      {serviceResponse.data?.fourth_section_image_one && (
                        <img
                          src={`${serviceResponse.image_url}/Templete_46/${serviceResponse.data.fourth_section_image_one}`}
                          alt=""
                        />
                      )}
                    </div>
                    <div className={styles.sbgsdffg}>
                      <h4>
                        {serviceResponse.data?.fourth_section_title_one &&
                          serviceResponse.data.fourth_section_title_one}
                      </h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            serviceResponse.data
                              ?.fourth_section_description_one &&
                            serviceResponse.data.fourth_section_description_one,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.fhgdfgdf}>
                    <div className="row">
                      <div className="col-lg-2">
                        <div className={styles.sdfbsdf}>
                          {serviceResponse.data?.fourth_section_image_two && (
                            <img
                              src={`${serviceResponse.image_url}/Templete_46/${serviceResponse.data.fourth_section_image_two}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className={styles.fbfsdf}>
                          <h4>
                            {serviceResponse.data?.fourth_section_title_two &&
                              serviceResponse.data.fourth_section_title_two}
                          </h4>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                serviceResponse.data
                                  ?.fourth_section_description_two &&
                                serviceResponse.data
                                  .fourth_section_description_two,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.fhgdfgdf}>
                    <div className="row">
                      <div className="col-lg-2">
                        <div className={styles.sdfbsdf}>
                          {serviceResponse.data?.fourth_section_image_three && (
                            <img
                              src={`${serviceResponse.image_url}/Templete_46/${serviceResponse.data.fourth_section_image_three}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className={styles.fbfsdf}>
                          <h4>
                            {serviceResponse.data?.fourth_section_title_three &&
                              serviceResponse.data.fourth_section_title_three}
                          </h4>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                serviceResponse.data
                                  ?.fourth_section_description_three &&
                                serviceResponse.data
                                  .fourth_section_description_three,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.fhgdfgdf}>
                    <div className="row">
                      <div className="col-lg-2">
                        <div className={styles.sdfbsdf}>
                          {serviceResponse.data?.fourth_section_image_four && (
                            <img
                              src={`${serviceResponse.image_url}/Templete_46/${serviceResponse.data.fourth_section_image_four}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className={styles.fbfsdf}>
                          <h4>
                            {serviceResponse.data?.fourth_section_title_four &&
                              serviceResponse.data.fourth_section_title_four}
                          </h4>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                serviceResponse.data
                                  ?.fourth_section_description_four &&
                                serviceResponse.data.fourth_section_description_four,
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

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>
                {serviceResponse.data?.fifth_section_title &&
                  serviceResponse.data.fifth_section_title}
              </h2>
              <div
                className="pt-4"
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
