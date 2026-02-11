import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import http from "../../../http";

import "./CommonForm.css";

export const CommonForm = () => {
    const search = useRef(null);    
    const commonFormWrapper = document.querySelector(".c-f-1");
    const smallSearchField = document.getElementById("small-search-field");
    const bigSearchField = document.getElementById("big-search-field");
    const minimizeCloseBtn = document.getElementById("minimize-close-btn");

    const { pathname } = useLocation();
    const [searchInput, setSearchInput] = useState(null);
    const [formIsActive, setFormIsActive] = useState(false);

    useEffect(() => {
        const formIsActiveScroll = () => {
            if(window.scrollY > 600) setFormIsActive(true);
        }

        window.addEventListener("scroll", formIsActiveScroll);
        
        return () => window.removeEventListener("scroll", formIsActiveScroll);
    }, []);

    const handleSearch = () => {
        const searchValue = search.current.value;
        setSearchInput(searchValue);        

        if (searchValue) {
            commonFormWrapper?.classList.add("c-f-1-expand");
            smallSearchField?.classList.add("d-none");
            bigSearchField?.classList.remove("d-none");
        }
    }  
    
    useEffect(() => {
        const commonFormWrapper = document.querySelector(".c-f-1");
        const smallSearchField = document.getElementById("small-search-field");
        const bigSearchField = document.getElementById("big-search-field");

        const resetCommonForm = () => {
            commonFormWrapper?.classList.remove("c-f-1-expand");
            smallSearchField?.classList.remove("d-none");
            bigSearchField?.classList.add("d-none");

            if (search.current) search.current.value = "";
        }

        resetCommonForm();
    }, [pathname]);


    const handleMinimize = () => {
        if (minimizeCloseBtn.classList.contains("fa-down-left-and-up-right-to-center")) {
            commonFormWrapper?.classList.add("c-f-1-minimize");
            minimizeCloseBtn?.classList.remove("fa-down-left-and-up-right-to-center");
            minimizeCloseBtn?.classList.add("fa-up-right-and-down-left-from-center");
        } else {
            commonFormWrapper?.classList.remove("c-f-1-minimize");
            minimizeCloseBtn?.classList.add("fa-down-left-and-up-right-to-center");
            minimizeCloseBtn?.classList.remove("fa-up-right-and-down-left-from-center");
        }
    }

    const handleClearClose = () => {
        commonFormWrapper?.classList.remove("c-f-1-expand");
        smallSearchField?.classList.remove("d-none");
        bigSearchField?.classList.add("d-none");
    }


    const [inputs, setInputs] = useState({
            name: "",
            phone_number: "",
            message: "",
    
        });
        const [errors, setErrors] = useState({});
        
    
        const handleChange = (e) => {
            const { name, value } = e.target;

            setInputs({ ...inputs, [name]: value });
        };
    
    
    
        const validateInputs = (inputs) => {
            const newErrors = {};
        
            if (!inputs.name.trim()) {
              newErrors.name = "Name is required";
            } else if (!/^[a-zA-Z\s]+$/.test(inputs.name)) {
              newErrors.name = "Name can only contain letters and spaces";
            }
    
            if (!inputs.phone_number.trim()) {
              newErrors.phone_number = "Phone Number is required";
            } else if (!/^\d{10}$/.test(inputs.phone_number)) {
              newErrors.phone_number = "Enter a valid 10-digit Phone Number";
            }
    
            if (!inputs.message.trim()) {
              newErrors.message = "Message is required";
            }
            return newErrors;
        };
    
        // Form submission
        const submitForm = async (e) => {
            e.preventDefault();
            
              const validationErrors = validateInputs(inputs);
        
              if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
              }
        
              setErrors({});
            //   loading(true);
        
            try {
    
                const response = await http.post("/add-commonform-data", inputs);
        
                if (response.data.success) {
                    toast.success(response.data.message, {
                      style: {
                        background: "#2ecc71",
                        color: "#fff",
                      },
                    });
                    setInputs({
                        name: "",
                        phone_number: "",
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
                        phone_number: "",
                        message: "",
                    });
                }
              } catch (error) {
                toast.error(error.response?.data?.message || "Something went wrong.");
              } finally {
                // loading(false);
              }
            };


    return (
        <div className="common-form-wrapper">
            <div className={formIsActive ? "c-f-1 p-4 cf-show" : "c-f-1 p-4"} style={{ background: "url(./images/nature-beauty-blue-sky-green-landscape-generative-ai_188544-12878.jpg) no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="cf-close-btn position-absolute" onClick={handleMinimize} id="close-to-minimize">
                    <i class="fa-solid position-absolute fa-down-left-and-up-right-to-center" id="minimize-close-btn"></i>
                </div>

                <div className="oidjweihriwer position-relative" id="small-search-field">
                    <img className="idhiwerer position-absolute" src="./images/confused.gif" alt="" />

                    <input className="form-control" ref={search} name="search" type="search" placeholder="Ask me about IT service solutions" defaultValue="" />

                    <img onClick={handleSearch} className="idnekwhiwejoir position-absolute" src="./images/pf logo.png" alt="" />
                </div>

                <div className="dojeoijrwerwer position-relative d-none" id="big-search-field">
                    <div className="jinduiweorjoiwerwer pb-2 px-4 d-flex justify-content-between position-relative align-items-center">
                        <img className="idnekwhiwejoir" src="./images/pf logo.png" alt="" />

                        <i class="fa-solid fa-2x fa-xmark" onClick={handleClearClose} id="clear-close-btn"></i>
                    </div>

                    <div className="oidmekwhiruhwewerwr px-5 py-4" style={{ background: "url(./images/expert.png", backgroundSize: "cover", backgroundPosition: "top" }}>
                        <h2 className="text-center mb-5">We Got You! Give Us More Information About <span>Yourself</span> To Make Us Understand Your <span>Requirements</span></h2>

                        <p className="oisdhifknhwere"><img className="idnekwhiwejoir me-1" src="./images/pf logo.png" alt="" /> Hey! Lets get you started</p>

                        <p className="fgrtdfytherrerwrr text-right">You have searched for <br /> "<span>{searchInput ? searchInput : "Nothing"}</span>"</p>

                        <div className="doiejwrnjwerwer_form mt-4">
                            <h5 className="mb-4">Please Fill Out the Form Below For Further Assistance</h5>

                            <form noValidate onSubmit={submitForm}>
                                <div className="doewhrwerwerr">
                                    <div className="row">
                                        <div className="col-lg-6 mb-4">
                                            <input type="hidden" name="search_input" value={searchInput}/>
                                            <div className="indnjhuwerrwer_inner">
                                                <label className="form-label">Full Name</label>
                                                <input className="form-control" name="name" placeholder="Type Your Full Name" value={inputs.name} onChange={handleChange}/>
                                                <p style={{ color: "red" }}>{errors.name}</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-4">
                                            <div className="indnjhuwerrwer_inner">
                                                <label className="form-label">Phone No.</label>
                                                <input className="form-control" name="phone_number" maxLength={10} placeholder="Type Your Phone Number" value={inputs.phone_number} onChange={handleChange}/>
                                                <p style={{ color: "red" }}>{errors.phone_number}</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb-4">
                                            <div className="indnjhuwerrwer_inner">
                                                <label className="form-label">Message Us</label>
                                                <textarea style={{ height: "120px" }} name="message" className="form-control" value={inputs.message} onChange={handleChange}></textarea>
                                                <p style={{ color: "red" }}>{errors.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="idnekwhre_btn text-right">
                                    <button className="btn125 py-2 px-4"><i class="fa-solid fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}