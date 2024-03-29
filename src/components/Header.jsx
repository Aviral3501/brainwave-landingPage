import { brainwave } from "../assets"
import { navigation } from "../constants";
import { useLocation, useSearchParams } from "react-router-dom";//to know which url we are on (which link is clicked)
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import {HamburgerMenu} from "./design/Header";
import { useState } from "react";
import { disablePageScroll , enablePageScroll} from "scroll-lock";
// to lock scrolling of the page unless clicked on nav item


const Header = () => {
    const pathName = useLocation();
    const [openNavigation,setOpenNavigation] =useState(false);//for  mobile view of navbar

    //toggle openNavigation
    const toggleNavigation = () =>{
        if(openNavigation){
            setOpenNavigation(false);
            enablePageScroll();
        }else{
            setOpenNavigation(true);
            disablePageScroll();
        }
    }

    //to close the menu in small display once clicked any menu item
    const handleClick =()=>{
        if(!openNavigation){
            return;
        }
        enablePageScroll();//allow scrolling when when nav is open and item is clicked
        setOpenNavigation(false);
    }
   
    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b 
         border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8":"bg-n-8/90 backdrop-blur-sm"} `}>
            <div className="flex items-center  px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img src={brainwave} width={190} height={40} alt="Brainwave-logo" />
                </a>
                <nav className={` ${openNavigation? "flex":"hidden"}  fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {/* bringin the nav elements from  constants file */}
                        {navigation.map((item) => (
                            <a key={item.id} href={item.url}  onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""}
                          px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathName.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/35"}
                           lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                                {/* selcted item is white and others are greyish */}
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <HamburgerMenu/>
                </nav>

                <a href="#signup" className="button hidden mr-8 text-n-1/30 transition-colors hover:text-n-1 lg:block">
                    New Account
                </a>

                <Button className="hidden lg:flex " href="#login">
                    Sign In
                </Button>

                <Button className={` ml-auto lg:hidden `} px={`px-3`} onCLick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation}/>
                </Button>


            </div>
        </div>
    )
}

export default Header;
