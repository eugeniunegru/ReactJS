import React, {useEffect, useRef} from 'react';

const UseObserver = (ref,canLoad,isLoading,callback) => {
    const observer=useRef()
    return (
     useEffect(()=>{
         if(isLoading)return;
         if(observer.current)observer.current.disconnect();
         var cb=function (entries,observer){
             if(entries[0].isIntersecting && canLoad){
                 callback()
             }
         };
         //console.log(cb)
         observer.current=new IntersectionObserver(cb)
         observer.current.observe(ref.current)
         }
     ,[isLoading])
    );
};

export default UseObserver;