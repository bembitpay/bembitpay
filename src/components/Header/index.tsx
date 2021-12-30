import React, { useState, useEffect, ReactElement } from "react";

import { HeaderContainer, Link } from "./styles";
import Logo from "../../assets/images/logo_bembit.svg";
import { BsList } from "react-icons/bs";

function Header(): ReactElement {
  const [menu, setMenu] = useState(false);
  const URL_current = window.location.href.slice(-1);

  const viewMenu = () => {
    setMenu(!menu);
  };

  return (
    <HeaderContainer className={(URL_current != "/" ? 'not-fixed' : '')}>
      <div className="d-flex align-items-center">
        <img src={Logo} />

        {URL_current == "/" && (
          <ul className={(menu && "view-menu") + " d-lg-flex"}>
            <li>Home</li>
            <li>Referral</li>
            <li>Como funciona</li>
            <li>Blog</li>
            <div className="group-button d-flex d-lg-none align-items-center">
              <Link className="a-primary">Como funciona</Link>
              <Link>Compre agora</Link>
            </div>
          </ul>
        )}
        
      </div>

      
      {URL_current != "/" ? (
        <>
          <div className="group-button d-flex align-items-center">
            <Link>Contato</Link>
          </div>
        </>
        ) : (
          <>
            <div className="icon-menu justify-content-end d-flex d-lg-none" onClick={() => viewMenu()}>
              <BsList size={30}/>
            </div>
            <div className="group-button d-none d-lg-flex align-items-center">
              <Link className="a-primary">Como funciona</Link>
              <Link>Compre agora</Link>
            </div>
          </>
        )}


    </HeaderContainer>
  );
}

export default Header;
