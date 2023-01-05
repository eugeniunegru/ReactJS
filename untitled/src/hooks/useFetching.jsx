import {useState} from "react";

export const useFetching=(callback)=>{

    const [isLoad,setIsLoad]=useState(false)
    const [err,setErr]=useState('')
    const fetching=async ()=>{
        try{
            setIsLoad(true)
            await callback();
        }catch (e){
            setErr(e.message)
        }finally {
            setIsLoad(false)
        }
    }
    return [fetching,isLoad,err]
}