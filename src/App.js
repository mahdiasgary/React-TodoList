
import { useState } from "react";

import i18n from "./i18next";
import "./App.css"
import Home from "./components/home/Home";

import Footer from "./pages/footer/Footer";
import TodoHome from "./components/TodoHome/TodoHome";
const App = () => {
  const [theme , setTheme] = useState("lightTheme");

  const [changeL, setChangeL] = useState(true);


const handen = (e)=>{
i18n.changeLanguage(e.target.value);
console.log(i18n.language)
if(e.target.value==="fa"){return document.documentElement.dir="rtl"}

}

  return ( 
    
    <div className={`${theme}  ` }>
      {/* <div className={i18n.language==="fa" ? "font-iranyekan" : "font-Manrope"} > */}
<TodoHome theme={theme} setTheme={setTheme} changeL={changeL} setChangeL={setChangeL}/>
    {/* <Home theme={theme} setTheme={setTheme} changeL={changeL} setChangeL={setChangeL} /> 
<Footer theme={theme} /> */}
      {/* </div> */}
     {/* <Navigation theme={theme} setTheme={setTheme}/> */}

{/* 
<div>
<div>
  <button onClick={handen} className="mr-5" value={"en"}>en</button>
  </div>
  </div>
  
  
  
<p>{t("welcome")}</p> */}
<button onClick={handen} value={"fa"}>fa</button>

    </div>
   );
}
 
export default App;