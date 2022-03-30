import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css";

type HeaderPropsType = {
  setUserData: (id: number | null, email: string | null, login: string | null) => void
  isAuth: boolean
  login: string | null
}

const Header: React.FC<any> = (props: HeaderPropsType) => {
  debugger
  return <header className={s.header}>
    <img src='https://www.softermii.com/assets/uploads/blog/20181127/inner-05.png' alt="react-logo"></img>
    <div className={s.LoginBlock}>
      {props.isAuth ? 
      props.login : 
      <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>
}
export default Header;