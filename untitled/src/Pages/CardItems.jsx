import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import CardService from "../API/CardService";
import Loader from "../UI/Loader/Loader";

const CardItems = () => {
    const itemId=useParams();
    const [card1,setCard]=useState({});
    const [fetchPostById,isLoad,error]=useFetching(async ()=>{
         const response=await CardService.getById(itemId)
        setCard(response.data)

    })
    useEffect(()=>{
        fetchPostById()
    },[])

    return (
                isLoad?
                    <Loader/>
                    :
                    <div>
                        <div className="card">
                            <img className="card-img-top" src={card1.url} alt="dog"/>
                            <div className="card-body">
                                <h4 className="card-title">{card1.title}</h4>
                                <p className="card-text">{"O simpla descriere"}</p>
                            </div>
                        </div>
                    </div>
    )
};

export default CardItems;