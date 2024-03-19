import { useEffect, useState } from "react"
import { Card } from "../../components/Card"
import { Menu } from "../../components/Menu"
import axios from "axios"

interface IProdutos {
  id: number;
  id_categoria: string;
  imagemg: string;
  imagemp: string;
  title: string;
  price: number;
  promo: number;
}


export const Home = () => {

  const [dataCard, setDataCard] = useState<Array<IProdutos>>([])


  useEffect(() => {

    axios.get('http://localhost:3000/produtos')
      .then((res) => {
        setDataCard(res.data)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [])
  return (
    <>

      <Menu />
      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',

        }}
      >
        <h2
        style={{
          textAlign: 'center'
        }}
        >Produtos em Destaque</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {
            dataCard.map((card) => {
              return (
                <Card id={card.id} title={card.title} price={card.price} promo={card.promo} imagemp={'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/' + card.imagemp} />

              )
            })
          }
        </div>
      </div>
    </>
  )
}
