import Vue from 'vue';
import {request} from '../services';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        usuario_logado:{}
    },

    getters:{
        get_usuario_logado : state =>state.usuario_logado
    },
    mutations:{
        setUsuario(state,payload){
            state.usuario_logado = payload
        }
    },
    actions:{
        get_usuario({commit},payload){
            request.get(payload).then(res=>{
                commit('setUsuario',res.data)
            })
        }
    }

})

export default store