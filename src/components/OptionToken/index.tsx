import React, { ReactElement, useState } from "react";
import { OptionToken } from "./props";

import {
    Dropdown,
    DropBnt,
    DropContent,
    DropItem,
    DropInput
} from "./styles";

import imgBitcoin from "../../assets/images/crypto/bitcoin.png"; 

import options from "./options";

function OptionTokenComponent({}: OptionToken): ReactElement {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Bitcoin");
  const [optionToken, setOptionToken] = useState("BTC");

  const setValue = (e: React.FormEvent<HTMLInputElement>) => {
    setOptionToken(e.currentTarget.value);
  };
  
  return (
      <>
        <Dropdown>
            <DropBnt onClick={(e) => setIsActive(!isActive)}>
                <DropInput
                    onChange={(e) => setValue(e)}
                    value={optionToken}
                    disabled
                    className={(optionToken.length > 0 ? "has-letter" : "")} 
                />
                <label>{selected}</label>

            </DropBnt>
            {isActive && (
                <DropContent>
                    {options.map(option => (
                        <DropItem onClick={(e) => {
                            setSelected(option.title)
                            setOptionToken(option.subtitle)
                            setIsActive(false)
                        }} className="d-flex align-items-center">
                            <img src={imgBitcoin}/>
                            <div className="content">
                                <p>{option?.title}</p>
                                <label>{option?.subtitle}</label>
                            </div>
                        </DropItem>
                    ))}
                </DropContent>
            )}
        </Dropdown>
      </>
  );
}

export default OptionTokenComponent;
