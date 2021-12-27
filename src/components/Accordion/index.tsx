import React, { ReactElement, useState } from "react";

import { Accordion } from "./styles";

import { BsPlus } from 'react-icons/bs';

const Faq = [
    {
        title: "Como comprar usando PIX?",
        description: "Facer velit eum ea, ad perfecto erroribus sed. Ut duo tempor praesent. Oporteat dignissim eum ad. Vel ceteros dignissim at, ius illum impedit persecuti ei, eos in iriure vituperatoribus. Qui no natum omittantur. Qui quidam periculis ut, duo ne velit paulo eripuit.",
    },
    {
        title: "Como recebo as moedas em minha carteira?",
        description: "Facer velit eum ea, ad perfecto erroribus sed. Ut duo tempor praesent. Oporteat dignissim eum ad. Vel ceteros dignissim at, ius illum impedit persecuti ei, eos in iriure vituperatoribus. Qui no natum omittantur. Qui quidam periculis ut, duo ne velit paulo eripuit.",
    },
    {
        title: "Tem como pagar usando QR Code?",
        description: "Facer velit eum ea, ad perfecto erroribus sed. Ut duo tempor praesent. Oporteat dignissim eum ad. Vel ceteros dignissim at, ius illum impedit persecuti ei, eos in iriure vituperatoribus. Qui no natum omittantur. Qui quidam periculis ut, duo ne velit paulo eripuit.",
    },
    {
        title: "Tem como pagar usando QR Code?",
        description: "Facer velit eum ea, ad perfecto erroribus sed. Ut duo tempor praesent. Oporteat dignissim eum ad. Vel ceteros dignissim at, ius illum impedit persecuti ei, eos in iriure vituperatoribus. Qui no natum omittantur. Qui quidam periculis ut, duo ne velit paulo eripuit.",
    },
    {
        title: "Tem como pagar usando QR Code?",
        description: "Facer velit eum ea, ad perfecto erroribus sed. Ut duo tempor praesent. Oporteat dignissim eum ad. Vel ceteros dignissim at, ius illum impedit persecuti ei, eos in iriure vituperatoribus. Qui no natum omittantur. Qui quidam periculis ut, duo ne velit paulo eripuit.",
    },
    {
        title: "Tem como pagar usando QR Code?",
        description: "Facer velit eum ea, ad perfecto erroribus sed. Ut duo tempor praesent. Oporteat dignissim eum ad. Vel ceteros dignissim at, ius illum impedit persecuti ei, eos in iriure vituperatoribus. Qui no natum omittantur. Qui quidam periculis ut, duo ne velit paulo eripuit.",
    },
    {
        title: "Tem como pagar usando QR Code?",
        description: "Facer velit eum ea, ad perfecto erroribus sed. Ut duo tempor praesent. Oporteat dignissim eum ad. Vel ceteros dignissim at, ius illum impedit persecuti ei, eos in iriure vituperatoribus. Qui no natum omittantur. Qui quidam periculis ut, duo ne velit paulo eripuit.",
    },
    {
        title: "Tem como pagar usando QR Code?",
        description: "Facer velit eum ea, ad perfecto erroribus sed. Ut duo tempor praesent. Oporteat dignissim eum ad. Vel ceteros dignissim at, ius illum impedit persecuti ei, eos in iriure vituperatoribus. Qui no natum omittantur. Qui quidam periculis ut, duo ne velit paulo eripuit.",
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
