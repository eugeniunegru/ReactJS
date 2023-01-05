import React, {useEffect, useRef, useState} from "react";
import {useCards} from "../hooks/useCards";
import {useFetching} from "../hooks/useFetching";
import {GetTotalPages} from "../pages";
import CardsList from "../Components/CardsList";
import Paginaition from "../Components/Paginaition";
import Loader from "../UI/Loader/Loader";
import CardsFilter from "../Components/CardsFilter";
import CardForm from "../Components/CardForm";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/MyButton/MyButton";
import CardService from "../API/CardService";
import useObserver from "../hooks/useObserver";
import MySelect from "../UI/MySelect/MySelect";

function Cards() {

    const [cards,setCard]=useState([] )
    const [Filter,setFilter]=useState({sort: '', query: ''})
    const [modal,setModal]=useState(false)
    const sortandfiltr=useCards(cards,Filter.sort,Filter.query)
    const [limit,setLimit]=useState(10)
    const [page,setPage]=useState(1)
    const [totalPages,setTotalPages]=useState(1)
    const lastElement=useRef()
    const [fetchcards,isLoad,error]=useFetching(async ()=>{
        const response=await CardService.getAll(limit,page)
        const TotalCount=response.headers['x-total-count']
        setTotalPages(GetTotalPages(TotalCount,limit))
        setCard([...cards,...response.data])
    })
    useObserver(lastElement,page<totalPages,isLoad,()=>setPage(page+1))

    // useEffect(()=>{
    //         // if(isLoading)return;
    //         //if(observer.current)observer.current.disconnect();
    //         var cb=function (entries,observer){
    //             if(entries[0].isIntersecting){
    //                 setPage(page+1)
    //             }
    //             observer.current=new IntersectionObserver(cb)
    //             observer.current.observe(lastElement.current)
    //         };
    //         //console.log(cb)
    //
    //     }
    //     ,[])

    const changePage=(page)=>{
        setPage(page)
    }
    useEffect(()=>{
        fetchcards(limit,page)
    },[page,limit])
    const removeCard=(card)=>{
        setCard(cards.filter(p=>p.id!==card.id))
    }
    const createcard=(NewCard)=>{
        setCard([...cards,NewCard])
        setModal(false)
    }

    return (
        <div className="App">

            <div className="container mt-3">
                <MyButton onClick={()=>setModal(true)}>
                    Adauga
                </MyButton>
                <MyModal visible={modal} setVisible={setModal} >
                    <CardForm create={createcard}/>
                </MyModal>
                <CardsFilter Filter={Filter} setFilter={setFilter} />
                <MySelect
                    value={limit}
                    onchange={value=>setLimit(value)}

                    defaultValue="Nr de carduri"
                    options={[
                        {name: "5", value: 5},
                        {name: "15", value: 10},
                        {name: "25", value: 25},
                        {name: "Toate", value: -1}
                    ]}
                />
                {error &&
                    <h1>S-a produs o eroare ${error}</h1>
                }
                <CardsList remove={removeCard} props={sortandfiltr}/>
                <div ref={lastElement} style={{background:"red", height:"20px"}}/>
                {
                    isLoad &&
                        <Loader/>
                }
                <Paginaition
                    page={page}
                    totalPages={totalPages}
                    changePage={changePage}
                />
            </div>

        </div>
    );
}

export default Cards;
