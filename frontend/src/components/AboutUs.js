import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="main" id="aboutUsSection">
        <div className="headerContainer">
        <h1>About Taplen</h1>
            <div className="headerSection">
                <h2>Who developed Taplen</h2>
                <p> Welcome! I am Ben Manicke, and I'm thrilled to have you here. As a developer, I am passionate about developing applications that showcase my abilities while helping and serving others.
                    This website serves as a platform to test my abilities and provide users with an interactive and effective experience. I am committed to broadening my skills and abilities and sharing my experiences with you!
                    I appreciate you checking out my site. Feel free to reach out and join me on this journey by checking out some of my other projects and checking out my socials!
                </p>
            </div>
            <div className="headerSection">
                <h2>What Comes Next?</h2>
                <p> My goal is to continue learning new skills and abilities and implementing them into my sites. I hope to document this journey by sharing these application with you! 
                    I hope to meet some other developers and designers along the way and have them pass off any tips / critiques on my work. Again, I appreciate all of your support. You can 
                    help out by by checking out some of my other projects, checking out my socials, or recommending the site to others. All feedback goes a really long way!


                </p>
            </div>
            <div className="socialHeaderSection">
                <h2>How to Reach Us:</h2>
                <ul className="wrapper">
                    <li className="icon github">
                        <span className="tooltip">GitHub</span>
                        <span className="gitHubSpan"><a href="https://github.com/Benny787/Taplen" target="_blank"><i id="gitHubIcon" className="fab fa-github"></i></a></span>
                    </li>
                    <li className="icon discord">
                        <span className="tooltip">Discord</span>
                        <span><i className="fab fa-discord"></i></span>
                    </li>
                    <li className="icon twitter">
                        <span className="tooltip">Twitter</span>
                        <span><i className="fab fa-twitter"></i></span>
                    </li>
                    <li className="icon instagram">
                        <span className="tooltip">Instagram</span>
                        <span><i className="fab fa-instagram"></i></span>
                    </li>
                    {/* <li className="icon facebook">
                        <span className="tooltip">Facebook</span>
                        <span><i className="fab fa-facebook-f"></i></span>
                    </li> */}
                </ul>
            </div>
            <a id="heroSectionLink" href="#">Back to Top</a>
        </div>
    </section>
  );
}

export default AboutUs;