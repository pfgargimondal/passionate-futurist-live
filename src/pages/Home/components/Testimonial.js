import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';

export const Testimonial = ({ourClients, imageUrl, headingDetails}) => {
  return (
    <div>
      <div className="home-review-section py-5">
                <div className="dfvghhgfdvggyre container text-center pb-5">
                  <span>{headingDetails.banner_details?.our_clients_heading &&
                      headingDetails.banner_details.our_clients_heading}</span>
                  <h2 className="mt-2">
                    {headingDetails.banner_details.our_clients_title.split(" ")[0]}{" "}
                    <span>{headingDetails.banner_details.our_clients_title.split(" ")[1]}</span>
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        headingDetails.banner_details
                          ?.our_clients_description &&
                        headingDetails.banner_details
                          .our_clients_description,
                    }}
                  />
                </div>
                <div className="portfolio-slider">
                  <div className="sliderdsfrr">
                    <div className="swiper people__slide">
                      <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView="auto"
                        grabCursor={true}
                        centeredSlides={true}
                        loop={false}
                        observer={true}
                        observeParents={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                      >

                        {ourClients.map((ourClient, idx) => (
                          <SwiperSlide key={idx}>
                            <div className="people__card">
                              <div className="people__info">
                                <ul className="people__social">
                                  <li>
                                    <a href="/">
                                      <i className="fa-solid fa-globe" />
                                    </a>
                                  </li>
                                </ul>
                                <h3 className="people__name d-flex align-items-center">
                                  <div className="people__image">
                                    {ourClient?.image && (
                                        <img
                                        src={`${imageUrl}/${ourClient.image}`}
                                        alt=""
                                        />
                                    )}
                                  </div>
                                  {ourClient.name}
                                </h3>
                                <p className="people__position">
                                  {ourClient.designation}
                                </p>
                                <p className="people__desc">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: ourClient?.description && (ourClient.description),
                                        }}
                                    />
                                </p>
                              </div>
                              <div className="people__btn">
                                <a href="/">Contact Us</a>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}
