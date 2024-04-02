import { Menu } from "../../components/Menu"
import { FormContainer } from "./styles"

export const Contato = () => {
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
                    </div>
                </FormContainer>
            </body>
        </>
    )
}