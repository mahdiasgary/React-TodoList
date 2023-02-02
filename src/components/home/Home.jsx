import Navigation from "../navigation/Navigation";
import home3 from "../../assets/home2.png";
import homeImageDark from "../../assets/homeImageDark.png";
import "./homeStyle.css";
import homeImage from "../../assets/home3.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = ({ theme, setTheme, changeLanguage }) => {
  const { t } = useTranslation();
  const [IsLogin, setIsLogin] = useState([]);
  const IsSingup = localStorage.getItem("user");
  useEffect(() => {
    setIsLogin(localStorage.getItem("user"));
  }, []);

  useEffect(() => {
    if (IsSingup) {
      setIsLogin(IsSingup);
    } else {
      setIsLogin([]);
    }
  }, [IsSingup]);

  return (
    <div className="dark:text-white ">
      <Navigation
        theme={theme}
        setTheme={setTheme}
        changeLanguage={changeLanguage}
      />
      <div>
        <div className=" flex  flex-col lg:flex-row  mx-7 y9:mx-16 md:mx-20 mt-7 md:mt-24 justify-between">
          <div className="flex flex-col">
            <div
              className={
                theme === "lightTheme"
                  ? ` header  text-[37px]  md:text-[62px] font-extrabold w-[680px]  `
                  : ` headerDark text-[37px]  md:text-[62px] font-extrabold w-[680px]  `
              }
            >
              <span>{t("header1a")}</span>
              <span className="block">{t("header1b")}</span>
            </div>
            <div className="w-[350px] y9:w-[470px] sm:w-[550px] dark:text-darkTextPrimary ">
              <span>{t("header2")}</span>
            </div>

            <div className="mt-8 h-28">
              <div>
                <Link to={IsLogin.length === 0 ? "/login" : "/home"}>
                  <button
                    className="bg-oragneMain text-[19px]  y9:text-[25px] font-bold text-white
                  px-9 py-4 rounded-md hover:py-5 hover:px-10    hover:-transition  duration-200 "
                  >
                    {t("getStart")}{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <img
                className="se:w-max-[500px] se:px-10 sm:w-[450px]  md:w-[500px] lg:w-[300px] xl:w-[480px]  md:px-20 lg:px-0"
                src={theme === "lightTheme" ? homeImage : homeImageDark}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex   flex-col-reverse lg:flex-row  mx-7 y9:mx-16 md:mx-20 mt-7 md:mt-24 justify-between">
        <div>
          <div className="se:w-max-[500px] sm:w-[450px] md:w-[500px] lg:w-[300px] xl:w-[480px]  md:mx-32 lg:mx-0">
            <img src={home3} alt="" />
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className={
              theme === "lightTheme"
                ? ` header w-[350px] y9:w-[470px] sm:w-[550px] text-[37px]  md:text-[56px] font-extrabold  `
                : ` headerDark w-[350px] y9:w-[470px] sm:w-[550px] text-[37px]  md:text-[56px] font-extrabold  `
            }
          >
            <span>{t("header3a")}</span>
            <span className="block">{t("header3b")}</span>
          </div>
          <div className="w-[350px] y9:w-[470px] sm:w-[550px] dark:text-darkTextPrimary ">
            <span>{t("header4")}</span>
          </div>

          <div className="mt-8 h-28">
            <div>
              <Link to={"/home"}>
                <button
                  className="bg-oragneMain text-[19px]  y9:text-[25px] font-bold text-white
                  px-9 py-4 rounded-md hover:py-5 hover:px-10    hover:-transition  duration-200 "
                >
                  {t("getStart")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
