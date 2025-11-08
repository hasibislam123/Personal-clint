import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
   return (
      <footer className="bg-[#1e88e5]/100  md:px-8 max-w-8xl mx-auto text-white py-10">
         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

            {/* Logo & Website Name */}
            <div className="flex flex-col items-start">
               <div className="flex items-center gap-2">
                  <h1 className='font-bold text-xl'>Fin <span className="text-orange-400">Ease</span></h1>
               </div>
               <p className="text-white mt-2">
                  Simplifying your finances one transaction at a time.
               </p>
            </div>

            {/* Contact Details */}
            <div>
               <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
               <p className="text-white">Email: support@finease.com</p>
               <p className="text-white">Phone: +880 123 456 789</p>
               <p className="text-white">Address: Dhaka, Bangladesh</p>
            </div>

            {/* Terms & Social Links */}
            <div className="flex flex-col md:items-end gap-3">
               <a href="/terms" className="text-white hover:text-white">Terms & Conditions</a>
               <div className="flex gap-3 mt-2">
                  <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
                  <a href="#" className="hover:text-black"><FaXTwitter /></a>
                  <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                  <a href="#" className="hover:text-blue-600"><FaLinkedinIn /></a>
               </div>
            </div>
         </div>

         {/* Bottom Text */}
         <div className="mt-8 border-t text-white pt-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} FinEase. All rights reserved.
         </div>
      </footer>
   );
};

export default Footer;