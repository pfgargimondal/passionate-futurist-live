import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { validateInputs } from "../../../utils/validation";
import http from "../../../http";

const ServiceEnquiryForm = ({ loading, slug }) => {
  const [inputs, setInputs] = useState({
    name: "",
    phone_number: "",
    email: "",
    website_url: "",
    message: "",
  });  

  const [errors, setErrors] = useState({});

  const [serviceFormDatas, setServiceFormDatas] = useState([]);
  const [serviceFormImagesPath, setServiceFormImagesPath] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const validationErrors = validateInputs(inputs);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // Clear errors
    loading(true); // show loader

    try {
      const response = await http.post("/add-services-enquiry", inputs, {
        params: { slug: slug }
      });

      if (response.data.success) {
        toast(response.data.message, {
          style: {
            background: "#2ecc71",
            color: "#fff",
          },
        });

        setInputs({
          name: "",
          phone_number: "",
          email: "",
          website_url: "",
          message: "",
        });
      } else {
        toast.error(response.data.message, {
          style: {
            background: "#e74c3c", // red for error
            color: "#fff",
          },
        });
        setInputs({
          name: "",
          phone_number: "",
          email: "",
          website_url: "",
          message: "",
        });
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      loading(false);
    }
  };

  const pathName = useLocation().pathname.replace("/", "");

  useEffect(() => {
      const fetchFormSectionService = async () => {
          try {           
              const getresponse = await http.get(`${process.env.REACT_APP_SERVICEFORMAPI}`);

              const serviceFormAllDatas = getresponse.data?.form_daynamic || [];
              const serviceFormImagePath = getresponse.data.image_path || [];

              const serviceFormData = serviceFormAllDatas.find(item => item?.slug === pathName);

              setServiceFormDatas(serviceFormData || []);
              setServiceFormImagesPath(serviceFormImagePath || []);
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };

      fetchFormSectionService();
  }, [pathName]);

  
  return (
    <div>
      <div className="sdnfjhsdfsdfsdf">
        <div className="custom-container">
          <div className="jhgsdfg">
            <div className="row">
              <div className="col-lg-6">
                <div className="dfhbfgd">
                  <img src={serviceFormDatas.photo ? `${serviceFormImagesPath}/${serviceFormDatas.photo}` : "./images/form-left.png"} alt="" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="fhbdfdfgd">
                  <div className="dfbnhdfdf">
                    <h2>{serviceFormDatas.title ? serviceFormDatas.title : "Get Free SEO Analysis?"}</h2>

                    <p>{serviceFormDatas.description ? serviceFormDatas.description : "We’ll review your website’s SEO performance and send a clear, actionable report to help you boost your rankings."}</p>
                  </div>
                  
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="fgjhdfg">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your Name"
                          value={inputs.name}
                          onChange={(e) =>
                            setInputs({ ...inputs, name: e.target.value })
                          }
                        />
                        <span style={{ color: "red" }}>{errors.name}</span>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="fgjhdfg">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email*"
                          value={inputs.email}
                          onChange={(e) =>
                            setInputs({ ...inputs, email: e.target.value })
                          }
                        />
                        <span style={{ color: "red" }}>{errors.email}</span>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="fgjhdfg">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                          name="phone_number"
                          value={inputs.phone_number}
                          onChange={(e) =>
                            setInputs({
                              ...inputs,
                              phone_number: e.target.value,
                            })
                          }
                        />
                        <span style={{ color: "red" }}>
                          {errors.phone_number}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="fgjhdfg">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Website URL"
                          name="website_url"
                          value={inputs.website_url}
                          onChange={(e) =>
                            setInputs({
                              ...inputs,
                              website_url: e.target.value,
                            })
                          }
                        />
                        <span style={{ color: "red" }}>
                          {errors.website_url}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="fgjhdfg">
                        <textarea
                          name="message"
                          id=""
                          rows="4"
                          cols="4"
                          className="form-control"
                          placeholder="Message"
                          value={inputs.message}
                          onChange={(e) =>
                            setInputs({ ...inputs, message: e.target.value })
                          }
                        ></textarea>
                        <span style={{ color: "red" }}>
                          {errors.message}
                        </span>
                      </div>
                    </div>

                    <div className="dfgbfdf">
                      <button type="button" className="btn125" onClick={submitForm}>Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                style={{ zIndex: 9999999999 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceEnquiryForm;
