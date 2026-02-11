import styles from "./Css/Template6.module.css";
import { useEffect, useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Template6 = ({ serviceResponse, slug }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    AOS.init({
        duration: 2000,
        once: false, // Animations only happen once
    });
    }, []);


    const sliderSettings = {
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    adaptiveHeight: true,
  };

  const slides = "E-Commerce expert for secure, Custom online stores"
  .split(",")
  .map(item => item.trim());


    return (
        <div>
            <PageWrapper slug={slug} type="Template">
            {loading && <Loader />}
            <main>
                <div className={styles.dfgjhfgd}>
                    <div className={`${styles.sdfghdfgdf} col-lg-6`}>
                        <h1 className="mt-0 mb-0">
                            {serviceResponse.data?.banner_title && serviceResponse.data.banner_title}
                        </h1>
                        <div
                            className="mt-3 mb-5"
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



                    <div className={`${styles.dbfghsdf} col-lg-6 position-relative row`}>
                        {serviceResponse.data?.banner_image && (
                            <img
                                src={`${serviceResponse.image_url}/Templete_6/${serviceResponse.data.banner_image}`}
                                alt=""
                            />
                        )}
                        {slug === "digital-marketing-services" && (
                        <>
                        <div className={styles.dfdsf52d}>
                            <div className={`${styles.box} ${styles.updown}`}>
                                <img src="./images/digiphoto (1).png" alt=""/>
                            </div>
                        </div>

                        <div className={styles.dfdsf52d2}>
                            <div className={`${styles.box} ${styles.leftright}`}>
                                <img src="./images/digiphoto (2).png" alt=""/>
                            </div>
                        </div>
                        </>
                        )}
                        {slug === 'e-commerce-services' && (
                            <>
                            <h1 className={`${styles.thsbxdfgnxcvgn} position-absolute`}>
                                Partner with India's top
                                <span>
                                    <div
                                    className={`${styles.hero__title} overflow-hidden`}
                                    id="animatedHeading"
                                    >
                                    <Slider {...sliderSettings}>
                                        {slides.map((text, index) => (
                                        <div className="slick-dupe" key={index}>
                                            <span className="hero__title-misc animate">
                                            {text}
                                            </span>
                                        </div>
                                        ))}
                                    </Slider>
                                    </div>
                                </span>
                                </h1>
                            </>
                        )}
                        {slug === 'ecommerce-website-design-company' && (
                            <div className={styles.duiwenihrwer}>
                                <img src="./images/fsrgtw.png" className="position-absolute" data-aos="fade-down" alt="" />

                                {/* <img src="./images/fsrgtw2.png" className="position-absolute" alt="" /> */}

                                <img src="./images/fsrgtw3.png" className="position-absolute" alt="" />
                            </div>
                        )}

                        {slug === 'event-management-and-fairs-exhibitions-advertisement-service' && (
                            <>
                                <div className={styles.event01}>
                                    <img src="./images/event1.webp" className={styles.event001} data-aos="fade-left"data-aos-delay="500" alt=""/>
                                </div>

                                <div className={styles.event03}>
                                    <img src="./images/event3.webp" className={styles.event003} data-aos="fade-left" alt=""/>
                                </div>

                                <div className={styles.event04}>
                                    <img src="./images/event4.webp" className={styles.event004} data-aos="fade-right" data-aos-delay="500" alt=""/>
                                </div>
                                
                                <div className={styles.event05}>
                                    <img src="./images/event5.webp" className={styles.event005} data-aos="fade-right" alt=""/>
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
                                        serviceResponse.data?.second_section_first_description &&
                                        serviceResponse.data.second_section_first_description,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <ServiceEnquiryForm loading={setLoading} slug={slug} />

                <div className={styles.dfbghdfgdfgdf}>
                    <div className="custom-container">
                        <div className={styles.mgjhbdfg}>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        serviceResponse.data?.second_section_second_description &&
                                        serviceResponse.data.second_section_second_description,
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
                                            {serviceResponse.data?.third_section_title &&
                                                serviceResponse.data.third_section_title}
                                        </h2>
                                        <div
                                            className="py-4 mb-0"
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
                                    <div className= {`${styles.sdfghdfgdf655} sticky-top`}>
                                        <div className={styles.dgndfgdfgdf} style={{ height: '60%', marginTop: '35%'}}>
                                            {serviceResponse.data?.third_section_image && (
                                                <img
                                                    src={`${serviceResponse.image_url}/Templete_6/${serviceResponse.data.third_section_image}`}
                                                    alt=""
                                                />
                                            )}
                                            {slug === 'e-commerce-services' && (
                                            <>
                                                <div className={styles.ephoto1} data-aos="fade-right">
                                                    <img src="./images/eccom2 (5).png" alt=""/>

                                                </div>

                                                <div className={styles.ephoto2} data-aos="fade-right">
                                                    <img src="./images/eccom2 (2).png" alt=""/>

                                                </div>

                                                <div className={styles.ephoto3} data-aos="fade-right">
                                                
                                                    <img src="./images/eccom2 (1).png" alt=""/>

                                                </div>

                                                <div className={styles.ephoto4} data-aos="fade-left">
                                                    <img src="./images/eccom2 (4).png" alt=""/>

                                                </div>

                                                <div className={styles.ephoto5} data-aos="fade-left">
                                                    <img src="./images/eccom2 (3).png" alt=""/>

                                                </div>
                                            </>
                                            )}

                                            {slug === 'event-management-and-fairs-exhibitions-advertisement-service' && ( 
                                                <div className={styles.emfesimgs}>
                                                    <img src="/images/emfeabulb.webp" className={styles.emfesimg1} alt=""/>

                                                    <img src="/images/emfeagraph.webp" className={styles.emfesimg2} alt=""/>

                                                    <img src="/images/emfeabar.webp" className={styles.emfesimg3} alt=""/>
                                                </div>
                                            )}

                                        </div>
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
                                    <div className={styles.dgndfgdfgdf}>
                                        {serviceResponse.data?.fourth_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Templete_6/${serviceResponse.data.fourth_section_image}`}
                                                alt="" data-aos="zoom-in"
                                            />
                                        )}

                                        {slug === 'event-management-and-fairs-exhibitions-advertisement-service' && (
                                            <div className={styles.ebook}>
                                                <img src="./images/meet1.png" className={styles.et1} alt="" />

                                                <img src="./images/meet2.png" className={styles.et2} alt="" />

                                                <img src="./images/meet3.png" className={styles.et3} alt="" />
                                            </div>
                                        )}

                                    </div>
                                </div>
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
                                        <button>Get started</button>
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
                                {serviceResponse.data?.fifth_section_title &&
                                    serviceResponse.data.fifth_section_title}
                            </h2>
                            <div
                                className="text-center py-4 mb-0"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        serviceResponse.data?.fifth_section_description &&
                                        serviceResponse.data.fifth_section_description,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className={`${styles.xnjhxffgdf} position-relative`}>
                    {serviceResponse.data?.featured_image && (
                        <img
                            src={`${serviceResponse.image_url}/Templete_6/${serviceResponse.data.featured_image}`}
                            alt=""
                        />
                    )}
                    {slug === "digital-marketing-services" && (
                    <>
                
                    <div className={styles.dfdsf52d2a}>
                        <div className={`${styles.box} ${styles.leftright}`}>
                            <img src="./images/digiicon2 (5).png" alt=""/>
                        </div>
                    </div>

                    <div className={styles.dfdsf52daa}>
                        <div className={`${styles.box} ${styles.updown}`}>
                            <img src="./images/digiicon2 (1).png" alt=""/>
                        </div>
                    </div>

                    <div className={styles.dfdsf52daaa}>
                        <div className={`${styles.box} ${styles.updown}`}>
                            <img src="./images/digiicon2 (4).png" alt=""/>
                        </div>
                    </div>

                    <div className={styles.dfdsf52daaaa}>
                        <div className={`${styles.box} ${styles.updown}`}>
                            <img src="./images/digiicon2 (3).png" alt=""/>
                        </div>
                    </div>

                    <div className={styles.dfdsf52daaaaa}>
                        <div className={`${styles.box} ${styles.updown}`}>
                            <img src="./images/digiicon2 (2).png" alt=""/>
                        </div>
                    </div>
                    </>
                    )}

                    {slug === 'e-commerce-services' && (
                    <>
                        <div className={`${styles.icon} ${styles.cartIcon}`}>
                            <img src="/images/Artboard 1.png" alt="Cart" />
                        </div>

                        <div className={`${styles.icon} ${styles.gearIcon}`}>
                            <img src="/images/Artboard 2.png" alt="Gear" />
                        </div>

                        <div className={`${styles.icon} ${styles.truckIcon}`}>
                            <img src="/images/Artboard 1v.png" alt="Truck" />
                        </div>

                        <div className={`${styles.icon} ${styles.coinIcon}`}>
                            <img src="/images/Artboard 3.png" alt="Coin" />
                        </div>
                        <div className={`${styles.icon} ${styles.envelopeIcon}`}>
                            <img src="/images/Artboard 4.png" alt="Message Box" />
                        </div>
                        <div className={`${styles.icon} ${styles.saleIcon}`}>
                            <img src="/images/Artboard 1b.png" alt="Sale" />
                        </div>
                    </>
                    )}

                    {slug === "ecommerce-website-design-company" && (
                        <div className={styles.diwehrihwerw}>
                            <div className={styles.doikewikrhwer}></div>

                            <img src="./images/Digital Marketing Agency FAQs (5) (2).png" className={`${styles.dowejijwemrwer} position-absolute`} data-aos="fade-down-right" alt="" />

                            <img src="./images/Digital Marketing Agency FAQs (5) (3).png" className={`${styles.dsfsdvsesff} position-absolute`} data-aos="fade-down-left" alt="" />

                            <img src="./images/Digital Marketing Agency FAQs (5) (4).png" className={`${styles.asdasdaswwe} position-absolute`} data-aos="fade-up-right" alt="" />

                            <img src="./images/Digital Marketing Agency FAQs (5) (5).png" className={`${styles.dsfdgtsrr} position-absolute`} data-aos="fade-left" alt="" />
                        </div>
                    )}

                    {slug === 'event-management-and-fairs-exhibitions-advertisement-service' && (
                        <div>
                            <div className={styles.RRpic1}>
                                <img src="./images/RRpic3.webp" className={styles.RRpicc1} data-aos="fade-down-right" alt="" />
                            </div>

                            <div className={styles.RRpic2}>
                                <img src="./images/RRpic4.webp" className={styles.RRpicc2} data-aos="fade-up-left" data-aos-delay="150" alt="" />
                            </div>

                            <div className={styles.RRpic3}>
                                <img src="./images/RRpic5.webp" className={styles.RRpicc3} data-aos="fade-down-left" data-aos-delay="300" alt="" />
                            </div>
                            
                            <div className={styles.RRpic4}>
                                <img src="./images/RRpic6.webp" className={styles.RRpicc4} data-aos="fade-up-right" data-aos-delay="450" alt="" />
                            </div>
                        </div>
                    )}
                </div>
                <LastSectionComponent />
            </main>
            </PageWrapper>
        </div>
    )
}
