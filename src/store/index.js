import Vue from 'vue';
import {request} from '../services';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate"; 

Vue.use(Vuex);

const store = new Vuex.Store({
    plugins:[createPersistedState()],

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
        },
        set_usuario({commit},payload){
                commit('setUsuario',payload)
        }
    }

})

export default store