// import React from 'react';

import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import Header from "../../Components/Shared/Header/Header";
import LeftSideNav from "../../Components/Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import RightSideNav from "../../Components/Shared/RightSideNav/RightSideNav";

const Home = () => {
   return (
      <div className="">
         <Header></Header>
         <BreakingNews></BreakingNews>
         <Navbar></Navbar>
         {/* <h2 className="text-xl">this is home</h2> */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
               <LeftSideNav></LeftSideNav>
            </div>
            <div className="md:col-span-2">
               <h3 className="text-5xl">Dragon News Home</h3>
            </div>
            <div>
               <RightSideNav></RightSideNav>
            </div>
         </div>
      </div>
   );
};

export default Home;