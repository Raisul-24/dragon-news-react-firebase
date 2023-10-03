
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"


const RightSideNav = () => {
   return (
      <div>
         <div className="p-2 mb-6">
            <h2 className="text-2xl font-bold text-black mb-5">Login With</h2>
            <Link to="/signUpGoogle"
            className="btn btn-outline btn-info w-full mb-3">
            <FaGoogle className="text-xl"></FaGoogle>
               Login with Google</Link>
            <Link to="/signUpGithub"
            className="btn text-black btn-outline w-full mb-2">
            <FaGithub className="text-xl"></FaGithub>
               Login with Github</Link>
            </div>
         <div className="p-2 mb-6">
            <h2 className="text-xl text-black font-semibold mb-5">
               Find Us On
            </h2>
            <a href="https://www.facebook.com/" className="flex items-center gap-2 text-base px-4 font-medium border-2 py-5 rounded-t-md">
               <FaFacebook className="text-blue-700 text-2xl"></FaFacebook> 
               Facebook</a>
            <a href="https://www.twitter.com/" className="flex items-center gap-2 text-base px-4 font-medium border-x-2 py-5 ">
               <FaTwitter className="text-blue-400 text-2xl"></FaTwitter> 
               Twitter</a>
            <a href="https://www.instagram.com/" className="flex items-center gap-2 text-base px-4 font-medium border-2 py-5 rounded-b-md">
               <FaInstagram className="text-[#FD1D1D] text-2xl"></FaInstagram> 
               Instagram</a>
         </div>
         <div className="p-2 bg-[#F3F3F3] mb-6">
            <h2 className="text-2xl text-black font-semibold mb-5">
               Q-Zone
            </h2>
            <div>
               <img src={qZone1}  />
               <img src={qZone2}  />
               <img src={qZone3}  />
            </div>
         </div>
         <div className="bg-[#040618] px-9 py-12">
            <h2 className="text-3xl text-white text-center font-bold">Create an Amazing NewsPaper</h2>
            <p className="text-center font-normal text-[#FFF] my-3">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <div className="flex justify-center">
            <Link to="/" 
            className="text-center p-3 bg-red-500 text-xl text-white font-semibold">Learn More</Link>
            </div>
             </div>

      </div>
   );
};

export default RightSideNav;