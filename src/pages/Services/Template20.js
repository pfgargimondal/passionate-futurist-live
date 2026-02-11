import styles from "./Css/Template20.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Template20 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animations only happen once
    });
  }, []);

  const { ref, inView } = useInView({ triggerOnce: false });

  const AnimatedLetters = (text, className = "") => {
    return (
      <span
        className={className}
        style={{
          display: "inline-flex", // ✅ Prevent word break
          marginRight: "0.5rem",
          flexWrap: "nowrap",
          whiteSpace: "nowrap", // ✅ Ensure space behaves like a word
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              y: Math.random() < 0.5 ? "-100%" : "100%",
            }}
            animate={inView ? { opacity: 1, y: "0%" } : {}}
            transition={{ delay: index * 0.04, duration: 0.8 }}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    );
  };


  const [percent67, setPercent67] = useState(0);

  useEffect(() => {
    const interval67 = setInterval(() => {
      setPercent67((prev) => {
        if (prev < 67) return prev + 1;
        clearInterval(interval67);
        return prev;
      });
    }, 20);
    return () => clearInterval(interval67);
  }, []);

  const radius67 = 30;
  const circumference67 = 2 * Math.PI * radius67;
  const dashOffset67 = circumference67 - (percent67 / 100) * circumference67;

   const [percent85, setPercent85] = useState(0);

  useEffect(() => {
    const interval85 = setInterval(() => {
      setPercent85((prev) => {
        if (prev < 85) return prev + 1;
        clearInterval(interval85);
        return prev;
      });
    }, 20);
    return () => clearInterval(interval85);
  }, []);

  const radius85 = 30;
  const circumference85 = 2 * Math.PI * radius85;
  const dashOffset85 = circumference85 - (percent85 / 100) * circumference85;


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
            <div className="col-lg-6">
              <div className={`${styles.dbfghsdf} position-relative`}>
                {serviceResponse.data?.banner_image && (
                  <img
                    src={`${serviceResponse.image_url}/Templete_20/${serviceResponse.data.banner_image}`}
                    alt=""
                  />
                )}

                {slug === "blog-marketing-services" && (
                  <div className={styles.blogmservepic}>
                    <img src="./images/bmsseo.png" className={styles.bmspic1} data-aos="zoom-in-left" alt=""/>

                    <img src="./images/bmsper.png" className={styles.bmspic2} data-aos="zoom-in-left" alt=""/>
                    
                    <img src="./images/bmsgraph.png" className={styles.bmspic3} data-aos="zoom-in-right" alt=""/>
                  </div>
                )}
              </div>
              {slug === "ui-ux-design-services" && (
                <>
                  <div className={styles.uiiieer2}>
                    <div className={styles.wrapper}>
                      <img
                        src="./images/icon (1).png"
                        alt="Checkmark"
                        className={styles.icon}
                      />
                      <div
                        className={`${styles.typewriterStart} ${styles.line1} ${styles.delay0}`}
                      >
                        <span className={styles.whiteText}>
                          Wireframing & Prototyping
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.uiiieer}>
                    <div className={styles.wrapper}>
                      <img
                        src="./images/icon (1).png"
                        alt="Checkmark"
                        className={styles.icon}
                      />
                      <div
                        className={`${styles.typewriterEnd} ${styles.line2} ${styles.delay1}`}
                      >
                        <span className={styles.whiteText}>
                          Responsive Web Design
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.uiiieer3}>
                    <div className={styles.wrapper}>
                      <img
                        src="./images/icon (1).png"
                        alt="Checkmark"
                        className={styles.icon}
                      />
                      <div
                        className={`${styles.typewriterStart} ${styles.line3} ${styles.delay2}`}
                      >
                        <span className={styles.whiteText}>
                          User Journey Mapping
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* percentage icon */}

                  <div className={styles.bnjhvdd54}>
                    <div className={styles.circleCard85}>
                      <div className={styles.circleWrapper85}>
                        <svg className={styles.svgCircleIcon85}>
                          <circle cx="35" cy="35" r="30" />
                          <circle
                            cx="35"
                            cy="35"
                            r="30"
                            style={{
                              strokeDasharray: `${circumference85}px`,
                              strokeDashoffset: `${dashOffset85}px`,
                            }}
                          />
                        </svg>
                        <div className={styles.circleNumber85}>
                          <h3>
                            {percent85}
                            <span>%</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.bnjhvdd54aaa}>
                    <div className={styles.circleCard67}>
                      <div className={styles.circleWrapper67}>
                        <svg className={styles.svgCircleIcon67}>
                          <circle cx="35" cy="35" r="30" />
                          <circle
                            cx="35"
                            cy="35"
                            r="30"
                            style={{
                              strokeDasharray: `${circumference67}px`,
                              strokeDashoffset: `${dashOffset67}px`,
                            }}
                          />
                        </svg>
                        <div className={styles.circleNumber67}>
                          <h3>
                            {percent67}
                            <span>%</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* percentage icon */}
                </>
              )}

              {slug === 'mobile-app-development-services' && (
                <>
                <div className={styles.irtuier54da} >
                    <img src="./images/mobileapp (3).png" alt="" data-aos="zoom-in-down" data-aos-duration="3000"/>
                </div>
                <div className={styles.irtuier54daa} >
                    <img src="./images/mobileapp (1).png" alt="" data-aos="fade-right" data-aos-duration="3000"/>
                </div>
                <div className={styles.irtuier54daaa} >
                    <img src="./images/mobileapp (4).png" alt="" data-aos="fade-up-right" data-aos-duration="3000"/>
                </div>
                <div className={styles.irtuier54daaaa}  >
                    <img src="./images/mobileapp (6).png" alt="" data-aos="fade-up-left" data-aos-duration="3000"/>
                </div>
                <div className={styles.irtuier54daaaaa}>
                    <img src="./images/mobileapp (5).png" alt="" data-aos="fade-down-left" data-aos-duration="3000" />
                </div>
                <div className={styles.irtuier54daaaaaa}>
                    <img src="./images/mobileapp (2).png" alt="" data-aos="fade-left" data-aos-duration="3000"/>
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

          <div className={styles.dfbghdfgdfgdf}>
            <div className="custom-container">
              <div className={styles.fdnfkdnfdg}>
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
          </div>

          <div className={styles.dfbjhfdfgdf}>
            <div className="custom-container">
              <div className={styles.vgbfdf}>
                <div className="row">
                  <div className="col-lg-7">
                    <div className={styles.fbgdfgdfgdf}>
                      <h2>
                        {serviceResponse.data?.fourth_section_title &&
                          serviceResponse.data.fourth_section_title}
                      </h2>

                      <div
                        className="py-4 mb-0"
                        dangerouslySetInnerHTML={{
                          __html:
                            serviceResponse.data?.fourth_section_description &&
                            serviceResponse.data.fourth_section_description,
                        }}
                      />
                     <Link to="/business-register"><button>  Get started</button></Link> 
                    </div>
                  </div>
                  <div
                    className={
                      slug === "mobile-app-development-services"
                        ? "col-lg-5"
                        : "col-lg-5 mt-5 pt-5"
                    }
                  >
                    <div className={styles.dgndfgdfgdf}>
                      {serviceResponse.data?.fourth_section_image && (
                        <img
                          data-aos="flip-down"
                          src={`${serviceResponse.image_url}/Templete_20/${serviceResponse.data.fourth_section_image}`}
                          alt=""
                        />
                      )}

                      {slug === "blog-marketing-services" && (
                        <div className={styles.blog_marketing_img}>
                          <img src="./images/blog-2nd-section_img_1.png" className={styles.img1} data-aos="fade-right" alt=""/>

                          <img src="./images/blog-2nd-section_img_2.png" className={styles.img2} data-aos="fade-left" alt=""/>

                          <img src="./images/blog-2nd-section_img_3.png" className={styles.img3} data-aos="fade-up" alt=""/>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.dfbjhfdfgdf}>
            <div className="custom-container">
              <div className={styles.vgbfdf}>
                <div className="row">
                  <div className="col-lg-5">
                    <div className={styles.gdfg5454d}>
                      {slug === "ui-ux-design-services" && (
                        <>
                          <div ref={ref} className={styles.dgnghbg5df}>
                            <h2>
                              {AnimatedLetters("Build", styles.bgjhdf5fa)}
                              {AnimatedLetters("High")}
                              {AnimatedLetters("Quality")}
                              {AnimatedLetters("Interfaces", styles.bgjhdf5faa)}
                              {AnimatedLetters("With")}
                              {AnimatedLetters("Us", styles.bgjhdf5fa)}
                            </h2>
                          </div>
                        </>
                      )}

                      <div className={`${styles.dgndfgdfgdf} mt-5 pt-5 position-relative`}>
                        {serviceResponse.data?.fifth_section_image && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_20/${serviceResponse.data.fifth_section_image}`}
                            alt=""
                          />
                        )}

                        {slug === "blog-marketing-services" && (
                          <div className={styles.blog}> 
                            <img src="./images/blog-marketing-section3_img_4.png" className={styles.b1} data-aos="fade-down-right" alt="" />
                            <img src="./images/blog-marketing-section3_img_3.png" className={styles.b2} data-aos="fade-down-left" alt="" />
                            <img src="./images/blog-marketing-section3_img_2.png" className={styles.b3} data-aos="fade-up-right" alt="" />
                            <img src="./images/blog-marketing-section3_img_1.png" className={styles.b4} data-aos="fade-up-left" alt="" />
                          </div>
                        )}

                        {slug === 'mobile-app-development-services' && (
                          <div className={styles.doijerer}>
                            <img src="./images/sd (1).png" className="position-absolute" data-aos="fade-right" alt="" />

                            <img src="./images/vg (1).png" className="position-absolute" data-aos="fade-left" alt="" />

                            <img src="./images/as.png" className="position-absolute" data-aos="fade-right" alt="" />

                            <img src="./images/cf (1).png" className="position-absolute" data-aos="fade-left" alt="" />

                            <img src="./images/lji.png" className="position-absolute" data-aos="zoom-in" alt="" />
                          </div>
                        )}
                        
                      </div>
                      {slug === "ui-ux-design-services" && (
                        <>
                          <div className={styles.dfdsf52dsasas}>
                            <img src="./images/vr (1).png" alt="" />
                          </div>
                          <div className={styles.dfdsf52dsasas1}>
                            <img src="./images/hand (3).png" alt="" />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className={styles.fbgdfgdfgdf}>
                      <h2>
                        {serviceResponse.data?.fifth_section_title &&
                          serviceResponse.data.fifth_section_title}
                      </h2>
                      <div
                        className="py-4 mb-0"
                        dangerouslySetInnerHTML={{
                          __html:
                            serviceResponse.data?.fifth_section_description &&
                            serviceResponse.data.fifth_section_description,
                        }}
                      />
                      <Link to="/business-register"><button>  Get started</button></Link> 
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

          <div className={`${styles.xnjhxffgdf} position-relative`}>
            {serviceResponse.data?.featured_image && (
              <img
                src={`${serviceResponse.image_url}/Templete_20/${serviceResponse.data.featured_image}`}
                alt=""
              />
            )}
            {slug === "ui-ux-design-services" && (
              <>
                <div className={`${styles.doieworwer}`}>
                  <img src="/images/dmad4.png" className="position-absolute" data-aos="fade-right" alt="" />

                  <img src="/images/boy.png" className="position-absolute" data-aos="fade-left" alt="" />

                  <img src="/images/dmad.png" className="position-absolute" data-aos="fade-down-left" alt="" />

                  <img src="/images/dmad2.png" className="position-absolute" data-aos="fade-up-left" alt="" />
                </div>
              </>
            )}

            {slug === 'mobile-app-development-services' && (
              <div className={styles.dinweihrwerew}>
                <img src="./images/Digital Marketing Agency FAQs (4) (1) (2).png" className="position-absolute" data-aos="fade-down-right" alt="" />

                <img src="./images/Digital Marketing Agency FAQs (4) (2) (2).png" className="position-absolute" data-aos="fade-up-right" alt="" />

                <img src="./images/Digital Marketing Agency FAQs (4) (5).png" className="position-absolute" data-aos="zoom-in" alt="" />

                <img src="./images/Digital Marketing Agency FAQs (4) (3) (2).png" className="position-absolute" data-aos="fade-left" alt="" />

                <img src="./images/Digital Marketing Agency FAQs (4) (4) (1).png" className="position-absolute" data-aos="fade-up-left" alt="" />
              </div>
            )}

            {slug === "blog-marketing-services" && (
              <>
              <div className={styles.RRD1}>
                <img src="./images/blog-last-img_1.png" className={styles.RRDimg1} data-aos="fade-left" alt="" />
              </div>
              <div className={styles.RRD2}>
                <img src="./images/blog-last-img_2.png" className={styles.RRDimg2} data-aos="fade-right" alt="" />
              </div>
              <div className={styles.RRD3}>
                <img src="./images/blog-last-img_3.png" className={styles.RRDimg3} data-aos="fade-left" alt="" />
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
