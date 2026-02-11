import { Link } from "react-router-dom";

export const WeOfferTab = ({ tabDetails }) => {
  const tabSectionDetails = tabDetails;

  return (
    <div>
      <ul
        className="nav nav-tabs bg-white sticky-top"
        id="myTab"
        role="tablist"
      >
        {tabSectionDetails.map((tab, index) => (
          <li className="nav-item" role="presentation" key={index}>
            <button
              className={`nav-link ${index === 0 ? "active" : ""}`}
              id={`tab-${index}`}
              data-bs-toggle="tab"
              data-bs-target={`#tab-pane-${index}`}
              type="button"
              role="tab"
              aria-controls={`tab-pane-${index}`}
              aria-selected={index === 0 ? "true" : "false"}
            >
              <i className="fa-solid me-3 fa-circle-check" />
              <span>{tab.third_section_title}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="myTabContent">
        {tabSectionDetails.map((tab, index) => (
          <div
            className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
            id={`tab-pane-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            key={index}
          >
            <div className="container">
              <div className="row">
                {/* Left Side */}
                <div className="col-lg-6">
                  <div className="iuhjniehwrewr">
                    <div className="iieiwrewr">
                      <img
                        src="./images/pf_logo-removebg-preview (1).png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h1>
                      {tab.third_section_title.split(" ")[0]}{" "}
                      <span>{tab.third_section_title.split(" ")[1]}</span>
                    </h1>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: tab.third_section_description,
                      }}
                    />
                  </div>
                </div>

                {/* Right Side */}
                <div className="col-lg-6">
                  <div className="iuhjniehwrewrinihewr">
                    <div className="col-lg-8 uiniuhewrhiewr bg-white p-4 rounded-3">
                      <i className="fa-brands fa-2x fa-servicestack" />
                      <h5 className="my-2">{tab.third_section_title_one}</h5>
                      <div
                        className="mb-4"
                        dangerouslySetInnerHTML={{
                          __html: tab.third_section_description_one,
                        }}
                      />
                      <div className="iudhewrewr_bar position-relative overflow-hidden">
                        <div className="inkoiweriwer_bar_progress" />
                      </div>
                    </div>

                    <div className="col-lg-8 uihniuheroir bg-white p-4 rounded-3 offset-lg-4">
                      <h4>{tab.third_section_title_two}</h4>
                      <div
                        className="my-4"
                        dangerouslySetInnerHTML={{
                          __html: tab.third_section_description_two,
                        }}
                      />
                      <button className="btn btn-custm-bttn">
                        <Link to="/contact-us">Get In Touch</Link>
                      </button>
                      <button className="btn btn-custm-bttn-2">
                        <i className="fa-solid me-1 fa-phone-volume" />
                        <span>
                          <a href="tel:+918420202891">Call Us</a>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
