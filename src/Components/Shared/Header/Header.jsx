import logo from "../../../assets/logo.png"
import moment from 'moment';

const Header = () => {
   return (
      <div className="text-center ">    
         <img src={logo} alt="" className="mx-auto py-5 md:pt-9"/>        
         <p className="text-lg font-normal">Journalism Without Fear or Favour</p>
         <p className="text-xl font-medium mb-7">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
   );
};

export default Header;