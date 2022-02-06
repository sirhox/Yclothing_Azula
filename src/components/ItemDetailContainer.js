import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailConatiner = () => {

  const [item, setItem] = useState({})

  useEffect(() =>{
    getItem().then(res => {
      setItem(res)
    })
  }, [])

  const getItem = () => new Promise((resolve, reject) => {
      setTimeout(function(){
        let item = {
            id:1,
            title:"Remera negra", 
            price:1600,
            description:"Una remera negra perfecta para usar", 
            pictureUrl :'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa_1.jpg'
          }
        resolve(item)
      }, 2000);
    });

    return (
      <ItemDetail item={item}/>
    )

  }

export default ItemDetailConatiner