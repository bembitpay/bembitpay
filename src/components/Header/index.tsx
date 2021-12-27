import React, { useEffect, ReactElement } from "react";

import { HeaderContainer, Link } from "./styles";
import Logo from "../../assets/images/logo_bembit.svg";

function Header(): ReactElement {
  const URL_current = window.location.href;

  return (
    <HeaderContainer className={(URL_current != "/" ? 'not-fixed' : '')}>
      <div className="d-flex align-items-center">
        <img src={Logo} />

        {URL_current == "/" && (
          <ul>
            <li>Home</li>
            <li>Referral</li>
            <li>Como funciona</li>
            <li>Blog</li>
          </ul>
        )}
      </div>

      {URL_current != "/" ? (
          <div className="group-button d-flex align-items-center">
            <Link>Contato</Link>
          </div>
        ) : (
          <div className="group-button d-flex align-items-center">
            <Link className="a-primary">Como funciona</Link>
            <Link>Compre agora</Link>
          </div>
        )}


    </HeaderContainer>
  );
}

export default Header;
