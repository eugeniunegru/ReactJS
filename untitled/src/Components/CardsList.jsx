import React from 'react';
import CardItem from "./CardItem";
import {TransitionGroup} from "react-transition-group";
import '../styles/style.css'
import {CSSTransition} from "react-transition-group";

const CardsList = ({props,remove}) => {

    if(!props.length)
       return <h1 style={{textAlign: "center"}}>Nimic de afisat</h1>

    return (


            <TransitionGroup className="row">
                {props.map((post)=>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="card"
                    >
                    <CardItem remove={remove} post={post} key={post.id}/>
                    </CSSTransition>
                )}
            </TransitionGroup>





    );
};

export default CardsList;