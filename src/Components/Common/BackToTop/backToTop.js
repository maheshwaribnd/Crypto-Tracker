import React from "react";
import "./style.css";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";

const BackToTop = () => {
    
  let mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  }
  return (
    <div className="top-btn" id="myBtn" onClick={() => topFunction()}>
      <NorthRoundedIcon style={{ fontSize: "2rem" }} />
    </div>
  );
};

export default BackToTop;
