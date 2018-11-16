import {
    CHANGE_CITY
} from './mutations-type'
import http from '@util/axios'
import axios from 'axios'
export default {
    async getCurrentPosition(context) {
        let city = await axios({
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            url: '/ju/Index/getCityList'
        })
        let result = await http({

            url: '/bd/location/ip',
            params: {
                ak: 'EajH3hpCLeGgNMbnPqbVl1Bm9PWGD0HO'
            }
        }, true)

        let cityId = 1;
        let cityName = '全国'
        if (result) {
            cityName = result.data.content.address.replace('市', '')
            for (let i = 0; i < city.data.city_list.length; i++) {
                for (let j = 0; j < city.data.city_list[i].lists.length; j++) {
                    if (city.data.city_list[i].lists[j].name === cityName) {
                        cityId = city.data.city_list[i].lists[j].id;
                        break;
                    } else {
                        alert(cityName)
                    }
                }

            }
            console.log(cityName)
        }

        context.commit({
            type: CHANGE_CITY,
            city: {
                cityId,
                cityName
            },
            cities: city.data.city_list
        })
    }
}