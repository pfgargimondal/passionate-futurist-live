import styles from "./Css/Template35.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Template35 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false
    });
  }, []);


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

          <div class={`${styles.dbfghsdf} position-relative col-lg-6 mt-3`}>
            {serviceResponse.data?.banner_image && (
              <img
                src={`${serviceResponse.image_url}/Templete_35/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}

            {slug === 'search-engine-optimization-company' && (
              <>
              <ul className={`${styles.duiandjhe} mb-0 ps-0 position-absolute`}>
                <li>
                  <img src="./images/Rank Higher in Local Searches (1) (1).png" data-aos="fade-right" data-aos-duration="1000" alt="" />
                </li> 

                <li>
                  <img src="./images/Rank Higher in Local Searches (1) (2).png" data-aos="fade-right" data-aos-duration="1500" alt="" />
                </li>

                <li>
                  <img src="./images/Rank Higher in Local Searches (1) (3).png" data-aos="fade-right" data-aos-duration="2000" alt="" />
                </li>

                <li>
                  <img src="./images/Rank Higher in Local Searches (1) (4).png" data-aos="fade-right" data-aos-duration="2500" alt="" />
                </li>

                <li>
                  <img src="./images/Rank Higher in Local Searches (1) (5).png" data-aos="fade-right" data-aos-duration="3000" alt="" />
                </li>
              </ul>
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

        <div class={styles.sdhdvbusdsfs}>
          <div class="custom-container">
            <div class={styles.hbdhdcsdsds}>
              <div class="row">
                <div class="col-lg-6">
                  <div class={`${styles.cjdjcdc} position-relative mt-5`}>
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_35/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}

                    {slug === 'search-engine-optimization-company' && (
                    <>
                      <div className={styles.dlsjfikwerwer}>
                        <img src="./images/mo.png" data-aos="flip-left" alt="" />
                      </div>

                      <div className={styles.doijelkwjrjwerwer}>
                        <img src="./images/vr.png" data-aos="fade-left" alt="" />
                      </div>

                      <div className={`${styles.oimdoijarer} row position-absolute`}>
                        <div className="col-3">
                          <div className={styles.dijkmifjrwet}>
                            <img src="./images/Video Sharing Services (1).png" data-aos="fade-right" alt="" />
                          </div>
                        </div>

                        <div className="col-3 mt-5">
                          <div className={styles.dijkmifjrwet}>
                            <img src="./images/Video Sharing Services (2).png" data-aos="fade-up-right" alt="" />
                          </div>
                        </div>

                        <div className="col-3 mt-5">
                          <div className={styles.dijkmifjrwet}>
                            <img src="./images/Video Sharing Services (3).png" data-aos="fade-up-left" alt="" />
                          </div>
                        </div>

                        <div className="col-3">
                          <div className={styles.dijkmifjrwet}>
                            <img src="./images/Video Sharing Services (4).png" data-aos="fade-up-left" alt="" />
                          </div>
                        </div>
                      </div>
                    </>
                    )}
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class={styles.fdhjhj}>
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
            </div>
          </div>
        </div>

        <div class={styles.sdjvhyuysbdvsd}>
          <div class="custom-container">
            <div class={styles.fmnbjkfnvf}>
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
            <div class={styles.sdshyudssd}>
              <div class="row">
                <div class="col-lg-6">
                  <div
                    class={styles.dhujhbdsf555}
                    style={{ background: "url(./images/d.png)" }}
                  >
                    <div class={`${styles.gbkjg5855} mt-4`}>
                      <div class={styles.fvnjfv55}>
                        {serviceResponse.data?.fourth_section_sub_image_one && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_35/${serviceResponse.data.fourth_section_sub_image_one}`}
                            alt=""
                          />
                        )}
                      </div>
                      <div class={styles.dfbhvhfdvgvfd}>
                        <h4>
                          {serviceResponse.data?.fourth_section_sub_title_one &&
                            serviceResponse.data.fourth_section_sub_title_one}
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.fourth_section_sub_description_one &&
                              serviceResponse.data
                                .fourth_section_sub_description_one,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div
                    class={styles.dhujhbdsf555}
                    style={{ background: "url(./images/d.png)" }}
                  >
                    <div class={`${styles.gbkjg5855} mt-4`}>
                      <div class={styles.fvnjfv55}>
                        {serviceResponse.data?.fourth_section_sub_image_two && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_35/${serviceResponse.data.fourth_section_sub_image_two}`}
                            alt=""
                          />
                        )}
                      </div>
                      <div class={styles.dfbhvhfdvgvfd}>
                        <h4>
                          {serviceResponse.data?.fourth_section_sub_title_two &&
                            serviceResponse.data.fourth_section_sub_title_two}
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.fourth_section_sub_description_two &&
                              serviceResponse.data
                                .fourth_section_sub_description_two,
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
