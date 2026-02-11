import styles from "./Css/Template31.module.css";
import { useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template31 = ({ serviceResponse, slug }) => {
    const [loading, setLoading] = useState(false);
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
                                    src={`${serviceResponse.image_url}/Templete_31/${serviceResponse.data.banner_image}`}
                                    alt=""
                                />
                            )}

                            {slug === 'envelope-designing-services' && ( 
                                <div className={styles.cat}>
                                    <img src="./images/envelope_designing_banner_1.png" className={styles.oo1} alt="" />
                                    <img src="./images/envelope_designing_banner_2.png" className={styles.oo2} alt="" />
                                    <img src="./images/envelope_designing_banner_3.png" className={styles.oo3} alt="" />
                                    <img src="./images/envelope_designing_banner_4.png" className={styles.oo4} alt="" />
                                    <img src="./images/envelope_designing_banner_5.png" className={styles.oo5} alt="" />
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

                            <div className="pt-4"
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
                            <div className="pt-4"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        serviceResponse.data?.third_section_description &&
                                        serviceResponse.data.third_section_description,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className={`${styles.uidoiejoijorer} py-5`}>
                    <div className="custom-container py-5">
                        <h2 className={`${styles.ijsduihfwejier} text-center`}>{serviceResponse.data?.third_section_title &&
                            serviceResponse.data.third_section_title}<img src="./images/6797439df4b61c870b39c7c5_Vector 179.svg" alt="" /></h2>

                        <div className={`${styles.ijiojojoioierr} mt-5`}>
                            <div className="row justify-content-center">
                                <div className="col-lg-6 mb-4">
                                    <div className={`${styles.uidneiwjrer_inner} p-4`}>
                                        {serviceResponse.data?.fourth_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Templete_31/${serviceResponse.data.fourth_section_image}`}
                                                alt=""
                                            />
                                        )}
                                        <h4>{serviceResponse.data?.fourth_section_title &&
                                            serviceResponse.data.fourth_section_title}</h4>

                                        <div className="pt-4"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    serviceResponse.data?.fourth_section_description &&
                                                    serviceResponse.data.fourth_section_description,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 mb-4">
                                    <div className={`${styles.uidneiwjrer_inner} p-4`}>
                                        {serviceResponse.data?.fifth_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Templete_31/${serviceResponse.data.fifth_section_image}`}
                                                alt=""
                                            />
                                        )}
                                        <h4>{serviceResponse.data?.fifth_section_title &&
                                            serviceResponse.data.fifth_section_title}</h4>

                                        <div className="pt-4"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    serviceResponse.data?.fifth_section_description &&
                                                    serviceResponse.data.fifth_section_description,
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 mb-4">
                                    <div className={`${styles.uidneiwjrer_inner} p-4`}>
                                        {serviceResponse.data?.sixth_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Templete_31/${serviceResponse.data.sixth_section_image}`}
                                                alt=""
                                            />
                                        )}
                                        <h4>{serviceResponse.data?.sixth_section_title &&
                                            serviceResponse.data.sixth_section_title}</h4>

                                        <div className="pt-4"
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

                <div className={`${styles.sdmsdjhsds} position-relative`}>
                    {serviceResponse.data?.last_image && (
                        <img
                            src={`${serviceResponse.image_url}/Templete_31/${serviceResponse.data.last_image}`}
                            alt=""
                        />
                    )}

                    {slug === 'envelope-designing-services' && ( 
                        <div className={styles.envelope_page}>
                            <img src="./images/e1.webp" className={styles.img1} alt=""/> 

                            <img src="./images/e2.webp" className={styles.img2} alt=""/>

                            <img src="./images/e3.webp" className={styles.img3} alt=""/>

                            <img src="./images/e4.webp" className={styles.img4} alt=""/>

                            <img src="./images/e5.webp" className={styles.img5} alt=""/>                
                        </div>
                    )}
                </div>
                <LastSectionComponent />
            </main>
            </PageWrapper>
        </div>
    )
}
