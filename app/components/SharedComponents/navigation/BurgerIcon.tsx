import React from 'react'
import { CiMenuBurger } from 'react-icons/ci'


function BurgerIcon({showSmallScreenMenu}:BurgerIconProps) {
  return (
    <button onClick={showSmallScreenMenu} className="block lg:hidden">   
        <CiMenuBurger   />
    </button>
  )
}

export default BurgerIcon