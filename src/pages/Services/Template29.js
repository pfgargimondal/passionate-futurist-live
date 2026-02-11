import styles from "./Css/Template29.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from "aos";
import "aos/dist/aos.css";

export const Template29 = ({ serviceResponse, slug }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    AOS.init({
        duration: 2000,
        once: false,
    });
    }, []);

    return (
        <div>
            <PageWrapper slug={slug} type="Template">
            {loading && <Loader />}
            <main>
                <div className={styles.dfgjhfgd}>
                    <div className={`${styles.sdfghdfgdf} col-lg-6`}>
                        <h1 className="mt-0 mb-0">{serviceResponse.data?.banner_title &&
                            serviceResponse.data.banner_title}</h1>

                        <div className="mt-3 mb-5"
                            dangerouslySetInnerHTML={{
                                __html:
                                    serviceResponse.data?.banner_description &&
                                    serviceResponse.data.banner_description,
                            }}
                        />

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
                                src={`${serviceResponse.image_url}/Templete_29/${serviceResponse.data.banner_image}`}
                                alt=""
                            />
                        )}
                        {slug === 'postcard-design-service' && (
                            <div className={styles.cpdspics}>
                                <img src="/images/cpdsone.png" className={styles.cpdspic1} data-aos="fade-right" alt=""/>
                                <img src="/images/cpdstwo.png" className={styles.cpdspic2} alt=""/>
                                <img src="/images/cpdsthree.png" className={styles.cpdspic3} data-aos="fade-right" alt=""/>
                                <img src="/images/cpdsfour.png" className={styles.cpdspic4} alt=""/>
                                <img src="/images/cpdsfive.png" className={styles.cpdspic5} data-aos="fade-left" alt=""/>
                                <img src="/images/cpdssix.png" className={styles.cpdspic6} alt=""/>
                            </div>
                        )}
                    </div>
                </div>



                <div className={styles.sdcbvghsdcsddvfsd}>
                    <div className="custom-container">
                        <div className={styles.hsdffdvffdfd}>
                            <h2>{serviceResponse.data?.second_section_title &&
                                serviceResponse.data.second_section_title}</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        serviceResponse.data?.second_section_description &&
                                        serviceResponse.data.second_section_description,
                                }}
                            />
                            {/* <div className="fdnbujfbf mt-4">
                    <p><i className="fa-solid fa-circle-notch"></i> High-Quality Backlinks from niche-relevant, authority websites</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Manual Outreach to secure authentic, natural links</p>
                    <p><i className="fa-solid fa-circle-notch"></i> White-Hat SEO Practices approved by Goog</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Detailed Monthly Reports on backlink performance</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Diverse Link Profile including guest posts, niche edits, and citations</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Boost in Domain Authority and search engine rankings</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Improved Organic Traffic with long-term SEO benefits</p>
                </div> */}
                        </div>
                    </div>
                </div>


                <div className={styles.sdhdvbusdsfs}>
                    <div className="custom-container">
                        <div className={styles.hbdhdcsdsds}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={`${styles.cjdjcdc} position-relative`}>
                                        {serviceResponse.data?.third_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Templete_29/${serviceResponse.data.third_section_image}`}
                                                alt=""
                                            />
                                        )}

                                        {slug === 'postcard-design-service' && (
                                            <div className={styles.im}>
                                                <img src="./images/creative_postcard_2nd_1.png" className={styles.m1} alt="" />
                                                <img src="./images/creative_postcard_2nd_2.png" className={styles.m2} alt="" />
                                                <img src="./images/creative_postcard_2nd_3.png" className={styles.m3} alt="" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={styles.fdhjhj}>
                                        <h2>{serviceResponse.data?.third_section_title &&
                                            serviceResponse.data.third_section_title}</h2>

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






                <ServiceEnquiryForm loading={setLoading} slug={slug} />


                <div className={styles.sdfbghdsvbfdfd}>
                    <div className="custom-container">
                        <div className={styles.kdsdnfvdsfd}>
                            <h2>{serviceResponse.data?.fourth_section_title &&
                                serviceResponse.data.fourth_section_title}</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        serviceResponse.data?.fourth_section_description &&
                                        serviceResponse.data.fourth_section_description,
                                }}
                            />
                        </div>

                        <div className={styles.dfbnghjfdgfd}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={styles.nsfdsfjff}>
                                        <div className={styles.nfdjfd}>
                                            {serviceResponse.data?.fifth_section_image && (
                                                <img
                                                    src={`${serviceResponse.image_url}/Templete_29/${serviceResponse.data.fifth_section_image}`}
                                                    alt="" data-aos="fade-right"
                                                />
                                            )}
                                        </div>
                                        <div className={styles.fgfdg}>
                                            <h4>{serviceResponse.data?.fifth_section_title &&
                                                serviceResponse.data.fifth_section_title}</h4>
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

                                <div className="col-lg-6">
                                    <div className={styles.nsfdsfjff}>
                                        <div className={styles.nfdjfd}>
                                            {serviceResponse.data?.sixth_section_image && (
                                                <img
                                                    src={`${serviceResponse.image_url}/Templete_29/${serviceResponse.data.sixth_section_image}`}
                                                    alt="" data-aos="fade-left"
                                                />
                                            )}
                                        </div>
                                        <div className={styles.fgfdg}>
                                            <h4>{serviceResponse.data?.sixth_section_title &&
                                                serviceResponse.data.sixth_section_title}</h4>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        serviceResponse.data?.sixth_section_description &&
                                                        serviceResponse.data.sixth_section_description,
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
                            <h2>{serviceResponse.data?.seven_section_title &&
                                serviceResponse.data.seven_section_title}</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        serviceResponse.data?.seven_section_description &&
                                        serviceResponse.data.seven_section_description,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <LastSectionComponent />
            </main>
            </PageWrapper>
        </div>
    )
}
