import React from "react";
import "./style.css";
import gradient from "../../../Assets/gradient.png";
import iphone from "../../../Assets/iphone.png";
import Button from "../../Common/Button/button";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className="landing-wrapper">
      <div className="landing-left">
        <motion.h1
          className="heading-1"
          initial={{ opacity: 0, rotateY: 270 }}
          animate={{ opacity: 1, rotateY: 360 }}
          transition={{ duration: 1.3, delay: 0.1 }}
          whileHover={{ translateY: 15 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="heading-2"
          initial={{ opacity: 0, rotateY: 270 }}
          animate={{ opacity: 1, rotateY: 360 }}
          transition={{ duration: 2, delay: 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="para"
          initial={{ opacity: 0, scaleY: .7 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 2.7, delay: 0.2 }}
        >
          Track Crypto through a public API in Real Time. Visit the dashboard to
          do so !
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 0.3 }}
        >
          <a href="/dashboard">
            <Button text="Dashboard" />
          </a>
          <a href="/shareApp">
            <Button text="Share App" outlined={true} />
          </a>
        </motion.div>
      </div>
      <div className="landing-right">
      <img src={iphone} alt="" className="iphone" />
      <img src={gradient} alt="" className="gradient" />
      </div>
    </div>
  );
}

export default LandingPage;
