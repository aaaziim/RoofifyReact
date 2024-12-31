import { RxHamburgerMenu } from "react-icons/rx";
import { FaWindowClose } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import NavItems from "./NavItems";
import FancyText from '@carefully-coded/react-text-gradient';
import { Link } from "react-router-dom";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
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
            <label className="grid cursor-pointer place-items-center mx-3">
  <input
    type="checkbox"
    value="synthwave"
    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
  <svg
    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg
    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>

        <button href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
    <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
    <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
        <span class="relative text-white">Get a Quote</span>
    </span>
</button>
      </div>
    </div>
  );
};

export default NavBar;
