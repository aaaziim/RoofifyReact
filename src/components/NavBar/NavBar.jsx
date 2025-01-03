import { RxHamburgerMenu } from "react-icons/rx";
import { FaWindowClose } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import NavItems from "./NavItems";
import FancyText from '@carefully-coded/react-text-gradient';
import { Link } from "react-router-dom";
import GetAQuoteModal from "../GetAQuoteModal/GetAQuoteModal";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); 

  // Reference to the dropdown menu element
  const dropdownRef = useRef(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false); // Close menu if clicked outside
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
// Apply theme on page load
document.documentElement.setAttribute('data-theme', theme);
localStorage.setItem('theme', theme);
    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

   

  }, [theme]);


 // Toggle theme
 const handleThemeToggle = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme); // Update theme state
};

  return (
    <>
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown" ref={dropdownRef}>
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {menuOpen ? (
              <FaWindowClose
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <RxHamburgerMenu
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
              menuOpen ? "" : "hidden"
            }`}
          >
           {<NavItems></NavItems>}
          </ul>
        </div>
        <Link to="/">

<span>
<FancyText className="text-3xl font-bold"
      gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
      animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
      animateDuration={2000}
    >
      Roofify
    </FancyText>
</span>
<span>
    
<FancyText className="text-3xl font-bold"
      gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
      animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
      animateDuration={2000}
    >
      React
    </FancyText>
</span>
        

        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {<NavItems></NavItems>}
        </ul>
      </div>
      <div className="navbar-end">

            {/* Theme Toggle */}
   {/* Theme Toggle */}
   <label onClick={handleThemeToggle} className="grid cursor-pointer place-items-center mx-3">
          <input
            type="checkbox"
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            checked={theme === 'dark'}
            readOnly
          />
          <svg className="stroke-base-100 fill-base-100 col-start-1 row-start-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            
          </svg>
</label>

        <button onClick={()=>document.getElementById('my_modal_3').showModal()}  className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
    <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
    <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
        <span className="relative text-white">Get a Quote</span>
    </span>
</button>
      </div>
     
    </div>
  <GetAQuoteModal></GetAQuoteModal>

    </>
    
    
  );
};

export default NavBar;
