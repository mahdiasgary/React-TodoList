import logoImage from "../../assets/EnHomeLi.png";
import daeklogoImage from "../../assets/EnLogo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdRemoveRedEye } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { BiSun, BiMoon } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
const LoginForm = ({ history, theme, setTheme, changeLanguage }) => {
  const { t } = useTranslation();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email(t("Eerore2")).required(t("Eerore1")),
    password: Yup.string()
      .required(t("Perore1"))
      .min(8, t("Perore2"))
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, t("Perore3")),
  });

  const onSubmit = (values) => {
    const userData = {
      email: values.email,
      password: values.password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    toast.success(`${t("toa1")}`, {
      autoClose: 1800,
      position: "top-right",
    });
    history.push("/home");
  };

  const Formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    validateOnMount: true,
  });
  const [show, setShow] = useState(false);

  return (
    <div className=" h-[1000px] dark:text-white">
      <div>
        <nav>
          <div className="flex flex-row justify-between pt-[10px]  ">
            <div className="flex flex-row mx-5">
              <div className="  flex ">
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
                    <div
                      onClick={() => changeLanguage("en")}
                      className="flex text-[12px] font-semibold cursor-pointer p-1 bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    >
                      En
                      <MdLanguage className="en mx-1 text-[18px] cursor-pointer" />
                    </div>
                  ) : (
                    <div
                      onClick={() => changeLanguage("fa")}
                      className="fa flex text-[12px] font-semibold cursor-pointer p-1 bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    >
                      فا
                      <MdLanguage className="mx-1 text-[18px]" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5 self-center">
            <div className="self-center mb-2">
              <Link to={"/"}>
                <img
                  src={theme === "lightTheme" ? logoImage : daeklogoImage}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </nav>
        <section className="flex flex-col dark:text-[#c9cbd3] text-slate-800  self-center mt-10  ">
          <div className="self-center border  border-[#787f98] p-5 rounded-md  w-[310px] ">
            <form onSubmit={Formik.handleSubmit}>
              <div className="flex flex-col mb-5 ">
                <label htmlFor="1" className="mb-2">
                  {t("email")}
                </label>
                <input
                  type="text"
                  className="fa rounded-sm h-9  border border-[#787f98]
                outline-none ml-2 px-2
                bg-transparent
                "
                  name="email"
                  {...Formik.getFieldProps("email")}
                />
                {Formik.errors.email && Formik.touched.email && (
                  <div className="text-red-600 text-sm ">
                    {Formik.errors.email}
                  </div>
                )}
              </div>
              <div className="flex flex-col mb-5 ">
                <label htmlFor="1" className="mb-2">
                  {t("pass")}
                </label>
                <div className="flex ml-[8px]">
                  <input
                    type={show ? "text" : "password"}
                    className={`${
                      i18n.language === "fa" ? `rounded-r-sm` : `rounded-l-sm`
                    } h-9  border border-[#717374]
                  outline-none  w-full ${
                    i18n.language === "en" ? `border-r-0` : `border-l-0`
                  }  px-2 bg-transparent`}
                    name="password"
                    {...Formik.getFieldProps("password")}
                  />
                  <div
                    className={`flex border ${
                      i18n.language === "fa" ? `border-r-0` : `border-l-0`
                    }  ${
                      i18n.language === "en" ? `pr-3` : `pl-3`
                    }  border-[#717374]  ${
                      i18n.language === "en" ? `rounded-r-sm` : `rounded-l-sm`
                    } `}
                  >
                    <button
                      className="self-center"
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(!show);
                      }}
                    >
                      {!show ? <RiEyeCloseLine /> : <MdRemoveRedEye />}
                    </button>
                  </div>
                </div>

                {Formik.errors.password && Formik.touched.password && (
                  <div className="text-red-600 text-sm ">
                    {Formik.errors.password}
                  </div>
                )}
              </div>
              <div className="flex justify-center mb-5 mt-10">
                <button
                  className={
                    Formik.errors.email || Formik.errors.password
                      ? "bg-[#787f98] opacity-60 px-12 py-2 rounded-lg font-semibold"
                      : "bg-oragneMain text-white px-12 py-2 rounded-lg font-semibold"
                  }
                  type="submit"
                  disabled={
                    Formik.errors.email || Formik.errors.password ? true : false
                  }
                >
                  {t("login2")}
                </button>
              </div>
            </form>
            <div className="self-center my-8 text-oragneMain">
              <div className="flex justify-center ">
                <Link to={"/singup"}>{t("newC")}</Link>
              </div>
              <div className="flex justify-center">
                {/* <span className="self-center mr-2">{t("or")}</span> */}
              </div>
              <div className="flex justify-center">
                <Link>{t("forget")} </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default withRouter(LoginForm);
