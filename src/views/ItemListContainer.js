
import { useEffect, useState } from "react";
import ItemList from '../components/ItemList'
import {collection,query,where,getDocs} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{
  
  const [items, setItems] = useState([]);

  let { title } = useParams();

  useEffect(() => {
		const getRopa = async () => {
      let q = null
      if(title){
        q= query(collection(db, 'ropa'),where('cateogry','==',title));
      }else{
        q= query(collection(db, 'ropa'));
      }
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setItems(docs);
		};
		getRopa();
	}, [title]);

  return (
    <ItemList items={items}/>
  )
}

export default ItemListContainer