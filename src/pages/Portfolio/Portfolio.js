import styles from "./Portfolio.module.css";
import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import Loader from "../../component/Loader/Loader";
import http from "../../http";
import { TabComponent } from "./TabComponent";

export const Portfolio = () => {
  useTitle("Portfolio");
  const [loading, setLoading] = useState(false);

  const [PortfolioDetails, setPortfolioDetails] = useState({});
  const [PortfolioImageUrl, setPortfolioImageUrl] = useState({});

  useEffect(() => {
    const fetchPortfolioData = async () => {
      setLoading(true);
      try {
        const getresponse = await http.get(
          `${process.env.REACT_APP_PORTFOLIOFETCHAPI}`
        );
        const all_data = getresponse.data.data;

        setPortfolioImageUrl(getresponse.data.image_url);
        setPortfolioDetails(all_data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <div
        className={styles.dfbvhdfvdfv}
        style={{ backgroundImage: "url('../images/portfolio.png')" }}
      ></div>

      <div className={styles.fbfdfdf}>
        <div className="custom-container">
          <div className={styles.dfgbdfgdf}>
            <h4>
              {PortfolioDetails.PortfolioFirstSection_data?.title &&
                PortfolioDetails.PortfolioFirstSection_data.title}
            </h4>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  PortfolioDetails.PortfolioFirstSection_data?.description &&
                  PortfolioDetails.PortfolioFirstSection_data.description,
              }}
            />
          </div>
          <div className={styles.fbjhsdfgsdfg}>
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  {PortfolioDetails?.portfolio_second_section_data
                    ?.slice(
                      0,
                      Math.ceil(
                        PortfolioDetails.portfolio_second_section_data.length /
                          2
                      )
                    )
                    .map((portfolioSecondSection, idx) => (
                      <div className="col-lg-3 col-sm-6 " key={idx}>
                        <div className={styles.njfgh}>
                          {portfolioSecondSection?.image && (
                            <img
                              src={`${PortfolioImageUrl}/${portfolioSecondSection.image}`}
                              alt={portfolioSecondSection.title}
                            />
                          )}
                        </div>
                        <div className={styles.dfb155df}>
                          <h6>{portfolioSecondSection.title}</h6>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  {PortfolioDetails?.portfolio_second_section_data
                    ?.slice(
                      Math.ceil(
                        PortfolioDetails.portfolio_second_section_data.length /
                          2
                      )
                    )
                    .map((portfolioSecondSection, idx) => (
                      <div className="col-sm-6 col-lg-3" key={`second-${idx}`}>
                        <div className={styles.njfgh}>
                          {portfolioSecondSection?.image && (
                            <img
                              src={`${PortfolioImageUrl}/${portfolioSecondSection.image}`}
                              alt={portfolioSecondSection.title}
                            />
                          )}
                        </div>
                        <div className={styles.dfb155df}>
                          <h6>{portfolioSecondSection.title}</h6>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.dfngjhdfgdfg}>
        <div className="custom-container">
          <div className={styles.dfhgdfgdf}>
            <h2>Our Ongoing Project</h2>
          </div>
          <div className={styles.dfgbdfgdfg}>
            <div className="row">
              {PortfolioDetails?.ongoing_project_data?.map(
                (ongoingProject, idx) => (
                  <div className="col-lg-3">
                    <div className={styles.dfdf986g}>
                      {ongoingProject?.image && (
                        <img
                          src={`${PortfolioImageUrl}/${ongoingProject.image}`}
                          alt={ongoingProject.title}
                        />
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.dfvjhdbdfdf}>
        <div className="custom-container">
          <div className={styles.dfhgdfgdf2}>
            <h2>Our Portfolio</h2>
          </div>

          <TabComponent
            PortfolioTab={PortfolioDetails}
            ImageUrlTab={PortfolioImageUrl}
          />
        </div>
      </div>
    </div>
  );
};
