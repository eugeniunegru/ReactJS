import React from 'react';
import MySelect from "../UI/MySelect/MySelect";
import MyInput from "../UI/MyInput/MyInput";

const CardsFilter = ({Filter, setFilter}) => {
    const forsl=[
        {id:1, value:'AtoZ',name:'A to Z'},
        {id:2, value:'ZtoA',name:'Z to A'}
    ]

    return (
        <div>
            <h1>Sortare :</h1>
            <MySelect  options={forsl}
                       value={Filter.sort}
                       defaultValue='Sortare dupa nume'
                       onchange={selectedSort=>setFilter({...Filter,sort:selectedSort})}
            />

            <h1>Cautare :</h1>
            <MyInput
                placeholder='Cauta'
                value={Filter.query}
                onChange={e=>setFilter({...Filter, query: e.target.value})}
            />
        </div>
    );
};

export default CardsFilter;