import styles from "./Css/Template45.module.css";
import { useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template45 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
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
                  src={`${serviceResponse.image_url}/Templete_45/${serviceResponse.data.banner_image}`}
                  className={styles.banner_img_bg}
                  alt=""
                />
              )}
              {slug === 'ebook-design-services' && (
                <div className={styles.ebook1_page}>
                  <img src="./images/ebook1.webp" className={styles.pic1} alt=""/>

                  <img src="./images/ebook2.webp" className={styles.pic2} alt=""/>

                  <img src="./images/ebook3.webp" className={styles.pic3} alt=""/>

                  <img src="./images/ebook4.webp" className={styles.pic4} alt=""/>

                  <img src="./images/ebook5.webp" className={styles.pic5} alt=""/>

                  <img src="./images/ebook6.webp" className={styles.pic6} alt=""/>
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
                  <div className={styles.cfbfjhf} style={{backgroundImage: "url(./images/background(2).png)"}}>
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
                <div className="col-lg-6">
                  <div className={styles.dfbghdfd}>
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_45/${serviceResponse.data.third_section_image}`}
                        className={styles.img_1_bg}
                        alt=""
                      />
                    )}

                      {slug === 'ebook-design-services' && (
                        <div className={styles.ebook}>
                          <img src="./images/time1.png" className={styles.u1} alt="" />
                          <img src="./images/time2.png" className={styles.u2} alt="" />
                          <img src="./images/time3.png" className={styles.u3} alt="" />
                          <img src="./images/time4.png" className={styles.u4} alt="" />
                          <img src="./images/time5.png" className={styles.u5} alt="" />
                          <img src="./images/time6.png" className={styles.u6} alt="" />
                          <img src="./images/time7.png" className={styles.u7} alt="" />
                          <img src="./images/time8.png" className={styles.u8} alt="" />
                          <img src="./images/time9.png" className={styles.u9} alt="" />
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.dfhsdfgsdf} style={{backgroundImage: "url('./images/background(1).png')"}}>
          <div className="custom-container">
            <div className={styles.jffjfdgdfgdfg}>
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

            <div className={styles.dfghdfgsdf}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.jhdfbdf5522}>
                    <div className="row">
                      <div className="col-lg-2">
                        <div className={styles.fbdf}>
                          {serviceResponse.data?.fourth_section_image_one && (
                            <img
                              src={`${serviceResponse.image_url}/Templete_45/${serviceResponse.data.fourth_section_image_one}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className={styles.dfdf55g}>
                        <h4>
                          {serviceResponse.data?.fourth_section_title_one &&
                            serviceResponse.data.fourth_section_title_one}
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.fourth_section_description_one &&
                              serviceResponse.data
                                .fourth_section_description_one,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className={styles.jhdfbdf5522}>
                    <div className="row">
                      <div className="col-lg-2">
                        <div className={styles.fbdf}>
                          {serviceResponse.data?.fourth_section_image_two && (
                            <img
                              src={`${serviceResponse.image_url}/Templete_45/${serviceResponse.data.fourth_section_image_two}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className={styles.dfdf55g}>
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
              </div>
            </div>
          </div>
        </div>

        <div className={styles.dfhsdfgsdf5555}>
          <div className="custom-container">
            <div className={styles.fgdfgfdg}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.dfbghdfdd}>
                    {serviceResponse.data?.fifth_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_45/${serviceResponse.data.fifth_section_image}`}
                        className={styles.img_2_bg}
                        alt=""
                      />
                    )}

                    {slug === 'ebook-design-services' && (
                    <div className={styles.ebook}>
                        <img src="./images/house1.png" className={styles.img1} alt="" />
                        <img src="./images/house2.png" className={styles.img2} alt="" />
                        <img src="./images/house3.png" className={styles.img3} alt="" />
                        <img src="./images/house4.png" className={styles.img4} alt="" />
                        <img src="./images/house5.png" className={styles.img5} alt="" />
                        <img src="./images/house6.png" className={styles.img6} alt="" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className={styles.cfbfjhf}>
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