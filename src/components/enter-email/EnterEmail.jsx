import React from 'react'
import "./EnterEmail.css";
import "../../App.css";
const EnterEmail = () => {
  return (
    <section className="subs__section">
    <div className="subscribe__overlay"></div>
    <div className="container">
      <h3>SUBSCRIBE MY NEWSLETTER</h3>

      <div className="subs__section__btn">
        <input type="text" placeholder="Enter Your Email" />
        <button>Notify Now</button>
      </div>
    </div>
  </section>
  )
}

export default EnterEmail