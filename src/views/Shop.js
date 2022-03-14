import { Box, Typography, Button,TextField } from "@mui/material"
//import Description from "@mui/icons-material/Description"
import { useState } from "react"
//import { useNavigate } from "react-router-dom"
import { useCart } from "../contexts/CartContext";
import {collection,addDoc} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import MessageSuccess from '../components/MessageSuccess'



const initialState = {
	name: '',
	phone: '',
	email: '',
};

const Shop = () => {   

    const [buyer, setBuyer] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
	const [purchaseID, setPurchaseID] = useState('');

	const [emailConfirmado, setEmailConfirmado] = useState('')

	const formularioCompleto = () =>{
	  return (
		buyer.name !== '' &&
		buyer.phone !== '' &&
		buyer.email !== '' &&
		emailConfirmado !== '' && 
		emailConfirmado === buyer.email
	  )
	}

    const handleOnChange = (e) => {
		const { value, name } = e.target;
		setBuyer({ ...buyer, [name]: value });
	};
    
    const onSubmit = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'orden'), {
			buyer,
            ItemsAgregados,
            date: new Date(),
            total:cart.cart.totalPrice,
		});
		setPurchaseID(docRef.id);
		setBuyer(initialState);
		setEmailConfirmado('')
        cart.clear() //limpio el carrito
	};
  const cart=useCart();
  const ItemsAgregados = cart.cart.addedItems
  //let navigate = useNavigate()
    return (
    <Box sx={{display: 'flex',  justifyContent:'center'}}>
       <Box sx={{width: '50%', boxShadow: 5, m: 5}}>
       <Typography variant="h3" sx={{p:5,display: 'flex',  justifyContent:'center'}} >
              {"CHECKOUT"}
            </Typography>
        <Typography variant="h4" sx={{display: 'flex'}} >
            {"Total: $"+cart.cart.totalPrice}
        </Typography>    
      <form sx={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',margin: 20}} onSubmit={onSubmit}>
				<TextField
					placeholder='Nombre'
					style={{ margin: 10, width: 400 }}
					value={buyer.name}
					name='name'
					onChange={handleOnChange}
                    label='Nombre'
				/>
				<TextField
					placeholder='Telefono'
					style={{ margin: 10, width: 400 }}
					value={buyer.phone}
					name='phone'
					onChange={handleOnChange}
                    label='Telefono'
				/>
				<TextField
					placeholder='Email'
					style={{ margin: 10, width: 400 }}
					value={buyer.email}
					name='email'
					onChange={handleOnChange}
                    label='Email'
				/>
				<TextField 
				placeholder="Confirmar Email"
				style={{ margin: 10, width: 400 }}
				value={emailConfirmado} 
				name='confirm-email'
				onChange={(e) => setEmailConfirmado(e.target.value)} 
				label="Confirmar email" 	
				type="email"/>

        			{emailConfirmado !== '' && emailConfirmado !== buyer.email ? (<Typography sx={{display:'flex',justifyContent:'center'}}variant="h6" color={'red'}>No coinciden los email</Typography>) : null}

                <Typography variant="h3" sx={{p:3,display: 'flex',  justifyContent:'center'}} >
				<Button variant="outlined"disabled={!formularioCompleto()||ItemsAgregados<1} onClick={onSubmit} sx={{m:0.5}}>Enviar</Button>
                </Typography>
			</form>
			{purchaseID && <MessageSuccess purchaseID={purchaseID} />}
      <Box>
      </Box>
    </Box>
    </Box>
    )

  }

export default Shop