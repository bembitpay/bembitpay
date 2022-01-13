import React, { useEffect, ReactElement, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import QRCode from "react-qr-code";
import {
  listDepositsTypes,
  GetSale,
} from "../../store/modules/general/actions";
import {} from "react-router-dom";
import { Create } from "../../store/modules/sale/actions";
import { Receipt, ReceiptWithdraw, Button, InputGroup, Card } from "../../components";
import Accordion from "../../components/Accordion";
import OptionToken from "../../components/OptionToken";

import { BsArrowRight, BsCurrencyBitcoin} from "react-icons/bs";

import {
  Container,
  TitleContainer,
  ReceitContent,
  ButtonContainer,
  Content,
  ContainerButton,
  Title,
  Link,
  HeroContainer,
  HowToUseContainer,
  CapTokenCointainer,
  SocialMediaContainer,
  NewsletterContainer,
  FaqContainer,
} from "./styles";

import { TokenPrice, LabelWallet } from "../../pages/Sales/styles";

import { DepositState } from "../../store/modules/deposit/types";


import {
  FormatToReal,
  FormatNumberBr,
  ValidateCpf,
  ValidateDate,
  FormatToNumber,
  FormatToRealPrice,
} from "../../utils";


import { GeneralState } from "../../store/modules/general/types";
import Input from "../../components/Input";

import imgFacebook from "../../assets/images/social/img-facebook.svg";
import imgLinkedin from "../../assets/images/social/img-linkedin.svg";
import imgInstagram from "../../assets/images/social/img-instagram.svg";

function WithdrawCancel(): ReactElement {
  const [selected, setSelected] = useState("Bitcoin");
  const [saleState, setSale] = useState({
    name: "",
    email: "",
    document: "",
    birth_date: "",
    phone: "",
    quantity: "",
    total: "",
    fee: "",
    totalPay: "",
    address: "",
  });
  const [feeAbsolut, setFeeAbsolut] = useState(0);
  const [feePercent, setFeePercent] = useState(0);
  const [feeTotal, setFeeTotal] = useState(0);
  const [totalPay, setTotalPay] = useState(0);
  const dispatch = useDispatch();

  const { deposits, salePrice }: GeneralState = useSelector(
    (state: any) => state.general,
    shallowEqual
  );

  const handler = () => {
    const { quantity, document, birth_date, name, email, phone, address,total } = saleState;
    if (quantity === "") {
      alert("quantidade é obrigatório");
      return;
    }

    if (address === "") {
      alert("endereço de carteira é obrigatório");
      return;
    }

    if (!/^0x[a-fA-F0-9]{40}$/.test(address)){
      alert("endereço de carteira inválido");
      return;
    }

    if (parseFloat(total) < 50.00){
      alert("valor não pode ser menor que R$50,00 ");
      return;
    }

    dispatch(
      Create({
        quantity: parseFloat(quantity),
        name,
        document,
        birth_date,
        email,
        phone,
        fee: feeTotal,
        total_pay: totalPay,
        address: saleState.address,
      })
    );
  };

  const setValue = (e: React.FormEvent<HTMLInputElement>) => {
    let fieldValue = e.currentTarget.value;
    switch (e.currentTarget.name) {
      case "phone":
        fieldValue = FormatNumberBr(fieldValue);
        if (fieldValue.length >= 16) return;
        break;
      
      default:
        fieldValue = e.currentTarget.value;
        break;
    }
    setSale({
      ...saleState,
      [e.currentTarget.name]: fieldValue,
    });
  };

  useEffect(() => {
    dispatch(listDepositsTypes());
    dispatch(GetSale());
  }, []);

  useEffect(() => {
    let feeRef = deposits.find((item) => item.type === "pix");
    if (feeRef !== undefined) {
      let absolut: number = feeRef.fee?.absolut as number;
      let percent: number = feeRef.fee?.percent as number;
      setFeeAbsolut(absolut);
      setFeePercent(percent);
    }
  }, [deposits]);

  useEffect(() => {
    let total = FormatToNumber(saleState.total);
    let feePercentTotal = (total / 100) * feePercent;
    let FeeTotal = feeAbsolut + feePercentTotal;
    setFeeTotal(FeeTotal);
    setTotalPay(total + FeeTotal);
  }, [saleState]);

  const ChangeCheckValue = (e: React.FormEvent<HTMLInputElement>) => {
    let value: number = 0.0;
    let valueFormated: string = "";
    let field = "quantity";
    let valueField: number = parseFloat(e.currentTarget.value);

    let valueFieldTotal: number = 0;
    if (isNaN(valueField)) {
      valueFieldTotal = 0;
    } else {
      valueFieldTotal = valueField;
    }
    switch (e.currentTarget.name) {
      case "quantity":
        value = salePrice.price * valueFieldTotal;
        field = "total";
        valueFormated = FormatToReal(value);
        break;
      case "total":
        value = valueFieldTotal / salePrice.price;
        field = "quantity";
        valueFormated = value.toFixed(0);
        break;
    }
    setSale({
      ...saleState,
      [e.currentTarget.name]: e.currentTarget.value,
      [field]: valueFormated,
    });
  };

  return (
    <Container>
      <HeroContainer>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <Title>Bem simples, <br />bem rápido, <br />#Bembit.</Title>
              <p>Aqui você compra tokens por<br/> pix 24 horas 7 dias por semana.</p>
              <Link className="a-primary" href="/">Compre agora</Link>

              <div className="numbers-info d-flex">
                <div className="d-flex align-items-center">
                  <span>100+</span>
                  <p>Compras feitas</p>
                </div>
                <div className="d-flex align-items-center">
                  <span>20+</span>
                  <p>Tokens</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 box-card-hero">
            <Card>
                <>
                  <div className="title-card text-center">
                    <h4>Compre tokens com PIX</h4>
                  </div>
                  <div className="box-card">
                    <InputGroup>
                      <Input
                        name="address"
                        label={"Endereço de carteira (BSC)"}
                        onChange={setValue}
                        value={saleState.address}
                        style={{ textAlign: "left" }}
                      />
                    </InputGroup>

                    <div className="token-option d-flex">
                      <OptionToken/>
                        <Input
                          name="quantity"
                          label={"Quantidade em Token"}
                          onChange={ChangeCheckValue}
                          value={saleState.quantity}
                        />
                    </div>


                    <InputGroup>
                      <Input
                        name="total"
                        label={"Valor em Real"}
                        onChange={ChangeCheckValue}
                        value={saleState.total}
                        
                      />
                    </InputGroup>
                    <p>* Compre entre: R$ 100,00 a R$ 1.000,00</p>

                    <hr />
                    <InputGroup>
                      <Input
                        name="fee"
                        label={"Fee:"}
                        disabled
                        value={FormatToReal(feeTotal)}
                        style={{ textAlign: "right" }}
                      />
                    </InputGroup>

                    <InputGroup>
                      <Input
                        name="total_pay"
                        label={"Total a pagar:"}
                        disabled
                        readonly="readonly"
                        value={FormatToReal(totalPay) + " (Total a Pagar)"}
                        style={{ textAlign: "right" }}
                      />
                    </InputGroup>
                    <Button
                      text={"Compre agora"}
                      onClick={() => handler()}
                      />

                    <div id="how-to-use"></div>
                  </div>
                  </>
              </Card>

            </div>
          </div>
        </div>
      </HeroContainer>

      <HowToUseContainer className="container" >
        <div className="row">
          <div className="col-lg-4">
            <div className="box-to-use">
              <h4>Selecione o token</h4>
              <p>Insira a quantidade de token ou o valor em reais e o endereço da sua carteira.</p>
              <Link>Comprar agora</Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box-to-use">
              <h4>Faça o PIX.</h4>
              <p>Após finalizar seu pedido, informe seus dados e envie o pix a partir do qr code.</p>
              <Link>Comprar agora</Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box-to-use">
              <h4>Tokens na carteira!</h4>
              <p>Após a confirmação do pix, os tokens serão enviados para seu carteira automaticamente.</p>
              <Link>Comprar agora</Link>
            </div>
          </div>
        </div>
      <div id="tokens"></div> 
      </HowToUseContainer>

      <CapTokenCointainer >
        <div className="container container-app">
          <div className="row text-white title-tokens align-items-center">
            <div className="col-lg-6">
              <h2>Os tokens mais <br />vendidos no mercado</h2>
            </div>
            <div className="col-lg-6">
              <p>Os principais e mais promissores tokens do <br /> mercado agora por  pix, 24 horas e 7 dias por <br />semana.</p>
            </div>
          </div>
        </div>
        <div className="token-list mt-4">
          
          <div className="token-track mx-auto secondary">
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
          </div>
          <div className="token-track mx-auto">
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
            <div className="token ">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsCurrencyBitcoin size={20} style={{ color: "#fff" }}/>
                  <p>Bitcoin</p>
                </div>
                <span>BTC</span>
              </div>
            </div>
          </div>

        </div>
      </CapTokenCointainer>

      <SocialMediaContainer className="container">
        <div className="row mb-4">
          <h2>Veja nossas redes sociais</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="col-lg-12">
              <div className="box-social mb-4">
                <p>Facebook</p>
                <h3>Faça parte do nosso facebook</h3>
                <Link target="blank" href="https://www.facebook.com/bembitpay">Ver mais</Link>
                <img src={imgFacebook} alt="" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="box-social">
                <p>LinkedIn</p>
                <h3>Conecte-se com a gente no Linkedin</h3>
                <Link target="blank"  href="">Ver mais</Link>
                <img src={imgLinkedin} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="col-lg-12 h-100">
              <div className="box-social big h-100">
                <p>Instagram</p>
                <h3>Siga nossas dicas no Instagram</h3>
                <Link target="blank" href="https://www.instagram.com/bembit.pay/">Conhecer nosso instagram</Link>
                <img src={imgInstagram} alt="" />
              </div>
            </div>
          </div>
        </div>
      </SocialMediaContainer>
      <NewsletterContainer>
        <div className="container container-app">
          <div className="row">
            <div className="col-lg-6 box-newsletter text-white">
              <p>Newsletter</p>
              <h3>Assine o newsletter e <br />saiba tudo da Bembit.</h3>
            </div>
            <div className="col-lg-6">
              <label htmlFor="newsletter" className="text-white">
                Insira seu E-mail:
              </label>
              <div className="newsletter-group d-flex">
                <input type="text" id="newsletter" placeholder="Ex: bembit@gmail.com"/>
                <button><BsArrowRight size={30} style={{color: '#fff'}} /></button>
              </div>
            </div>   
          </div> 
        </div>
      </NewsletterContainer>
      <FaqContainer className="container">
        <div className="row">
          <div className="col-lg-6">
            <p>FAQ</p>
            <h2>Aqui você encontra as dúvidas frequentes dos clientes.</h2>
          </div>
          <div className="col-lg-6">
            <Accordion />
          </div>
        </div>
      </FaqContainer>
    </Container>
  );
}

export default WithdrawCancel;
