import styles from "./Css/Template26.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template26 = ({ serviceResponse, slug }) => {
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
        display: "inline-flex",    // ✅ Prevent word break
        marginRight: "0.5rem",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",      // ✅ Ensure space behaves like a word
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
              <div className={styles.dbfghsdf}>
                {serviceResponse.data?.banner_image && (
                  <img
                    src={`${serviceResponse.image_url}/Templete_26/${serviceResponse.data.banner_image}`}
                    alt=""
                  />
                )}
              </div>
              {slug === "professional-logo-design-services" && (
                <>
                 <div className={styles.uiiieer2}>
                    <div className={styles.wrapper}>
                      <img
                        src="./images/chekmark.png"
                        alt="Checkmark"
                        className={styles.icon}
                      />
                      <div className={`${styles.typewriter} ${styles.delay1}`}>
                        <span className={styles.whiteText}>Designed by </span>
                        <span className={styles.greenText}>Experts</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.uiiieer}>
                    <div className={styles.wrapper}>
                      <img
                        src="./images/chekmark.png"
                        alt="Checkmark"
                        className={styles.icon}
                      />
                      <div className={`${styles.typewriter} ${styles.delay0}`}>
                        <span className={styles.whiteText}>Custom </span>
                        <span className={styles.greenText}>Logo Design</span>
                      </div>
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
          <div className={styles.dfbjhfdfgdf}>
            <div className="custom-container">
              <div className={styles.vgbfdf}>
                <div className="row">
                  <div className="col-lg-7">
                    <div className={styles.fbgdfgdfgdf}>
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
                     <Link to="/business-register"><button>  Get started</button></Link> 
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className={styles.dgndfgdfgdf}>
                      {serviceResponse.data?.third_section_image && (
                        <img
                          src={`${serviceResponse.image_url}/Templete_26/${serviceResponse.data.third_section_image}`}
                          alt=""
                          style={{ marginTop: "20%", width: '108%' }}
                        />
                      )}
                    </div>
                    {slug === "professional-logo-design-services" && (
                    <>
                      <div className={styles.texttt555}>
                          <img data-aos="fade-right" src="./images/Get professional custom logo design services from best logo designers in India. (1).png" alt="" style={{width: '88%'}}/>
                      </div>
                    </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.fjhfdfgdfg}>
            <div className="custom-container">
              <div className={styles.sdfsdfsdf}>
                <h2>
                  {serviceResponse.data?.fourth_section_title &&
                    serviceResponse.data.fourth_section_title}
                </h2>
                <div
                  className="pt-4"
                  dangerouslySetInnerHTML={{
                    __html:
                      serviceResponse.data?.fourth_section_description &&
                      serviceResponse.data.fourth_section_description,
                  }}
                />
              </div>
            </div>
          </div>

          <div className={styles.bfyubfdfdv}>
            <div className="custom-container">
              <div className={styles.dughyee}>
                <div className="row">
                  <div className="col-lg-6">
                    {slug === "professional-logo-design-services" && (
                    <>
                      {/* <div className={styles.vfdfnhfdbf55d}>
                        <h2> <span  className={styles.texttt1}><b>Why</b> </span>  Our Custom <span  className={styles.texttt2}>Logo Design</span>  is the <span  className={styles.texttt3}>Smart Choice</span> ?</h2>
                      </div> */}
                      <div ref={ref} className={styles.vfdfnhfdbf55d}>
                        <h2>
                          {AnimatedLetters("Why", styles.texttt1)}
                          {AnimatedLetters("Our")}
                          {AnimatedLetters("Custom")}
                          {AnimatedLetters("Logo", styles.texttt2)}
                          {AnimatedLetters("Design", styles.texttt2)}
                          {AnimatedLetters("is")}
                          {AnimatedLetters("the")}
                          {AnimatedLetters("Smart", styles.texttt3)}
                          {AnimatedLetters("Choice", styles.texttt3)}
                          {AnimatedLetters("?", "")}
                        </h2>
                      </div>
                    </>
                   )}
                    <div className={styles.vfdfnhfdbfd}>
                      {serviceResponse.data?.fifth_section_main_image && (
                        <img
                          src={`${serviceResponse.image_url}/Templete_26/${serviceResponse.data.fifth_section_main_image}`}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className={styles.fdnhjgfd}>
                      <div className="row">
                        <div className="col-lg-2">
                          <div className={styles.fnjfd55}>
                            {serviceResponse.data?.fifth_section_image_one && (
                              <img
                                src={`${serviceResponse.image_url}/Templete_26/${serviceResponse.data.fifth_section_image_one}`}
                                alt=""
                              />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className={styles.fdbvhfdfd}>
                            <h4>
                              {serviceResponse.data?.fifth_section_title_one &&
                                serviceResponse.data.fifth_section_title_one}
                            </h4>
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  serviceResponse.data
                                    ?.fifth_section_description_one &&
                                  serviceResponse.data
                                    .fifth_section_description_one,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.fdnhjgfd}>
                      <div className="row">
                        <div className="col-lg-2">
                          <div className={styles.fnjfd55}>
                            {serviceResponse.data?.fifth_section_image_two && (
                              <img
                                src={`${serviceResponse.image_url}/Templete_26/${serviceResponse.data.fifth_section_image_two}`}
                                alt=""
                              />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className={styles.fdbvhfdfd}>
                            <h4>
                              {serviceResponse.data?.fifth_section_title_two &&
                                serviceResponse.data.fifth_section_title_two}
                            </h4>
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  serviceResponse.data
                                    ?.fifth_section_description_two &&
                                  serviceResponse.data
                                    .fifth_section_description_two,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.fdnhjgfd}>
                      <div className="row">
                        <div className="col-lg-2">
                          <div className={styles.fnjfd55}>
                            {serviceResponse.data
                              ?.fifth_section_image_three && (
                              <img
                                src={`${serviceResponse.image_url}/Templete_26/${serviceResponse.data.fifth_section_image_three}`}
                                alt=""
                              />
                            )}
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className={styles.fdbvhfdfd}>
                            <h4>
                              {serviceResponse.data
                                ?.fifth_section_title_three &&
                                serviceResponse.data.fifth_section_title_three}
                            </h4>
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  serviceResponse.data
                                    ?.fifth_section_description_three &&
                                  serviceResponse.data
                                    .fifth_section_description_three,
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
                  {serviceResponse.data?.sixth_section_title &&
                    serviceResponse.data.sixth_section_title}
                </h2>
                <div
                  className="pt-4"
                  dangerouslySetInnerHTML={{
                    __html:
                      serviceResponse.data?.sixth_section_description &&
                      serviceResponse.data.sixth_section_description,
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
