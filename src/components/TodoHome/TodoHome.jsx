import { MdLanguage, MdMenu, MdMenuOpen } from "react-icons/md";
import { BiSun, BiMoon, BiUser, BiSearch } from "react-icons/bi";
import { BsPlusSquare, BsCircle, BsCheckCircle ,BsCalendar2Event } from "react-icons/bs";
import { FiEdit, FiTrash2,FiInbox } from "react-icons/fi";
import {TfiFaceSad} from "react-icons/tfi"
import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18n from "../../i18next";

const TodoHome = ({ theme, setTheme, changeL, setChangeL }) => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState(false);
  return (
    <div className="dark:text-white">
      <div className="flex flex-col ">
        <nav
          className="flex justify-between max-w-[1400px] mx-4 md:mx-7 lg:mx-10 pt-5 
        dark:text-white h-[73px] border-b border-[#787f98] sticky top-0"
        >
          <div className="flex">
            <div
              className={
                i18n.language === "en"
                  ? "text-[25px] mr-20 mt-1 "
                  : "text-[25px] ml-20 mt-1 "
              }
            >
              {menu ? (
                <MdMenuOpen className=" cursor-pointer" />
              ) : (
                <MdMenu className=" cursor-pointer" />
              )}
            </div>
            <div className="flex  ">
              <div>
                <input
                  type="text"
                  placeholder="search todo ..."
                  className="w-[300px] h-[32px] rounded-l-sm placeholder:pl-4 
                placeholder:text-sm
                dark:bg-primaryColor
                pl-3
                outline-none
                "
                />
              </div>
              <div className="flex justify-center">
                <button className=" rounded-r-sm bg-oragneMain h-[32px] px-2 text-white">
                  <BiSearch />
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex">
              <div className="   hidden  y9:flex ">
                <div className="mx-1 lg:mx-1 ">
                  {theme !== "lightTheme" ? (
                    <div className="text-[20px] cursor-pointer  ">
                      <BiSun
                        className="hover:text-[22px]  mt-[3px] "
                        onClick={(e) => {
                          e.preventDefault();
                          setTheme("lightTheme");
                          document.documentElement.classList.remove("dark");
                        }}
                      />
                    </div>
                  ) : (
                    <div className="text-[18px] cursor-pointer">
                      <BiMoon
                        className="hover:text-[20px] mt-[3px]"
                        onClick={(e) => {
                          e.preventDefault();
                          setTheme("darkTheme");
                          document.documentElement.classList.add("dark");
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="mx-1   group transition-all duration-200 ease-in-out ">
                  {i18n.language === "fa" ? (
                    <div className="flex text-[12px] font-semibold cursor-pointer p-1 bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      En
                      <MdLanguage className="ml-1 text-[18px] cursor-pointer" />
                    </div>
                  ) : (
                    <div className="flex text-[12px] font-semibold cursor-pointer p-1 bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      فا
                      <MdLanguage className="ml-1 text-[18px]" />
                    </div>
                  )}
                </div>
                <div className=" text-[22px] ml-4  cursor-pointer">
                  <BiUser />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="absolute z-20 left-0 pt-1 pb-[400px] mt-4 border-r border-[#787f98] pr-20">
<div className="flex flex-col ">
    <div className="flex mx-6 my-2 cursor-pointer w-20 hover:text-oragneMain hover:font-semibold duration-200">
        <div className="self-center text-[18px]"><BsCalendar2Event/></div>
        <div className="mx-3">{t("today")}</div>
    </div>
    <div className="flex mx-6 my-2  cursor-pointer w-20 hover:text-oragneMain hover:font-semibold duration-200">
        <div className="self-center text-[20px]"><FiInbox/></div>
        <div className="mx-3">{t("inbox")}  </div>
    </div>
    <div className="flex  mx-6 my-2 cursor-pointer w-20 hover:text-oragneMain hover:font-semibold duration-200">
        <div className="self-center text-[18px]"><TfiFaceSad/></div>
        <div className="mx-3">{t("uncom")} </div>
    </div>
</div>



      </div>
      <div className="  mx-72 ">
        {/* <div>d</div> */}
        <div className="flex flex-col ">
          <div>
            <div>
              <div className="flex dark:text-white">
                <h1 className="font-semibold text-[22px]">{t("today")} </h1>
                <div className="dark:text-darkTextPrimary text-slate-600 self-center ml-4">
                  date
                </div>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <button className="bg-oragneMain px-3 py-1 rounded-md mt-7 text-white">
                    <BsPlusSquare className="inline mr-1 mb-1" />
                    {t("addt")}
                  </button>
                </div>
                <div>
                  <div className="flex flex-col max-w-[740px] rounded-md">
                    <div className="  dark:bg-primaryColor h-[100px] border dark:border-0 rounded-md border-[#787f98]">
                      <div>
                        <input
                          type="text"
                          placeholder={t("tname")}
                          className="w-full bg-transparent dark:bg-primaryColor mt-2 placeholder:text-[#787f98]
                         outline-none px-4
                        "
                        />{" "}
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder={t("dis")}
                          className=" bg-transparent dark:bg-primaryColor mt-2 placeholder:text-[#787f98]
                        px-4 outline-none w-full 
                        "
                        />{" "}
                      </div>
                    </div>

                    <div className="flex justify-end mt-2">
                      <div>
                        <button className="mx-1 dark:text-darkTextPrimary ">
                          {t("cancel")}
                        </button>
                      </div>
                      <div>
                        <button className="mx-2 px-5 py-[1px] rounded-sm bg-oragneMain text-white">
                          {t("add")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-12 border-b max-w-[740px]">
            <div className="font-bold text-oragneMain text-[19px] ">
              {t("todoList")}
            </div>

            <div> {t("sort")}</div>
          </div>
        </div>
        <div className="py-4 border-b dark:border-[#787f98] mx-4  max-w-[740px]">
          <div className="flex justify-between ">
            <div className="flex">
              <div className="mr-2 self-center">
                <BsCircle />{" "}
              </div>
              <div className="font-semibold">title</div>
            </div>
            <div className="flex self-center text-[18px] ">
              <div className="text-slate-800 dark:text-darkTextPrimary">
                <FiEdit />
              </div>
              <div className="mx-4 text-red-500">
                <FiTrash2 />
              </div>
            </div>
          </div>
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            mollitia natus ipsam nesciunt odit officiis. Eum expedita ratione
            beatae
          </div>
        </div>
        <div className="py-4 border-b dark:border-[#787f98] mx-4  max-w-[740px]">
          <div className="flex justify-between ">
            <div className="flex">
              <div className="mr-2 self-center">
                <BsCircle />{" "}
              </div>
              <div className="font-semibold">title</div>
            </div>
            <div className="flex self-center text-[18px] ">
              <div className="text-slate-800 dark:text-darkTextPrimary">
                <FiEdit />
              </div>
              <div className="mx-4 text-red-500">
                <FiTrash2 />
              </div>
            </div>
          </div>
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            mollitia natus ipsam nesciunt odit officiis. Eum expedita ratione
            beatae
          </div>
        </div>
        <div className="py-4 border-b dark:border-[#787f98] mx-4  max-w-[740px]">
          <div className="flex justify-between ">
            <div className="flex">
              <div className="mr-2 self-center">
                <BsCircle />{" "}
              </div>
              <div className="font-semibold">title</div>
            </div>
            <div className="flex self-center text-[18px] ">
              <div className="text-slate-800 dark:text-darkTextPrimary">
                <FiEdit />
              </div>
              <div className="mx-4 text-red-500">
                <FiTrash2 />
              </div>
            </div>
          </div>
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            mollitia natus ipsam nesciunt odit officiis. Eum expedita ratione
            beatae
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoHome;
// dark:border-[#787f98]