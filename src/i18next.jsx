import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const traEn = {
  singup: "Sing up",
  login: "Login",
  header1a: "Organize your work",
  header1b: "and life ,finally",
  header2:"If you are a student, working or passing time, it is important for you This site is right for you, just register",
getStart:"Get Srart",

header3a:"Add your tasks . Organize ",

header3b:"your life.Achieve more every day.",
header4:"Your to-do lists are automatically sorted into Today, Upcoming and custom Filter views to help you focus on your most important things.",
footer1:"Join milions of people who organize works and life with TodoList",
blog:"Blog",
about:"About us",
today:"Today",
addt : "Add Task",
sort:"Sort",
add:"Add",
cancel:"cancel",
tname:"Task name",
dis:"Description",
inbox:"Inbox",
uncom : "unCompleted",
new:"newest",
old:"oldest",
todoList : "Todo List"
};
const traFr = { 
  singup: "ثبت نام",
   login: "ورود" ,
   header1a: "بالاخره کارت و زندگیتو",
   header1b: "سازماندهی کن",
   header2:"اگه شاغلی یا دانشجویی یا حتی دانش ۀموزی تویی که گذر زمان برات مهمه  این سایت مناسب توعه کافیه ثبت نام کنی",
   getStart:"ثبت نام",
  
   header3a:"کاراتو اضافه کن . ",

   header3b:"کل زندگیتو سازماندهی کن ",
   header4:"لیست کارهای شما به طور خودکار به نمای امروز، آینده و فیلتر سفارشی مرتب می شود تا به شما کمک کند روی مهم ترین چیزهای خود تمرکز کنید.",
   footer1:"Join milions of people who organize works and life with TodoList",
blog:"بلاگ",
about:"درباره ما",
today:"امروز",
addt : "افزودن کار",
sort:"بر اساس",
add:"افزودن",
cancel:"لغو",
tname:"عنوان",
dis:"توصیف",
inbox:"صندوق ورودی",
uncom : "کامل نشده",
new:"جدیدترین",
old:"قدیمی ترین",
todoList : "لیست کار ها"
  };

// const resources = {
//    en: {
//      translation: translationEN
//    },
//    de: {
//      translation: translationDE
//    }
//  };

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: traEn },
    fa: { translation: traFr },
  },
  lng: "en",
  fallbackLng: "en",
  debug: true,
  // whiteList : languages,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
