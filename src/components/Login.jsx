import React, { useState } from 'react'
import { Header } from './Header'
import BgmImage from "../utils/Loginscreebgm.png"

const Login = () => {

     

      const[IsSignIn,setIsSignIn] = useState(true)
      const ToggleSignInForm = () =>{
          setIsSignIn(!IsSignIn)
    }


  return (
    <div>

      <div>
      <Header/>
      <div className=''>

      <img className='object-cover h-full w-full brightness-30 ' src={BgmImage} alt ="bgm"/>

      <div className='absolute inset-0 flex justify-center items-center mt-10'>


      <div className=" absolute bg-opacity-85  rounded   p-12 mx-auto right-0 left-0 bg-black opacity-85  w-full max-w-md px-8 py-10 bg-opacity-85 text-white ">



          <h1 className='text-white text-3xl font-bold mb-5' >
            {IsSignIn 
            ? "Sign In" 
            : "Create an Account"}
          </h1>

          {/* for sign up only */}
          {!IsSignIn &&<input  
          type = "text" 
          placeholder='Full Name' 
          className='p-2 my-4 border border-gray-300 rounded-xs  w-full '/>}

         <form className='flex flex-col justify-center items-center'> 
          <input 
          type= "text" 
          placeholder='Email Address' 
          className='p-2 my-4 border border-gray-300 rounded-xs w-full '/>

          <input 
          type = "password" 
          placeholder='Password' 
          className='p-2 my-4 border border-gray-300 rounded-xs  w-full '/>

          <button className='p-2 my-6 rounded-lg  bg-red-600 w-full'>Sign In</button>

          <p className='mt-5 py-4 hover:underline' onClick={ToggleSignInForm}>
            {IsSignIn 
            ? "New to Netflix? Sign up now." 
            : "Already have an account? Sign in."}
            </p>

         </form>
          </div>


            </div>
        </div>
      

      </div>



    </div>
    
  )
}

export default Login