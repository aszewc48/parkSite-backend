const axios = require('axios')

const myParkKeys = {
     
}

class ParkService{
    constructor(){
        this.myAxios = axios.create({
            baseURL: 'https://developer.nps.gov/api/v1/parks',
            
        })
    }
getParks(parkName){
    return this.myAxios.get('', {
        params: {
            api_key: process.env.CLIENT_ID,
            q: parkName,
            type: 'public',
            random: true
         }
    })
}

getSingleItem(parkCode){
    return this.myAxios.get('', {
        params: {
            parkCode: parkCode,
            type: 'public',
            api_key: process.env.CLIENT_ID,
        }
    })
}

getAllCuisines(){
    return this.myAxios.get('all', myCuisineKeys)
}
}


module.exports = ParkService