import React from 'react';
import './home.css';
import MainHeader from '../../components/MainHeader';
import Programs from '../../components/Programs';
import Values from '../../components/Values';
import Faqs from '../../components/Faqs';

const Home = () => {
  return (
    <>
      <MainHeader /> 
      <Programs />
      <Values />
      <Faqs />
    </>
  );
};

export default Home;
