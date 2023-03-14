import { useState } from "react";
import { MdDensityMedium } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Newprofile from "../../images/new-profile.png";

export const NavBar = () => {

  const [isCloseOrOpen, setIsCloseOrOpen] = useState (false)
  const [scroll, setScroll] = useState (true)

  const openNavBar = () =>{
    setIsCloseOrOpen(!isCloseOrOpen)
  }

  const colorNavBar = () =>{
   if(window.scrollY >= 20){ 
    setScroll(false);
   } else { 
    setScroll(true);
   }
  };

  window.addEventListener('scroll', colorNavBar)

  return(
    <section class={`h-20 w-full fixed ${scroll ? ' bg-transparent' : 'bg-neutral-900'}`}>

      <div class="flex justify-around items-center h-full w-full">
        <div id="icon" class={`text-slate-50 text-2xl mr-3 cursor-pointer md:hidden`} onClick={openNavBar}>
          {isCloseOrOpen ? <MdClose/> : <MdDensityMedium/>}
        </div> 

        <ul class= {`text-slate-50 flex text-xl font-normal gap-3 justify-center items-center max-md:hidden`}>
          <a href="#"><li class="w-14 flex justify-center hover:font-semibold duration-75">Main</li></a>
          <a href="#"><li class="w-14 flex justify-center hover:font-semibold duration-75">About</li></a>
          <a href="#"><li class="w-14 flex justify-center hover:font-semibold duration-75">Skills</li></a>
          <a href="#"><li class="w-14 flex justify-center hover:font-semibold duration-75">Career</li></a>
          <a href="#"><li class="w-24 flex justify-center hover:font-semibold duration-75">Education</li></a>
          <a href="#"><li class="w-40 flex justify-center hover:font-semibold duration-75">More About Me</li></a>
          <a href="#"><li class="w-14 flex justify-center hover:font-semibold duration-75">Footer</li></a>
        </ul>

        <div class={`text-slate-50 flex items-center gap-5 p-5`}>
          <h1 class='text-center text-xl'>Luan Tavares</h1>
          <img class='h-11 w-11 rounded-full' src={Newprofile} alt="user-image" />
        </div>
      </div>

        <ul class= {`text-base text-slate-50 font-light w-[100%] h-[50vh] flex flex-col text-2xl gap-2 justify-center items-center top-[400] md:hidden bg-opacity-70 ${scroll ? ' bg-black' : 'bg-neutral-900'} ${isCloseOrOpen ? 'visible':'hidden' }`}>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">Main</li></a>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">About</li></a>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">Skills</li></a>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">Career</li></a>
          <a href="#"><li class="w-16 flex justify-center hover:font-semibold duration-75">Education</li></a>
          <a href="#"><li class="w-32 flex justify-center hover:font-semibold duration-75">More About Me</li></a>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">Footer</li></a>
        </ul>

    </section> 
  )
}