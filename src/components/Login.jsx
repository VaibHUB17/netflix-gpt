import React, { useState, useRef } from 'react'
import { Header } from './Header'
import BgmImage from "../utils/Loginscreebgm.png"
import { checkValidateData } from '../utils/Validate'
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/Firebase"
import { useNavigate } from 'react-router-dom'

const Login = () => {
      const[IsSignIn,setIsSignIn] = useState(true)
      const [ErrorMessage, setErrorMessage] = useState(null)
      const navigate = useNavigate()


      const name = useRef(null)     
      const email = useRef(null)
      const password = useRef(null)
      
      const HandleButtonClick = () => {
        //valiate the form and send the data to the server used after the handlleclick button cause the signin button renders after getting value before that the current value refers to null
        console.log(email.current.value)
        console.log(password.current.value)
        
        

        const message = checkValidateData(email.current.value, password.current.value)
        setErrorMessage(message)

       if(message) return

       if (!IsSignIn) {
        
        
         
         //sign up
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigate("/browse")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            setErrorMessage(errorMessage)
          });


       }


       else {
        //sign in
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigate("/browse")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            setErrorMessage(errorMessage)
          });
       }

        
      } 
     

      



      const ToggleSignInForm = () =>{
        setIsSignIn(!IsSignIn)
       }



  return (
    <div>

      <div>
      <Header/>
      <div className=''>

      <img className='object-cover h-200 w-full brightness-30 ' src={BgmImage} alt ="bgm"/>

      <div className='absolute inset-0 flex justify-center items-center mt-10'>


      <div className=" absolute bg-opacity-85  rounded   p-12 mx-auto right-0 left-0 bg-black opacity-85  w-full max-w-md px-8 py-10 bg-opacity-85 text-white h- ">



          <h1 className='text-white text-3xl font-bold mb-5' >
            {IsSignIn 
            ? "Sign In" 
            : "Create an Account"}
          </h1>


         <form className='flex flex-col ' onSubmit ={(e) => e.preventDefault()} > 

          {/* for sign up only */}
          {!IsSignIn &&<input  
          ref={name}
          type = "text" 
          placeholder='Full Name' 
          className='p-2 my-4 border border-gray-300 rounded-xs  w-full '/>}


          <input 
          ref={email}
          type= "text" 
          placeholder='Email Address' 
          className='p-2 my-4 border border-gray-300 rounded-xs w-full '/>

          <input 
          ref={password}
          type = "password" 
          placeholder='Password' 
          className='p-2 my-4 border border-gray-300 rounded-xs  w-full '/>

          <p className='text-red-600 '>{ErrorMessage}</p>

          <button 
          className='p-2 my-6 rounded-lg  bg-red-600 hover:bg-red-800  w-full' 
          onClick={HandleButtonClick}>
          {IsSignIn ? "Sign In" : "Sign Up"}
          </button>

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