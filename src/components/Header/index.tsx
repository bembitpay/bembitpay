import React, { useState, useEffect, ReactElement } from "react";

import { HeaderContainer, Link } from "./styles";
import Logo from "../../assets/images/logo_bembit.svg";
import { BsList } from "react-icons/bs";

function Header(): ReactElement {
  const [menu, setMenu] = useState(false);
  const URL_current = window.location.pathname;

  const viewMenu = () => {
    setMenu(!menu);
  };

  
  const changeHeader = () => {
    if(
      URL_current == "/"      || 
      URL_current == '/about' || 
      URL_current == '/taxs'  ||
      URL_current == '/terms' ||
      URL_current == '/faq' 
    ) {
      return true;
    }

    return false;
  }

  return (
    <HeaderContainer className={(changeHeader() ? '' : 'not-fixed')}>
      <div className="d-flex align-items-center">
        <a href="/">
          <img src={Logo} />        
        </a>

        {changeHeader() && (
          <ul className={(menu && "view-menu") + " d-lg-flex"}>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/#tokens">
              <li>Tokens</li>
            </a>
            <a href="/about">
              <li>Quem somos</li>
            </a>
            <a href="/faq">
              <li>FAQ</li>
            </a>
            <div className="group-button d-flex d-lg-none align-items-center">
              <Link className="a-primary" href="/#how-to-use">Como funciona</Link>
              <Link href="/">Compre agora</Link>
            </div>
          </ul>
        )}
        
      </div>

      
      {changeHeader() ? (
          <>
            <div className="icon-menu justify-content-end d-flex d-lg-none" onClick={() => viewMenu()}>
              <BsList size={30}/>
            </div>
            <div className="group-button d-none d-lg-flex align-items-center">
              <Link className="a-primary" href="/#how-to-use">Como funciona</Link>
              <Link href="/">Compre agora</Link>
            </div>
          </>
        ) : (
          <>
            <div className="group-button d-flex align-items-center">
              <Link>Contato</Link>
            </div>
          </>
        )}


    </HeaderContainer>
  );
}

export default Header;
