import React from 'react';
import { LiaCrownSolid } from "react-icons/lia";
import SectionHead from './SectionHead';
import { programs } from '../data';
import Cards from '../UI/Cards';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";


const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        {/* Fixed typo in class name */}
        <SectionHead icon={<LiaCrownSolid />} title="Programs"/ >
      </div>
      <div className="programs__wrapper">
        {
          programs.map(({ id, icon, title, info, path }) => {
            return (
              <Cards key={id} className="programs__program">
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">Learn More <AiFillCaretRight />
                </Link>
              </Cards>
            );
          })
        }
      </div>
    </section>
  );
};

export default Programs;
