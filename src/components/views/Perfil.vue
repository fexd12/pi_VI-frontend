<template>
  <main role="main" class="container">
    <div class="my-3 p-3 bg-white rounded shadow-sm">
      <b-card bg-variant="light">
        <div>
          <span>
            <Gravatar alt="User" class="img"/>
          </span>
          <b-form-group
            label-cols-lg="3"
            label="Informações do Usuário:"
            label-size="lg"
            label-class="font-weight-bold pt-4"
            class="mb-0"
            id="info"
          >
            <b-form-group
              label-cols-sm="3"
              label="Nome do Usuário:"
              label-align-sm="right"
              label-for="nested-nome"
            >
              <b-form-input v-model="ativoAtual.nome" id="nested-nome" disabled></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Email do Usuário:"
              label-align-sm="right"
              label-for="nested-email"
            >
              <b-form-input v-model="ativoAtual.email" id="nested-email" disabled></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Tipo de Acesso:"
              label-align-sm="right"
              label-for="nested-acesso"
            >
              <b-form-input v-model="ativoAtual.acesso" id="nested-acesso" disabled></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Função do Usuário:"
              label-align-sm="right"
              label-for="nested-funcao"
            >
              <b-form-input v-model="ativoAtual.funcao" id="nested-funcao" disabled></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Senha Atual:"
              label-align-sm="right"
              label-for="nested-senhaAtual"
            >
              <b-form-input v-model="ativoAtual.senha" id="nested-senhaAtual" type="password"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Nova Senha:"
              label-align-sm="right"
              label-for="nested-senhaNova"
            >
              <b-form-input v-model="ativoAtual.senha_nova" id="nested-senhaNova" type="password"></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Confirme a senha:"
              label-align-sm="right"
              label-for="nested-confirmeSenha"
            >
              <b-form-input v-model="ativoAtual.senha_confirma" id="nested-confirmeSenha" type="password"></b-form-input>
            </b-form-group>
            <b-button pill variant="primary" v-b-modal.alterarUser>Salvar Alteração</b-button>
          </b-form-group>
        </div>
      </b-card>
    </div>
    <b-modal
    id="alterarUser"
    title="Confirmação de Alteração"
    ok-title="Confirmar"
    cancel-title="Cancelar"
    @ok="reset_password"
    class="teste"
    >
    <div>
      <h3>Deseja mesmo alterar a senha?</h3>
    </div>
    </b-modal>
  </main>
</template>

<script>
import Gravatar from "vue-gravatar";
export default {
  components: { Gravatar },
  data: ()=>{
    return {
      ativoAtual: {
        id_usuario: "",
        nome: "",
        email: "",
        acesso: "",
        funcao:"",
        senha_confirma:"",
        senha:"",
        senha_nova:""
      },
    }
  },
  methods:{
    async get_usuario(){
      let response = await this.$http.get(`${this.$baseUrl}/usuario/token/`,{});
      let data = response.data
      this.ativoAtual.acesso = data.acesso
      this.ativoAtual.email =  data.email
      this.ativoAtual.funcao =  data.funcao
      this.ativoAtual.id_usuario = data.id_usuario
      this.ativoAtual.nome = data.nome
      this.ativoAtual.tag = data.tag
    },
    async reset_password(){
      let payload={
        senha:this.ativoAtual.senha,
        senha_nova:this.ativoAtual.senha_nova,
        senha_confirma:this.ativoAtual.senha_confirma,
        nova_senha:1
      }
     try {
        let response = await this.$http.post(`${this.$baseUrl}/usuario/reset_password/`,payload);
        
     } catch (error) {
        alert(error.message)
     } 
    }

  },
  async mounted(){
    await this.get_usuario();
  }
};
</script>

<style>
.img {
    width: 150px;
    position: absolute;
    left: 62px;
    top: 150px;
}

@media(min-width: 877){
  .img main {
    display: none;
  }
}


</style>