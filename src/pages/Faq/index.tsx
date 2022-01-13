import { ReactElement } from "react";

import { BsArrowDown } from "react-icons/bs";

import { 
    FaqContainer
} from "./styles";

import Accordion from "../../components/Accordion";

function Faq(): ReactElement {
  return (
    <FaqContainer>
        <div className="hero-info">
            <div className="container">
                <div className="col-lg-4 text-center mx-auto">
                    <h3>Perguntas frequentes</h3>
                    <p>Desça a tela para ver as perguntas frequentes e tire suas dúvidas sobre a bembit.</p>
                    <BsArrowDown size={20}/>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="col-lg-7 mx-auto mb-5">
                <Accordion />
            </div>
        </div>
  </FaqContainer>
  );
}

export default Faq;
