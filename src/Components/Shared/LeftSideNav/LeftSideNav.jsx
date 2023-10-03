// import React from 'react';

import { useEffect, useState } from "react";

const LeftSideNav = () => {
   const [categories, setCategories] = useState([]);
   useEffect(() =>{
      fetch('data/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
   },[])
   return (
      <div>
         <h2 className="text-2xl font-semibold text-black ">All Category </h2>
         <div className="bg-[#E7E7E7]">
            <h2 className="text-xl pl-8 py-3 my-3 text-black font-medium mb-3">National News</h2>
         </div>
         <div className="block text-xl">
            {
               categories.map(category => <h2 key={category.id} className="text-xl pl-8 pb-2">{category.name}</h2>)
            }
         </div>
      </div>
   );
};

export default LeftSideNav;