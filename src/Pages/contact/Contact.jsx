import React from "react";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import Header from "../../components/Header";
import "./contacts.css"


const About = () => {
  return (
    <>
      <Header title="Get in Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa delectus
        nam modi debitis quos autem sint praesentium a laborum.
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailo:support@egattor.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me/ernest_achiver"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+201030931419"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
