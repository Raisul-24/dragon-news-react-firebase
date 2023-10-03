
import { Link } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
   const [registerError,setRegisterError] = useState('');
   const [success, setSuccess] = useState('');
   const {createUser} = useContext(AuthContext);


   const handleRegister = e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const name =form.get('name');
      const photo =form.get('photo');
      const email =form.get('email');
      const password =form.get('password');
      console.log(name,photo,email,password);


      // reset error
      setRegisterError('');
      setSuccess('');
      // create user
      createUser(email,password)
      .then(result=>{
         console.log(result.user);
         setSuccess(Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your account has been successfully created',
            showConfirmButton: false,
            timer: 1500
          }));
      })
      .catch(error =>{
         console.error(error);
         setRegisterError(error.message);
      })
   }
   return (
      <div>
         <Navbar></Navbar>
         <div className=" md:w-3/4 lg:w-1/2 mx-auto mt-24">
            <form onSubmit={handleRegister}>
               <div className="form-control">
                  <div className="text-black text-center mb-8">
                     <h2 className="text-3xl font-bold border-b-2 pb-5">Register your account</h2>
                  </div>
                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Your Name</span>
                  </label>
                  <input type="text"
                     name="name"
                     placeholder="Enter your name"
                     className="input input-bordered bg-[#F3F3F3] py-4" required />
                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Photo URL</span>
                  </label>
                  <input type="text"
                     name="photo"
                     placeholder="Enter your photo URL"
                     className="input input-bordered bg-[#F3F3F3] py-4" required/>

                  <label className="label">
                     <span className="label-text text-xl font-semibold text-black">Email</span>
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
                  <input type="submit" value="Register" className="btn text-white bg-black" />
               </div>
               <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                  Do you have an account?
                  <Link
                     to="/login"
                     className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
                  >
                     Login
                  </Link>
               </p>
            </form>
            {
               success && <p className="text-green-600">{success}</p>
            }

            {
               registerError && <p className="text-red-600">{registerError}</p>
            }
               
         </div>
      </div>
   );
};

export default Register;