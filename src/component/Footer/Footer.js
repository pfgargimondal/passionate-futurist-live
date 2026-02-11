import { Link } from "react-router-dom";
import "./Footer.css";
import http from "../../http";
import { useEffect, useState } from "react";

export const Footer = () => {

  const [FooterBlogDetails, setFooterBlogDetails] = useState({ footer_blogs: [] });

    useEffect(() => {
      const fetchContactUsData = async () => {
        // setLoading(true);
          try {
          const getresponse = await http.get(`${process.env.REACT_APP_FOOTERBLOGAPI}`);
          setFooterBlogDetails(getresponse.data);
  
          } catch (error) {
              console.error("Error fetching users:", error);
          }
          //  finally{
          //     setLoading(false);
          // }
    }; 

    fetchContactUsData();
    }, []);


  return (
    <section className="footer">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-2">
        <h4>Navigate</h4>
        <ul className="footer-menu">
          <li>
            <Link to={"/"}>
              <i className="fa fa-home" /> Home
            </Link>
          </li>
          <li>
            <Link to={"about-us"}>
              <i className="fa fa-users" /> About Us
            </Link>
          </li>
          {/* <li>
            
            <Link to={"services"}>
              <i className="fa fa-handshake" /> Services
            </Link>
          </li> */}
          <li>
            <Link to={"portfolio"}>
              <i className="fa fa-briefcase"/> Portfolio
            </Link>
          </li>
          <li>
            <Link to={"business-register"}>
              <i className="fa fa-pencil-square"/> Business Register 
            </Link>
          </li>
          <li>
            <Link to={"careers"}>
              <i className="fa fa-signal"/> Career
            </Link>
          </li>
          <li>
            <Link to={"blogs"}>
              <i class="fa-solid fa-blog"></i> Blog
            </Link>
          </li>
          <li>
            <Link to={"contact-us"}>
             <i className="fa fa-envelope"/> Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-12 col-md-5">
        <h4>Recent Blogs</h4>
        <ul className="recent-blogs">
          {FooterBlogDetails.footer_blogs?.map((blog, index) => (
            <li key={index}>
              <a href={`/blog/${blog.slug}`}>
                {blog.blog_title} <br />
                <strong>{new Date(blog.blog_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}</strong>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-12 col-md-5">
        <h4>Our Address</h4>
        <ul className="contact-ul">
          <li>
            <strong>Address:</strong> DLF Galleria, Room No: DK1405, Action Area
            1, Newtown, Kolkata 700156, West Bengal
          </li>
          <li>
            <strong>Phone:</strong> +91 8420202891
          </li>
          <li>
            <strong>Email:</strong> admin@passionatefuturist.com
          </li>
        </ul>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/passionatefuturist/"
            className="s_facebook"
          >
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a
            href="https://twitter.com/passionatefutu1"
            className="s_twitter"
          >
            <i className="fa-brands fa-twitter" />
          </a>
          <a
            href="https://www.linkedin.com/company/passionate-futurist-solutions-pvt-ltd/"
            className="s_linkedin"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCRA6X9Cu-DHTTaWFkgSEtAw"
            className="s_youtube"
          >
            <i className="fa-brands fa-youtube" />
          </a>
        </div>
      </div>
      {/*<div class="col-12 col-md-3">*/}
      {/*    <h4>Reach Us</h4>*/}
      {/*    <div class="newsletter" bis_skin_checked="1">*/}
      {/*            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2190.472098341375!2d88.4592213866153!3d22.582085117589667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02753defab8509%3A0x2f82e81a6184b569!2sPassionate%20Futurist%20%7C%20Digital%20Marketing%20Company%20in%20Kolkata!5e0!3m2!1sen!2sin!4v1710921302507!5m2!1sen!2sin" width="100%" height="40%" frameborder="0" style="border:0" allowfullscreen=""></iframe>*/}
      {/*        </div>*/}
      {/*</div>*/}
    </div>
  </div>
  <p className="copyright">
    Copyright © Passionate Futurist All Rights Reserved.
  </p>
</section>

  )
}
