import Navigation from "../navigation/Navigation";
import homeImage from "../../assets/home2.png";
import homeImageDark from "../../assets/homeImageDark.png";

import "./homeStyle.css";
import home3 from "../../assets/home3.png"

import { useTranslation } from "react-i18next";

const Home = ({theme,setTheme}) => {
  const { t } = useTranslation();
  return (
    <div>
      <Navigation theme={theme} setTheme={setTheme}/>
      <div>
        <div className=" flex    flex-col lg:flex-row  mx-7 y9:mx-16 md:mx-20 mt-7 md:mt-24 justify-between">
          <div className="flex flex-col">
            <div className={ theme==="lightTheme" ?
              ` header  text-[37px]  md:text-[62px] font-extrabold w-[680px]  `
            :
            ` headerDark text-[37px]  md:text-[62px] font-extrabold w-[680px]  `

            }>
              <span>{t("header1a")}</span>
              <span className="block">{t("header1b")}</span>
            </div>
            <div className="w-[350px] y9:w-[470px] sm:w-[550px] dark:text-darkTextPrimary ">
              <span>{t("header2")}</span>
            </div>

            <div className="mt-8 h-28">
              <div>
                <button
                  className="bg-oragneMain text-[19px]  y9:text-[25px] font-bold text-white
        px-9 py-4 rounded-md hover:py-5 hover:px-10    hover:-transition  duration-200 "
                >
                  {t("getStart")}{" "}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="se:w-max-[500px] sm:w-[450px] md:w-[500px] lg:w-[300px] xl:w-[480px]  md:mx-32 lg:mx-0">
              <img src={theme==="lightTheme" ? homeImage : homeImageDark } alt="" />
            </div>
          </div>
        </div>
      </div>

{/* <div className="flex mx-20 mt-32 justify-between">
    
    <div>
        <div className="self-center">
            <img src={home3} alt="" className="w-[450px] "/>
        </div>
    </div>
    <div className="flex flex-col">
        <div 
        className={ theme==="lightTheme" ?
        ` header text-[55px] font-extrabold w-[680px] self-center `
      :
      ` headerDark text-[55px] font-extrabold w-[680px] self-center `

      }
        >
            <span >{t("header3a")} </span>
            <span className="block">{t("header3b")}</span>
    
        </div>

        <div className="w-[550px] dark:text-darkTextPrimary">
        <span>
{t("header4")}
            </span>
        </div>
        <div className="mt-8 h-28">
              <div className="flex justify-end mr-20 ">
                <button
                  className="bg-oragneMain text-[25px] font-bold text-white 
        px-9 py-4 rounded-md hover:py-5 hover:px-10    hover:-transition  duration-200"
                >
                  {t("getStart")}{" "}
                </button>
              </div>
            </div>
    </div>
</div> */}

<div className=" flex   flex-col-reverse lg:flex-row  mx-7 y9:mx-16 md:mx-20 mt-7 md:mt-24 justify-between">
<div>
            <div className="se:w-max-[500px] sm:w-[450px] md:w-[500px] lg:w-[300px] xl:w-[480px]  md:mx-32 lg:mx-0">
              <img src={home3} alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className={ theme==="lightTheme" ?
              ` header  text-[37px]  md:text-[56px] font-extrabold w-[740px]  `
            :
            ` headerDark text-[37px]  md:text-[56px] font-extrabold w-[740px]  `

            }>
              <span>{t("header3a")}</span>
              <span className="block">{t("header3b")}</span>
            </div>
            <div className="w-[350px] y9:w-[470px] sm:w-[550px] dark:text-darkTextPrimary ">
              <span>{t("header4")}</span>
            </div>

            <div className="mt-8 h-28">
              <div>
                <button
                  className="bg-oragneMain text-[19px]  y9:text-[25px] font-bold text-white
        px-9 py-4 rounded-md hover:py-5 hover:px-10    hover:-transition  duration-200 "
                >
                  {t("getStart")}{" "}
                </button>
              </div>
            </div>
          </div>

         
        </div>

    </div>
  );
};

export default Home;
