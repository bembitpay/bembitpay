import React, { useEffect, ReactElement, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Lottie from "lottie-react-web";

import {} from "react-router-dom";
import Animation from "../../assets/json/1870-check-mark-done.json";
import { Create, RegisterSale } from "../../store/modules/sale/actions";
import { GeneralState, ListItems } from "../../store/modules/general/types";
import {
  ContainerButton,
  Container,
  TitleContainer,
  Content,
  ColumnFields,
  Item,
  ItemLabel,
  ItemValue,
  QrcodeText,
  Row,
  AnimationContainer,
  ColumnQrCode,
  ReceitContent,
  ButtonBack,
  InfoContainer,
  DatasContainer
} from "./styles";

import Input from "../../components/Input";
import InputGroup from "../../components/InputGroup";


import { Button, Title, Receipt, Card, TextInfo } from "../../components";
import { FormatToReal, FormatToRealPrice, FormatNumberBr, ValidateCpf, ValidateDate } from "../../utils";
import { SaleState } from "../../store/modules/sale/types";

import { BsArrowLeft, BsCurrencyExchange } from "react-icons/bs";

import {
  listDepositsTypes,
  GetSale,
} from "../../store/modules/general/actions";

function SalesConfirm(): ReactElement {

  const history = useHistory();
  const [counter, setCounter] = useState(10);
  const [paid, setPaid] = useState(false);
  const [fee, setFee] = useState(0);
  const [totalToken, setTotalToken] = useState(0);
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);
  const [datasState, setDatasState] = useState({
    name: "",
    email: "",
    document: "",
    birth_date: "",
    phone: "",
  });

  const { sale }: SaleState = useSelector(
    (state: any) => state.sale,
    shallowEqual
  );

  const { deposits, salePrice }: GeneralState = useSelector(
    (state: any) => state.general,
    shallowEqual
  );

  useEffect(() => {
    dispatch(listDepositsTypes());
    dispatch(GetSale());
  }, []);

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
    setDatasState({
      ...datasState,
      [e.currentTarget.name]: fieldValue,
    });
  };

  const handlerDatas = () => {
    const {  name, document, birth_date, email, phone } = datasState;

    if (name === "") {
      alert("name é obrigatório");
      return;
    }
    if (email === "") {
      alert("email é obrigatório");
      return;
    }
    if (phone === "") {
      alert("phone é obrigatório");
      return;
    }

    if (document == "" || !ValidateCpf(document)) {
      alert("Informe um CPF válido");
      return;
    } 

    if (birth_date == "" || !ValidateDate(birth_date)) {
      alert("Informe uma data de nascimento válida");
      return;
    } 
    
    setShowConfirm(!showConfirm);
  }

  const handler = () => {
    const { quantity } = sale;
    const { name, document, birth_date, email, phone } = datasState;

    dispatch(
      RegisterSale({ 
        name, 
        document, 
        birth_date, 
        email, 
        phone, 
        quantity, 
        address: sale.address 
      })
    );

  };

  return (
    <Container>
      <div className="row">
        <DatasContainer className="col-lg-5">
          <div className="content-datas">
            
            {showConfirm ? (
              <>
                <div className="mb-2">
                  <h3>Confira seu pedido antes de finalizar</h3>
                  <p>Atenção, a BemBit não se responsailiza por informações preenchidas incorretamente.</p>
                  <div className="mt-5 d-flex align-items-center edit-datas" onClick={() => setShowConfirm(!showConfirm)}>
                    <BsArrowLeft />
                    <p>Editar informaçoes</p>
                  </div>
                </div>
                <TextInfo
                  label={"Nome Completo"}
                  text={datasState?.name}
                  />

                <TextInfo
                  label={"CPF"}
                  text={datasState?.document}
                  />

                <TextInfo
                  label={"Data de Nascimento"}
                  text={datasState?.birth_date}
                  />

                <TextInfo
                  label={"Email"}
                  text={datasState?.email}
                  />

                <TextInfo
                  label={"Celular"}
                  text={datasState?.phone}
                  />
                <Button text={"Finalizar compra"} onClick={() => handler()} />
              </>
              ) : (
              <>
                <div className="mb-2">
                  <h3>Insira seus dados</h3>
                  <p>Os dados abaixos são importantes para finalizar o pagamento dos tokens</p>
                </div>
                <Card>
                  <>
                    <div className="box-datas">
                      <InputGroup>
                        <Input 
                          name="name" 
                          label={"Nome completo"} 
                          value={datasState?.name}
                          onChange={setValue}
                          />
                      </InputGroup>
                      <InputGroup>
                        <Input 
                          mask={"999.999.999-99"} 
                          name="document" 
                          type={"document"} 
                          label={"CPF"} 
                          value={datasState?.document}
                          onChange={setValue}
                          />
                      </InputGroup>
                      <InputGroup>
                        <Input 
                          mask={"99/99/9999"} 
                          name="birth_date" 
                          type={"birth_date"} 
                          label={"Data de Nascimento"}
                          value={datasState?.birth_date}
                          onChange={setValue} 
                          />
                      </InputGroup>
                      <InputGroup>
                        <Input
                          name="phone"
                          label={"Celular"}
                          value={datasState?.phone}
                          onChange={setValue}
                          />
                      </InputGroup>
                      <InputGroup>
                        <Input 
                          name="email" 
                          label={"Email"}
                          value={datasState?.email}
                          onChange={setValue}
                          />
                      </InputGroup>
                      <div className="mt-2">
                        <Button text={"Finalizar compra"} onClick={() => handlerDatas()} />

                      </div>
                    </div>
                  </>
                </Card>
              </>
            )}
            
          </div>
        </DatasContainer>
        <InfoContainer className="col-lg-7">
          <div className="row">
          {showConfirm ? (
            <div className="col-lg-9 mx-auto">
              <div className="mb-4">
                <h3>Informações de pagamento</h3>
              </div>
              <div className="row info-token d-flex">
                <div className="col-lg-6">
                  <span>Token</span>
                </div>
                <div className="col-lg-6">
                  <span>Quantidade</span>
                </div>
                <div className="col-lg-12">
                  <hr />
                </div>
                <div className="col-lg-6">
                  <p>Bitcoin</p>
                </div>
                <div className="col-lg-6">
                  <p>{sale.quantity} BTC</p>
                </div>
              </div>
              <hr />
              <div className="info-wallet">
                <span>Endereço de carteira (BEP20):</span>
                <p>{sale?.address}</p>
              </div>
              <div className="value-pay">
                <div className="d-flex justify-content-between">
                  <span>Taxas:</span>
                  <p>{FormatToReal(sale?.fee)}</p>
                </div>
                <div className="d-flex total  justify-content-between">
                  <span>Total a pagar:</span>
                  <p>{FormatToReal(sale?.total_pay)}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-lg-9 mx-auto info-important">
              <div className="mb-4">
                <h3>Informações bem importantes!</h3>
              </div>
              <div className="my-4">
                <h4>1. Informação de seus dados</h4>
                <p>A BemBit não se responsabiliza por informações preenchidas incorretamente. Por isso, é extremamente importante que você confira seus dados e principalmente se o endereço da sua carteira está correto e se ela tem suporte a rede <strong>Binance Smart Chain</strong> (BSC – BEP 20), caso contrário seus tokens serão perdidos.</p>
              </div>

              <div className="my-4">
                <h4>2. Taxas cobradas</h4>
                <p>Será cobrada taxa administrativa de <strong>R$ 5,00 + 2%</strong> (cinco reais) por compra realizada.</p>
              </div>

              <div className="my-4">
                <h4>3. Limite de compras</h4>
                <p>Você poderá realizar quantas comprar quiser até o limite máximo de <strong>R$ 30.000,00</strong> (trinta mil reais) por mês, caso queira aumentar seu limite, envie um e-mail para <a href="mailto:contato@bembit.com">contato@bembit.com</a>
                </p>
              </div>

              <div className="d-flex mt-3">
                <div style={{ marginRight: 10 }}>
                  <BsCurrencyExchange size={25}/>
                </div>
                <p>Para comprar mais de um token, basta finalizar esta compra e voltar ao menu inicial.</p>
              </div>
            </div>
          )}
          </div>
        </InfoContainer>

      </div>
    </Container>
  );
}

export default SalesConfirm;
