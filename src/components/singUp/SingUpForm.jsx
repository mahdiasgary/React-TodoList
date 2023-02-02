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

const SingUpForm = ({ history, theme, setTheme, changeLanguage }) => {
  const { t } = useTranslation();

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required(t("Ename")),
    phone: Yup.string()
      .required(t("Ephone1"))
      .matches(/^[0-9]{11}$/, t("Ephone2")),
    email: Yup.string().email(t("Eerore2")).required(t("Eerore1")),
    passwordConfirmation: Yup.string()
      .required(t("Epc"))
      .oneOf([Yup.ref("password")], t("Epc2")),
    password: Yup.string()
      .required(t("Perore1"))
      .min(8, t("Perore2"))
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, t("Perore3")),
  });

  const onSubmit = (values) => {
    const userData = {
      name: values.name,
      phoneNumber: values.phone,
      email: values.email,
      password: values.password,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    toast.success(`${userData.name} ${t("toa2")}`, {
      autoClose: 1800,
      position: "top-right",
    });
    history.push("/home");
  };

  const Formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    onSubmit: onSubmit,
  });

  const [show, setShow] = useState(false);
  return (
    <div className=" h-[1000px] dark:text-white">
      <div>
        <nav>
          <div className="flex flex-row justify-between pt-[10px] ">
            <div className="flex flex-row mx-5">
              <div className=" flex ">
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
                      className="flex text-[12px] font-semibold cursor-pointer p-1 bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                      onClick={() => changeLanguage("en")}
                    >
                      En
                      <MdLanguage className="mx-1 text-[18px] cursor-pointer" />
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
        <section className="flex flex-col dark:text-[#c9cbd3] text-slate-800 self-center mt-10  ">
          <div className="self-center border border-[#787f98] p-5 rounded-md  w-[340px] ">
            <form onSubmit={Formik.handleSubmit}>
              <div className="flex flex-col mb-5 ">
                <label htmlFor="1" className="mb-2 ">
                  {t("NameLastName")}
                </label>
                <input
                  type="text"
                  className="rounded-sm h-9  border border-[#787f98]
                  outline-none px-2 bg-transparent"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  value={Formik.values.name}
                  name="name"
                />
                {Formik.errors.name && Formik.touched.name && (
                  <div className="text-red-600 text-sm ">
                    {Formik.errors.name}
                  </div>
                )}
              </div>
              <div className="flex flex-col mb-5 ">
                <label htmlFor="1" className="mb-2 ">
                  {t("phone")}
                </label>
                <input
                  type="text"
                  className="rounded-sm h-9  border border-[#787f98]
                  outline-none px-2 bg-transparent"
                  name="phone"
                  {...Formik.getFieldProps("phone")}
                />
                {Formik.errors.phone && Formik.touched.phone && (
                  <div className="text-red-600 text-sm ">
                    {Formik.errors.phone}
                  </div>
                )}
              </div>
              <div className="flex flex-col mb-5 ">
                <label htmlFor="1" className="mb-2 ">
                  {t("email")}
                </label>
                <input
                  type="text"
                  className="rounded-sm h-9  border border-[#787f98]
                  outline-none px-2 bg-transparent"
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
                <label htmlFor="1" className="mb-2 ">
                  {t("pass")}
                </label>
                <div className="flex ">
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
              <div className="flex flex-col mb-10 ">
                <label htmlFor="1" className="mb-2 ">
                  {t("pc")}
                </label>
                <div></div>
                <input
                  type={show ? "text" : "password"}
                  className="rounded-sm h-9  border border-[#787f98]
                  outline-none px-2 bg-transparent "
                  name="passwordConfirmation"
                  {...Formik.getFieldProps("passwordConfirmation")}
                />
                {Formik.errors.passwordConfirmation &&
                  Formik.touched.passwordConfirmation && (
                    <div className="text-red-600 text-sm ">
                      {Formik.errors.passwordConfirmation}
                    </div>
                  )}
              </div>

              <div className="flex justify-center mb-5">
                <button
                  className={
                    Formik.errors.email || Formik.errors.password
                      ? "bg-[#787f98] opacity-60 px-12 py-2 rounded-lg font-semibold"
                      : "bg-oragneMain text-white px-12 py-2 rounded-lg font-semibold"
                  }
                  type="sumbit"
                  disabled={
                    Formik.errors.email || Formik.errors.password ? true : false
                  }
                >
                  {t("singup2")}
                </button>
              </div>
            </form>
            <div className="flex justify-center self-center my-8">
              <div className="self-center">
                <span className="mr-2">{t("or")} </span>
                <Link to={"/login"} className="text-oragneMain">
                  {t("login")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default withRouter(SingUpForm);
