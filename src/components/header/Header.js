import React from "react";
import styles from './Header.module.scss'
import {FaShoppingCart, FaTimes} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const logo = (
  <div className={styles.logo}>
  <Link to='/'>
    <h2>
      e<span>Shop</span>.
    </h2>
  </Link>
</div>
)

const cart = (
  <span className={styles.cart}>
    <Link to='/cart'>
      Cart
      <FaShoppingCart size={20}/>
      <p>0</p>
    </Link>
  </span>
)

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const hideMenuHandler = () => {
    setShowMenu(false)
  }

  const activeLink = ({isActive}) => (isActive ? `${styles.active}` : '')

  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={showMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}` }>
          <div className={showMenu ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}` : `${styles['nav-wrapper']}`} onClick={hideMenuHandler}>
          </div>

          <ul onClick={hideMenuHandler}>
            <li className={styles['logo-mobile']}>
              <Link to='./'>{logo}</Link>
              <FaTimes size={22} color={'#fff'} onClick={hideMenuHandler}/>
            </li>
            <li>
              <NavLink to='./' className={activeLink}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/contact' className={activeLink}>Contact Us</NavLink>
            </li>
          </ul>
          <div className={styles['header-right']} onClick={hideMenuHandler}>
            <span className={styles.links}>
              <NavLink to='/login' className={activeLink}>Login</NavLink>
              <NavLink to='/register' className={activeLink}>Register</NavLink>
              <NavLink to='/order-history' className={activeLink}>My Orders</NavLink>
            </span>
              {cart}
          </div>
        </nav>
        <div className={styles['menu-icon']}>
          {cart}
          <GiHamburgerMenu size={28} onClick={toggleMenu}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
