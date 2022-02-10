import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailConatiner = () => {

  const [item, setItem] = useState({})
  
  useEffect(() =>{
    getItem().then(res => {
      setItem(res)
    })
  }, [])
  let { id } = useParams();
  
  const getItem = () => new Promise((resolve, reject) => {
      setTimeout(function(){
        let items = [{
          id:1,
          title:"Remera", 
          price:1600,
          description:"Una remera perfecta para usar", 
          pictureUrl :'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa_1.jpg',
          cateogry:"primavera"
        },{
          id:2,
          title:"Bufanda", 
          price:500,
          description:"Una bufanda, buena en para el invierno", 
          pictureUrl :'https://www.pngmart.com/files/11/Red-Scarf-Transparent-PNG.png',
          cateogry:"invierno"
        },{
          id:3,
          title:"Pantalon Corto", 
          price:2500,
          description:"Una pantalon especial para el verano", 
          pictureUrl :'https://www.kindpng.com/picc/m/163-1632016_transparent-kid-trunks-png-bermuda-shorts-png-download.png',
          cateogry:"verano"
        },{
          id:4,
          title:"Buzo", 
          price:3200,
          description:"Una buzo, bueno para media estacion como otoño", 
          pictureUrl :'https://ramptshirts.com/assets/images/samples/standard-hoodies/hoodie-yellow-front.png',
          cateogry:"otoño"
        },]
        resolve(items.filter(el=>el.id === parseInt(id))[0]) 
        console.log(id)
      }, 500);
    });
    
    return (
      <ItemDetail item={item}/>
    )

  }

export default ItemDetailConatiner