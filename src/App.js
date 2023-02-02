import { useEffect, useState } from "react";
import i18n from "./i18next";
import "./App.css";
import Home from "./components/home/Home";
import Footer from "./pages/footer/Footer";
import Today from "./components/Today/Today";
import Inbox from "./components/inbox/Inbox";
import UnCompleted from "./components/unCompleted/unCompleted";
import AddTodo from "./components/addTodo/AddTodo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoHome from "./components/TodoHome/TodoHome";
import LoginForm from "./components/login/LoginForm";
import ScrollToTop from "./ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingUpForm from "./components/singUp/SingUpForm";
import TodoProvider from "./context/TodoProvider";

const App = () => {
  const [theme, setTheme] = useState("lightTheme");
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    let theme = localStorage.getItem("theme");
    let language = localStorage.getItem("language");
    if (theme) {
      setTheme(theme);
      if (theme === "lightTheme") {
        return document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    } else {
      setTheme("lightTheme");
      document.documentElement.classList.remove("dark");
    }

    if (language) {
      i18n.changeLanguage(language);
      setLanguage(language);
      if (language === "fa") {
        return (document.documentElement.dir = "rtl");
      } else {
        return (document.documentElement.dir = "ltr");
      }
    } else {
      i18n.changeLanguage("en");
    }
  }, []);
  const changeTheme = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };
  const handen = (language) => {
    localStorage.setItem("language", language);
    setLanguage(language);
    i18n.changeLanguage(language);
    if (language === "fa") {
      return (document.documentElement.dir = "rtl");
    } else {
      return (document.documentElement.dir = "ltr");
    }
  };

  return (
    <div className={`${language}`}>
      <div className={`${theme} `}>
        <BrowserRouter>
          <TodoProvider>
            <ScrollToTop>
              <ToastContainer />

              <Switch>
                <Route
                  path={"/home"}
                  exact
                  component={() => (
                    <TodoHome
                      theme={theme}
                      setTheme={changeTheme}
                      changeLanguage={handen}
                    />
                  )}
                />
                <Route
                  path={"/home/inbox"}
                  component={() => (
                    <Inbox
                      theme={theme}
                      setTheme={changeTheme}
                      changeLanguage={handen}
                    />
                  )}
                />
                <Route
                  path={"/home/addTodo"}
                  component={() => (
                    <AddTodo
                      theme={theme}
                      setTheme={changeTheme}
                      changeLanguage={handen}
                    />
                  )}
                />
                <Route
                  path={"/home/unCompleted"}
                  component={() => (
                    <UnCompleted
                      theme={theme}
                      setTheme={changeTheme}
                      changeLanguage={handen}
                    />
                  )}
                />
                <Route
                  path={"/home/today"}
                  exact
                  component={() => (
                    <Today
                      theme={theme}
                      setTheme={changeTheme}
                      changeLanguage={handen}
                    />
                  )}
                />
                <Route
                  path={"/login"}
                  exact
                  component={() => (
                    <LoginForm
                      theme={theme}
                      setTheme={changeTheme}
                      changeLanguage={handen}
                    />
                  )}
                />
                <Route
                  path={"/singUP"}
                  exact
                  component={() => (
                    <SingUpForm
                      theme={theme}
                      setTheme={changeTheme}
                      changeLanguage={handen}
                    />
                  )}
                />

                <Route
                  path={"/"}
                  exact
                  component={() => (
                    <Home
                      theme={theme}
                      setTheme={changeTheme}
                      changeLanguage={handen}
                    />
                  )}
                />
              </Switch>
              <Footer theme={theme} />
            </ScrollToTop>
          </TodoProvider>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
