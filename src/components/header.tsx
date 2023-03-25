import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "./nav";
export default function Header() {
  const [dark, setDark] = useState(false);
  const localName = "cz-theme";

  useEffect(() => {
    if (
      localStorage.getItem(localName) == "dark" ||
      localName in localStorage
    ) {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changeThemeDark = (): void => {
    setDark(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem(localName, "dark");
  };
  const changeThemeSys = (): void => {
    setDark(false);
    document.documentElement.classList.remove("dark");
    localStorage.removeItem(localName);
  };
  return (
    <div className="header">
      {/* 头部 */}
      <header className="fixed top-0 left-0 z-10 w-full text-gray-900 transition-all bg-white dark:bg-gray-800 dark:text-white">
        <div className="px-5 nav-wrapper">
          <Nav />
        </div>
      </header>
    </div>
  );
}
