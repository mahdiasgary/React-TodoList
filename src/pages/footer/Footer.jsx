
import { useTranslation } from "react-i18next";
import logoLi from "../../assets/EnHomeLi.png";
import logoDa from "../../assets/EnLogo.png";
import {IoLogoYoutube} from "react-icons/io"
import {BsFacebook ,BsLinkedin ,BsInstagram} from "react-icons/bs"
const Footer = ({theme}) => {
    const { t } = useTranslation();
    return ( 
        <div>
            <div></div>
            <div className="flex justify-between pt-2 pb-3 mt-80 mx-5 y9:mx-16  font-semibold dark:text-[#787f98] text-slate-800 border-t border-[#787f98] ">
                <div>
                    <div className="mb-4">
                        <img src={theme==="lightTheme"? logoLi : logoDa} alt="" />
                         </div>
                    <div className="text-sm y9:text-[15px]">
                        <span>{t("footer1")} </span>
                    </div>
                </div>

                <div className="flex text-sm  ">
                    <div className="mx-7  cursor-pointer">{t("about")} </div>
                    <div className=" cursor-pointer">{t("blog")} </div>
                </div>

                <div className="mx-5 ">
                    <div className="text-[20px] y9:text-[23px] mb-2 cursor-pointer "> <IoLogoYoutube/> </div>
                    <div className="text-[20px] y9:text-[23px] mb-2 cursor-pointer"> <BsFacebook/> </div>
                    <div className="text-[20px] y9:text-[23px] mb-2 cursor-pointer"> <BsLinkedin/> </div>
                    <div className="text-[20px] y9:text-[23px] mb-2 cursor-pointer"><BsInstagram/> </div>
                </div>

            </div>
        </div>
     );
}
 
export default Footer;