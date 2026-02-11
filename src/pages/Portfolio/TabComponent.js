import styles from "./Portfolio.module.css";
import { useState, useEffect, useMemo } from "react";


export const TabComponent = ({ PortfolioTab, ImageUrlTab }) => {
// Group data by category
  const groupedData = useMemo(() => {
    const data = PortfolioTab?.our_portfolio_data || [];
    return data.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {}); 
  }, [PortfolioTab]);

  const categories = useMemo(() => Object.keys(groupedData), [groupedData]);

  const [activeTab, setActiveTab] = useState("");

  // Set the first tab only once after data is available
  useEffect(() => {
    if (categories.length > 0 && !activeTab) {
      setActiveTab(categories[0]);
    }
  }, [categories, activeTab]);

  if (!categories.length) return <p>Portfolio Not Available...</p>;


  return (
    <div>
      <div className={styles.gdfghdfgdf}>
        <div className="container">
          <ul className={styles.tabs}>
            {categories.map((category, idx) => (
              <li
                key={idx}
                className={`${styles["tab-link"]} ${
                  activeTab === category ? styles.current : ""
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className={styles.dfxdvfsdsdf}>
            <div className={`${styles["tab-content"]} ${styles.current}`}>
              <div className={styles.dgbdfd54874}>
                <div className={styles.fndfjh}>
                  <h4>{activeTab}</h4>
                </div>
                <div className={styles.fgnbfdfdf5244}>
                  <div className="row">
                    {groupedData[activeTab]?.map((item) => (
                      <div className="col-lg-3 mb-4" key={item.id}>
                        <div className={styles.dfgdfg54254}>
                          <img
                            src={`${ImageUrlTab}/${item.image}`}
                            alt={item.title}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};
