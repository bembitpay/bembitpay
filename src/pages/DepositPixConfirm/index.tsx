import React, { useEffect, ReactElement, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Title from "../../components/Title";
import Lottie from "lottie-react-web";
import QRCode from "react-qr-code";

import {} from "react-router-dom";
import Animation from "../../assets/json/1870-check-mark-done.json";

import { BsPhone } from "react-icons/bs";

import { Create, Detail, Check } from "../../store/modules/deposit/actions";
import { Card, TextInfo } from "../../components";
import {
  CounterContainer,
  Container,
  TitleContainer,
  Content,
  ColumnFields,
  Item,
  ItemLabel,
  ItemValue,
  QrcodeText,
  Row,
  BoxDepositPix,
  AnimationContainer,
  BoxQrCode,
  BoxInfoPay,
  ColumnQrCode,
} from "./styles";

import Button from "../../components/Button";
import { DepositState } from "../../store/modules/deposit/types";
import { FormatToReal } from "../../utils";

let TimerControl: any = null;

function DepositPixConfirm(): ReactElement {
  const history = useHistory();
  const [counter, setCounter] = useState(60);
  const [paid, setPaid] = useState(false);
  const [timeCounter, setTimeCounter] = useState(new Date().getTime());
  const [isCopied, setIsCopied] = useState("Copiar código");
  const dispatch = useDispatch();

  const { deposit, accountAtar }: DepositState = useSelector(
    (state: any) => state.deposit,
    shallowEqual
  );
  const counterHandler = () => {
    TimerControl = setInterval(() => {
      CheckDeposit();
    }, 1000);
  };

  useEffect(() => {
    counterHandler();
  }, []);

  useEffect(() => {
    if (deposit.status === "processed") {
      clearInterval(TimerControl);
      handler();
      setCounter(0);
    }
  }, [deposit, TimerControl]);

  const CheckDeposit = () => {
    const { token } = deposit;
    dispatch(Check({ token: String(token), loading: false }));
  };

  const handler = () => {
    setPaid(true);
    setTimeout(() => {
      history.push("/deposit/info/pix/done");
    }, 3000);
  };

  const paymentUrl = () => {
    navigator.clipboard.writeText(deposit?.payment_url);
    setIsCopied("Copiado!");
    setTimeout(() => {
      setIsCopied("Copiar código");
    }, 3000);
  }

  return (
    <div className="container py-5">
      <div className="row">
        <BoxDepositPix className="col-lg-12 align-items-center ">
          <h3 className="text-center mb-4">Pagamento via PIX</h3>
          <Card style={{padding: 30, margin: '0 auto', maxWidth: 600}}>
            <>
              {paid ? (
                <AnimationContainer>
                  <Lottie
                    options={{
                      animationData: Animation,
                      loop: false,
                    }}
                    height={129}
                  />
                </AnimationContainer>
              ) : (
                <CounterContainer>
                  <div className="alert alert-warning"> AGUARDANDO SEU DEPÓSITO</div>
                </CounterContainer>
              )}
              <BoxQrCode className="row align-items-center">
                <div className="col-lg-6">
                  <ColumnQrCode>
                    <QRCode value={deposit?.payment_url} size={220} />
                  </ColumnQrCode>
                </div>
                <div className="col-lg-6 text-center deposit-price">
                  <span>Valor para depositar</span>
                  <p>{FormatToReal(deposit?.total)}</p>
                  <Button onClick={() => paymentUrl()} className="a-primary" text={isCopied}/>
                </div>
                <div className="col-lg-12">
                  <div className="info-qrcode d-flex align-items-center">
                    <BsPhone size={30}/>
                    <p>Leia o QR Code ou use o Código PIX para efetuar o depósito e finalizar a compra.</p>
                  </div>
                </div>
              </BoxQrCode>
              <hr className="my-4 my-lg-5"/>
              <BoxInfoPay className="row">
                <div className="col-lg-12">
                  <span className="mb-4">Chave PIX</span>
                  <p className="pix-key">{deposit?.payment_url}</p>
                </div>
                <div className="col-lg-12 d-flex justify-content-between">
                  <span>Taxa total:</span>
                  <p>{FormatToReal(deposit?.fee)}</p>
                </div>
                <div className="col-lg-12 d-flex justify-content-between">
                  <span>Valor da operação:</span>
                  <p>{FormatToReal(deposit?.amount_receivable)}</p>
                </div>
              </BoxInfoPay>
            </>
          </Card>
        </BoxDepositPix>
      </div>
    </div>
    
    
  );
}

export default DepositPixConfirm;
