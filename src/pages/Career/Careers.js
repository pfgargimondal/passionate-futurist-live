import styles from "./Careers.module.css";
import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import Loader from "../../component/Loader/Loader";
import http from "../../http";
import { useNavigate } from "react-router-dom";
import { CareerForm } from "./Component/CareerForm";

export const Careers = () => {

  const navigate = useNavigate();
  useTitle("Career");

  const [CareerDetails, setCareerDetails] = useState({});
  const [loading, setLoading] = useState(false);  
  
    useEffect(() => {
      const fetchCareerData = async () => {
        setLoading(true);
        try {
          const getresponse = await http.get(`${process.env.REACT_APP_CAREERFETCHAPI}`);
          setCareerDetails(getresponse.data);

        } catch (error) {
          console.error("Error fetching users:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchCareerData();
    }, []);

    console.log(CareerDetails);

  return (
    <div>
      {loading && <Loader />}     
      <main style={{ paddingTop: '7.5rem' }}>
      <div className={styles.cdghvgdfvgfd} style={{
        backgroundImage: `url(${CareerDetails.image_url}/${CareerDetails?.data?.banner_image})`,
      }}>
        <div className="container">
          <div className={styles.dfgdfgdf65858}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.sdbffg}>
                  <h2>{CareerDetails.data?.banner_title && (CareerDetails.data.banner_title)}</h2>
                  <p>
                    {CareerDetails.data?.banner_description && (CareerDetails.data.banner_description)}
                  </p>
                </div>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fgjhdfgdfg}>
        <div className="custom-container">
          <div className={styles.dfbghdfgf}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.dfgbdfgdfg}>
                  <h2>{CareerDetails.data?.second_section_title && (CareerDetails.data.second_section_title)}</h2>
                  <div
                      dangerouslySetInnerHTML={{
                      __html: CareerDetails.data?.second_section_description && (CareerDetails.data.second_section_description),
                      }}
                  />
                  <button onClick={() => navigate("/contact-us")}>
                        Contact Us
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.dfgndfg}>
                  {CareerDetails.data?.second_section_image && (
                      <img
                      src={`${CareerDetails.image_url}/${CareerDetails.data.second_section_image}`}
                      alt="Contact Us"
                      />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.dfhgdfbgdfbhjh65}
        style={{
        backgroundImage: `url(${CareerDetails?.image_url}/${CareerDetails?.data?.form_section_image})`,
      }}
      >
        <div className="custom-container">
          <div className={styles.dfgndfgdfg}>
            <div className={styles.fbfdf}>
              <h2>{CareerDetails.data?.form_section_heading && (CareerDetails.data.form_section_heading)}</h2>
              <div
                  dangerouslySetInnerHTML={{
                  __html: CareerDetails.data?.form_section_description && (CareerDetails.data.form_section_description),
                  }}
              />
              <h5>
                {CareerDetails.data?.form_section_title && (CareerDetails.data.form_section_title)}
              </h5>
            </div>
            <CareerForm loading={setLoading}/>
          </div>
        </div>
      </div>
      {/* <div className={styles.footerdown}></div> */}
      </main>
    </div>
  );
};
