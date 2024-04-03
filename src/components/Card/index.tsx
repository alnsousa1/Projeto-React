import React from "react"
import { Title, TitlePreco, TextPromo,Button, TextButton, CardBody  } from "./styles"
import { useNavigate } from "react-router-dom";

interface IProps {
    id: number;
    imagemp: string;
    title: string;
    price: number;
    promo: number;
}


export const Card= (props: IProps) => {

    const navigate = useNavigate();
    

    return(
        <>
        <CardBody>
              <img src={props.imagemp} alt="" />
              <Title>{props.title}</Title>
              <TitlePreco>R${props.price}</TitlePreco>
              <TextPromo>R${props.promo}</TextPromo>
              <Button 
                onClick={() => {
                    navigate('/produto/' + props.id)
                }}
              >
                <TextButton>Detalhes</TextButton>
              </Button>
          </CardBody>
        </>
    )

}