import Link from 'next/link';
import { useState } from 'react';
import  Image  from 'next/image'
import logo from '../../public/static/logo.png'
import { DropDownMenu } from './menu';


export const Navbar = () => {
  const [active, setActive] = useState(false);
  let userArr = ['MyProfile','Orders','Wishlist ','Settings', 'Logout']
  let userButton = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>

  
  let cartButton = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-black p-1 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <Image src={logo} height='45%' width='45%'/>
          </a>
        </Link>
        <DropDownMenu buttonData="Clothing" arr = {["Shirts","Pants","Hoodies","T-Shirts","Shorts","Innerwear"]}/>
        <DropDownMenu buttonData="Essentials" arr = {["Trimmers","Beard Oils","HairStyling","Soaps & Bathing","Facewashes","AfterShaves"]}/>
        <button
          className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <DropDownMenu buttonData = {userButton} arr = {userArr}/>
            <button  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              {cartButton}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};