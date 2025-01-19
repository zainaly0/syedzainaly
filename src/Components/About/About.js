import React from "react";
import "./About.css";
// import AboutImg from '../../assets/about.jpg'
import AboutImg from "../../assets/myhPic.jpg";

import Info from "./Info";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
          <img src={AboutImg} alt="" className="about__img" />

          <div className="about__data">
            <Info />

            <p className="about__description" style={{ padding: "0" }}>
              i'm Full Stack Developer, I create Web Pages, WebSite, Web App
              with UI/UX User Interface and BackEnd, and I can create Mobile
              Apps as well. I have done 6 months of internship in MERN and 4
              Months in Laravel and Now im full time working as Software Engineer and i have 1.5
              years or hands of experience. i learn lots of things about Website
              Application Mobile Apps and Android Studio
            </p> 
          </div>
        </div>

        <div className="container">
        Currently pursuing a degree in law, My aim to integrate your technical skills with a comprehensive understanding of legal frameworks. This unique combination enables me to approach challenges with a multifaceted perspective, bridging technology and social justice. Dedicated to continuous growth, you are committed to using your skills to address real-world issues and drive meaningful impact. 
        </div>
      </section>
    </>
  );
};

export default About;
