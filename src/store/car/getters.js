import _ from 'lodash'
import {
    GET_FLAG
} from './mutation-types'
const getters = {
    
    [GET_FLAG]: (state) => {
        var num = []
        if(state.slot == true){
            state.price = _.sortBy(state.price, function(item){
                return item.price;
            });
        }else{
            state.price = ''

        }
        console.log(num,state.price,'ooooooo')
        return state.price
    }
}

export default getters