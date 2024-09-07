import React from "react";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import "./trainers.css";
import Trainer from '../../components/Trainer'; // Corrected import

const Trainers = () => {
  return (
    <>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({ id, image, name, job, socials }) => (
              <Trainer 
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials.instagram },
                  { icon: <AiOutlineTwitter />, link: socials.twitter },
                  { icon: <FaFacebookF />, link: socials.facebook },
                  { icon: <FaLinkedin />, link: socials.linkedin },
                ]}
              />
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Trainers;
