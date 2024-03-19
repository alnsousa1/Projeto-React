import React from "react"
import { Title, TitlePreco, TextPromo,Button, TextButton, CardBody  } from "./styles"

interface IDataCard {
    id: number;
    imagemp: string;
    title: string;
    price: number;
    promo: number;
}


export const Card:React.FC<IDataCard>= ({promo,price,title,imagemp}) => {
    

    return(
        <>
        <CardBody>
              <img src={imagemp} alt="" />
              <Title>{title}</Title>
              <TitlePreco>{price}</TitlePreco>
              <TextPromo>{promo}</TextPromo>
              <Button>
                <TextButton>Detalhes</TextButton>
              </Button>
          </CardBody>
        </>
    )

}