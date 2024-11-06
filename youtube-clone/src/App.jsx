import React, { useState } from 'react';
import Navbar from './Components/Navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} /> 
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<div>Video Page</div>} />
      </Routes>
    </div>
  );
};

export default App;
