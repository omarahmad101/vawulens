import React from "react";
import Image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Cards from "../UI/Cards";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values Image" />
          </div>
        </div>
        <div className="values__right">
          <div className="value-title">
          <SectionHead icon={<GiCutDiamond />} title="Values" /></div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            voluptas libero, itaque corrupti mollitia non! Numquam iste tempora
            nam provident in cumque soluta, vero, illo quibusdam aliquid
            incidunt earum molestias? 
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc, path }) => {
              return (
                <Cards key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Cards>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
