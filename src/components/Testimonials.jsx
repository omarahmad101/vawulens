import React, { useState } from 'react';
import SectionHead from './SectionHead';
import { ImQuotesLeft } from 'react-icons/im';
import Cards from '../UI/Cards';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { testimonials } from '../data';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonials">
      <div className="container testimonials_container">
        <div className="value-title">
          <SectionHead icon={<ImQuotesLeft />} title="Testimonials" />
        </div>

        <Cards className="testimonials-cards">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>

          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Cards>

        <div className="testimonials__btn-container">
          <button className="testimonials__btn" onClick={handlePrev}>
            <IoIosArrowDropleftCircle />
          </button>
          <button className="testimonials__btn" onClick={handleNext}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
