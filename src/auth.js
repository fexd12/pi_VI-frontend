import axios from "axios";
import store from './store'

export async function signIn(url, email, senha) {
  const token = await axios.post(`${url}/login/`, {
    email,
    senha
  },{headers:{
    'Access-Control-Allow-Origin':'*'
  }})
  if (Object.keys(token.data).includes("token") && token.data.success) {
    localStorage.setItem("token", token.data.token);
    localStorage.setItem("user", token.data.user);
    store.dispatch('get_usuario',`${url}/usuario/token/`);
    return token.data;
  } else {
    return token.data;
  }
}

export function signOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  store.dispatch('set_usuario','');
}

export async function isSignedIn(url) {
  const token = localStorage.getItem("token");

  //   console.log(token)
  //   if (!token) { // Se não existe o token no LocalStorage
  //     return false // significa que o usuário não está assinado.
  //   }
  //   try {
  //     const { exp: expiration } = decode(token)
  //     const isExpired = !!expiration && Date.now() > expiration * 1000

  //     if (isExpired) { // Se o token tem uma data de expiração e
  //       return false
  //     }// essa data é menor que a atual o usuário
  //                     // não está mais assinado.
  //     return true
  //   } catch (_) { // O "jwt-decode" lança erros pra tokens inválidos.
  //     return false // Com um token inválido o usuário não está assinado.
  //   }
  // const token = localStorage.getItem('token')
  if (token) {
    try {
      let dados = await axios.get(`${url}/login/`, {headers:{
        'x-access-token':token
      }});
      return dados.data.success;
    } catch (error) {
      if (error.statusCode == 403) return false;
    }
  } else {
    return false;
  }
}

export async function get_usuario(url){
    const token = localStorage.getItem("token")

    let response = await axios.get(`${url}/usuario/token/`,{headers:{
        'x-access-token':token
    }});
    let data = response.data
    // console.log(data)
    return data
    
}