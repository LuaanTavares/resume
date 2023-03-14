import { useState } from "react";
import { MdDensityMedium } from "react-icons/md";
import { MdClose } from "react-icons/md";
import profile from "../../images/profile.png";

export const NavBar = () => {

  const [isCloseOrOpen, setIsCloseOrOpen] = useState (false)
  const [scroll, setScroll] = useState (true)

  const openNavBar = () =>{
    setIsCloseOrOpen(!isCloseOrOpen)
  }

  const colorNavBar = () =>{
   if(window.scrollY >= 14){ 
    setScroll(false);
   } else { 
    setScroll(true);
   }
  };

  window.addEventListener('scroll', colorNavBar)

  return(
    <section class={`h-14 w-full fixed ${scroll ? 'bg-transparent' : 'bg-stone-800'}`}>

      <div class="flex justify-around items-center h-full w-full">
        <div id="icon" class={`${scroll ? 'text-stone-800': 'text-slate-50'} text-2xl mr-3 cursor-pointer md:hidden`} onClick={openNavBar}>
          {isCloseOrOpen ? <MdClose/> : <MdDensityMedium/>}
        </div> 

        <ul class= {`${scroll ? 'text-stone-800': 'text-slate-50'} flex text-base font-normal gap-3 justify-center items-center mr-5 max-md:hidden`}>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">Main</li></a>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">About</li></a>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">Skills</li></a>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">Career</li></a>
          <a href="#"><li class="w-16 flex justify-center hover:font-semibold duration-75">Education</li></a>
          <a href="#"><li class="w-32 flex justify-center hover:font-semibold duration-75">More About Me</li></a>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">Footer</li></a>
        </ul>

        <div class={`${scroll ? 'text-stone-800': 'text-slate-50'} flex items-center gap-3`}>
          <h1 class='text-lg'>Luan Tavares</h1>
          <img class='h-9 w-9 rounded-full' src={profile} alt="user-image" />
        </div>
      </div>

        <ul class= {`text-base text-slate-50 font-light w-[100%] h-[50vh] flex flex-col text-2xl gap-2 justify-center items-center top-[400] bg-stone-800 md:hidden ${isCloseOrOpen ? 'visible':'hidden' }`}>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">Main</li></a>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">About</li></a>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">Skills</li></a>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">Career</li></a>
          <a href="#"><li class="w-16 flex justify-center hover:font-semibold duration-75">Education</li></a>
          <a href="#"><li class="w-28 flex justify-center hover:font-semibold duration-75">More About Me</li></a>
          <a href="#"><li class="w-10 flex justify-center hover:font-semibold duration-75">Footer</li></a>
        </ul>

    </section> 
  )
}