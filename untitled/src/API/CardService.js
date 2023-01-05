import axios from "axios";

export default class CardService{
    static async  getAll(limit,page){

            const response=await axios.get('https://jsonplaceholder.typicode.com/photos',{ params:{
                _limit:limit,
                _page:page
        }})
            return response
    }
    static async  getById(paramid){

        const respons=await axios.get('https://jsonplaceholder.typicode.com/photos/'+paramid.id)

        return respons
    }
}