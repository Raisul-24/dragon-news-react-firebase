// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Root = () => {
   return (
      <div className=" font-poppins bg-white">
        <div className="max-w-6xl mx-auto">
         <Outlet></Outlet>
         
        </div>
        <Footer></Footer>
      </div>
   );
};

export default Root;