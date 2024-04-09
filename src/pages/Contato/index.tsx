import { useParams } from "react-router-dom";
import { Menu } from "../../components/Menu"
import { FormContainer } from "./styles"
import { useEffect, useState } from "react";
import axios from "axios";
import { Col4, Col6, Row } from "../Produtos/styles";

export const Contato = () => {

    interface IContatos{
        id: number;
        nome: string;
        telefone: number;
        email: string;
        cidade: string;
        observacao: string;
    }

    const { id } = useParams()

    const [contato, setContato] = useState<IContatos>()

    useEffect(() => {
        axios.get('https://localhost:3000/contato?id=' + id).then((dados)=> {
            setContato(dados.data[0])
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])

    return (
        <>
        <Menu />
            <body>
                <FormContainer>
                    <div>
                        <h1>Contato</h1>

                        <span>Está é a página de contato. Em caso de dúvidas, críticas ou sujestões, preencha o formulário abaixo e iremos responder.</span>

                        <form id="meuFormulario">
                            <label htmlFor="">Digite seu nome</label>
                            <input type="text" id="nome" required placeholder="Digite o seu nome:" />

                            <label htmlFor="">Digite seu número de telefone</label>
                            <input type="tel" id="telefone" required placeholder="Número de telefone:" />

                            <label htmlFor="">Digite seu e-mail</label>
                            <input type="email" id="email" required placeholder="Número seu e-mail:" />

                            <label htmlFor=""></label>
                            <select name="cities" id="citie" required>
                                <option value="">Selecione sua cidade</option>
                                <option value="">Umuarama</option>
                                <option value="">Maria Helena</option>
                            </select>

                            <textarea name="" id=""></textarea>

                            <button type="submit">Enviar</button>
                        </form>

                        {
                    contato ?
                        <>
                            <h1>Contato</h1>
                            <Row>
                                <Col6>
                                    <h3>{contato.nome}</h3>
                                </Col6>
                                <Col6>
                                    <h3>{contato.telefone}</h3>
                                </Col6>
                                <Col6>
                                    <h3>{contato.email}</h3>
                                </Col6>
                                <Col6>
                                    <h3>{contato.cidade}</h3>
                                </Col6>
                                <Col6>
                                    <h3>{contato.observacao}</h3>
                                </Col6>
                            </Row>
                        </>
                        :
                        <h2>Nenhum contato encontrado!</h2>
                }
                    </div>
                </FormContainer>
            </body>
        </>
    )
}