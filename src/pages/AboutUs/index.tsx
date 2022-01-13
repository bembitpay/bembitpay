import { ReactElement } from "react";

import { BsArrowDown } from "react-icons/bs";

import { 
    AboutUsContainer
} from "./styles";

function AboutUs(): ReactElement {
  return (
      <AboutUsContainer>
        <div className="hero-info">
            <div className="container">
                <div className="col-lg-4 text-center mx-auto">
                    <h3>Saiba quem é a Bembit </h3>
                    <p>Desça a tela para ver as taxas que cobramos em nosso site para o seu melhor custo benefícios.</p>
                    <BsArrowDown size={20}/>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="col-lg-7 mx-auto mb-5">
                <h5>Taxas para tokens</h5>
                <p>
                Quem trabalha com marketing e vendas deve estar atento aos 4 tipos de análise de dados. Isso porque eles são fontes valiosas para tornar a tomada de decisão nas empresas mais estratégicas. O que isso significa? Menos erros e otimização dos recursos, o que é fundamental para alcançar os resultados almejados e garantir a competitividade da empresa no marcado. Quer saber quais são os 4 tipos de análise de dados e como fazê-los? Então, esta leitura é para você! Confira! 1. Análise preditiva 2. Análise prescritiva 3. Análise descritiva 4. Análise diagnóstica Faça o download deste post inserindo seu e-mail abaixo Informe seu e-mail aqui Não se preocupe, não fazemos spam. 1. Análise preditiva A análise preditiva é o cálculo que traz com exatidão as probabilidades de algum fato acontecer em qualquer cenário, com base no processamento um grande volume de informações. Saiba mais sobre a análise preditiva, a seguir! O que é a análise preditiva? As novas tecnologias impulsionaram o uso da análise preditiva nas organizações, principalmente, com a adoção de ferramentas como o Big Data. Sua função analítica ajuda os gestores a localizarem dados estratégicos em meio a milhões de dados gerados na web. Quando ela deve ser utilizada? Aliada à tecnologia, a análise preditiva pode ser usada para fazer a previsão, por exemplo, da aceitação de um produto novo no mercado. Ela ainda pode ser utilizada para compor elementos da persona e compreender quais estratégias de marketing são mais eficazes. Isso contribui para mitigar falhas em todo o processo de lançamento e manutenção de produtos e serviços no mercado.
                </p>
            </div>
            <div className="col-lg-7 mx-auto">
                <h5>Taxas para tokens</h5>
                <p>Lorem ipsum dolor sit amet, mea ut vivendo eleifend, ea timeam principes pri. Duo ex facilis nominati. Ius ferri mazim nobis no, per ea fugit ullum laoreet, ei solum vulputate moderatius vel. Quidam omnium appellantur ea nam, nec vide percipit referrentur in.

                Sed option utroque id, et audire menandri usu. Et oratio invenire adipiscing has, impedit vocibus commune ut quo. Ea sit habemus imperdiet. Dicit eligendi mei in, debet dicant at pri. Eos sumo dico ut, at nam aliquip persequeris, eum in facete disputando.

                Pro et lucilius conceptam, eam te ipsum dicam oblique, an autem ipsum noster mea. Has ex solum erant, te veniam probatus mea. Duo ex legimus epicuri argumentum, sit tamquam impedit ancillae te. Alii dico omittantur vim eu, nemore corrumpit consetetur pri ad, eu doming sanctus argumentum est.

                Eu vel amet doming, pro ea falli nihil torquatos. Persecuti definiebas dissentias vim ei, pri vero interpretaris at. Sed in vitae forensibus intellegebat, cu sumo comprehensam has. Ex iisque dolores facilisi ius. Usu dolor decore fabulas in, singulis accusata appellantur eum at, veri assentior tincidunt mel no. Mei vidisse posidonium ut. Zril partem vim ei, eam ad inimicus mediocritatem, ludus appellantur ad his.

                Bonorum delicatissimi sit at, nam tation sententiae ei. Iuvaret definitiones ea has, at adipisci tincidunt scriptorem sea. In duo viris elitr argumentum, quo stet zril ea. Eos discere luptatum signiferumque ne, ne quidam vivendo fastidii sea.</p>
            </div>
        </div>
      </AboutUsContainer>
  );
}

export default AboutUs;