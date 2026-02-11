import styles from "../BlogDetails.module.css";
import { useState, useEffect } from "react";
import http from "../../../http";
import { ToastContainer, toast } from "react-toastify";


export const CommentForm = ({ loading, blogId }) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    website_url: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (blogId) {
      setInputs((prev) => ({ ...prev, blog_id: blogId }));
    }
  }, [blogId]);

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // 🔹 Validation logic
  const validateInputs = (inputs) => {
    const newErrors = {};

    if (!inputs.comment.trim()) {
      newErrors.comment = "Comment is required";
    }

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

    if (!inputs.website_url.trim()) {
      newErrors.website_url = "Website URL is required";
    } else if (
      !/^(https?:\/\/)?((localhost:\d{1,5})|([\w-]+\.)+[\w-]{2,})(\/[^\s]*)?$/.test(
        inputs.website_url.trim()
      )
    ) {
      newErrors.website_url =
        "Please enter a valid website URL (e.g. https://example.com)";
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
    // loading(true);

    try {
      const response = await http.post("/add-blog-comments", inputs);

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
          website_url: "",
          comment: "",
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
          email: "",
          website_url: "",
          comment: "",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
    //   loading(false);
    }
  };

  return (
    <div>
      <div className={styles.fbnjhdfgdfg}>
        <div className={styles.dfbgdf522gdf}>
          <h2>Leave a Reply</h2>
        </div>
        <div className={styles.dfbgdrgdfgdf}>
          <div className={styles.d555fgfh}>
            <label for="">Comment*</label>
            <textarea
              name="comment"
              id=""
              className="form-control"
              rows="4"
              cols="4"
              value={inputs.comment}
              onChange={handleChange}
            ></textarea>
            <span style={{ color: "red" }}>{errors.comment}</span>
          </div>

          <div className={styles.d555fgfh}>
            <input
              type="hidden"
              value={blogId}
              name="blog_id"
              className="form-control"
            />
            <label for="">Name*</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />

            <span style={{ color: "red" }}>{errors.name}</span>
          </div>

          <div className={styles.d555fgfh}>
            <label for="">Email*</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />

            <span style={{ color: "red" }}>{errors.email}</span>
          </div>

          <div className={styles.d555fgfh}>
            <label for="">Website*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Website URL"
              name="website_url"
              value={inputs.website_url}
              onChange={handleChange}
            />
            <span style={{ color: "red" }}> {errors.website_url} </span>
          </div>
          <div className={styles.drbgdfgsd}>
            <button type="button" onClick={submitForm}>
              Submit
            </button>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          style={{ zIndex: 9999999999 }}
        />
      </div>
    </div>
  );
};
