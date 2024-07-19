import React from 'react';
import './home.css';
import MainHeader from '../../components/MainHeader';
import Programs from '../../components/Programs';
import Values from '../../components/Values';
import Faqs from '../../components/Faqs';
import Testimonials from '../../components/Testimonials';
const Home = () => {
  return (
    <>
      <MainHeader /> 
      <Programs />
      <Values />
      <Faqs />
      <Testimonials />
    </>
  );
};

export default Home;
