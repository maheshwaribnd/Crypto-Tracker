import React from "react";
import "./style.css";
import { Tooltip } from "@mui/material";


function Footer() {
  return (
    <div className="footer-wrap">
      <div className="footer">
        <div className="left">
          <h3>CryptoTracker</h3>
        <Tooltip placement="bottom-start" title="Crypto">
          <a href="/">
            <img src="https://img.icons8.com/external-avoca-kerismaker/64/null/external-Cryptocurrency-blockchain-avoca-kerismaker.png"/>
          </a>
        </Tooltip>
        </div>
        <div class="social-item">
        <Tooltip placement="bottom-start" title="Git">
          <a href="https://github.com/maheshwaribnd" target="_blank">
            <img src="https://img.icons8.com/bubbles/50/null/github.png" />
          </a>
        </Tooltip>
        <Tooltip placement="bottom-start" title="LinkedIn">
          <a href="https://www.linkedin.com/in/maheshwari-b-170684188" target="_blank">
            <img src="https://img.icons8.com/bubbles/50/000000/linkedin.png" />
          </a>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Bio">
          <a href="https://bio.link/maahib_07" target="_blank">
            <img src="https://img.icons8.com/bubbles/50/null/api.png" />
          </a>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Mail">
          <a href="https://mail.google.com/mail/u/0/fs=1&to=mamtabnd097@gmail.com&su=SUBJECT+HERE&body=BODY+HERE&tf=cm" target="_blank">
            <img src="https://img.icons8.com/bubbles/50/null/apple-mail.png"/>
          </a>
        </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Footer;
