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
    const { name, document, birth_date, email, phone, quantity } = sale;
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
  }

  const handler = () => {
    const { quantity, fee, total_pay } = sale;
    const { name, document, birth_date, email, phone } = datasState;
    
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

    // dispatch(
    //   Create({
    //     quantity,
    //     name,
    //     document,
    //     birth_date,
    //     email,
    //     phone,
    //     fee: fee,
    //     total_pay: total_pay,
    //     address: sale.address,
    //   })
    // );

    setShowConfirm(!showConfirm);
  };

  return (
    <Container>
      <div className="row">
        <DatasContainer className="col-lg-5">
          <div className="content-datas">
            <div className="mb-2">
              <h3>Insira seus dados</h3>
              <p>Os dados abaixos são importantes para finalizar o pagamento dos tokens</p>
            </div>
            {showConfirm ? (
              <>
                <TextInfo
                  label={"Nome Completo"}
                  text={sale?.name}
                  />

                <TextInfo
                  label={"CPF"}
                  text={sale?.document}
                  />

                <TextInfo
                  label={"Data de Nascimento"}
                  text={sale?.birth_date}
                  />

                <TextInfo
                  label={"Email"}
                  text={sale?.email}
                  />

                <TextInfo
                  label={"Celular"}
                  text={sale?.phone}
                  />
                <Button text={"Finalizar compra"} onClick={() => handlerDatas()} />
              </>
            ) : (
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
                      <Button text={"Finalizar compra"} onClick={() => handler()} />

                    </div>
                  </div>
                </>
              </Card>
            )}
          </div>
        </DatasContainer>
        <InfoContainer className="col-lg-7">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <div className="mb-4">
                <h3>Informações</h3>
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
                  <p>0.0100 BTC</p>
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
                  <p>R$ 100,00</p>
                </div>
                <div className="d-flex total  justify-content-between">
                  <span>Total a pagar:</span>
                  <p>R$ 100,00</p>
                </div>
              </div>
            </div>
          </div>
        </InfoContainer>

      </div>
    </Container>
  );
}

export default SalesConfirm;
