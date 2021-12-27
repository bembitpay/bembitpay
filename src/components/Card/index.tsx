import React, { useEffect, ReactElement } from "react";
import { CardProps } from "./props";

import { Card } from "./styles";

function CardComponent({
  title,
  titleElement,
  subtitle,
  children,
  style,
}: CardProps): ReactElement {
  return (
    <Card style={style}>
      <h2 className="text-center">{title}</h2>
      <p className="text-center">{subtitle}</p>

      {children}
    </Card>
  );
}

export default CardComponent;
