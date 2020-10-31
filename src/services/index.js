import axios from 'axios'
import store from '../store'


export const request = {

    get: function(url){
        return axios.get(url)

    }

}