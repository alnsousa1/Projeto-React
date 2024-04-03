import { useParams } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { Button, Col4, Col6, Input, Row, TextButton } from "./styles"
import { useEffect, useState } from "react"
import axios from "axios"
export const Produtos = () => {

    interface IProdutos {
        id: number;
        id_categoria: string;
        imagemg: string;
        imagemp: string;
        title?: string;
        price: number;
        promo: number;
    }

    //importando o parametro ID que veio da rota
    const { id } = useParams()

    const [produto, setProduto] = useState<IProdutos>()

    //consumindo a url que vem no back, onde lá esta fazendo o SELECT, buscando o produto por ID
    //o useEffect é um hook que é executado toda vez que iniciamos um componente
    //o axios vai la no backend e tras os dados e ja que o useEffect é executado toda vez que o componente é iniciado, ele fica dentro do useEffect
    useEffect(() => {
        axios.get('http://localhost:3000/produtos?id=' + id)
            .then((dados) => {
                //criando um estado abaixo
                setProduto(dados.data[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

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
                {
                    produto ?
                        <>
                            <h1>Produto</h1>
                            <Row>
                                <Col4>
                                    <img
                                        style={{
                                            width: '100%'
                                        }}
                                        src={'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/'
                                            + produto.imagemg
                                        }
                                    />
                                </Col4>
                                <Col6>
                                    <h3>{produto.title}</h3>
                                    <p
                                        style={{
                                            textDecoration: 'line-through'
                                        }}
                                    >R${produto.price}</p>

                                    <p 
                                        style={{
                                            fontWeight: 'bold',
                                            color: 'red'
                                        }}
                                    >R${produto.promo}</p>

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
                        :
                        <h2>Nenhum produto encontrado!</h2>
                }
            </div >
        </>
        //fechando o fragment
    )
}