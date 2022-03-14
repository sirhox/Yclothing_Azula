import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail"
import { useNavigate, useParams } from "react-router-dom";
import {collection,query,where,getDocs,documentId} from 'firebase/firestore';
import {Typography,Button } from "@mui/material";
import { db } from '../firebase/firebaseConfig';

const ItemDetailConatiner = () => {
  let navigate = useNavigate()
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
			setItem(docs[0]);
		};
		getRopaData();
	}, [id]);
    
    return (
	 (item ?

       <ItemDetail item={item}/>
    :
	<Typography sx={{mt:4}} variant="h4">No se encontro el producto. 
	<Button variant="outlined" onClick={() => navigate(`/`)}  sx={{m:0.5}}>Volver al inicio</Button>
	</Typography>
	)
    )
//	

  }

export default ItemDetailConatiner
