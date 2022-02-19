import React from 'react';
import s from "./Header.module.css";

const Header: React.FC<any> = () => {
    return <header className={s.header}>
    <img src='https://www.softermii.com/assets/uploads/blog/20181127/inner-05.png' alt="react-logo"></img>
  </header>
}
export default Header;