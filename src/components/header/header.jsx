import React from "react";
import "./header.css";
import "../../App.css";

function header() {
  return (
    <header>
<div className=" my_nav">
  <div className="media">
  <div className="header__start">
        <img src="https://zyan.vercel.app/images/logo.png" alt="" />
      </div>
      <nav className="header__center">
        <ul>
          <li>
            <a href="">HOME <i class="fa-solid fa-chevron-down"></i></a> 
          </li>
          <li>
            <a href="">ABOUT US</a>
          </li>
          <li>
            <a href="">SERVICES</a>
          </li>
          <li>
            <a href="">PROJECTS</a>
          </li>
          <li>
            <a href="">BLOG <i class="fa-solid fa-chevron-down"></i></a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div className="header__end">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  </div>
  
    </header>
    
  );
}

export default header;
