import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css";
import reactLogo from '../../img/logo.png'

type HeaderPropsType = {
  setUserData: (id: number | null, email: string | null, login: string | null) => void
  logout: () => void
  isAuth: boolean
  login: string | null
}

const Header: React.FC<any> = (props: HeaderPropsType) => {
  return <header className={s.header}>
    <img src={reactLogo} alt="logo" />
    <div className={s.LoginBlock}>
      {props.isAuth ? 
      <div>{props.login} <button onClick={props.logout}>Logout</button></div> : 
      <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>
}
export default Header;