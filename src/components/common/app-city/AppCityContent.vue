<template>
    <div class="app-city-content">
        <mt-index-list>
            <mt-index-section 
                v-for = "(value, key) in cities"
                :key  = "key"
                :index="key"
            >
                <mt-cell
                    v-for = "city in value.lists"
                    :key  = "city.id"
                    :title= "city.name" 
                     @click.native = "changeCity(city)"
                ></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>

<script>
import { IndexList, IndexSection, Cell} from 'mint-ui';
import { mapState } from 'vuex'
import { CHANGE_CITY } from '@/store/chunks/mutations-type'
import axios from 'axios'
export default {
       components: {
            [IndexList.name]: IndexList,
            [IndexSection.name]: IndexSection,
            [Cell.name]: Cell
    },
    
   computed: {
        ...mapState(['chunks']),
        cities () {
            return  this.chunks.cities
        },
    },
     methods: {
        changeCity ({id: cityId, name: cityName}) {
            this.$store.commit({type: 'chunks/' + CHANGE_CITY, city: {
                cityId, cityName
            }})
            this.$router.push({name: 'home'})
        }
    }

}
</script>

<style>
.app-city-content{

}


</style>




   
    methods: {
        changeCity ({id: cityId, name: cityName}) {
            this.$store.commit({type: 'chunks/' + CHANGE_CITY, city: {
                cityId, cityName
            }})
            this.$router.push({name: 'home'})
        }
    }
}