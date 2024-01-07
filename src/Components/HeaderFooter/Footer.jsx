import React from "react";
import classes from "../Styles/Footer.module.css";
import logo from "./logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className={classes.footerwrapper}>
      <div className={classes.footer}>
        <div className={classes.logodesc}>
          <div className={classes.fl}>
            <div style={{display:"flex"}}>
              <img src={logo} alt="" className={classes.logo} />
              <h2>GyanGuru</h2>
            </div>
            <div className={classes.contact}>
              <h4>Subsribe to our newsletter</h4>
              <button>Subscribe!</button>
            </div>
          </div>
          <div className={classes.grid}>
            <div className={classes.links}>
              <h3>Quick Links</h3>
              <ul className={classes.ul}>
                <li>About</li>
                <li>Admission</li>
                <li>Events</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={classes.links}>
              <h3>Popular Classes</h3>
              <ul className={classes.ul}>
                <li>Piano</li>
                <li>Guitar</li>
                <li>Rubix Cube</li>
                <li>Painting</li>
                <li>Science</li>
              </ul>
            </div>
            <div className={classes.links}>
              <h3>Support</h3>
              <ul className={classes.ul}>
                <li>Help Center</li>
                <li>FAQ</li>
                <li>Contact</li>
                <li>Security</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div className={classes.links}>
              <h3>Get in Touch</h3>
              <ul className={classes.ul}>
                <li>987662631</li>
                <li>68 Pompton, Cedar </li>
                <li>NJ 5479 United States</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
