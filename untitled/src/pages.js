export const GetTotalPages=(totalCount, limit)=>{
    return Math.ceil(totalCount/limit)
}

export const getPagesArray=(totalPages)=>{
    const totalpages=[]
    for (let i=1;i<=totalPages;i++){
        totalpages.push(i)
    }
    return totalpages
}