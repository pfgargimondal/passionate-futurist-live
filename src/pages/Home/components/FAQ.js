import { useState } from "react";

export const FAQ = ({faqs, headingDetails}) => {
    const [activeFaqId, setActiveFaqId] = useState(null);

    const faqDescToggle = (id) => {
        setActiveFaqId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="new-faq-section py-5">
            <div className="container pb-5">
                <div className="dfvghhgfdvggyre text-center pb-3">
                    <span>{headingDetails.banner_details?.faqs_heading &&
                      headingDetails.banner_details.faqs_heading}</span>

                    <h2 className="mt-2">
                        <span>{headingDetails.banner_details.faqs_title.split("'")[0]}{" "}</span>
                        {headingDetails.banner_details.faqs_title.split("'")[1]}
                    </h2>

                    <div
                    dangerouslySetInnerHTML={{
                      __html:
                        headingDetails.banner_details
                          ?.faqs_description &&
                        headingDetails.banner_details
                          .faqs_description,
                    }}
                  />
                </div>
 
                <div className="dienhwerjjr">
                    <div className="accordion row">
                        {faqs.map((faq) => (
                            <div className="col-lg-6 mb-3" key={faq.id}>
                                <div className="accordion-item">
                                    <button
                                        onClick={() => faqDescToggle(faq.id)}
                                        id={`accordion-button-${faq.id}`}
                                        aria-expanded={activeFaqId === faq.id}
                                    >
                                        <span className="accordion-title">{faq.question}</span>
                                        <span className="icon" aria-hidden="true" />
                                    </button>
                                    {activeFaqId === faq.id && (
                                        <div className="accordion-content">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: faq?.answer && (faq.answer),
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}