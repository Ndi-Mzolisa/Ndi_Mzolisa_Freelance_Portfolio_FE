import logo from "../assets/ndiMzolisaLogo2.png";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
    <nav id="landingpage-logo-navbar" className="mb-2 flex items-center justify-between pt-[0px] pb-[0px]">
        <div className="flex flex-shrink-0 items-center">
            <a href="#primary-multipage-navbar"><img className="mx-2 w-[100px] rounded-[4px] fixed top-3 left-1 transition-opacity duration-300 hover:opacity-100 opacity-[0.5]" src={logo} alt="logo" /></a>
        </div>

        <div className="mx-8 mt-0 mb-0 flex items-center justify-center gap-4 text-2xl">
            <a href="#" target="_blank" className="pointer-cursor"><FaFacebook /></a>
            <a href="#" target="_blank" className="pointer-cursor"><FaLinkedin /></a>
            <a href="#" target="_blank" className="pointer-cursor"><FaGithub /></a>
            <a href="#" target="_blank" className="pointer-cursor"><FaInstagram /></a>
            <a href="#" target="_blank" className="pointer-cursor"><FaSquareXTwitter /></a>
        </div>
    </nav>

    <nav id="primary-multipage-navbar" className="w-[84%] sm:w-3/12 md:w-[54%] mb-8 mt-12 flex items-center justify-center pb-2 pt-1 px-auto mx-auto">
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 items-center justify-evenly p-auto mx-auto my-1">
            <li className="flex flex:grow"><a className="pointer-cursor bg-slate-100 font-semibold border border-[#216699] py-1 px-5 mx-6 my-2 rounded-md text-[#996621] hover:bg-[#216699] hover:border-[#216699] hover:text-[#f9f9f9] transition duration-500" href="#home">Home</a></li>
            <li className="flex flex:grow"><a className="pointer-cursor bg-slate-100 font-semibold border border-[#216699] py-1 px-5 mx-6 my-2 rounded-md text-[#996621] hover:bg-[#216699] hover:border-[#216699] hover:text-[#f9f9f9] transition duration-500" href="#about">About</a></li>
            <li className="flex flex:grow"><a className="pointer-cursor bg-slate-100 font-semibold border border-[#216699] py-1 px-5 mx-6 my-2 rounded-md text-[#996621] hover:bg-[#216699] hover:border-[#216699] hover:text-[#f9f9f9] transition duration-500" href="#skills">Skills</a></li>
            <li className="flex flex:grow"><a className="pointer-cursor bg-slate-100 font-semibold border border-[#216699] py-1 px-5 mx-6 my-2 rounded-md text-[#996621] hover:bg-[#216699] hover:border-[#216699] hover:text-[#f9f9f9] transition duration-500" href="#projects">Projects</a></li>
        </ul>
    </nav>
    </> 
  )
}
