import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail"
import { useParams } from "react-router-dom";

import {collection,query,where,getDocs,documentId} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const ItemDetailConatiner = () => {

  const [item, setItem] = useState([])
  

  let { id } = useParams();

  useEffect(() => {
		const getRopaData = async () => {
			const q = query(
				collection(db, 'ropa'),
				where(documentId(), '==', id)
			);
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setItem(docs);
		};
		getRopaData();
	}, [id]);
    
    return (

      item.map((data) => {
      return <ItemDetail item={data}/>
    })
    )

  }

export default ItemDetailConatiner