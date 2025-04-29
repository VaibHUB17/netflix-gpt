import React from 'react'
import NetflixLogo from '../utils/netflixlogo.png'
import UserIcon from "../utils/UserIcon.png"  
import { signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



export const Header = () => {
  const navigate = useNavigate(); 
  const user = useSelector((store)=> store.user)

  
  const HandleSignOut = () => { 
      signOut(auth).then(() => {
          navigate("/");
      }).catch((error) => {
          navigate("/error");
          console.log(error)
          
      });
  };
  return (
  
      


       <div className=' flex justify-between  bg-gradient-to-b from-black rounded-b-lg h-20 w-screen px-8 py-2 absolute z-10'>
      
            <img className='m-3 ml-15 w-30 h-15 '
            src={NetflixLogo} alt="Logo"/>
             

            {user && 

              <div className='flex'>
            <img className='m-4 rounded-sm flex justify-end w-10 h-10'
            src={UserIcon} alt="UserIcon"/>
            <button onClick={HandleSignOut} className=''>(Sign Out)</button>
            </div>  
            
          } 
            
      
            
      
            
            </div>
    

     


     


  
  )
}

export default Header