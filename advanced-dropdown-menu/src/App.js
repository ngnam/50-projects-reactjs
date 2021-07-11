import './App.css';
import { FaPlus, FaMinus, FaMagic, FaChevronDown, FaCog, FaChevronRight, FaArrowLeft } from "react-icons/fa";
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <Navbar>
      <NavItem icon={<FaPlus />} />
      <NavItem icon={<FaMinus />} />
      <NavItem icon={<FaMagic />} />

      <NavItem icon={<FaChevronDown />}>
        {/* DROP down menu  */}

        <DropdownMenu />

      </NavItem>


    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="nav navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}

    </li>
  );
}

function DropdownMenu(props) {
  const [activeMenu, SetActiveMenu] = useState('main');
  const [menuHeight, SetMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    SetMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && SetActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary">
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem leftIcon={<FaCog />} rightIcon={<FaChevronRight />} goToMenu="settings">
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary">
        <div className="menu">
          <DropdownItem leftIcon={<FaArrowLeft />} goToMenu="main"></DropdownItem>
          <DropdownItem>Change password</DropdownItem>
          <DropdownItem leftIcon={<FaCog />} >
            settings
          </DropdownItem>
          <DropdownItem leftIcon={<FaCog />} >
            settings
          </DropdownItem>
          <DropdownItem leftIcon={<FaCog />} >
            settings
          </DropdownItem>
          <DropdownItem leftIcon={<FaCog />} >
            settings
          </DropdownItem>
          <DropdownItem leftIcon={<FaCog />} >
            settings
          </DropdownItem>
          <DropdownItem leftIcon={<FaCog />} >
            settings
          </DropdownItem>
          <DropdownItem leftIcon={<FaCog />} >
            settings
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
