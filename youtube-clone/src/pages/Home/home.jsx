import React from 'react';
import './home.css';
import Sidebar from '../../Components/sidebar/sidebar';
import Feed from '../../Components/Feed/feed';

const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed/>
      </div>
    </>
  );
};

export default Home;
