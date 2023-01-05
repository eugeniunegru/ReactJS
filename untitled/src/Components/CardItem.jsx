import '../styles/style.css'
import React from "react";
import CloseBTN from "../UI/CloseBTN/CloseBTN";
import {Link} from "react-router-dom";
const CardItem = (props) => {
    return (

        <div className="card">
            <CloseBTN  onclick={()=>props.remove(props.post)}/>
            <img className="card-img-top" src={props.post.url} alt="dog"/>
            <div className="card-body">
                <h4 className="card-title">{props.post.title}</h4>
                <p className="card-text">{"O simpla descriere"}</p>
                <Link className="btn btn-primary" to={["/cards/"]+props.post.id}>Deschide</Link>
            </div>
        </div>

    );
};

export default CardItem;