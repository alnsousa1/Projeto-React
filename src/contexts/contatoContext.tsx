import axios from "axios";
import {
    ReactNode,
    createContext,
    useState,
    useEffect
} from "react";


interface Contatos {
    nome: string;
    telefone: number;
    email: string;
    cidade: string;
    observacao: string;
}

interface ContatosComID {
    nome: string;
    telefone: number;
    email: string;
    cidade: string;
    observacao: string;
}


interface PropsContatoContext {
    contatos: Array<ContatosComID>;
    createContato: (contatos: Contatos) => Promise<void>;
}

export const ContatoContext = createContext(
    {} as PropsContatoContext
)
interface PropsContatoProvider {
    children: ReactNode
}

export function ContatosProvider({children}: PropsContatoProvider) {

    const [contatos, setContatos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/contatos')
        .then((res) => {
            setContatos(res.data)
        })
    }, [])



    async function createContato(data: Contatos){
        await axios.post('http://localhost:3000/contatos', data);
        axios.get('http://localhost:3000/contatos')
        .then((res) =>{
            setContatos(res.data);
        });
    }

    return (
        <ContatoContext.Provider value={{
            contatos,
            createContato,
        }}>
        </ContatoContext.Provider>
    )
}