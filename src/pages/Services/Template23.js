import styles from "./Css/Template23.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from "aos";
import "aos/dist/aos.css";

export const Template23 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("tab-1");

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  // Tabs + animations combined
  const tabs = [
    {
      id: "tab-1",
      title: serviceResponse.data?.third_section_title_one,
      description: serviceResponse.data?.third_section_description_one,
      image: serviceResponse.data?.third_section_image_one,
      animations: [
        { src: "/images/ldsprice.png", className: "ldspic1", animation: "zoom-in-right" },
        { src: "/images/ldstime.png", className: "ldspic2", animation: "zoom-in-left" },
        { src: "/images/ldsformat.png", className: "ldspic3", animation: "zoom-in-right" },
        { src: "/images/ldsoriginal.png", className: "ldspic4", animation: "zoom-in-left" },
      ],
    },
    {
      id: "tab-2",
      title: serviceResponse.data?.third_section_title_two,
      description: serviceResponse.data?.third_section_description_two,
      image: serviceResponse.data?.third_section_image_two,
      animations: [
        { src: "/images/ldssearch.png", className: "ldspicture1"},
        { src: "/images/ldspaint.png", className: "ldspicture2"},
        { src: "/images/ldsresolution.png", className: "ldspicture3"},
        { src: "/images/ldsdelivery.png", className: "ldspicture4"},
      ],
    },

    {
      id: "tab-3",
      title: serviceResponse.data?.third_section_title_three,
      description: serviceResponse.data?.third_section_description_three,
      image: serviceResponse.data?.third_section_image_three,
      animations: [
        { src: "/images/leaflet_book.png", className: "img1", animation: "zoom-in" },
        { src: "/images/leaflet_img1.png", className: "img2", animation: "fade-down-right" },
        { src: "/images/leaflet_img2.png", className: "img3", animation: "" },
        { src: "/images/leaflet_img3.png", className: "img4", animation: "fade-down-left" },
        { src: "/images/leaflet_img4.png", className: "img5", animation: "" },
        { src: "/images/leaflet_img5.png", className: "img6", animation: "fade-up-right" },
        { src: "/images/leafllet_img6.png", className: "img7", animation: "" },
        { src: "/images/leaflet_img7.png", className: "img8", animation: "fade-up-left" },
        { src: "/images/leaflet_img8.png", className: "img9", animation: "" },
      ],
    },
  ];
  return (
    <div>
      <PageWrapper slug={slug} type="Template">
        {loading && <Loader />}
        <main>
          {/* Banner Section */}
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
                  src={`${serviceResponse.image_url}/Templete_23/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}
              {slug === "leaflet-design-service" && (
                <div className={styles.ldsimgs}>
                  <img src="/images/ldsmain.png" className={styles.ldsimg1} alt="" />
                  <img src="/images/ldsprint.png" className={styles.ldsimg2} alt="" />
                  <img src="/images/ldsquality.png" className={styles.ldsimg3} alt="" />
                  <img src="/images/ldsmarket.png" className={styles.ldsimg4} alt="" />
                  <img src="/images/ldscontent.png" className={styles.ldsimg5} alt="" />
                  <img src="/images/ldsdesign.png" className={styles.ldsimg6} alt="" />
                </div>
              )}
            </div>
          </div>

          {/* Second Section */}
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

          {/* Tabs Section */}
          <div className={`${styles.asdfdergdg} py-5`}>
            <div className="container-fluid p-5">
              <div className={` ${styles.doijfjwerit_inner} position-relative`}>
                <div className={`${styles["tab-teaser"]} row`}>
                  {/* Left Menu */}
                  <div className={`${styles["tab-menu"]} col-lg-6`}>
                    <ul>
                      {tabs.map((tab) => (
                        <li key={tab.id}>
                          <div
                            className={activeTab === tab.id ? styles.active : ""}
                            data-rel={tab.id}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveTab(tab.id);
                            }}
                          >
                            <h4>{tab.title}</h4>
                            <div
                              className="mb-0"
                              dangerouslySetInnerHTML={{
                                __html: tab.description,
                              }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Content */}
                  <div className={`${styles["tab-main-box"]} col-lg-6 position-relative`}>
                    {tabs.map((tab) => (
                      <div
                        key={tab.id}
                        className={styles.tabBox}
                        id={tab.id}
                        style={{
                          display: activeTab === tab.id ? "block" : "none",
                        }}
                      >
                        {tab.image && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_23/${tab.image}`}
                            alt=""
                            className="img-fluid"
                            data-aos="fade-up"
                          />
                        )}

                        {slug === "leaflet-design-service" && tab.animations && (
                          <div className={styles.ldspics}>
                            {tab.animations.map((img, index) => (
                              <img
                                key={index}
                                src={img.src}
                                className={styles[img.className]}
                                data-aos={img.animation}
                                alt=""
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
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
