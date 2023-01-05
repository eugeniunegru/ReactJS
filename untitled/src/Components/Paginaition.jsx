import React from 'react';
import {getPagesArray} from "../pages";
import '../styles/style.css'
const Paginaition = ({totalPages, page,changePage}) => {
    let PagesArray=getPagesArray(totalPages)

    return (
        <div className='row'>
            {PagesArray.map(p=>
                <span onClick={()=>{changePage(p)}} className={page===p ? 'page page-curr': 'page'} key={p}>{p}</span>
            )}
        </div>
    );
};

export default Paginaition;