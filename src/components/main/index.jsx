import background from '../../images/background.jpeg'
import profile from '../../images/profile.jpeg'
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const Main = () => {

  const backgroundImageStyle = {
    backgroundImage: `url('${background}')`,
  };

  return(
    <>
      <section class='text-gray-50 bg-no-repeat bg-cover'style={backgroundImageStyle}>
        <div class='pt-32 flex justify-center items-center flex-col p-4 h-full w-full bg-black bg-opacity-60'>
                  <img class="shadow-black shadow-xl p-3 rounded-full h-80 w-80" src={profile} alt="profile-image"/>
          <div class='flex flex-col items-center'>
            <p class=' my-10 text-4xl'>Luan Tavares</p>
            <div class='flex gap-3 justify-center my-6'>
              <a href=""><button class=' font-medium bg-cyan-600 rounded-md px-1 w-32 h-8 hover:bg-cyan-800 duration-100'>Hire me</button></a>
              <a href=""><button class=' font-medium bg-cyan-600 rounded-md px-1 w-32 h-8 hover:bg-cyan-800 duration-100'>Download CV</button></a>
            </div>
          </div>
          <div class=' my-6 flex justify-center gap-4 w-60'>
            <a class=' rounded-full' href=""><AiFillLinkedin class='text-4xl rounded-full '/></a>
            <a class=' rounded-full' href=""><AiFillGithub class='text-4xl rounded-full ' /></a>
            <a class=' rounded-full' href=""><AiOutlineInstagram class='text-4xl rounded-full '/></a>
          </div>
        </div>
      </section>
    </>
    )
}