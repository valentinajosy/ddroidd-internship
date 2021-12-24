import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="p-3 mb-2 bg-secondary text-white">
      <div className={classes.footerText}>
        <div>Come to the dark side... we have 🍪</div>
      </div>
    </div>
  );
};

export default Footer;
