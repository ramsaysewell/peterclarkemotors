import React from "react";
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <div className='header'>
      <h1 className='header-logo'>PeterClarkeMotors</h1>
      <ul className='header-navigation'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/catalogue'>Find A Car</Link>
        </li>
        <li>
          <Link to='/branch'>Find A Branch</Link>
        </li>
        <li>
          <Link to='/account'>Account</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
