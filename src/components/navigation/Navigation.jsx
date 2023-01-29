import logoDa from "../../assets/EnLogo.png";
import logoLi from "../../assets/EnHomeLi.png";
import { MdLanguage,MdMenu ,MdMenuOpen} from "react-icons/md";
import { useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

import { useTranslation } from "react-i18next";

const Navigation = ({ theme, setTheme,changeL,setChangeL }) => {
  const[menu , setMenu] = useState(false)
  
  const { t } = useTranslation();

  // const handen = (e) => {
  //   i18n.changeLanguage(e.target.value);
  //   console.log(e.target.value);
  //   if (e.target.value === "fa") {
  //     return (document.documentElement.dir = "rtl");
  //   }
  // };
  return (
    <div>
      <div>
        <div className="flex justify-between max-w-[1400px] mx-4 md:mx-7 lg:mx-10 pt-5 
        dark:text-white h-20
        ">
          <div className="self-center">
            {theme==="lightTheme" 
            ?
            <img src={logoLi} alt=""  />
            :
            <img src={logoDa} alt=""  />

          }
          </div>
          <div className="flex">
            <div className="   hidden  y9:flex ">
              <div className="mx-1 lg:mx-1 self-center ">
                {theme !== "lightTheme" ? (
                  <div className="text-[20px] cursor-pointer  ">
                    <BiSun className="hover:text-[22px] " onClick={(e)=>{ e.preventDefault();setTheme("lightTheme");document.documentElement.classList.remove("dark")}}/>
                  </div>
                ) : (
                  <div className="text-[20px] cursor-pointer">
                    <BiMoon className="hover:text-[20px]"  onClick={ (e)=>{ e.preventDefault();  setTheme("darkTheme");document.documentElement.classList.add("dark")}}/>
                  </div>
                )}
              </div>

              <div className="mx-1  self-center  group transition-all duration-200 ease-in-out ">
                {changeL ? (
                  <div className="flex text-[12px] font-semibold cursor-pointer p-1 bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    En
                    <MdLanguage className="self-center ml-1 text-[18px] cursor-pointer" />
                  </div>
                ) : (
                  <div className="flex text-[12px] font-semibold">
                    فا
                    <MdLanguage className="self-center ml-1 text-[18px]" />
                  </div>
                )}
              </div>
            </div>

            <div className="hidden y9:flex self-center ">
              <div className="  self-center    mx-1 ml-6 lg:mx-3 lg:ml-8  cursor-pointer   group transition-all duration-200 ease-in-out ">
                <span className="font-semibold p-1 bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">
                  {t("login")}
                </span>
              </div>
              <div className="ml-4  self-center bg-oragneMain px-4 py-[3px] rounded-md text-white cursor-pointer hover:py-[5px] hover:-translate-y-[3px]  duration-200">
                {t("singup")}
              </div>
            </div>
            <div className="y9:hidden self-center text-[25px] ">
              <button>
                {menu ? <MdMenuOpen/>  : <MdMenu/>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
