import React from 'react';
import classes from "./MyModal.module.css";
import CloseBTN from "../CloseBTN/CloseBTN";
const MyModal = ({children,visible,setVisible}) => {

    const rootClass=[classes.myModal]
        if(visible)
            rootClass.push(classes.active)
    function closeModal(){
            setVisible(false)
        rootClass.push(classes.myModal)
    }

    return (
        <div className={rootClass.join(' ')} onClick={closeModal}>
            <div className={classes.myModalContent} onClick={e=>e.stopPropagation()}>
                <CloseBTN onclick={closeModal}/>
                {children}
            </div>
            
        </div>
    );
};

export default MyModal;