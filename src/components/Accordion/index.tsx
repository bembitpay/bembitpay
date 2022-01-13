import React, { ReactElement, useState } from "react";

import { Accordion } from "./styles";

import { BsPlus } from 'react-icons/bs';

const Faq = [
    {
        title: "O que é a Bembit?",
        description: "A BemBit é uma plataforma para você que quer comprar tokens de forma bem simples e bem rápida, utilizando o pix como forma de pagamento. Você seleciona o token que deseja incluir na sua carteira de investimentos e paga com pix. Somos a primeira plataforma com venda direta de tokens por pix da América Latina.",
    },
    {
        title: "Como comprar tokens com pix?",
        description: "Para comprar tokens por pix na BemBit é bem fácil. Basta selecionar o token, informar o endereço da sua carteira BSC, informar o valor em reais da compra e clicar em “comprar agora”. Após o pedido de compra, você terá 10 minutos para realizar o pix. Em seguida os tokens serão enviados para sua carteira automaticamente.",
    },
    {
        title: "Quais tokens posso comprar com pix?",
        description: "Atualmente existem milhares de tokens disponíveis no mercado, na BemBit, listamos os principais e mais promissores do mercado atual. Não tem o token que você gostaria de comprar com pix? Fale com a gente aqui.",
    },
    {
        title: "Posso comprar mais de um token por pix?",
        description: "Pode sim! Aqui na BemBit, você pode comprar com pix todos os tokens listados. Basta realizar o procedimento de compra para cada um dos tokens.",
    },
    {
        title: "O que são tokens?",
        description: "No geral, tokens são representações de um ativo físico no mundo digital. Diferente das criptomoedas, os tokens não tem blockchain própria e utilizam de uma já existente para realizar suas transações. Os tokens são divididos em algumas funcionalidades: Payment Tokens, Utility tokens, Non-fungible tokens (NFT), Security tokens, entre outros.",
    },
    {
        title: "Quanto vale um token?",
        description: "O valor de cada token é basicamente feito pelo seu lastro, ou seja, se um determinado token é baseado em um ativo físico, a valorização dele estará diretamente ligado a quantidade de tokens emitidos vs o valor do ativo físico. O valor do token também",
    },
];

function AccordionComponent(): ReactElement {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if(clicked === index) {
            return setClicked(null);
        }

        setClicked(index)
    };

    return (
        <Accordion className="row">
            {Faq.map((item, index) => (
                <div className={"col-12 accordion-item " + (clicked === index ? 'open' : null)} key={index }>
                    <div 
                        className="d-flex justify-content-between"
                        onClick={() => toggle(index)}
                    >
                        <h4>{item.title}</h4>
                        <span><BsPlus size={30} /></span>
                    </div>
                    {clicked === index ? (
                        <p>{item.description}</p>
                    ) : null}
                </div>
            ))}
        </Accordion>
    );
}

export default AccordionComponent;
