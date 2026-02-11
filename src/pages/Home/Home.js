import { useEffect, useRef, useState, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FAQ } from "./components/FAQ";
import "./homepagestyle.css";
import "./homepageresponsive.css";
import http from "../../http";
import Loader from "../../component/Loader/Loader";
import { Testimonial } from "./components/Testimonial";
import { EnquiryForm } from "./components/EnquiryForm";
import "react-toastify/dist/ReactToastify.css";
import { WeOfferTab } from "./components/WeOfferTab";
import { Link } from "react-router-dom";
import { PageWrapper } from "../../SEOComponent/PageWrapper";

export const Home = ({ state }) => {
  const elementOneRef = useRef(null);
  const elementTwoRef = useRef(null);
  const elementThreeRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // useTitle("Home");

  const isElementInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const handleScroll = useCallback(() => {
    const elements = [
      { ref: elementOneRef.current, className: "animateone" },
      { ref: elementTwoRef.current, className: "animatetwo" },
      { ref: elementThreeRef.current, className: "animatethree" },
    ];

    elements.forEach(({ ref, className }) => {
      if (ref) {
        if (isElementInViewport(ref)) {
          ref.classList.add(className);
        } else {
          ref.classList.remove(className);
        }
      }
    });
  }, []); // safe because refs don't change

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial trigger
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // ✅ add handleScroll here

  const [HomePageDetails, setHomePageDetails] = useState({});
  const [HomeAllDetails, setHomeAllDetails] = useState({});

  useEffect(() => {
    const fetchHomePageData = async () => {
      setLoading(true);
      try {
        const getresponse = await http.get(`${process.env.REACT_APP_HOMEAPI}`);
        setHomePageDetails(getresponse.data);
        const home_response = getresponse.data.data;
        setHomeAllDetails(home_response);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomePageData();
  }, []);

  const [timeLeft, setTimeLeft] = useState({});

  const targetDate =
    (HomeAllDetails.fifthSection_details?.offer_date || "") + "T23:59:59";

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        // setExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // initial call

    return () => clearInterval(interval);
  }, [targetDate]);


  // const [meta, setMeta] = useState({
  //   title: "Home",
  //   description: "Welcome to our website",
  //   keyword:""
  // });

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_HOMEMETAAPI}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setMeta({
  //         title: data.meta_title,
  //         description: data.meta_description,
  //         keyword: data.meta_keyword
  //       });
  //     })
  //     .catch(() => {
  //       // fallback if API fails
  //       setMeta({
  //         title: "Home",
  //         description: "Welcome to our website",
  //         keyword:""
  //       });
  //     });
  // }, []);


  if (loading) {
    return <Loader />;
  }

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

  const slides = HomeAllDetails.banner_details?.banner_title_two
    ? HomeAllDetails.banner_details.banner_title_two
        .split(",")
        .map((item) => item.trim())
    : [];




  return (
    <PageWrapper slug="home" type="page">

      <div className="home">
        {/*header start*/}

        {/*header end*/}
        {/*banner start*/}
        <div className="home_page_banner position-relative">
          <div className="container">
            <img
              src="./images/Untitled design (4) (4).png"
              className="img-fluid dinkjnewrewr_img"
              alt=""
            />
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4">
                <div className="iuhduiewrewr_left">
                  <div className="ihndkjewurewr d-flex align-items-center">
                    {HomeAllDetails.banner_details?.banner_heading_image && (
                      <img
                        src={`${HomePageDetails.home_image_url}/${HomeAllDetails.banner_details.banner_heading_image}`}
                        className="me-3"
                        width={35}
                        alt=""
                      />
                    )}
                    <span>
                      {HomeAllDetails.banner_details?.banner_heading &&
                        HomeAllDetails.banner_details.banner_heading}
                    </span>
                  </div>
                  <h1 class="mt-2 position-relative">
                    {HomeAllDetails.banner_details?.banner_title_one &&
                      HomeAllDetails.banner_details.banner_title_one}
                    <span> 
                      <div
                        class="hero__title overflow-hidden"
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
                  <div
                    class="mt-4 mb-5"
                    dangerouslySetInnerHTML={{
                      __html:
                        HomeAllDetails.banner_details?.banner_description &&
                        HomeAllDetails.banner_details.banner_description,
                    }}
                  />

                  <button
                    className="btn btn-custm-bttn me-3"
                    id="frm-modal-button"
                  >
                    <Link to={"business-register"}>Get Started</Link>
                  </button>

                  <button className="btn btn-custm-bttn-2">
                    <Link to={"contact-us"}>Contact Us</Link>
                  </button>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div className="iuhduiewrewr_right position-relative">
                  <div className="duhweurw position-absolute bg-white p-2">
                    <div className="uidhewrewrer frtfrewrtret p-2">
                      <span />
                      <p className="mb-0 mt-2">Live visitors on your website</p>
                    </div>
                  </div>
                  <div className="duewghrewrewr">
                    <div className="duhweurw position-absolute bg-white p-2">
                      <div className="uidhewrewrer p-2">
                        <span className="d-flex">
                          <span className="count">76</span>%
                        </span>
                        <p className="mb-0 mt-2">
                          Visitors need a human
                          <br />
                          agent
                        </p>
                      </div>
                    </div>
                  </div>

                  <EnquiryForm loading={setLoading} serviceCategory={state} />

                  <div className="duhweurw uinkhwerwer position-absolute bg-white p-2">
                    <div className="uidhewrewrer p-2">
                      <span className="d-flex">
                        <span className="count">100</span>%
                      </span>
                      <p className="mb-0 mt-2">Project success rate</p>
                    </div>
                  </div>
                  <div className="uinbkjhwuiere">
                    <div className="duhweurw position-absolute bg-white p-2">
                      <div className="uidhewrewrer p-2">
                        <span>1,000</span>
                        <p className="mb-0 mt-2" id="typetext">
                          avg. increase in campaign leads
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*banner end*/}
        {/*middle start*/}
        {/* <main> */}
        <div className="home-section-1 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 vfdgdfgdvdftgdg">
                <div className="uihndewrewr_left sticky-top">
                  <div className="idhejwirhewr_circle">
                    <div className="particles" />
                    <div className="particles" />
                    <div className="particles" />
                    <div className="particles" />
                    <div className="particles" />
                  </div>
                  {HomeAllDetails.secondSection_details
                    ?.second_section_main_image && (
                    <img
                      src={`${HomePageDetails.home_image_url}/${HomeAllDetails.secondSection_details.second_section_main_image}`}
                      className="img-fluid okclkdsnfoidsnfjdsiuhf"
                      width="95%"
                      alt=""
                    />
                  )}

                  <div className="oodoeworere bg-white p-2">
                    <div className="iuhnihewre p-2">
                      <span className="uibiheknwir" />
                      <p className="mb-0 mt-2">Live visitors on your website</p>
                    </div>
                  </div>
                  <div className="duhweurw position-absolute bg-white p-2">
                    <div className="iuhnihewre p-2">
                      <span className="d-flex">
                        <span className="count">100</span>%
                      </span>
                      <p className="mb-0 mt-2">
                        Visitors need a human <br /> agent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 offset-sm-0 offset-0">
                <div className="uihndewrewr_right">
                  <div className="cseerrtyery d-flex align-items-center">
                    {/* <img src="./images/" width="35" class="me-2" alt=""> */}
                    <span>
                      {HomeAllDetails.secondSection_details
                        ?.second_section_heading &&
                        HomeAllDetails.secondSection_details
                          .second_section_heading}
                    </span>
                  </div>
                  <h2 className="mt-2">
                    {HomeAllDetails.secondSection_details?.second_section_title &&
                      HomeAllDetails.secondSection_details.second_section_title}
                  </h2>
                  <div
                    className="mt-3 mb-5"
                    dangerouslySetInnerHTML={{
                      __html:
                        HomeAllDetails.secondSection_details
                          ?.second_section_description &&
                        HomeAllDetails.secondSection_details
                          .second_section_description,
                    }}
                  />
                  <div className="diuewrewre_wrapper">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                        <div className="iuniuewrrer_inner">
                          <div className="nbgerwerwer position-relative">
                            {HomeAllDetails.secondSection_details
                              ?.second_section_image_one && (
                              <img
                                src={`${HomePageDetails.home_image_url}/${HomeAllDetails.secondSection_details.second_section_image_one}`}
                                width="70%"
                                className="mb-3"
                                alt=""
                              />
                            )}
                          </div>
                          <h5>
                            {HomeAllDetails.secondSection_details
                              ?.second_section_title_one &&
                              HomeAllDetails.secondSection_details
                                .second_section_title_one}
                          </h5>
                          <p>
                            {HomeAllDetails.secondSection_details
                              ?.second_section_description_one &&
                              HomeAllDetails.secondSection_details
                                .second_section_description_one}
                          </p>
                          <img
                            src="./images/Untitled design (5) (1).png"
                            className="inbewrew_img position-absolute"
                            alt=""
                          />
                          <span ref={elementOneRef} className="iuhndnhuiwer_one">
                            1
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 offset-lg-6 mb-3">
                        <div className="iuniuewrrer_inner">
                          <div className="nbgerwerwer position-relative">
                            {HomeAllDetails.secondSection_details
                              ?.second_section_image_two && (
                              <img
                                src={`${HomePageDetails.home_image_url}/${HomeAllDetails.secondSection_details.second_section_image_two}`}
                                width="70%"
                                className="mb-3"
                                alt=""
                              />
                            )}
                          </div>
                          <h5>
                            {HomeAllDetails.secondSection_details
                              ?.second_section_title_two &&
                              HomeAllDetails.secondSection_details
                                .second_section_title_two}
                          </h5>
                          <p>
                            {HomeAllDetails.secondSection_details
                              ?.second_section_description_two &&
                              HomeAllDetails.secondSection_details
                                .second_section_description_two}
                          </p>
                          <img
                            src="./images/Untitled design (5) (1).png"
                            className="inbewrew_img position-absolute"
                            alt=""
                          />
                          <span ref={elementTwoRef} className="iuhndnhuiwer_two">
                            2
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                        <div className="iuniuewrrer_inner">
                          <div className="nbgerwerwer position-relative">
                            {HomeAllDetails.secondSection_details
                              ?.second_section_image_three && (
                              <img
                                src={`${HomePageDetails.home_image_url}/${HomeAllDetails.secondSection_details.second_section_image_three}`}
                                width="70%"
                                className="mb-3"
                                alt=""
                              />
                            )}
                          </div>
                          <h5>
                            {HomeAllDetails.secondSection_details
                              ?.second_section_title_three &&
                              HomeAllDetails.secondSection_details
                                .second_section_title_three}
                          </h5>
                          <p>
                            {HomeAllDetails.secondSection_details
                              ?.second_section_description_three &&
                              HomeAllDetails.secondSection_details
                                .second_section_description_three}
                          </p>
                          <img
                            src="./images/Untitled design (5) (1).png"
                            className="inbewrew_img position-absolute"
                            alt=""
                          />
                          <span
                            ref={elementThreeRef}
                            className="iuhndnhuiwer_three"
                          >
                            3
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 offset-lg-6 mb-3">
                        <div className="iuniuewrrer_inner">
                          <div className="nbgerwerwer position-relative">
                            {HomeAllDetails.secondSection_details
                              ?.second_section_image_four && (
                              <img
                                src={`${HomePageDetails.home_image_url}/${HomeAllDetails.secondSection_details.second_section_image_four}`}
                                width="70%"
                                className="mb-3"
                                alt=""
                              />
                            )}
                          </div>
                          <h5>
                            {HomeAllDetails.secondSection_details
                              ?.second_section_title_four &&
                              HomeAllDetails.secondSection_details
                                .second_section_title_four}
                          </h5>
                          <p>
                            {HomeAllDetails.secondSection_details
                              ?.second_section_description_four &&
                              HomeAllDetails.secondSection_details
                                .second_section_description_four}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-none csdrdecsrddadasd mt-5">
                <div className="uihndewrewr_left sticky-top">
                  <div className="idhejwirhewr_circle">
                    <div className="particles" />
                    <div className="particles" />
                    <div className="particles" />
                    <div className="particles" />
                    <div className="particles" />
                  </div>
                  {HomeAllDetails.secondSection_details
                    ?.second_section_main_image && (
                    <img
                      src={`${HomePageDetails.home_image_url}/${HomeAllDetails.secondSection_details.second_section_main_image}`}
                      className="img-fluid okclkdsnfoidsnfjdsiuhf"
                      width="95%"
                      alt=""
                    />
                  )}

                  <div className="oodoeworere bg-white p-2">
                    <div className="iuhnihewre p-2">
                      <span className="uibiheknwir" />
                      <p className="mb-0 mt-2">Live visitores on your site</p>
                    </div>
                  </div>
                  <div className="duhweurw position-absolute bg-white p-2">
                    <div className="iuhnihewre p-2">
                      <span className="d-flex">
                        <span className="count">100</span>%
                      </span>
                      <p className="mb-0 mt-2">
                        Visitors need a human <br /> agent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dihenwriherer position-relative">
          <div className="ihniuhiewrwer text-center">
            <h1>
              {/* What We <span>Offer</span> */}
              {HomeAllDetails.banner_details?.what_we_offer_title &&
                        HomeAllDetails.banner_details.what_we_offer_title}
            </h1>
          </div>
          <div className="inuiuihewrewrewr_wrapper position-absolute">
            <div
              className="uihnkjdiwuherwer"
              data-aos="fade-left"
              data-aos-duration={1000}
            />
            <div
              className="unkjhiewre"
              data-aos="fade-left"
              data-aos-duration={1500}
            />
            <div
              className="uinkiwnrwier"
              data-aos="fade-left"
              data-aos-duration={2000}
            />
            <div
              className="opoeworewrre"
              data-aos="fade-left"
              data-aos-duration={3000}
            />
          </div>
          <WeOfferTab tabDetails={HomeAllDetails.tabSection_details} />
        </div>
        <div className="iuhieuiriewhrewr position-relative pb-5">
          <img
            src="./images/Add a subheading (1).png"
            className="inkjnuiewrewr_image position-absolute"
            alt=""
          />
          <div className="container pb-5">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="ot-heading v3 mb-0">
                  <span>
                    {HomeAllDetails.fourthSection_details?.heading &&
                      HomeAllDetails.fourthSection_details.heading}
                  </span>
                  <h2 className="main-heading mt-3">
                    {/* Over <span>10+</span> Countries Trust us <br /> for Their
                      Success */}
                    {HomeAllDetails.fourthSection_details?.title &&
                      HomeAllDetails.fourthSection_details.title}
                  </h2>
                </div>
              </div>
              <div className="space-10" />
              <div className="col-lg-12">
                {HomeAllDetails.fourthSection_details
                  ?.image && (
                  <img
                    src={`${HomePageDetails.home_image_url}/${HomeAllDetails.fourthSection_details.image}`}
                    className="mkdiermewrer"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="space-55" />
            <div className="row inhiewrewr_wrapper justify-content-center">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="service-box s-box">
                  <span className="big-number">01</span>
                  <div className="content-box d-flex">
                    <i className="fa-solid me-3 fa-2x fa-circle-check" />
                    <div className="ijndwuierew">
                      <h5>
                        {HomeAllDetails.fourthSection_details?.title_one &&
                          HomeAllDetails.fourthSection_details.title_one}
                      </h5>
                      <p>
                        {HomeAllDetails.fourthSection_details?.description_one &&
                          HomeAllDetails.fourthSection_details.description_one}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="service-box s-box">
                  <span className="big-number">02</span>
                  <div className="content-box d-flex">
                    <i className="fa-solid me-3 fa-2x fa-circle-check" />
                    <div className="ijndwuierew">
                      <h5>
                        {HomeAllDetails.fourthSection_details?.title_two &&
                          HomeAllDetails.fourthSection_details.title_two}
                      </h5>
                      <p>
                        {HomeAllDetails.fourthSection_details?.description_two &&
                          HomeAllDetails.fourthSection_details.description_two}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box s-box">
                  <span className="big-number">03</span>
                  <div className="icon-main color-s3">
                    <span className="flaticon-correct" />
                  </div>
                  <div className="content-box d-flex">
                    <i className="fa-solid me-3 fa-2x fa-circle-check" />
                    <div className="ijndwuierew">
                      <h5>
                        {HomeAllDetails.fourthSection_details?.title_three &&
                          HomeAllDetails.fourthSection_details.title_three}
                      </h5>
                      <p>
                        {HomeAllDetails.fourthSection_details
                          ?.description_three &&
                          HomeAllDetails.fourthSection_details.description_three}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ihuidnweirewrewr py-5 my-5">
          <img
            src="./images/Group-min-744x1024.png"
            className="iudnewherer img-fluid position-absolute"
            alt=""
          />
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-7 mb-3">
                <div className="ihnewhrwer_inner position-relative">
                  <h1 className="mb-5">
                    {/* Book an Appointment with <span>Our Expert</span> to{" "}
                      <span>Boost Your Business!</span> */}
                    {HomeAllDetails.fifthSection_details?.heading &&
                      HomeAllDetails.fifthSection_details.heading}
                  </h1>
                  {/*<p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eius culpa aliquam qui sapiente, ipsam dicta.</p>*/}
                  <div className="uihiqwhee p-4 rounded-3 bg-white">
                    <div className="row">
                      <div className="col-lg-5 mb-3">
                        <div className="dihewhrewr">
                          <span className="erijretret">
                            {HomeAllDetails.fifthSection_details?.title_one &&
                              HomeAllDetails.fifthSection_details.title_one}
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="dihewhrewr_oijekmr">
                          <p>
                            {HomeAllDetails.fifthSection_details
                              ?.description_one &&
                              HomeAllDetails.fifthSection_details.description_one}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="iunierr row mt-4">
                      <div className="col-lg-5">
                        <div className="iieiwerewr">
                          <span className="erijretret">
                            {HomeAllDetails.fifthSection_details?.title_two &&
                              HomeAllDetails.fifthSection_details.title_two}
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="iieworiwerewr">
                          <div id="countdown">
                            <ul className="ps-0">
                              <li>
                                days
                                <span id="days">{timeLeft.days}</span>
                              </li>
                              <li>
                                Hours
                                <span id="hours">{timeLeft.hours}</span>
                              </li>
                              <li>
                                Minutes
                                <span id="minutes">{timeLeft.minutes}</span>
                              </li>
                              <li>
                                Seconds
                                <span id="seconds">{timeLeft.seconds}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ihniewrwer d-flex justify-content-between mt-3">
                      <button className="btn col-lg-5 btn-custm-bttn">
                        <Link to="/contact-us">Get In Touch</Link>
                      </button>
                      <button className="btn col-lg-5 btn-custm-bttn-2">
                        <a href="tel:+918420202891">Call Now</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mb-3">
                <div className="ihnewhgtyrwer_inner sticky-top">
                  <div
                    className="ikniher position-relative"
                  >
                    {HomeAllDetails.fifthSection_details?.fifth_section_image && (
                      <img
                        src={`${HomePageDetails.home_image_url}/${HomeAllDetails.fifthSection_details.fifth_section_image}`}
                        className="img-fluid"
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ihidihewirewnriewr pb-5">
          <div className="dfvghhgfdvggyre container text-center pb-5">
            <span> {HomeAllDetails.banner_details?.our_works_heading &&
                        HomeAllDetails.banner_details.our_works_heading}</span>

            <h2 className="mt-2">
              {HomeAllDetails.banner_details.our_works_title.split(" ")[0]}{" "}
                <span>{HomeAllDetails.banner_details.our_works_title.split(" ")[1]}</span>
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  HomeAllDetails.banner_details
                    ?.our_works_description &&
                  HomeAllDetails.banner_details
                    .our_works_description,
              }}
            />

          <Link to="/portfolio"> <button className="btn btn-custm-bttn mt-3">View All Projects</button> </Link>
          </div>
        </div>

        <Testimonial
          ourClients={HomePageDetails.data.Testimonials}
          imageUrl={HomePageDetails.image_url}
          headingDetails={HomeAllDetails}
        />

        <FAQ faqs={HomePageDetails.data.Faqs} headingDetails={HomeAllDetails}/>
        {/* </main> */}
        {/*middle end*/}
        <div className="over-white-layer position-fixed bg-white" />
      </div>
    </PageWrapper>
  );
};
