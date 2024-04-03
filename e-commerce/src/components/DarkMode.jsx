import React from 'react';
import { useState } from 'react';
import lightmode from '../images/light1.jpg';
import darkmode from '../images/dark1.jpg';

function DarkMode() {
const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

const element = document.documentElement;  //access to html element

// set theme to localStorage and html element
React.useEffect (() => {
  localStorage.setItem("theme", theme);
  if (theme === "dark"){
    element.classList.add("dark");
    element.classList.add("dark");
  } else {
    element.classList.remove("light");
    element.classList.remove("dark");
  }
}
)

  return (
    <div className='relative'>
     <img 
     onClick={() => setTheme( theme === "dark" ? "light" : "dark")}
     src={lightmode} alt='' className={`w-12 cursor-pointer absolute right-0
      ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300` }/>
     <img 
     onClick={() => setTheme( theme === "dark" ? "light" : "dark")}
     src={darkmode} alt='' className={`w-12 cursor-pointer `}   />
    </div>
  )
}

export default DarkMode
