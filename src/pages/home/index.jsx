import { NavBar } from "../../components/navbar";
import { Main } from "../../components/main";
import { About } from "../../components/about";
import { Skills } from "../../components/skills";
import { Career } from "../../components/career";
import { Education } from "../../components/education";
import { MoreAboutMe } from "../../components/more-about-me";
import { Footer } from "../../components/footer";

export function Home(){
  return(
    <>
      <NavBar/>
      <Main/>
      <About/>
      <Skills/>
      <Career/>
      <Education/>
      <MoreAboutMe/>
      <Footer/>
    </>
  )
}