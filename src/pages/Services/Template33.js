import styles from "./Css/Template33.module.css";
import { useEffect, useRef, useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm"; 
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from "aos";
import "aos/dist/aos.css";

export const Template33 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  const bookRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animations only happen once
    });
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    // eslint-disable-next-line

    if (bookRef.current) { 
      observer.observe(bookRef.current);
    }

    return () => {
      // eslint-disable-next-line
      if (bookRef.current) observer.unobserve(bookRef.current); 
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(0); // default: first section open
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    {
      title: serviceResponse.data?.fourth_section_title_one,
      description: serviceResponse.data?.fourth_section_description_one,
      image: serviceResponse.data?.fourth_section_image_one,
    },
    {
      title: serviceResponse.data?.fourth_section_title_two,
      description: serviceResponse.data?.fourth_section_description_two,
      image: serviceResponse.data?.fourth_section_image_two,
    },
    {
      title: serviceResponse.data?.fourth_section_title_three,
      description: serviceResponse.data?.fourth_section_description_three,
      image: serviceResponse.data?.fourth_section_image_three,
    },
  ];

  return (
    <div>
      <PageWrapper slug={slug} type="Template">
      {loading && <Loader />}
      <main>
        <div class={styles.gdfbdfdfgdf554}>
          <div
            class={styles.dfgjhfgd}
            style={{ background: "url(./images/afros.png)" }}
          >
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
                  src={`${serviceResponse.image_url}/Templete_33/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}

              {slug === 'book-cover-design-services' && ( 
                <div className={styles.book_page}>
                  <img src="./images/book_img1.webp" className={styles.img1} alt=""/> 
                  <img src="./images/book_img2.webp" className={styles.img2} alt=""/> 
                  <img src="./images/book_img3.webp" className={styles.img3} alt=""/> 
                  <img src="./images/book_img4.webp" className={styles.img4} alt=""/> 
                  <img src="./images/book_img5.webp" className={styles.img5} alt=""/> 
                  <img src="./images/book_img6.webp" className={styles.img6} alt=""/> 
                  <img src="./images/book_img7.webp" className={styles.img7} alt=""/> 
                </div>
              )}
            </div>
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
                class="pt-4"
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

        <div class={styles.fjhfdfgdfg}>
          <div class="custom-container">
            <div class={styles.sdfsdfsdf}>
              <div
                class="pt-4"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.third_section_description &&
                    serviceResponse.data.third_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div class={`${styles.aiundeuiuierr} py-5`}>
          <div class="custom-container py-5">
            <div class="row">
              <div class="col-lg-6 mb-4">
                <div class={`${styles.dojiewojeir_left} sticky-top`}>
                  {serviceResponse.data?.fourth_section_main_image && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_33/${serviceResponse.data.fourth_section_main_image}`}
                      alt=""
                      class="img-fluid"
                    />
                  )}

                  {slug === 'book-cover-design-services' && ( 
                    <div className={styles.sou}>
                      <img src="./images/book_cover_2nd_img.png" className={styles.ol1} alt=""/>
                      <img src="./images/book_cover_2nd_img_1.png" className={styles.ol2} alt=""/>
                      <img src="./images/book_cover_2nd_img_2.png" className={styles.ol3} alt=""/>
                      <img src="./images/book_cover_2nd_img_3.png" className={styles.ol4} alt=""/>
                      <img src="./images/book_cover_2nd_img_4.png" className={styles.ol5} alt=""/>
                      <img src="./images/book_cover_2nd_img_5.png" className={styles.ol6} alt=""/>
                    </div>
                  )}
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div className={styles.dojiewojeir_right}>
                  <h3>{serviceResponse.data?.fourth_section_main_title}</h3>

                  <div className={`${styles.inijjojioiejwoir} mt-3`}>
                    {accordionData.map((item, index) => (
                      <div
                        key={index}
                        className={`${styles.odnjewhiewrewr} d-flex p-4 mb-4 ${
                          activeIndex === index ? styles.active : ""
                        }`}
                        onClick={() => toggleAccordion(index)}
                        style={{ cursor: "pointer" }}
                      >
                        {item.image && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_33/${item.image}`}
                            alt=""
                            className="img-fluid me-2"
                          />
                        )}
                        <div className={styles.inikninkeuiwr}>
                          <h4>{item.title}</h4>

                          {activeIndex === index && (
                            <div
                              className="mb-0"
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class={styles.sdmsdjhsds}>
          {serviceResponse.data?.featured_image && (
            <img
              src={`${serviceResponse.image_url}/Templete_33/${serviceResponse.data.featured_image}`}
              alt=""
              class="img-fluid me-2"
            />
          )}

          {slug === 'book-cover-design-services' && ( 
            <div className={styles.moon}>
              <img src="./images/star1.png" className={styles.m1} data-aos="fade-down-right" alt=""/>

              <img src="./images/star2.png" className={styles.m2} data-aos="fade-up-right"alt=""/>

              <img src="./images/star3.png" className={styles.m3} data-aos="fade-down-left"alt=""/>
              
              <img src="./images/star4.png" className={styles.m4} data-aos="fade-up-left"alt=""/>

              <div ref={bookRef} className={`${styles.book_cover} ${inView ? styles.openBook : ""}`}
            >
              {/* LEFT COVER */}
              <div className={`${styles.left_cover} ${styles.ibnjenjkwherr}`}>
                <img
                  src="./images/bookcover-book2.png"
                  alt="left cover"
                  className="wdoikmjoejerr"
                />
              </div>

              {/* RIGHT COVER */}
              <div className={`${styles.right_cover} ${styles.ibnjenjkwherr}`}>
                <img
                  src="./images/bookcoverbook.png"
                  alt="right cover"
                  className="dffrrerrtttt"
                />
              </div>

              {/* FLAMES */}
              <div className={styles.oijmdiewrer}>
                <img
                  src="./images/bookcover3onlybookgh.png"
                  className={styles.dfsfgerrt}
                  alt="flame1"
                />
                <img
                  src="./images/bookcover3onlybook.png"
                  className={styles.sadasddsw}
                  alt="flame2"
                />
                <img
                  src="./images/bookcover3onlybookfgg.png"
                  className={styles.egttertt}
                  alt="flame3"
                />
              </div>
            </div>
            </div>
          )}
        </div>
        <LastSectionComponent />
      </main>
      </PageWrapper>
    </div>
  );
};
