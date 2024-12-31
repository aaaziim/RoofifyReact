import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItems = () => {
    const links = <>
     <li>
            <NavLink to="/">Home</NavLink>
    </li>
    <li>
            <NavLink to="/about">About</NavLink>
    </li>
    </>
    return links;
};

export default NavItems;