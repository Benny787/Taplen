import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="main" id="aboutUsSection">
        <div className="headerContainer">
        <h1>About us</h1>
            <div className="headerSection">
                <h2>Who we are:</h2>
                <p>[Text will go here]</p>
                <p>Hi Matt</p>
            </div>
            <div className="headerSection">
                <h2>Our Goals:</h2>
                <p>[Text will go here]</p>
            </div>
            <div className="socialHeaderSection">
                <h2>How to Reach Us:</h2>
                <ul class="wrapper">
                    <li class="icon github">
                        <span class="tooltip">GitHub</span>
                        <span><i class="fab fa-github"></i></span>
                    </li>
                    <li class="icon discord">
                        <span class="tooltip">Discord</span>
                        <span><i class="fab fa-discord"></i></span>
                    </li>
                    <li class="icon twitter">
                        <span class="tooltip">Twitter</span>
                        <span><i class="fab fa-twitter"></i></span>
                    </li>
                    <li class="icon instagram">
                        <span class="tooltip">Instagram</span>
                        <span><i class="fab fa-instagram"></i></span>
                    </li>
                    <li class="icon facebook">
                        <span class="tooltip">Facebook</span>
                        <span><i class="fab fa-facebook-f"></i></span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  );
}

export default AboutUs;