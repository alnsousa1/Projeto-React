import { useNavigate } from "react-router-dom"
import { Menu } from "../../components/Menu";
import { Button, TBTr, THTh, THtr, Table, Td, TextButton } from "./styles";
import { FaTrash } from "react-icons/fa";

export const Carrinho = () => {

  const navigate = useNavigate();

  return (
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
        <h2>Carrinho de compras</h2>

        <Table>
            <thead>
              <THtr>
                <THTh
                  style={{
                    minWidth: 300
                  }}
                >Nome do produto</THTh>
                <THTh>Quantidade</THTh>
                <THTh>Vlr. Unit.</THTh>
                <THTh>Vlr. Total.</THTh>
                <THTh>Ações</THTh>
              </THtr>
            </thead>
            <tbody>
              <TBTr>
                <Td width={300}>Fritadeira</Td>
                <Td>1</Td>
                <Td>1,000,50</Td>
                <Td>1,000,50</Td>
                <Td>
                  <Button
                  type="button">
                    <TextButton>
                      <FaTrash />
                    </TextButton>
                  </Button>
                </Td>
              </TBTr>
            </tbody>
        </Table>
      </div>
    </>
  )
}
