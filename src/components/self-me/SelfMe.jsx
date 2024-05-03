import React from "react";
import "./SelfMe.css";
import "../../App.css";
const SelfMe = () => {
  return (
    <div className="bck_img">
      <div className="container">
        <div className="section__all">
          <div className="section__left">
            <h1>
              HI, I'M ZYAN! CREATIVE <span>PLAYER</span>{" "}
            </h1>
            <p>
              I'm a passionate UI/UX designer with a mission to create
              delightful and intuitive digital experiences. With a strong
              foundation in design principles and a keen eye for detail, I
              specialize in translating complex ideas into user-friendly
              interfaces that captivate and engage.
              
            </p>
            <div className="btn">
              <button className="btn-primary" >
                Download Cv <i class="fa-solid fa-arrow-down"></i>
              </button>
              <button className="btn-outline">
              <i class="fa-solid fa-play"></i><p>Watch The Video</p>
              </button>
             
            </div>
          </div>
          <div className="Section__img">
            <img src="https://zyan.vercel.app/images/banner_img_1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelfMe;
