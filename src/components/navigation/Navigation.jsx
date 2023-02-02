import {
  BiMoon,
  BiSun,
  BiUser,
  MdLanguage,
  MdMenu,
  MdMenuOpen,
} from "../../common/Icon";
import logoDa from "../../assets/EnLogo.png";
import logoLi from "../../assets/EnHomeLi.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navigation = ({ theme, setTheme, changeLanguage }) => {
  const [menu, setMenu] = useState(false);
  const { t } = useTranslation();
  const [showUser, setShowUser] = useState(false);
  const [showSingup, setShowSingup] = useState(true);
  const [Is, setIs] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setShowSingup(false);
    }
    const User = JSON.parse(localStorage.getItem("user"));
    if (User) {
      setIs(User);
    }
  }, []);

  const logOut = (e) => {
    localStorage.removeItem("user");
    e.preventDefault();
    setIs([]);
    setShowUser(false);
    setShowSingup(true);
  };

  return (
    <div>
      <div>
        <div
          className="flex justify-between max-w-[1400px] mx-4 md:mx-7 lg:mx-10 pt-5 
        dark:text-white h-20
        "
        >
          <div className="self-center">
            {theme === "lightTheme" ? (
              <img src={logoLi} alt="" />
            ) : (
              <img src={logoDa} alt="" />
            )}
          </div>
          <div className="flex">
            <div
              className={` ${
                showSingup ? "hidden y9:flex flex-row" : "flex flex-row "
              }     `}
            >
              <div className="mx-1 lg:mx-1 self-center ">
                {theme !== "lightTheme" ? (
                  <div className="text-[20px] cursor-pointer  ">
                    <BiSun
                      className="hover:text-[22px] "
                      onClick={(e) => {
                        e.preventDefault();
                        setTheme("lightTheme");
                        document.documentElement.classList.remove("dark");
                      }}
                    />
                  </div>
                ) : (
                  <div className="text-[20px] cursor-pointer">
                    <BiMoon
                      className="hover:text-[20px]"
                      onClick={(e) => {
                        e.preventDefault();
                        setTheme("darkTheme");
                        document.documentElement.classList.add("dark");
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="mx-1  self-center  group transition-all duration-200 ease-in-out ">
                {i18n.language === "fa" ? (
                  <div
                    onClick={() => changeLanguage("en")}
                    className="flex text-[12px] font-semibold cursor-pointer p-1 bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  >
                    En
                    <MdLanguage className="self-center ml-1 text-[18px] cursor-pointer" />
                  </div>
                ) : (
                  <div
                    onClick={() => changeLanguage("fa")}
                    className="fa flex text-[12px] font-semibold cursor-pointer p-1 bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  >
                    فا
                    <MdLanguage className="self-center ml-1 text-[18px]" />
                  </div>
                )}
              </div>
            </div>
            {!showSingup ? (
              <div
                className=" text-[22px] mx-1 y9:mx-4 mt-[18px] cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setShowUser(!showUser);
                }}
              >
                <BiUser />
              </div>
            ) : (
              <div className="hidden y9:flex self-center ">
                <div className="  self-center    mx-1 ml-6 lg:mx-3 lg:ml-8  cursor-pointer   group transition-all duration-200 ease-in-out ">
                  <Link to={"/login"}>
                    <span className="font-semibold p-1 bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">
                      {t("login")}
                    </span>
                  </Link>
                </div>
                <Link to={"/singUp"}>
                  <div className="ml-4  self-center bg-oragneMain px-4 py-[3px] rounded-md text-white cursor-pointer hover:py-[5px] hover:-translate-y-[3px]  duration-200">
                    {t("singup")}
                  </div>
                </Link>
              </div>
            )}

            <div
              className={`${
                !showSingup ? "hidden" : "y9:hidden"
              }    self-center text-[25px] `}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setMenu(!menu);
                }}
              >
                {menu ? <MdMenuOpen /> : <MdMenu />}
              </button>
            </div>
          </div>
        </div>

        <div
          onClick={(e) => {
            e.preventDefault();
            setMenu(false);
          }}
          className={
            menu &&
            `absolute z-30 bg-slate-50  w-full h-full backdrop-blur-md bg-opacity-5 duration-300`
          }
        ></div>

        <div
          className={`absolute ${
            i18n.language === "en" ? "right-0" : "left-0"
          } z-40 dark:text-white `}
        >
          <div
            className={` ${menu ? `w-36 duration-500 ` : ` w-0 duration-200`} 
    ${i18n.language === "fa" && menu && `border-r`}
    ${i18n.language === "en" && menu && `border-l`}
      border-[#787f98] px-6 pb-32
    `}
          >
            <div
              className={`flex justify-center mt-5 duration-500  ${
                i18n.language === "fa" ? `origin-left` : `origin-right`
              } ${!menu && `scale-0`}

`}
            >
              <Link to={"/singUP"}>
                <button className="bg-oragneMain hover:px-4 hover:py-[8px] hover:rounded-md duration-300 px-3 py-1 font-semibold text-white rounded-sm">
                  {t("singup")}
                </button>
              </Link>
            </div>

            <div className="flex justify-center">
              <Link to={"/login"}>
                <button
                  className={`duration-500 py-2 hover:text-oragneMain ${
                    i18n.language === "fa" ? `origin-left` : `origin-right`
                  } ${!menu && `scale-0`}`}
                >
                  {t("login")}
                </button>
              </Link>
            </div>

            <div className="flex justify-center my-1">
              <div
                className={`duration-500 py-2  flex hover:text-oragneMain ${
                  i18n.language === "fa" ? `origin-left` : `origin-right`
                } ${!menu && `scale-0`}`}
              >
                {i18n.language === "fa" ? (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      changeLanguage("en");
                      setMenu(false);
                    }}
                    className="flex  text-[12px] font-semibold cursor-pointer "
                  >
                    En
                    <MdLanguage className="self-center ml-1 text-[18px] cursor-pointer" />
                  </div>
                ) : (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      changeLanguage("fa");
                      setMenu(false);
                    }}
                    className="fa flex text-[12px] font-semibold cursor-pointer"
                  >
                    فا
                    <MdLanguage className="self-center ml-1 text-[18px]" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <div
                className={`duration-500 py-2 hover:text-oragneMain ${
                  i18n.language === "fa" ? `origin-left` : `origin-right`
                } ${!menu && `scale-0`}`}
              >
                {theme !== "lightTheme" ? (
                  <div className="text-[20px] cursor-pointer  ">
                    <BiSun
                      className="hover:text-[22px] "
                      onClick={(e) => {
                        e.preventDefault();
                        setMenu(false);
                        setTheme("lightTheme");
                        document.documentElement.classList.remove("dark");
                      }}
                    />
                  </div>
                ) : (
                  <div className="text-[20px] cursor-pointer">
                    <BiMoon
                      className="hover:text-[20px]"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenu(false);
                        setTheme("darkTheme");
                        document.documentElement.classList.add("dark");
                      }}
                    />
                  </div>
                )}{" "}
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={(e) => {
            e.preventDefault();
            setShowUser(false);
          }}
          className={
            showUser &&
            `absolute z-10 bg-slate-50  w-full h-full  bg-opacity-5 duration-300 top-[73px]`
          }
        ></div>

        <div>
          <div
            className={`${Is.length === 0 && " hidden"} absolute z-20 ${
              i18n.language === "fa" ? "left-0" : "right-0"
            } top-16 mx-3  ${!showUser && "scale-x-0 origin-left"} ${
              i18n.language === "fa" ? "origin-left" : "origin-right"
            } duration-300`}
          >
            <div className="px-5 border border-oragneMain rounded-md backdrop-blur-sm">
              <div>
                <h1 className="font-semibold text-oragneMain">{t("user")}:</h1>
              </div>
              <div className="my-1 font-semibold ">
                <span> {Is.name && Is.name}</span>
              </div>
              <div className="my-1 font-semibold ">
                <span> {Is.email && Is.email}</span>
              </div>
              <div className="text-[#717374] font-semibold">
                <span>{Is.phone && Is.phone}</span>
              </div>
              <div className="my-1 mt-5  flex justify-center text-sm ">
                <button
                  onClick={(e) => logOut(e)}
                  className="text-oragneMain border border-oragneMain hover:bg-oragneMain hover:rounded-md hover:text-white duration-300 font-semibold px-2 rounded-sm"
                >
                  {t("logout")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
