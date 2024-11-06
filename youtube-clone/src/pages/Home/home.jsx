import React from 'react';
import './home.css';
import Sidebar from '../../Components/sidebar/sidebar';

const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
    </>
  );
};

export default Home;
