import React, {useState} from 'react';
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";

const CardForm = ({create}) => {
    const [Card,setCards]=useState({title:'ANAMARIA',description:'ESte actrita in opera de arta martiala',
        sursa:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg'})

    const NewCard=(e)=>{
        e.preventDefault();
        const NewCard={
            ...Card,
            id:Date.now()
        }
        create(NewCard)
        setCards({title:'',description:''
            ,sursa:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg'
        })

    }
    return (
        <form className="form-group">
            <MyInput
                onChange={event=>setCards({...Card,title:event.target.value})}
                value={Card.title}
                type="text"
                placeholder="Nume Prenume"
            ></MyInput>
            <MyInput
                onChange={event=>setCards({...Card,description:event.target.value})}
                value={Card.description}
                type="text"
                placeholder="Descriere"
            ></MyInput>
            <MyButton onClick={NewCard}>Adauga</MyButton>
        </form>
    );
};

export default CardForm;