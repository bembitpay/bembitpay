import React, { ReactElement } from "react";

import { FooterContainer, LinksContent } from "./styles";

import { BsArrowRight, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

import Logo from "../../assets/images/logo_bembit.svg";

function Footer(): ReactElement {
  return (
      <FooterContainer >
        <div className="container">
            <div className="row footer-1">
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-lg-3">
                            <LinksContent>
                                <img src={Logo}/>
                                <p className="title-links mt-4">Bem simples, <br />bem rápido,<br /> #Bembit.</p>
                            </LinksContent>
                        </div>
                        <div className="col-lg-3">
                            <LinksContent>
                                <p className="title-links">Empresa</p>
                                <ul>
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
                                        <li>Perguntas Frequentes</li>
                                    </a>
                                </ul>
                            </LinksContent>
                        </div>
                        <div className="col-lg-3">
                            <LinksContent>
                                <p className="title-links">Contato</p>
                                <ul>
                                    <a href="mailto:contato@bembit.com">
                                        <li>contato@bembit.com</li>
                                    </a>
                                </ul>
                            </LinksContent>
                        </div>
                        <div className="col-lg-3">
                            <LinksContent>
                                <p className="title-links">Redes sociais</p>
                                <ul>
                                    <a target="blank" href="https://www.instagram.com/bembit.pay/">
                                        <li>@bembit.pay</li>
                                    </a>
                                    <a target="blank" href="https://www.facebook.com/bembitpay">
                                        <li>Bembit (@bembitpay)</li>
                                    </a>
                                    <a href="">
                                        <li>bembit.pay</li>
                                    </a>
                                </ul>
                            </LinksContent>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mx-auto">
                    <p className="title-links">Newsletter</p>
                    <div className="newsletter">
                        <p>Fique por dentro de tudo que acontece na Bembit assinando nossa Newsletter.</p>
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
                    <a href="/terms">Termos de privacidade</a>
                </div>
                <div className="col-lg-6 d-flex justify-content-end socials">
                    <ul className="d-flex">
                        <li>
                            <a target="blank" href="https://www.instagram.com/bembit.pay/">
                                <BsInstagram size={20}/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsLinkedin size={20}/>
                            </a>
                        </li>
                        <li>
                            <a target="blank" href="https://www.facebook.com/bembitpay">
                                <BsFacebook size={20} />    
                            </a>
                        </li>
                    </ul>
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
