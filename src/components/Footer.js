import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       <FacebookIcon /> <InstagramIcon /> <TwitterIcon />  <LinkedInIcon />
      </div>
      <p>ABEL BACKSCHADT (SYSARCH FINAL PROJECT)</p>
    </div>
  );
}

export default Footer;
