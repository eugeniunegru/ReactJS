import {useMemo} from "react";

export const useSortedCard=(cards, sort)=>{

    const sortedCard= useMemo(()=>{
        if (sort) {
            if (sort === 'AtoZ')
                return  [...cards].sort((a, b) => a['title'].localeCompare(b['title']))
            else return [...cards].sort((a, b) => b['title'].localeCompare(a['title']))
        } else return cards
    },[sort,cards])

    return sortedCard
}

export const useCards=(cards,sort,query)=>{
    const sortedCard=useSortedCard(cards,sort)
    const sortandfiltr=useMemo(()=>{
        return sortedCard.filter(card=>card.title.toUpperCase().includes(query.toUpperCase()))
    },[sortedCard,query] )
    return sortandfiltr
}