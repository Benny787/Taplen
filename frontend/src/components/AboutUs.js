import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="main" id="aboutUsSection">
        <div className="headerContainer">
        <h1>About us</h1>
            <div className="headerSection">
                <h2>Who we are:</h2>
            </div>
            {/* <div className="spinnerContainer">
                <div className="spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div> */}
            <div className="headerSection">
                <h2>Our Goals:</h2>
            </div>
            <div className="headerSection">
                <h2>How to Reach Us:</h2>
            </div>
            <div className="headerSection">
                <h2>How to Support:</h2>
            </div>
        </div>
    </section>
  );
}

export default AboutUs;