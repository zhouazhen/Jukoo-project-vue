import _ from 'lodash'
import {
    GET_FLAG
} from './mutation-types'
const getters = {
    
    [GET_FLAG]: (state) => {
        
        if(state.slot == true){
           
            var num = _.sortBy(state.price, function(item){
                return item.price;
            });
            return num 
            
        }
    }
}

export default getters