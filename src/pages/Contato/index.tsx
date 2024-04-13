import { Menu } from "../../components/Menu"
import { FormContainer } from "./styles"
import { FormEvent, useState } from "react";
import axios from "axios";

export const Contato = () => {

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [cidade, setCidade] = useState("");
    const [areatext, setAreatext] = useState("");

    function criarTarefa(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const id = '';

        axios.post('http://localhost:3000/contatos', { nome, telefone, email, cidade, areatext })
            .then((res) => {
                console.log(res.data);
                limparCampos();
            })
            .catch(err => console.error(err));
    }

    function limparCampos() {
        setNome("");
        setTelefone("");
        setEmail("");
        setCidade("");
        setAreatext("");
    }

    return (
        <>
            <Menu />
            <body>
                <FormContainer onSubmit={criarTarefa}>
                    <div>
                        <h1>Contato</h1>

                        <span>Está é a página de contato. Em caso de dúvidas, críticas ou sujestões, preencha o formulário abaixo e iremos responder.</span>

                        <label htmlFor="nome">Digite seu nome</label>
                        <input type="text" id="nome" name="nome" value={nome} onChange={e => setNome(e.target.value)} required placeholder="Digite o seu nome:" />

                        <label htmlFor="telefone">Digite seu número de telefone</label>
                        <input type="number" id="telefone" name="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} required placeholder="Número de telefone:" />

                        <label htmlFor="email">Digite seu e-mail</label>
                        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Número seu e-mail:" />

                        <label htmlFor="cidades"></label>
                        <select name="cities" id="citie" value={cidade} onChange={e => setCidade(e.target.value)} required>
                            <option value="">Selecione sua cidade</option>
                            <option value="Umuarama">Umuarama</option>
                            <option value="Maria Helena">Maria Helena</option>
                        </select>

                        <textarea name="areatext" value={areatext} onChange={e => setAreatext(e.target.value)} id="textarea"></textarea>

                        <button type="submit">Enviar</button>
                    </div>
                </FormContainer>
            </body>
        </>
    )
}