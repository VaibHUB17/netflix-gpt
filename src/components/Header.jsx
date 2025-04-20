import React from 'react'
import NetflixLogo from '../utils/netflixlogo.png'


export const Header = () =>
   {
  return (
    <div>
      

      <div className='absolute z-1 '>
      <img className='m-4 ml-10 w-65 h-30 '
      src={NetflixLogo} alt="Logo"/>
      </div>

    

     


     


    </div>
  )
}

export default Header