import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css"
import '../../App.css';
import { SidebarPageType } from '../../redux/store';

type NavbarPropsType = {
  state: SidebarPageType
}

const Navbar: React.FC<NavbarPropsType> = (props) => {

  let friendsItems = props.state.friends.map((fr) => {
    return <div className={s.friend}><img src={fr.link} alt="img"/>{fr.name}</div>
  })

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile/:userId" className={(isActive) => isActive ? "active-link" : ""}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={(isActive) => isActive ? "active-link" : ""}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={(isActive) => isActive ? "active-link" : ""}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={(isActive) => isActive ? "active-link" : ""}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" className={(isActive) => isActive ? "active-link" : ""}>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" className={(isActive) => isActive ? "active-link" : ""}>Users</NavLink>
      </div>
      <div>
        <div className={s.friends}>Friends</div>
        {friendsItems}
      </div>
    </nav>);
}
export default Navbar;