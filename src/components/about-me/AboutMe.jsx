import React from 'react';
import "./AboutMe.css";
import "../../App.css";
const AboutMe = () => {
  return (
    <section className='aboutme'>
    <div className="container">
        <div className="section2Con">
            <div className="section2Left">
                <h5>ABOUT ME</h5>
                <h2>Transforming visions into exceptional portfolios</h2>
                <div className='section2LeftDiv'>
                    <span></span>
                    <div>
                        <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione</p>
                        <a style={{color:"black",background:"#55e6a5",padding:"20px"}} href="#">Download Cv <i style={{marginLeft:"5px"}} class="fa-solid fa-download"></i></a>
                    </div>
                </div>
                
            </div>
            <div className='section2Right'>
                <div className='greenDiv'>
                    <img src="https://zyan.vercel.app/images/about_img.jpg" alt="" />
                    <div className='greenDivPie'>
                        <i class="fa-solid fa-chart-pie"></i>
                        <div className='greenDivText'>
                            <h6>Daily Activity</h6>
                            <p>Loream is ispam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutMe