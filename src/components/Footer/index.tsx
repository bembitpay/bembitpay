import React, { ReactElement } from "react";

import { FooterContainer, LinksContent } from "./styles";

import { BsArrowRight } from "react-icons/bs";

import Logo from "../../assets/images/logo_bembit.svg";

function Footer(): ReactElement {
  return (
      <FooterContainer >
        <div className="container-app">
            <div className="row footer-1">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-3">
                            <LinksContent>
                                <p>Title</p>
                                <ul>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                </ul>
                            </LinksContent>
                        </div>
                        <div className="col-lg-3">
                            <LinksContent>
                                <p>Title</p>
                                <ul>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                </ul>
                            </LinksContent>
                        </div>
                        <div className="col-lg-3">
                            <LinksContent>
                                <p>Title</p>
                                <ul>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                </ul>
                            </LinksContent>
                        </div>
                        <div className="col-lg-3">
                            <LinksContent>
                                <p>Title</p>
                                <ul>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                    <a href="">
                                        <li>Link</li>
                                    </a>
                                </ul>
                            </LinksContent>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mx-auto">
                    <p>Newsletter</p>
                    <div className="newsletter">
                        <p>Fique por dentro de tudo que acontece na CoinPix assinando nossa Newsletter.</p>
                        <div className="newsletter-group d-flex">
                            <input type="text" id="newsletter" placeholder="Insira seu e-mail"/>
                            <button><BsArrowRight size={20} style={{color: '#fff'}} /></button>
                        </div>
                    </div> 
                </div>
            </div>
            <hr />
            <div className="row footer-2 align-items-center">
                <div className="col-lg-6 d-flex">
                    <img src={Logo} />
                    <a href="">Termos de privacidade</a>
                    <a href="">Informações do Cookie</a>
                </div>
                <div className="col-lg-6 d-flex justify-content-end">
                    <p>V</p>
                    <p>V</p>
                    <p>V</p>
                </div>
            </div>
            <div className="row footer-3">
                <p><span>Razão social:</span> RAR Intermediações - LTDA ME | CNPJ: 41.899.004/0001-30
                    <br /><span>Endereço:</span> Rua México, Nº31, sala 703, Centro, Rio de Janeiro - RJ, CEP: 20031-144
                    <br /><span>Bembit® 2021</span> versão 1.0  | Todos os direitos reservados.</p>
            </div>

        </div>
      </FooterContainer>
  );
}

export default Footer;
