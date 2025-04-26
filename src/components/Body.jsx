import React, { useEffect } from 'react'
import Login from './login'
import  Browse  from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'




export const Body = () => {
  //this is used to dispatch the action to the redux store
  //this is used to get the user data from the firebase and store it in the redux store

  const dispatch = useDispatch()
  
  //To navigate to the different routes in the app
 


  const  appRouter = createBrowserRouter([
    
    { path: "/",
      element: <Login/>,
    },
    {
      path: "/browse",
      element: <Browse/>,

  },
])


//Like an eventListener for the auth state change.
//when the user is logged in or logged out this function will be called and we can get the user data from it and store it in redux store.

useEffect(()=> {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, get the user data and store it in redux store
      const {uid ,email, displayName} = user;
      dispatch(addUser({uid: uid, mail : email, displayName: displayName}))
      


    } else {
      // User is signed out
      dispatch(removeUser())
      
      
    }
  });
},[])

  return (
    <div>
      <RouterProvider router={appRouter}/>
      
    </div>
  )
}


export default Body