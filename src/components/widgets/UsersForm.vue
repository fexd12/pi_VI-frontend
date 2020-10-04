<template>
  <b-form>
    <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
      <b-form-input v-model="content.nome" id="input-1" @input="handleInput" required />
    </b-form-group>

    <b-form-group id="input-group-2" label="Email:" label-for="input-2">
      <b-form-input v-model="content.email" id="input-2" @input="handleInput" required />
    </b-form-group>

    <b-form-group v-if="senha" id="input-group-3" label="Senha:" label-for="input-1">
      <b-form-input
        v-model="content.senha"
        id="input-3"
        @input="handleInput"
        type="password"
        disabled
        required
      />
    </b-form-group>

    <b-form-group id="input-group-4" label="Tag:" label-for="input-4">
      <b-form-select v-model="content.tag_id" id="input-4" :options="tags" @input="handleInput" required/>
 
    </b-form-group>

    <b-form-group id="input-group-5" label="Acesso:" label-for="input-5">
      <b-form-select v-model="content.acesso" id="input-5" :options="acessos" @input="handleInput" required />
    </b-form-group>

    <b-form-group id="input-group-6" label="Função:" label-for="input-6">
      <b-form-select v-model="content.funcao" id="input-6" :options="funcoes" @input="handleInput" required />
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  name: "UsersForm",
  props: ["value"],
  data() {
    return {
      senha: this.value.show_password,
      content: {
        id_usuario:this.value.id_usuario,
        senha: this.senha ? this.value.senha: "senac123", 
        tag_id: this.value.tag_id,
        acesso: this.value.acesso_id,
        nome: this.value.nome,
        email: this.value.email,
        funcao: this.value.funcao_id
      }, 
      acessos: [{value:'1',text:'Acesso Full'}, {value:'2', text:'Acesso Restrito'}],
      tags: [], 
      funcoes: [{value:'1', text:'Professor'}, {value:'2', text:'Limpeza'}, {value: '3', text:'Técnico '}]
    }
  },
  methods: {
    handleInput() {
      let retorno = {
        id_usuario:this.content.id_usuario,
        senha: this.content.senha,
        tag_id: this.content.tag_id, 
        acesso_id: this.content.acesso,
        nome: this.content.nome,
        email: this.content.email.toLowerCase(),
        funcao_id: this.content.funcao
      };
      this.$emit("input", retorno);
    },
    async get_tags(){
      let dados = await this.$http.get(`${this.$baseUrl}/tag/`)
        dados.data.items.forEach(element => {
          this.tags.push({
          value:element.id_tag,
          text:element.tag
          })
        })

        console.log(this.tags)
    }
  },
  async mounted(){
    await this.get_tags()
  }
};
</script>
