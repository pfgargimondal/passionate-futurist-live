import styles from "./Css/Template34.module.css";
import { useState,useEffect } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Template34 = ({ serviceResponse, slug }) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
          AOS.init({
            duration: 1000,
            once: false, // Animations only happen once
          });
        }, []);

    return (
        <div>
            <PageWrapper slug={slug} type="Template">
            {loading && <Loader />}
            <main>
                <div className={styles.gdfbdfdfgdf554}>
                    <div className={styles.dfgjhfgd} style={{ background: "url(./images/afros.png)" }}>
                        <div className={`${styles.sdfghdfgdf} col-lg-6`}>
                            <h1 className="mt-0 mb-0">{serviceResponse.data?.banner_title &&
                                serviceResponse.data.banner_title}</h1>

                            <p className="mt-3 mb-5">{serviceResponse.data?.banner_description &&
                                serviceResponse.data.banner_description}</p>

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
                                    src={`${serviceResponse.image_url}/Templete_34/${serviceResponse.data.banner_image}`}
                                    alt=""
                                />
                            )}

                            {slug === 'motion-graphic-design-services' && (
                                <div className={styles.music}>
                                    <img src="./images/k1.png" className={styles.s1} alt="" />
                                    <img src="./images/k2.png" className={styles.s2} alt="" />
                                    <img src="./images/k3.png" className={styles.s3} data-aos="fade-up-left"alt="" />
                                    <img src="./images/k4.png" className={styles.s4} data-aos="fade-down-right" alt="" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.fjhfdfgdfg}>
                    <div className="custom-container">
                        <div className={styles.sdfsdfsdf}>
                            <h2>{serviceResponse.data?.second_section_title &&
                                serviceResponse.data.second_section_title}</h2>

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

                <ServiceForm loading={setLoading} slug={slug} />

                <div className={styles.fjhfdfgdfg}>
                    <div className="custom-container">
                        <div className={styles.sdfsdfsdf}>
                            <div
                                className="pt-4"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        serviceResponse.data?.third_section_description &&
                                        serviceResponse.data.third_section_description,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.dnejiwhkrmiwejrwer} py-5`}>
                    <div className="custom-container py-5">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className={`${styles.odieuwniwehr_inner} overflow-hidden p-4`} style={{ backgroundImage: "url(./images/16358987_v960-ning-30.jpg)" }}>
                                    <div className={`${styles.dsdvrgtrweewerwer} p-4`}>
                                        <h2>{serviceResponse.data?.fourth_section_title_one &&
                                            serviceResponse.data.fourth_section_title_one}</h2>

                                        <div className="mb-0"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    serviceResponse.data?.fourth_section_description_one &&
                                                    serviceResponse.data.fourth_section_description_one,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className={`${styles.odieuwniwehr_inner} overflow-hidden p-4`} style={{ backgroundImage: "url(./images/16358987_v960-ning-30.jpg)" }}>
                                    <div className={`${styles.dsdvrgtrweewerwer} p-4`}>
                                        <h2>{serviceResponse.data?.fourth_section_title_two &&
                                            serviceResponse.data.fourth_section_title_two}</h2>
                                        <div className="mb-0"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    serviceResponse.data?.fourth_section_description_two &&
                                                    serviceResponse.data.fourth_section_description_two,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className={`${styles.odieuwniwehr_inner} overflow-hidden p-4`} style={{ backgroundImage: "url(./images/16358987_v960-ning-30.jpg)" }}>
                                    <div className={`${styles.dsdvrgtrweewerwer} p-4`}>
                                        <h2>{serviceResponse.data?.fourth_section_title_three &&
                                            serviceResponse.data.fourth_section_title_three}</h2>

                                        <div className="mb-0"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    serviceResponse.data?.fourth_section_description_three &&
                                                    serviceResponse.data.fourth_section_description_three,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className={`${styles.sdfghnrewetytuuuu} sticky-top`}>
                                    {serviceResponse.data?.fourth_section_main_image && (
                                        <img
                                            src={`${serviceResponse.image_url}/Templete_34/${serviceResponse.data.fourth_section_main_image}`}
                                            alt="" className="img-fluid"
                                        />
                                    )}

                                    {slug === 'motion-graphic-design-services' && (
                                        <div className={styles.motion_page}>
                                            <img src="./images/graphics_second_img1.png" className={styles.picture_1} alt=""/>

                                            <img src="./images/graphics_second_img2.png" className={styles.picture_2} alt=""/>

                                            <img src="./images/graphics_second_img3.png" className={styles.picture_3} alt=""/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.sdmsdjhsds}>
                    {serviceResponse.data?.featured_image && (
                        <img
                            src={`${serviceResponse.image_url}/Templete_34/${serviceResponse.data.featured_image}`}
                            alt=""
                        />
                    )}

                    {slug === 'motion-graphic-design-services' && (

                    <div className={styles.motion}>
                        <img src="./images/motion_img1.png" className={styles.motion1} data-aos="fade-down-right" alt=""/>
                        <img src="./images/motion_img2.png" className={styles.motion2} data-aos="fade-down-right" alt=""/>
                        <img src="./images/motion-img3.png" className={styles.motion3} data-aos="fade-down-left" alt=""/>
                        <img src="./images/motion-img4.png" className={styles.motion4} data-aos="fade-down-left" alt=""/>
                    </div>

                    )}


                </div>
                <LastSectionComponent />
            </main>
            </PageWrapper>
        </div>
    )
}
