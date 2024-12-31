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
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
