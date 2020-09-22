<template>
  <div>
    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">Agendamento de Salas</h6>
        <div class="media text-muted pt-3">
          <div class="container">
            <b-form class="row">
              <b-form-group id="input-group-1" label="Data do Agendamento:" label-for="input-1">
                <Datetime
                  v-model="ativoAtual.data"
                  type="date"
                  format="dd-MM-yyyy"
                  value-zone="America/Sao_Paulo"
                  placeholder="Selecione a data"
                  :week-start="7"
                ></Datetime>
              </b-form-group>

              <b-form-group id="input-group-2" label="Horário de início:" label-for="input-2">
                <Datetime
                  v-model="ativoAtual.horaInicio"
                  type="time"
                  format="HH:mm"
                  value-zone="America/Sao_Paulo"
                  placeholder="Selecione o horario de inicio"
                ></Datetime>
              </b-form-group>

              <b-form-group id="input-group-3" label="Horário de término:" label-for="input-3">
                <Datetime
                  v-model="ativoAtual.horaFinal"
                  type="time"
                  format=" HH:mm"
                  value-zone="America/Sao_Paulo"
                  placeholder="Selecione o horario de termino"
                ></Datetime>
              </b-form-group>

              <b-form-group id="input-group-4" label="Tipos de Salas:" label-for="input-4" class="col">
                <b-form-select
                  class="mb-3 form-control"
                  v-model="ativoAtual.salas"
                  id="input-4"
                  :options="salas"
                  required
                ></b-form-select>
              </b-form-group>
            </b-form>

            <div class="form-group center">
              <b-button pill variant="primary" type="submit"  v-on:click="carregaTabela">Buscar</b-button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">Salas Disponíveis</h6>
        <div class="media text-muted pt-3">
          <div class="container">
            <b-table
              hover
              fixed
              responsive="true"
              head-variant="light"
              :items="ativos"
              :fields="fields"
              @row-clicked="(item,index,event)=>beforeSalvar(item)"
            ></b-table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import moment from "moment";
import { Datetime } from "vue-datetime";

import "vue-datetime/dist/vue-datetime.css";

export default {
  name: "Agendamento",
  components: {
    Datetime,
  },
  data: () => {
    return {
      content: {},
      ativoAtual: {
        data: "",
        horaInicio: "",
        horaFinal: "",
        name: "",
        sala: "",
      },
      ativos: [],
      fields: [
        {
          key: "nome",
          label: "Nome da Sala",
        },
        {
          key: "quantidade",
          label: "Quantidade de Cadeiras",
        },
        {
          key: "sala",
          label: "Tipo de Sala",
        },
      ],
      users: [{ value: null, text: "Selecione um usuario" }],
     salas: [{value:'0', text:'Laboratório de Computadores'}, {value:'1', text:'Laboratório de Digital'}, {value:'2', text:'Sala com Projetor'}, {value:'3', text:'Estúdio de Imagem'}, {value:'4', text:'Estúdio de Som'}]
    };
  },
  methods: {
    async carregaTabela() {
      this.ativos.splice(0, this.ativos.length);
      this.ativoAtual.horaInicio = moment(this.ativoAtual.horaInicio).format(
        "HH:mm"
      );
      this.ativoAtual.horaFinal = moment(this.ativoAtual.horaFinal).format(
        "HH:mm"
      );
      this.ativoAtual.data = moment(this.ativoAtual.data).format("DD-MM-YYYY");
      let payload = {
        hora_inicio: this.ativoAtual.horaInicio,
        hora_final: this.ativoAtual.horaFinal,
        data: this.ativoAtual.data,
      };
      try {
        let dados = await this.$http.post(
          `${this.$baseUrl}/salas/status/`,
          payload
        );
        this.ativos.push(...dados.data);
      } catch (error) {
        alert("erro ao inserir");
      }
    },
    async carregaUsuarios() {
      // this.users.splice(0, this.users.length);
      let dados = await this.$http.get(`${this.$baseUrl}/userstag/`, {});
      dados.data.forEach((element) => {
        this.users.push({
          value: element.id,
          text: element.name,
        });
      });
    },
    async salvar() {
      // console.log(x)
      let payload = {
        data: this.ativoAtual.data,
        horaInicio: this.ativoAtual.horaInicio,
        horaFinal: this.ativoAtual.horaFinal,
        name: this.ativoAtual.name,
        sala: this.ativoAtual.sala,
      };
      try {
        await this.$http.post(`${this.$baseUrl}/agendamento/`, payload);
        await this.carregaTabela();
      } catch (err) {
        alert("erro ao inserir");
      }
    },
    beforeSalvar(x) {
      this.ativoAtual.sala = x.id;
    },
  },
  async mounted() {
    await this.carregaUsuarios();
  },
};
</script>

<style>
#input-group-1 {
  margin-left: 30px;
  margin-block-start: 1px;
}

#input-group-2 {
  margin-left: 50px;
  margin-block-start: 1px;
}

#input-group-3 {
  margin-left: 50px;
  margin-block-start: 1px;
}

#input-group-4 {
  margin-left: 30px;
  margin-block-start: 1px;


}
</style>