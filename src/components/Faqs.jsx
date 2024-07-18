import React from "react";
import SectionHead from "./SectionHead";
import { faqs } from "../data";
import Faq from "./Faq";
import { FaQuestion } from "react-icons/fa";

const Faqs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <div className="value-title">
          <SectionHead icon={<FaQuestion />} title="FAQs" />
        </div>

        <div className="cont faqs__wrapper">
          {faqs.map(({ id, question, answer }) => {
            return <Faq key={id} question={question} answer={answer}></Faq>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
