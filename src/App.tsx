import { ContatosProvider } from './contexts/contatoContext'
import { Rotas } from './routes'
import { GlobalStyle } from './styles/global'


function App() {

  return (
    <>
    <GlobalStyle></GlobalStyle>
      <Rotas />
      <ContatosProvider>
        
      </ContatosProvider>
    </>
  )
}

export default App
