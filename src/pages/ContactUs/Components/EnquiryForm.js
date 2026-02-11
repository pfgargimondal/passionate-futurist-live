import { useState } from "react";
import styles from '../ContactUs.module.css';
import { ToastContainer, toast } from "react-toastify";
import http from "../../../http";

export const EnquiryForm = ({loading}) => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone_number: "",
        subject: "",
        message: "",
      });
      const [errors, setErrors] = useState({});
    
      // 🔹 Handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
      };
    
      // 🔹 Validation logic
      const validateInputs = (inputs) => {
        const newErrors = {};
    
        if (!inputs.name.trim()) {
          newErrors.name = "Name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(inputs.name)) {
          newErrors.name = "Name can only contain letters and spaces";
        }

        if (!inputs.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
          newErrors.email = "Enter a valid email address";
        }
    
        if (!inputs.phone_number.trim()) {
          newErrors.phone_number = "Phone number is required";
        } else if (!/^\d{10}$/.test(inputs.phone_number)) {
          newErrors.phone_number = "Enter a valid 10-digit phone number";
        }
    
        if (!inputs.subject) {
          newErrors.subject = "Subject is required";
        }
    
        if (!inputs.message.trim()) {
          newErrors.message = "Message is required";
        }
    
        return newErrors;
      };
    
     
    
      // 🔹 Form submission
      const submitForm = async (e) => {
        e.preventDefault();
        
          const validationErrors = validateInputs(inputs);
    
          if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
          }
    
          setErrors({});
          loading(true);
    
          try {
            const response = await http.post("/add-contuct-us-enquiry", inputs);
    
            if (response.data.success) {
                toast.success(response.data.message, {
                  style: {
                    background: "#2ecc71",
                    color: "#fff",
                  },
                });
    
                setInputs({
                  name: "",
                  email: "",
                  phone_number: "",
                  subject: "",
                  message: "",
                });
            }else{
              toast.error(response.data.message, {
                  style: {
                    background: "#e74c3c", // red for error
                    color: "#fff",
                  },
                });
                setInputs({
                  name: "",
                  email: "",
                  phone_number: "",
                  subject: "",
                  message: "",
                });
            }
          } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong.");
          } finally {
            loading(false);
          }
      };

  return (
    <div>
       <div className={styles.dfjhdfgdfgfd}>
            <div className="custom-container">
            <div className={styles.hgtgggggdfg}>
                <div className="row">
                <div className="col-lg-5 pe-0 ps-0">
                    <div className={styles.fbgdfgdfg} style={{background: "url(../images/contact.jpg)", backgroundPosition: "center", backgroundSize: "cover"}}></div>
                </div>
                <div className="col-lg-7 pe-0 ps-0">
                    <div className={styles.fvyhfdfjh3265321}>
                    <form noValidate onSubmit={submitForm}>
                        <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.dfgfjhdg}>
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your name"
                                    name="name"
                                    value={inputs.name}
                                    onChange={handleChange}
                                />
                                <p style={{ color: "red" }}>{errors.name}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.dfgfjhdg}>
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Your Email"
                                name="email"
                                value={inputs.email}
                                onChange={handleChange}
                            />
                            <p style={{ color: "red" }}>{errors.email}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.dfgfjhdg}>
                            <label htmlFor="">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Phone Number"
                                maxLength={10}
                                name="phone_number"
                                value={inputs.phone_number}
                                onChange={handleChange}
                            />
                            <p style={{ color: "red" }}>{errors.phone_number}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.dfgfjhdg}>
                            <label htmlFor="">Subject</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Subject"
                                name="subject"
                                value={inputs.subject}
                                onChange={handleChange}
                            />
                            <p style={{ color: "red" }}>{errors.subject}</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className={styles.dfgfjhdg}>
                            <label htmlFor="">Message</label>
                            <textarea
                                id=""
                                placeholder="Text here"
                                cols={4}
                                rows={4}
                                className="form-control"
                                defaultValue={""}
                                name="message"
                                value={inputs.message}
                                onChange={handleChange}
                            />
                             <p style={{ color: "red" }}>{errors.message}</p>
                            </div>
                        </div>
                        <div className={styles.yusdsd52521}>
                            <button>Submit</button>
                        </div>
                        </div>
                    </form>
                    </div>
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
  )
}
