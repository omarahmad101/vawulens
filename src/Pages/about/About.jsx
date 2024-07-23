import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

import "./about.css";
const About = () => {
  return (
    <>
      <Header
        title="About Us"
        image={HeaderImage}
        children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad
        ducimus voluptate eveniet nesciunt libero minima tempore laboriosam
        dolorem sapiente!"
      ></Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story image" />
          </div>
          <div className="about__section-content">
            <h1>Out story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              deserunt impedit quae unde sunt aut nostrum tempora, sit est!
              Natus fugit deleniti expedita in perferendis maxime iusto optio ut
              cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              deserunt impedit quae unde sunt aut nostrum tempora, sit est!
              Natus fugit deleniti expedita in perferendis maxime iusto optio ut
              cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              deserunt impedit quae unde sunt aut nostrum tempora, sit est!
              Natus 
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">

          <div className="about__section-content">
            <h1>Out Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              deserunt impedit quae unde sunt aut nostrum tempora, sit est!
              Natus fugit deleniti expedita in perferendis maxime iusto optio ut
              cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              deserunt impedit quae unde sunt aut nostrum tempora, sit est!
              Natus fugit deleniti expedita in perferendis maxime iusto optio ut
              cumque.
            </p>

          </div>

          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision image" />
          </div>
        </div>
      </section>

      <section className="about__Mission">
        <div className="container about__Mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission image" />
          </div>
          <div className="about__section-content">
            <h1>Out Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              deserunt impedit quae unde sunt aut nostrum tempora, sit est!
              Natus fugit deleniti expedita in perferendis maxime iusto optio ut
              cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              deserunt impedit quae unde sunt aut nostrum tempora, sit est!
              Natus fugit deleniti expedita in perferendis maxime iusto optio ut
              cumque.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
