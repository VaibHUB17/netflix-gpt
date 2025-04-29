import React  from 'react'
import NetflixLogo from '../utils/Netflixlogo.png'
import UserIcon from "../utils/UserIcon.png"  
import { signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'



export const Header = () => {


   //this is used to dispatch the action to the redux store
  //this is used to get the user data from the firebase and store it in the redux store

  const navigate = useNavigate(); 
  const dispatch = useDispatch()

  const user = useSelector((store)=> store.user)
  
  // Debug: Log user state
  console.log("Header Component - User state:", user);
  
  const HandleSignOut = () => { 
      signOut(auth).then(() => {
          
      }).catch((error) => {
          navigate("/error");
          console.log(error)
          
      });
  };



//Like an eventListener for the auth state change.
//when the user is logged in or logged out this function will be called and we can get the user data from it and store it in redux store.

useEffect(()=> {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, get the user data and store it in redux store
      const {uid ,email, displayName} = user;
      dispatch(
        addUser({
        uid: uid, 
        mail : email, 
        displayName: displayName}))

        navigate("/browse")
      


    } else {
      // User is signed out
      dispatch(removeUser())

      navigate("/")
      
      
    }
  });
},[])






  return (
    <div>
      

       <div className=' flex justify-between  bg-gradient-to-b from-black rounded-b-lg h-20 w-screen px-8 py-2 absolute z-10'>
      
            <img className='m-3 ml-15 w-30 h-15 '
            src={NetflixLogo} alt="Logo"/>
             
            {/* Only render user content when user is genuinely available */}
            {user && user.uid && 

              <div className='flex'>
            <img className='m-4 rounded-sm flex justify-end w-10 h-10'
            src={UserIcon} alt="UserIcon"/>
            <button onClick={HandleSignOut} className=''>(Sign Out)</button>
            </div>  
            
          } 
            
      
            
      
            
            </div>
    

     


     


    </div>
  )
}

export default Header