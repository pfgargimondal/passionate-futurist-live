import styles from "./ContactUs.module.css"; 
import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import http from "../../http";
import Loader from "../../component/Loader/Loader";
import { EnquiryForm } from "./Components/EnquiryForm";

export const ContactUs = () => {

    useTitle("Contact Us");
    const [loading, setLoading] = useState(false);

      const [ContactUsDetails, setContactUsDetails] = useState({});
        useEffect(() => {
          const fetchContactUsData = async () => {
            setLoading(true);
              try {
              const getresponse = await http.get(`${process.env.REACT_APP_CONTACTUSAPI}`);
              setContactUsDetails(getresponse.data);
      
              } catch (error) {
                  console.error("Error fetching users:", error);
              } finally{
                  setLoading(false);
              }
          }; 
      
          fetchContactUsData();
          }, []);
      
  return (
    <main>    
        {loading && <Loader />}     
        <div className={styles.dfjukdfgdf5548}>
            <div className="container">
            <div className={styles.dfjhdfdf}>
                <div className="row">
                <div className="col-lg-6">
                    <div className={styles.dfhdfgdfg}>
                    <h2>
                        {ContactUsDetails.data?.banner_title && (ContactUsDetails.data.banner_title)} <span>.</span>
                    </h2>
                    <p>
                        {ContactUsDetails.data?.banner_description && (ContactUsDetails.data.banner_description)}
                    </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={styles.ddffdg55}>
                    {ContactUsDetails.data?.banner_image && (
                        <img
                        src={`${ContactUsDetails.image_url}/${ContactUsDetails.data.banner_image}`}
                        alt="Contact Us Banner"
                        />
                    )}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className={styles.xdfbghjdfgdfg}>
            <div className="custom-container">
            <div className={styles.sjhsdfsdf}>
                <div className="row">
                <div className="col-lg-6">
                    <div className={styles.fddfsdf}>
                    <div className={styles.dfdf55fd}>
                        {ContactUsDetails.data?.image_one && (
                            <img
                            src={`${ContactUsDetails.image_url}/${ContactUsDetails.data.image_one}`}
                            alt="Contact Us"
                            />
                        )}
                    </div>
                    <div className={styles.dfbjhdgdf}>
                        <h6>{ContactUsDetails.data?.title_one && (ContactUsDetails.data.title_one)}</h6>
                        <div
                            dangerouslySetInnerHTML={{
                            __html: ContactUsDetails.data?.description_one && (ContactUsDetails.data.description_one),
                            }}
                        />
                        <span>+91 {ContactUsDetails.data?.mobile && (ContactUsDetails.data.mobile)}</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={styles.fddfsdf}>
                    <div className={styles.dfdf55fd}>
                        {ContactUsDetails.data?.image_two && (
                            <img
                            src={`${ContactUsDetails.image_url}/${ContactUsDetails.data.image_two}`}
                            alt="Contact Us"
                            />
                        )}
                    </div>
                    <div className={styles.dfbjhdgdf}>
                        <h6>{ContactUsDetails.data?.title_two && (ContactUsDetails.data.title_two)}</h6>
                        <div
                            dangerouslySetInnerHTML={{
                            __html: ContactUsDetails.data?.description_two && (ContactUsDetails.data.description_two),
                            }}
                        />
                        <span>{ContactUsDetails.data?.email && (ContactUsDetails.data.email)}</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

       <EnquiryForm loading={setLoading}/>

        <div className={styles.njhsdbdfgdf}>
            <iframe
            src={ContactUsDetails.data?.map_link && (ContactUsDetails.data.map_link)}
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps location of Passionate Futurist"
            />
        </div>
    </main>
  )
}
