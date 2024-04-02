import { useParams } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { Button, Col4, Col6, Input, Row, TextButton } from "./styles"
import { useEffect } from "react"
import axios from "axios"
export const Produtos = () => {

    //importando o parametro ID que veio da rota
    const { id } = useParams()

    //consumindo a url que vem no back, onde lá esta fazendo o SELECT, buscando o produto por ID
    //o useEffect é um hook que é executado toda vez que iniciamos um componente
    //o axios vai la no backend e tras os dados e ja que o useEffect é executado toda vez que o componente é iniciado, ele fica dentro do useEffect
    useEffect(() => {
        axios.get('http://localhost:3000/produtos?id='+id)
        .then((dados) => {
            //criando um estado abaixo
            setProduto(dados.data[0])
        })
        .catch((err) => {
            console.log(err)
        })
    },[id])

    return (
        //abrindo o fragment
        <>
            <Menu />
            <div
                style={{
                    paddingLeft: '6%',
                    paddingRight: '6%',
                    marginTop: 20,
                    marginBottom: 40
                }}
            >
                <>
                    <h1>Produto</h1>
                    <Row>
                        <Col4>
                            <img
                                style={{
                                    width: '100%'
                                }}
                                src=""
                            />
                        </Col4>
                        <Col6>
                            <h3>Tv dos cria</h3>
                            <p
                                style={{
                                    textDecoration: 'line-through'
                                }}
                            >R$ 1.500,00</p>

                            <form>
                                <Input
                                    type="number"
                                    name="quantidade"
                                    defaultValue={1}
                                    min="1"
                                    required
                                />

                                <Button>
                                    <TextButton>
                                        Adicionar ao Carrinho
                                    </TextButton>
                                </Button>
                            </form>
                        </Col6>
                    </Row>
                </>
            </div >
        </>
        //fechando o fragment
    )
}