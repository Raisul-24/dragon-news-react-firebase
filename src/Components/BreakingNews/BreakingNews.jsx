import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
   return (
      <div className="border-2 py-4 px-2 bg-gray-100 rounded-xl">
         <div className="flex justify-between">
         <button className="btn btn-secondary mr-5">Breaking News</button>
         <Marquee pauseOnHover={true} speed={100} className="md:mr-10">
            
            <Link className="mr-8" to="/">I can be a React component, multiple React components, or just some text.</Link>
            <Link className="mr-8" to="/">I can be a React component, multiple React components, or just some text.</Link>
            <Link className="mr-8" to="/">I can be a React component, multiple React components, or just some text.</Link>
         </Marquee>
         </div>
      </div>
   );
};

export default BreakingNews;