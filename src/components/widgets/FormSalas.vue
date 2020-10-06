<template>
  <div>
    <b-form>
      <b-form-group id="input-group-1" label="Nome da Sala:" label-for="input-1">
        <b-form-input v-model="content.numero" id="input-1" @input="handleInput" required />
      </b-form-group>

      <b-form-group id="input-group-2" label="Quantidade de Cadeiras:" label-for="input-2">
        <b-form-input v-model="content.quantidade" id="input-2" @input="handleInput" required />
      </b-form-group>

      <b-form-group id="input-group-6" label="Tipo de Sala:" label-for="input-6">
        <b-form-select v-model="content.sala_tipo_id" id="input-6" :options="sala" @input="handleInput" required/>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "SalasForm",
  props: ["value"],
  data() {
    return {
      usuario: {
        funcao: 4,
      },
      content: {
        id_sala: this.value.id_sala,
        numero: this.value.numero,
        quantidade: this.value.quantidade,
        sala_tipo_id: this.value.sala_tipo_id
      },
      sala: []
    };
  },
  methods: {
    handleInput() {
      let retorno = {
        id_sala: this.content.id_sala,
        numero: this.content.numero,
        quantidade: this.content.quantidade,
        sala_tipo_id: this.content.sala_tipo_id
      };
      this.$emit("input", retorno);
    },
    async getTipoSala(){
      let response = await this.$http.get(`${this.$baseUrl}/salas/tipo/`);
      // console.log(response.data)
      response.data.items.forEach(element => {
          this.sala.push({
            value:element.sala_tipo_id,
            text:element.descricao
          })
      })

    },
  },
  async mounted(){
    await this.getTipoSala();
  }
};
</script>

<style>
</style>