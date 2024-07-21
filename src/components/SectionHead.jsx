import React from "react";

const SectionHead = ({ icon, title, className }) => {
  return (
    <div className={`section__head ${className}`}>
      <span className="Sectionicon">{icon}</span>
      <p>{title}</p>
    </div>
  );
};

export default SectionHead;
