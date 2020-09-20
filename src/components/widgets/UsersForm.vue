<template>
  <b-form>
    <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
      <b-form-input v-model="content.name" id="input-1" @input="handleInput" required />
    </b-form-group>

    <b-form-group id="input-group-2" label="Email:" label-for="input-2">
      <b-form-input v-model="content.email" id="input-2" @input="handleInput" required />
    </b-form-group>

    <b-form-group v-if="password" id="input-group-3" label="Password:" label-for="input-1">
      <b-form-input
        v-model="content.password"
        id="input-3"
        @input="handleInput"
        type="password"
        disabled
        required
      />
    </b-form-group>

    <b-form-group id="input-group-4" label="Tag:" label-for="input-4">
      <b-form-input v-model="content.tag" id="input-4" @input="handleInput" type="tag" required />
    </b-form-group>

    <b-form-group id="input-group-5" label="Acesso:" label-for="input-5">
      <b-form-select v-model="content.acesso" id="input-5" :options="acessos" @input="handleInput" required />
    </b-form-group>

    <b-form-group id="input-group-6" label="Função:" label-for="input-6">
      <b-form-select v-model="content.funcoes" id="input-6" :options="funcoes" @input="handleInput" required />
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  name: "UsersForm",
  props: ["value"],
  data() {
    return {
      password: true,
      content: {
        password: this.password ? this.value.password: "senac123", 
        tag: this.value.tag,
        id: this.value.id,
        name: this.value.name,
        email: this.value.email,
        tag: this.value.funcoes
      }, 
      acessos: [{value:'1',text:'Acesso Full'}, {value:'2', text:'Acesso Restrito'}],

      funcoes: [{value:'0', text:'Professor'}, {value:'1', text:'Limpeza'}, {value: '2', text:'Técnico '}]
    }
  },
  methods: {
    handleInput() {
      let retorno = {
        password: this.content.password,
        tag: this.content.tag, 
        id: this.content.id,
        name: this.content.name,
        email: this.content.email,
        funcoes: this.content.funcoes
      };
      this.$emit("input", retorno);
    }
  }
};
</script>
