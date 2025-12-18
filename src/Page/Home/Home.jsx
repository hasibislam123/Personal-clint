import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Overview from '../../Component/homesection/Overview';
import StaticSections from '../../Component/StaticSections/StaticSections ';
import Features from '../../Component/homesection/Features';
import Testimonials from '../../Component/homesection/Testimonials';
import Pricing from '../../Component/homesection/Pricing';
import CTASection from '../../Component/homesection/CTASection';

const Home = () => {
   return (
      <div className='bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-800 dark:to-gray-900'>
         <Banner></Banner>

         <Overview></Overview>
         
         <StaticSections></StaticSections>
         
         <Features></Features>
         
         <Testimonials></Testimonials>
         
         <Pricing></Pricing>
         
         <CTASection></CTASection>
      </div>
   );
};

export default Home;