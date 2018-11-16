import {CHANGE_CITY} from './mutations-type'

export default{
    [CHANGE_CITY]: (state, payload) => {
        
        state.city = payload.city

        if ( payload.cities ) state.cities = payload.cities

       
    }
}


