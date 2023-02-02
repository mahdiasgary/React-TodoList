import {
  TfiFaceSad,
  BsPlusSquare,
  BsCalendar2Event,
  BiMoon,
  BiSun,
  BiUser,
  BiSearch,
  VscInbox,
  MdLanguage,
  MdMenu,
  MdMenuOpen,
} from "../../common/Icon";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import i18n from "../../i18next";
import { Link, withRouter } from "react-router-dom";
import { useTodoDispatcher } from "../../context/TodoProvider";

const AddTodo = ({ history, theme, setTheme, changeLanguage }) => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState(false);
  const [todo, setTodo] = useState({ id: "", name: "", dis: "", com: false });
  const dispatch = useTodoDispatcher();
  const [showUser, setShowUser] = useState(false);
  const [Is, setIs] = useState([]);

  const changHandler = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const Addtodo = () => {
    const newTodo = { ...todo, id: Date.now() };
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setTodo({ id: "", name: "", dis: "", com: false });
  };

  useEffect(() => {
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
    history.push("/");
  };

  return (
    <div className="dark:text-white pb-80">
      <div className="flex flex-col  ">
        <nav
          className="flex justify-between max-w-[1400px] mx-4 md:mx-7 lg:mx-10 pt-5 
        dark:text-white h-[73px] border-b border-[#787f98] sticky top-0"
        >
          <div className="flex">
            <div
              className={
                i18n.language === "en"
                  ? "text-[25px] mr-5 sm:mr-20 mt-1 "
                  : "text-[25px]  ml-5 sm:ml-20 mt-1 "
              }
            >
              {menu ? (
                <MdMenuOpen
                  className=" cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                  }}
                />
              ) : (
                <MdMenu
                  className=" cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(true);
                  }}
                />
              )}
            </div>
            <div className="flex  ">
              <div>
                <input
                  type="text"
                  placeholder={t("search")}
                  className="fa y9:w-[300px] h-[32px] rounded-l-sm placeholder:pl-4 
                placeholder:text-sm
                placeholder:text-slate-500
                dark:bg-primaryColor
                bg-slate-50
                
                bg-opacity-20
                dark:border-0
                border
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
              <div className="   flex">
                <div className="mx-1 lg:mx-1 hidden  sm:flex ">
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

                <div>
                  <div className="mx-1  hidden  sm:flex  group transition-all duration-200 ease-in-out ">
                    {i18n.language === "fa" ? (
                      <div
                        onClick={() => changeLanguage("en")}
                        className="flex text-[12px] font-semibold cursor-pointer p-1 bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                      >
                        En
                        <MdLanguage className="ml-1 text-[18px] cursor-pointer" />
                      </div>
                    ) : (
                      <div
                        onClick={() => changeLanguage("fa")}
                        className="fa flex text-[12px] font-semibold cursor-pointer p-1 bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                      >
                        فا
                        <MdLanguage className="ml-1 text-[18px]" />
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className=" text-[22px] ml-4  cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowUser(!showUser);
                  }}
                >
                  <BiUser />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div
        onClick={(e) => {
          e.preventDefault();
          setMenu(false);
        }}
        className={
          menu &&
          `absolute z-10 bg-slate-50  w-full h-full backdrop-blur-md bg-opacity-5 duration-300`
        }
      ></div>
      <div
        className={`absolute  z-20 ${
          i18n.language === "en" ? `left-0` : `right-0`
        } pt-1  mt-4 
   `}
      >
        <div
          className={` ${
            menu
              ? `w-52 flex flex-col duration-500 `
              : `lg:flex flex-col w-7 md:w-[40px] duration-500`
          } duration-500  ${
            i18n.language === "en" ? `border-r` : `border-l`
          } border-[#787f98]
          y9:my-2 mx-2 md:mx-6
          
          
          `}
        >
          <Link to={"/home/addTodo"}>
            <div className="flex mb-2  cursor-pointer  text-oragneMain ">
              <div className="self-center text-[18px]">
                <BsPlusSquare />
              </div>
              <div
                className={`mx-3  duration-500  ${
                  i18n.language === "en" ? `origin-left` : `origin-right`
                } ${!menu && `scale-0 text-[0px] my-5`}  `}
              >
                {t("addt")}
              </div>
            </div>
          </Link>
          <Link to={"/home/today"}>
            <div className="flex my-2 cursor-pointer  hover:text-oragneMain ">
              <div className="self-center text-[18px]">
                <BsCalendar2Event />
              </div>
              <div
                className={`mx-3  duration-500  ${
                  i18n.language === "en" ? `origin-left` : `origin-right`
                } ${!menu && `scale-0  text-[0px] my-5 `}`}
              >
                {t("today")}
              </div>
            </div>
          </Link>
          <Link to={"/home/inbox"}>
            <div className="flex my-2  cursor-pointer  hover:text-oragneMain  ">
              <div className="self-center text-[20px]">
                <VscInbox />
              </div>
              <div
                className={`mx-3  duration-500 ${
                  i18n.language === "en" ? `origin-left` : `origin-right`
                }  ${!menu && `scale-0  text-[0px] my-5 `}`}
              >
                {t("inbox")}{" "}
              </div>
            </div>
          </Link>
          <Link to={"/home/unCompleted"}>
            <div className="flex  my-2 cursor-pointer  hover:text-oragneMain  ">
              <div className="self-center text-[18px]">
                <TfiFaceSad />
              </div>
              <div
                className={`mx-3 duration-500 ${
                  i18n.language === "en" ? `origin-left` : `origin-right`
                } ${!menu && `scale-0  text-[0px] my-5 `}`}
              >
                {t("uncom")}{" "}
              </div>
            </div>
          </Link>
          <div className="  flex sm:hidden my-2 cursor-pointer  hover:text-oragneMain ">
            <div className={` self-center text-[18px] `}>
              {theme !== "lightTheme" ? (
                <div className=" cursor-pointer  ">
                  <BiSun
                    className="text-[20px] mt-[3px] "
                    onClick={(e) => {
                      e.preventDefault();
                      setTheme("lightTheme");
                      document.documentElement.classList.remove("dark");
                    }}
                  />
                </div>
              ) : (
                <div className=" cursor-pointer">
                  <BiMoon
                    className="text-[20px] mt-[3px]"
                    onClick={(e) => {
                      e.preventDefault();
                      setTheme("darkTheme");
                      document.documentElement.classList.add("dark");
                    }}
                  />
                </div>
              )}
            </div>
            <div
              className={`mx-3  duration-500  ${
                i18n.language === "en" ? `origin-left` : `origin-right`
              } ${!menu && `scale-0  text-[0px] my-5 `}`}
              onClick={(e) => {
                e.preventDefault();
                if (theme === "lightTheme") {
                  setTheme("darkTheme");
                  document.documentElement.classList.add("dark");
                } else {
                  setTheme("lightTheme");
                  document.documentElement.classList.remove("dark");
                }
              }}
            >
              {t("theme")}
            </div>
          </div>

          <div className="sm:hidden flex my-2 cursor-pointer  hover:text-oragneMain ">
            <div className="self-center text-[18px]">
              <div
                onClick={() => {
                  i18n.language === "en"
                    ? changeLanguage("fa")
                    : changeLanguage("en");
                }}
              >
                <MdLanguage className=" cursor-pointer" />
              </div>
            </div>
            <div
              className={`mx-3  duration-500  ${
                i18n.language === "en" ? `origin-left` : `origin-right`
              } ${!menu && `scale-0  text-[0px] my-5 `}`}
            >
              {i18n.language === "fa" ? "En" : "فا"}
            </div>
          </div>
        </div>
      </div>

      <div
        className={` mx-12 y9:mx-20 sm:mx-28 md:mx-44 lg:mx-60 xl:mx-56 mt-9 `}
      >
        <div className="flex flex-col ">
          <div>
            <div>
              <div className="flex dark:text-white">
                <h1 className="font-semibold text-[22px]">{t("addt")} </h1>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      Addtodo();
                    }}
                    className="flex flex-col mt-3 max-w-[740px] rounded-md"
                  >
                    <div className="  dark:bg-primaryColor h-[100px] border dark:border-0 rounded-md border-[#787f98]">
                      <div>
                        <input
                          name="name"
                          value={todo.name}
                          onChange={changHandler}
                          type="text"
                          placeholder={t("tname")}
                          className="fa w-full bg-transparent dark:bg-primaryColor mt-2 placeholder:text-[#787f98]
                         outline-none px-4
                        "
                        />{" "}
                      </div>
                      <div>
                        <input
                          name="dis"
                          value={todo.dis}
                          onChange={changHandler}
                          type="text"
                          placeholder={t("dis")}
                          className="fa bg-transparent dark:bg-primaryColor mt-2 placeholder:text-[#787f98]
                        px-4 outline-none w-full 
                        "
                        />{" "}
                      </div>
                    </div>

                    <div className="flex justify-end mt-2 ">
                      <div className="mx-3">
                        <button
                          disabled={
                            todo.name === ""
                              ? true
                              : todo.dis === ""
                              ? true
                              : false
                          }
                          className={`
                        
                        px-7 py-[5px] hover:py-[8px] hover:px-9 hover:text-[18px]
                        hover:rounded-md duration-300 rounded-sm bg-oragneMain text-white
                        ${
                          todo.name === "" &&
                          "bg-slate-600 opacity-75 hover:py-[5px] hover:px-7 hover:text-[16px] "
                        }
                        ${
                          todo.dis === "" &&
                          "bg-slate-600 opacity-75 hover:py-[5px] hover:px-7 hover:text-[16px]"
                        }
                        `}
                        >
                          {t("add")}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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
          `absolute z-10  top-[73px] bg-slate-50  w-full h-full  bg-opacity-5 duration-300`
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
  );
};

export default withRouter(AddTodo);
// dark:border-[#787f98]
