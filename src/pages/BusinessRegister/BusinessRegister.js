import { useState } from "react";
import { toast } from "react-toastify";
import http from "../../http";
import "./BusinessRegister.css";

export const BusinessRegister = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const mystyle = {
    fontSize: "initial",
    color: "#000",
    fontWeight: "600",
  };

  // Correct validation for DB keys
  const validateInputs = (inputs) => {
    const newErrors = {};

    if (!inputs.name?.trim()) {
      newErrors.name = "Name is required";
    }

    if (!inputs.email?.trim()) {
      newErrors.email = "Email is required";
    }

    if (!inputs.business_type?.trim()) {
      newErrors.business_type = "Business Type is required";
    }

    if (!inputs.business_name?.trim()) {
      newErrors.business_name = "Business Name is required";
    }

    if (!inputs.company_website?.trim()) {
      newErrors.company_website = "Company Website is required";
    }

    if (!inputs.terms) {
      newErrors.terms = "You must accept terms and conditions";
    }

    return newErrors;
  };

  // UPDATED formData KEYS to match database
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business_type: "",
    business_name: "",
    company_website: "",
    referred_by: "",
    terms: false,
    newsletter: false,
  });

  // generic change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateInputs(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // build object that matches DB EXACTLY
    const payload = {
      name: formData.name,
      email: formData.email,
      business_type: formData.business_type,
      business_name: formData.business_name,
      company_website: formData.company_website,
      referred_by: formData.referred_by,
    };

    try {
      const response = await http.post("/add-business-register-enquiry", payload);

      if (response.data.success) {
        toast.success(response.data.message, {
          style: { background: "#2ecc71", color: "#fff" },
        });

        // reset form
        setFormData({
          name: "",
          email: "",
          business_type: "",
          business_name: "",
          company_website: "",
          referred_by: "",
          terms: false,
          newsletter: false,
        });

      } else {
        toast.error(response.data.message, {
          style: { background: "#e74c3c", color: "#fff" },
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div>
      {/* <!--banner start--> */}

      <div className="about-us-banner">
        <section className="ban_sec">
          <div className="ban_img">
            <img src="./images/bussinessregister.png" alt="Business banner" border="0" className="w-100"/>
            <div class="gfghgbj5">
              <div class="container">
                <h2>Bussiness Register</h2>
                <p>Passionate Futurist presents excellent offers! We can share our remarkable offers in the following way:</p>
                <a href="/contact-us">Contact Us</a>

              </div>

            </div>

            <div className="ban_text" style={{ width: '100%', left: 'initial' }}>
              <div className="col-lg-12 text-center">
                <strong style={{ textTransform: "none" }}>
                  <span style={{ color: '#fff' }}>Passionate Futurist presents excellent offers</span>
                </strong>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!--banner end--> */}




      {/* <!--middle start--> */}

      <main>

        {/* <!--business register section 1 start--> */}

        <div className="business-register-section-1">
          <div className="container">
            <div className="b-r-s-1-heading">
              <h2 style={{ color: 'var(--main-blue-color)' }}>We can share our remarkable offers in the following way:</h2>

              <p>Passionate Futurist presents excellent offers! We can share our remarkable offers in the following way:</p>
            </div>

            <div className="b-r-s-1-wrap pt-5">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="b-r-s-1-left">
                    <section className="b-r-sec">
                      <h4 className="b-r-sec-heading">Passionate Futurist presents excellent offers! We can share our remarkable offers in the following way:</h4>

                      <div className="order-track">
                        <div className="order-track-step">
                          <div className="order-track-status">
                            <span className="order-track-status-dot"><i className="fa-solid fa-forward-step"></i></span>
                            <span className="order-track-status-line"></span>
                          </div>
                          <div className="order-track-text">
                            <p className="order-track-text-stat">Just simply get yourself registered</p>
                            <span className="order-track-text-sub" style={mystyle}>You are cordially invited to grab the exciting offers! We are highly cooperative with our clients. We will fulfill all your business promotion, web design and web development work.</span>
                          </div>
                        </div>
                        <div className="order-track-step">
                          <div className="order-track-status">
                            <span className="order-track-status-dot"><i className="fa-solid fa-forward-step"></i></span>
                            <span className="order-track-status-line"></span>
                          </div>
                          <div className="order-track-text">
                            <p className="order-track-text-stat">On registration we will be providing you with a number of exciting offers</p>
                            <span className="order-track-text-sub" style={mystyle}>The regular updates too would be made available to you</span>
                          </div>
                        </div>
                        <div className="order-track-step">
                          <div className="order-track-status">
                            <span className="order-track-status-dot"><i className="fa-solid fa-forward-step"></i></span>
                            <span className="order-track-status-line"></span>
                          </div>
                          <div className="order-track-text">
                            <p className="order-track-text-stat">We are proud to have a team of web designers, web developers,</p>
                            <span className="order-track-text-sub" style={mystyle}>Passionate Futurist presents excellent offers Passionate Futurist presents excellent offers</span>
                          </div>
                        </div>
                        <div className="order-track-step">
                          <div className="order-track-status">
                            <span className="order-track-status-dot"><i className="fa-solid fa-forward-step"></i></span>
                            <span className="order-track-status-line"></span>
                          </div>
                          <div className="order-track-text">
                            <p className="order-track-text-stat">Passionate Futurist presents excellent offers</p>
                            <span className="order-track-text-sub" style={mystyle}>Passionate Futurist presents excellent offers Passionate Futurist presents excellent offers</span>
                          </div>
                        </div>
                        <div className="order-track-step">
                          <div className="order-track-status">
                            <span className="order-track-status-dot"><i className="fa-solid fa-forward-step"></i></span>
                            <span className="order-track-status-line"></span>
                          </div>
                          <div className="order-track-text">
                            <p className="order-track-text-stat">On registration we will be providing you with a number of exciting offers</p>
                            <span className="order-track-text-sub" style={mystyle}>We have exciting offers for festive season. Our company provides special discount for old clients.</span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="b-r-s-1-right">
                    <div className="form_wrapper">
                      <div className="form_container">
                        <div className="title_container">
                          <h2>Register Your Business</h2>
                        </div>
                        <div className="row clearfix">
                          <form onSubmit={handleSubmit}>

                            <label className="form-label">Your Name</label>
                            <div className="input_field">
                              <span><i className="fa fa-user" /></span>
                              <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                              />
                              {errors.name && <small className="text-danger">{errors.name}</small>}
                            </div>

                            <label className="form-label">Entrepreneur's email id</label>
                            <div className="input_field">
                              <span><i className="fa fa-envelope" /></span>
                              <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                              />
                              {errors.email && <small className="text-danger">{errors.email}</small>}
                            </div>

                            <label className="form-label">Business Type</label>
                            <div className="input_field select_option">
                              <select
                                name="business_type"
                                value={formData.business_type}
                                onChange={handleChange}
                              >
                                <option value="">-----Please Choose Business Type-----</option>
                                <option value="services">Services</option>
                                <option value="products">Products</option>
                                <option value="others">Others</option>
                              </select>
                              {errors.business_type && (
                                <small className="text-danger">{errors.business_type}</small>
                              )}
                              <div className="select_arrow"></div>
                            </div>

                            <label className="form-label">Business Name</label>
                            <div className="input_field">
                              <span><i className="fa fa-users" /></span>
                              <input
                                type="text"
                                name="business_name"
                                placeholder="Business Name"
                                value={formData.business_name}
                                onChange={handleChange}
                              />
                              {errors.business_name && (
                                <small className="text-danger">{errors.business_name}</small>
                              )}
                            </div>

                            <label className="form-label">Company Website</label>
                            <div className="input_field">
                              <span><i className="fa fa-desktop" /></span>
                              <input
                                type="text"
                                name="company_website"
                                placeholder="Company Website"
                                value={formData.company_website}
                                onChange={handleChange}
                              />
                              {errors.company_website && (
                                <small className="text-danger">{errors.company_website}</small>
                              )}
                            </div>

                            <label className="form-label">Referred by</label>
                            <div className="input_field">
                              <span><i className="fa fa-male" /></span>
                              <input
                                type="text"
                                name="referred_by"
                                placeholder="Referred by..."
                                value={formData.referred_by}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="input_field checkbox_option">
                              <input
                                type="checkbox"
                                id="cb1"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                              />
                              <label htmlFor="cb1">I agree with terms and conditions</label>
                              {errors.terms && <small className="text-danger">{errors.terms}</small>}
                            </div>

                            <div className="input_field checkbox_option">
                              <input
                                type="checkbox"
                                id="cb2"
                                name="newsletter"
                                checked={formData.newsletter}
                                onChange={handleChange}
                              />
                              <label htmlFor="cb2">I want to receive the newsletter</label>
                            </div>

                            <input
                              className="button"
                              type="submit"
                              value={loading ? "Submitting..." : "Save"}
                              disabled={loading}
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};