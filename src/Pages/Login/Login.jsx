import { Link } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
   const {logIn} = useContext(AuthContext);


   const handleLogin = e => {
      e.preventDefault();
      console.log(e.currentTarget);
      // const email = e.target.email.value;
      // console.log(email)
      const form = new FormData(e.currentTarget);
      const email =form.get('email');
      const password =form.get('password');
      console.log(email,password);
      logIn(email,password)
      .then(result =>{
         console.log(result)
      })
      .error(error =>{
         console.error(error);
      })

   }
   return (
      <div>
         <Navbar></Navbar>
         <div className=" md:w-3/4 lg:w-1/2 mx-auto mt-24">
            <form onSubmit={handleLogin}>
               <div className="form-control">
                  <div className="text-black text-center mb-8">
                     <h2 className="text-3xl font-bold border-b-2 pb-5">Login your account</h2>
                  </div>
                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Email address</span>
                  </label>
                  <input type="email"
                     name="email"
                     placeholder="Enter your email address"
                     className="input input-bordered bg-[#F3F3F3] py-4" required />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Password</span>
                  </label>
                  <input type="password"
                     name="password"
                     placeholder="Enter your password"
                     className="input input-bordered bg-[#F3F3F3] py-4" required />
                  <label className="label">
                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
               </div>
               <div className="form-control mt-6">
                  <input type="submit" value="Login" className="btn text-white bg-black" />
               </div>
               <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                  Do not have an account?
                  <Link
                     to="/register"
                     className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
                  >
                     Register
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default Login;