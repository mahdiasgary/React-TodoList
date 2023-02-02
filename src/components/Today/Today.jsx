import {
  TfiFaceSad,
  FiEdit,
  FiTrash2,
  BsPlusSquare,
  BsCircle,
  BsCheckCircle,
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
import { useTodo, useTodoDispatcher } from "../../context/TodoProvider";

const Today = ({ history, theme, setTheme, changeLanguage }) => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState(false);
  const [addTodo, setAddtodo] = useState(false);
  const [todo, setTodo] = useState({
    id: "",
    name: "",
    dis: "",
    com: false,
    edit: false,
  });
  const [editTodo, setEditTodo] = useState({ id: "", name: "", dis: "" });
  const [showUser, setShowUser] = useState(false);
  const [Is, setIs] = useState([]);
  const dispatch = useTodoDispatcher();
  const todos = useTodo();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const changHandler = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const EditchangHandler = (e) => {
    setEditTodo({ ...editTodo, [e.target.name]: e.target.value });
  };

  const Addtodo = () => {
    const newTodo = { ...todo, id: Date.now() };
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setTodo({ id: "", name: "", dis: "", com: false, edit: false });
  };
  const EditHandler = () => {
    const newTodo = { ...editTodo };
    dispatch({ type: "EDIT_TODO", payload: newTodo });
    setEditTodo({ id: "", name: "", dis: "" });
  };
  const compeletHandler = (id) => {
    dispatch({ type: "COMPELET_TODO", payload: id });
  };
  const showEditHand = (id) => {
    dispatch({ type: "SHOW_EDIT", payload: id });
  };
  const removeHandler = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const logOut = (e) => {
    localStorage.removeItem("user");
    e.preventDefault();
    setIs([]);
    setShowUser(false);
    history.push("/");
  };

  useEffect(() => {
    const User = JSON.parse(localStorage.getItem("user"));
    if (User) {
      setIs(User);
    }
  }, []);
  const [filtered, setFilter] = useState(null);

  const [search, setSearch] = useState("");
  const [showSearchItems, setshowSearchItems] = useState(false);
  const SearchHandler = () => {
    const FilterP = todos.filter((todo) =>
      todo.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilter(FilterP);
    setshowSearchItems(true);
  };
  useEffect(() => {
    if (search === "") {
      setFilter(null);
    }
  }, [search]);

  return (
    <div className="dark:text-white pb-80">
      <div
        className={`${
          (!showSearchItems || search === "" || filtered === null) && "hidden"
        }`}
      >
        <div
          onClick={(e) => {
            e.preventDefault();
            setshowSearchItems(false);
          }}
          className="z-30 absolute w-full h-full top-[72px] bg-slate-800 backdrop-blur-md bg-opacity-10  "
        ></div>
        <div className={`${!showSearchItems && "hidden"} absolute z-40`}>
          <div className=" w-[320px] mx-8 y9:w-[400px] y9:mx-16 sm:w-[550px] md:mx-24 lg:w-[650px] lg:mx-32  absolute z-40 top-[72px] ">
            {filtered && (
              <div>
                {filtered.length !== 0 ? (
                  <div>
                    {filtered.map((Todo) => (
                      <div className="py-4 border-b dark:border-[#787f98] mx-1 ">
                        <div className="flex justify-between ">
                          <div className="flex">
                            <div
                              onClick={(e) => {
                                e.preventDefault();
                                compeletHandler(Todo.id);
                              }}
                              className={`mx-2 hover:text-[18px] duration-200 self-center cursor-pointer ${
                                Todo.com && "text-gray-500"
                              }`}
                            >
                              {Todo.com ? <BsCheckCircle /> : <BsCircle />}
                            </div>
                            <div
                              className={`font-semibold ${
                                Todo.com && "text-gray-500  line-through"
                              }  cursor-pointer`}
                            >
                              {Todo.name}
                            </div>
                          </div>
                          <div className="flex self-center text-[18px] h-4 ">
                            <div className="fa text-sm mx-1 y9:mx-3 mt-2 self-center">
                              {i18n.language === "fa" ? (
                                <span>{Todo.dateFa}</span>
                              ) : (
                                <span>{Todo.dateEn}</span>
                              )}
                            </div>

                            <div className="mx-1 y9:mx-3 text-red-500 hover:text-[20px] w-4 duration-200">
                              <FiTrash2
                                onClick={(e) => {
                                  e.preventDefault();
                                  removeHandler(Todo.id);
                                }}
                                className="hover:text-[20px] text-[18px] cursor-pointer duration-200"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={`${Todo.com && "text-gray-500"}`}>
                          {Todo.dis}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="pt-5 text-[22px] font-semibold">
                    {t("noR")}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                SearchHandler();
              }}
              className="flex  "
            >
              <div>
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                    e.preventDefault();
                  }}
                  type="text"
                  value={search}
                  placeholder={t("search")}
                  className=" y9:w-[300px] h-[32px] rounded-l-sm placeholder:pl-4 
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
            </form>
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
          `absolute z-10 bg-slate-50 w-full h-full backdrop-blur-md bg-opacity-5 duration-300`
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
          }  duration-500  ${
            i18n.language === "en" ? `border-r` : `border-l`
          } border-[#787f98]
          y9:my-2 mx-2 md:mx-6
          
          
          `}
        >
          <Link to={"/home/addTodo"}>
            <div className="flex mb-2  cursor-pointer  hover:text-oragneMain ">
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
            <div className="flex my-2 cursor-pointer  text-oragneMain ">
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
              onClick={() => {
                i18n.language === "en"
                  ? changeLanguage("fa")
                  : changeLanguage("en");
              }}
            >
              {i18n.language === "fa" ? "En" : "فا"}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex flex-col ">
            <div
              className={` mx-16 y9:mx-20 sm:mx-36 md:mx-44 lg:mx-60 xl:mx-56 mt-9 `}
            >
              <div>
                <div className="flex dark:text-white">
                  <h1 className="font-semibold text-[22px]">{t("today")} </h1>
                  <div className="fa dark:text-darkTextPrimary text-slate-600 self-center mx-4">
                    {i18n.language === "fa" ? (
                      <span>
                        {" "}
                        {new Date().toLocaleDateString("fa", options)}{" "}
                      </span>
                    ) : (
                      <span>
                        {" "}
                        {new Date().toLocaleDateString("en", options)}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div className="h-20">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setAddtodo(true);
                      }}
                      className={`${
                        addTodo && "hidden"
                      } bg-oragneMain px-4 py-2 hover:px-5 hover:py-3 hover:rounded-lg  duration-200 rounded-md mt-7 text-white`}
                    >
                      <BsPlusSquare className="inline mr-1 mb-1" />
                      {t("addt")}
                    </button>
                  </div>
                  <div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        Addtodo();
                      }}
                      className={`${
                        !addTodo && "hidden"
                      } flex  flex-col max-w-[740px] rounded-md`}
                    >
                      <div className="  dark:bg-primaryColor h-[100px] border dark:border-0 rounded-md border-[#787f98]">
                        <div>
                          <input
                            name="name"
                            value={todo.name}
                            onChange={changHandler}
                            type="text"
                            placeholder={t("tname")}
                            className="w-full bg-transparent dark:bg-primaryColor mt-2 placeholder:text-[#787f98]
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
                            className=" bg-transparent dark:bg-primaryColor mt-2 placeholder:text-[#787f98]
                        px-4 outline-none w-full 
                        "
                          />{" "}
                        </div>
                      </div>

                      <div className="flex justify-end mt-2">
                        <div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setAddtodo(false);
                            }}
                            className="mx-1 dark:text-darkTextPrimary text-sm"
                          >
                            {t("cancel")}
                          </button>
                        </div>
                        <div className="h-9 w-20 ">
                          <button
                            disabled={
                              todo.name === "" && todo.dis === "" && true
                            }
                            className={`mx-2 px-5 py-[1px] 
                        ${todo.name === "" && "bg-slate-600 opacity-75"}
                        ${todo.dis === "" && "bg-slate-600 opacity-75"}
                         ${
                           todo.name !== "" &&
                           todo.dis !== "" &&
                           " hover:px-6 hover:py-[3px] hover:rounded-md duration-300"
                         }  rounded-sm bg-oragneMain text-white`}
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

            <div
              className={` mx-12 y9:mx-20 sm:mx-28 md:mx-44 lg:mx-60 xl:mx-56 mt-1 `}
            >
              <div className={`${todos.length === 0 && "hidden"}`}>
                <div className="flex justify-between mt-12 border-b max-w-[740px]">
                  <div className="font-bold text-oragneMain text-[19px] ">
                    {t("todoList")}
                  </div>

      
                </div>
              </div>

              {todos.length !== 0 && (
                <div>
                  {todos.map((Todo) => (
                    <div key={Todo.id}>
                      {Todo.edit ? (
                        <div className="py-4 border-b dark:border-[#787f98] mx-1  max-w-[740px]">
                          <div className="border border-[#787f98] py-3 pl-4 rounded-md">
                            <div className="flex justify-between ">
                              <div className="flex">
                                <div className="font-semibold border-b pb-2 dark:border-[#787f98] ">
                                  <input
                                    type="text"
                                    name="name"
                                    value={editTodo.name}
                                    onChange={EditchangHandler}
                                    className="bg-transparent outline-none"
                                  />
                                </div>
                              </div>
                              <div className="flex self-center text-[18px] ">
                                <div className="mx-1 text-red-500 hover:text-[20px] w-4 duration-200">
                                  <FiTrash2
                                    onClick={(e) => {
                                      e.preventDefault();
                                      removeHandler(Todo.id);
                                    }}
                                    className="hover:text-[20px] text-[18px] cursor-pointer duration-200"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-2">
                              <textarea
                                id=""
                                rows="2"
                                name="dis"
                                value={editTodo.dis}
                                onChange={EditchangHandler}
                                className="w-full bg-transparent outline-none"
                              />
                            </div>
                          </div>
                          <div className="flex justify-end mt-2 text-sm h-4">
                            <div>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  showEditHand(Todo.id);
                                }}
                              >
                                {t("cancel")}{" "}
                              </button>
                            </div>

                            <div className="mx-3 w-16">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  showEditHand(Todo.id);
                                  EditHandler();
                                }}
                                className="border border-oragneMain px-4 py-[1px] hover:px-5 hover:py-[2px] hover:rounded-md duration-300 rounded-sm text-oragneMain font-semibold "
                              >
                                {t("edit")}
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          {toString(Todo.dataEn) ===
                          toString(new Date().toLocaleDateString()) ? (
                            <div className="py-4 border-b dark:border-[#787f98] mx-1  max-w-[740px]">
                              <div className="flex justify-between ">
                                <div className="flex">
                                  <div
                                    onClick={(e) => {
                                      e.preventDefault();
                                      compeletHandler(Todo.id);
                                    }}
                                    className={`mx-2 hover:text-[18px] duration-200 self-center cursor-pointer ${
                                      Todo.com && "text-gray-500"
                                    }`}
                                  >
                                    {Todo.com ? (
                                      <BsCheckCircle />
                                    ) : (
                                      <BsCircle />
                                    )}
                                  </div>
                                  <div
                                    className={`font-semibold ${
                                      Todo.com && "text-gray-500  line-through"
                                    }  cursor-pointer`}
                                  >
                                    {Todo.name}
                                  </div>
                                </div>
                                <div className="flex self-center text-[18px] h-4 ">
                                  <div className="text-slate-800 dark:text-darkTextPrimary hover:text-[20px] duration-200">
                                    <FiEdit
                                      onClick={(e) => {
                                        e.preventDefault();
                                        showEditHand(Todo.id);
                                        setEditTodo({
                                          id: Todo.id,
                                          name: Todo.name,
                                          dis: Todo.dis,
                                        });
                                      }}
                                      className="cursor-pointer"
                                    />
                                  </div>
                                  <div className="mx-1 y9:mx-3 text-red-500 hover:text-[20px] w-4 duration-200">
                                    <FiTrash2
                                      onClick={(e) => {
                                        e.preventDefault();
                                        removeHandler(Todo.id);
                                      }}
                                      className="hover:text-[20px] text-[18px] cursor-pointer duration-200"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={`${Todo.com && "text-gray-500"}`}>
                                {Todo.dis}
                              </div>
                            </div>
                          ) : (
                            <div>{t("notoday")} </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
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
            `absolute z-10 bg-slate-50 top-[73px] w-full h-full  bg-opacity-5 duration-300 top-[73px]`
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

export default withRouter(Today);
// dark:border-[#787f98]
