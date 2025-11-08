import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Component/Footer/Footer';
import Banner from '../../Component/Banner/Banner';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
      </div>
   );
};

export default Home;