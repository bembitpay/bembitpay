import React, { useEffect, ReactElement, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Title from "../../components/Title";
import QRCode from "react-qr-code";

import {} from "react-router-dom";

import { Create } from "../../store/modules/deposit/actions";
import Button from "../../components/Button";
import { Card, TextInfo } from "../../components";

import { BsCheck2 } from "react-icons/bs";

import {
  Container,
  TitleContainer,
  ReceiptConent,
  ButtonContainer,
  Content,
  Row,
  BoxDepositPixDone,
  BoxPixDone,
} from "./styles";

import Receipt from "../../components/Receipt";
import ReceiptTutorialDeposit from "../../components/Receipt/tutorialDeposit";

import { DepositState } from "../../store/modules/deposit/types";
import { FormatToReal } from "../../utils";
import { SaleState } from "../../store/modules/sale/types";

import {
  listDepositsTypes,
  GetSale,
} from "../../store/modules/general/actions";

function DepositAtarDone(): ReactElement {
  const history = useHistory();
  const dispatch = useDispatch();

  const { sale }: SaleState = useSelector(
    (state: any) => state.sale,
    shallowEqual
  );

  const { deposit, accountAtar }: DepositState = useSelector(
    (state: any) => state.deposit,
    shallowEqual
  );

  useEffect(() => {
    dispatch(listDepositsTypes());
    dispatch(GetSale());
  }, []);


  return (
    <div className="container py-5">
      <div className="row">
        <BoxDepositPixDone className="col-lg-12 align-items-center">
          <h3 className="text-center mb-4">Muito obrigado pela compra</h3>
          <Card style={{padding: 30, margin: '0 auto', maxWidth: 600}}>
            <>
              <BoxPixDone>
                <div className="row title-done d-flex justify-content-between">
                  <div className="col-lg-6">
                    <p>Compra feita com sucesso</p>
                    <span>de Bembit para {sale?.name}</span>
                  </div>
                  <div className="col-lg-6 done">
                    <span>
                      <BsCheck2 size={70} style={{ fill: "#009E06"}}/>
                    </span>
                  </div>
                </div>
                <hr className="my-5"/>
                <div className="row">
                  <div className="col-lg-12  d-flex justify-content-between token">
                    <span className="mb-4">Token</span>
                    <p className="pix-key">Bitcoin</p>
                  </div>
                  <div className="col-lg-12  d-flex justify-content-between token">
                    <span className="mb-0">Quantidade</span>
                    <p className="pix-key">{sale?.quantity} BTC</p>
                  </div>
                  <div className="col-lg-12">
                    <hr style={{ margin: "30px 0" }}/>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-between info">
                    <span>Protocolo:</span>
                    <p>{deposit?.token}</p>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-between info">
                    <span>Taxas pagas:</span>
                    <p>{sale?.fee}</p>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-between info">
                    <span className="mb-0">Total Pago:</span>
                    <p>{FormatToReal(deposit?.total)}</p>
                  </div>
                  <div className="col-lg-12">
                    <hr style={{ margin: "30px 0" }}/>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-between info">
                    <span>Nome completo:</span>
                    <p>{sale?.name}</p>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-between info">
                    <span className="mb-5">Email</span>
                    <p>{sale?.email}</p>
                  </div>
                  <div className="col-lg-12">
                    <Button className="a-primary" text={"Comprar novamente"} onClick={() => {window.location.href = "/";}}/>
                  </div>
                </div>
              </BoxPixDone>
            </>
          </Card>
        </BoxDepositPixDone>
      </div>
    </div>
    // <div className="container pt-5">
    //   <Card
    //     title={"Pagamento Pix"}
    //     subtitle={"Seu comprovante de deposito"}
    //     >
    //     <>
    //       <div className="row mt-5">
    //         <div className="col-12">
    //           <div className="row mb-5">
    //             <div className="col-12">
    //               <TextInfo
    //                 label={"Protocolo"}
    //                 text={`${deposit.token}`}
    //                 />

    //               <TextInfo
    //                 label={"Valor"}
    //                 text={FormatToReal(deposit?.total)}
    //                 />

    //               <TextInfo
    //                 label={"Taxa total"}
    //                 text={FormatToReal(deposit?.fee)}
    //                 />

    //               <TextInfo
    //                 label={"Valor da operação"}
    //                 text={FormatToReal(deposit?.amount_receivable)}
    //                 />

    //               {/* <ReceiptTutorialDeposit /> */}
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-12">
    //           <Button className="default" text={"Voltar"} onClick={() => history.push("/")} />
    //         </div>
    //       </div>
    //     </>
    //   </Card>
    // </div>
  );
}

export default DepositAtarDone;
