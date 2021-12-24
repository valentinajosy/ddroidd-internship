import React from "react";
import classes from "./FirstPage.module.css";
import { Routes, Route, Link } from "react-router-dom";
import css from "./css.png";
import html from "./html.png";
import javaScript from "./javaScript.png";
import react from "./react.png";

const FirstPage = () => {
  return (
    <div>
      <div className={classes.content}>
        <div className={classes.firstSection}>
          <div className={classes.textLeft}>
            <p className={classes.textStyle}>
              const {"{"}
              <img src={html} />, <img src={css} />, <img src={javaScript} />,{" "}
              <img src={react} />
              {"}"} =
            </p>
          </div>

          <div className={classes.rightObject}>
            <div className={classes.parent}>
              <div className={classes.parent1}>
                <div className={`col-3 ${classes.bgOrange}`}></div>
                <div className={`col ${classes.bgBlue}`}></div>
              </div>
              <div className={classes.parent2}>
                <div className={`col ${classes.bgBlue}`}></div>
              </div>
              <div className={classes.parent2}>
                <div className={`col ${classes.bgYellow}`}></div>
                <div className={`col ${classes.bgYellow}`}></div>
                <div className={`col ${classes.bgYellow}`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.btnJoinUs}>
          <Link to="/form">
            <button renderAs="button" className={classes.button}>
              <span> Join Us </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
