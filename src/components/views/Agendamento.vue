<template>
  <div>
    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">
          Agendamento de Salas
        </h6>
        <div class="media text-muted pt-3">
          <div class="container">
            <b-form class="row">
              <b-form-group
                id="input-group-1"
                label="Data do Agendamento:"
                label-for="input-1"
              >
                <Datetime
                  v-model="ativoAtual.data"
                  type="date"
                  format="yyyy-MM-dd"
                  value-zone="America/Sao_Paulo"
                  placeholder="Selecione a data"
                  :week-start="7"
                ></Datetime>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Horário de início:"
                label-for="input-2"
              >
                <Datetime
                  v-model="ativoAtual.horaInicio"
                  type="time"
                  format="HH:mm"
                  value-zone="America/Sao_Paulo"
                  placeholder="Selecione o horario de inicio"
                ></Datetime>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Horário de término:"
                label-for="input-3"
              >
                <Datetime
                  v-model="ativoAtual.horaFinal"
                  type="time"
                  format=" HH:mm"
                  value-zone="America/Sao_Paulo"
                  placeholder="Selecione o horario de termino"
                ></Datetime>
              </b-form-group>

              <b-form-group
                id="input-group-4"
                label="Tipos de Salas:"
                label-for="input-4"
                class="col"
              >
                <b-form-select
                  class="mb-3 form-control"
                  v-model="ativoAtual.sala_tipo_id"
                  id="input-4"
                  :options="salas"
                  required
                ></b-form-select>
              </b-form-group>
            </b-form>

            <div class="form-group center">
              <b-button
                pill
                variant="primary"
                type="submit"
                v-on:click="carregaTabela"
                >Buscar</b-button
              >
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
            class="table table-bordered dataTable"
              hover
              responsive="md"
              head-variant="light"
              :items="ativos"
              :fields="fields"
            >
              <template slot="cell(actionAgendar)" slot-scope="{ item }"> 
                <!-- realizar função de agendamento -->
                <b-button class="btn btn-success" v-on:click="agendar(item)">
                  <i class="fa fa-check"></i>
                </b-button>
              </template>
            </b-table>
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
        numero: "",
        sala_tipo_id: "",
      },
      ativos: [],
      fields: [
        {
          key: "numero",
          label: "Nome da Sala",
        },
        {
          key: "quantidade",
          label: "Quantidade de Cadeiras",
        },
        {
          key: "salas_tipo",
          label: "Tipo de Sala",
        },
        {
          key: "actionAgendar",
          label: "Concluir Agendamento",
        },
      ],
      users: [{ value: null, text: "Selecione um usuario" }],
      salas: [
        { value: "1", text: "Laboratório de Computadores" },
        { value: "2", text: "Laboratório de Digital" },
        { value: "3", text: "Sala com Projetor" },
        { value: "4", text: "Estúdio de Imagem" },
        { value: "5", text: "Estúdio de Som" },
      ],
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
      this.ativoAtual.data = moment(this.ativoAtual.data).format("YYYY-MM-DD");

      let payload = {
        horario_inicio: this.ativoAtual.horaInicio,
        horario_final: this.ativoAtual.horaFinal,
        data: this.ativoAtual.data,
        sala_tipo_id :this.ativoAtual.sala_tipo_id
      };
      try {
        await this.$http.post(
          `${this.$baseUrl}/salas/status/`,
          payload
        ).then(result=>{
          if (result.length == 0){
            alert('Não possui sala disponivel');
            this.limpa()
          }else this.ativos.push(...result.data.items);

        })
        
        // this.limpa()

      } catch (error) {
        this.limpa()
        alert("erro ao consultar");
      }
    },
    async carregaUsuarios(){
      let response = await this.$http.get(`${this.$baseUrl}/salas/tipo/`);
      response.data.items.forEach(element => {
          this.sala.push({
            value:element.sala_tipo_id,
            text:element.descricao
          })
      })

    },
    async agendar(item){
      let payload = {
        horario_inicio: this.ativoAtual.horaInicio,
        horario_final: this.ativoAtual.horaFinal,
        data: this.ativoAtual.data,
        sala_tipo_id :this.ativoAtual.sala_tipo_id,
        sala_id: item.id_sala
      }
      try {
        await this.$http.post(`${this.$baseUrl}/agendamento/`,payload).then(() => {
          alert('agendamento inserido com sucesso')
          this.limpa()
        })
      } catch (error) {
        alert('erro ao inserir')
      }
      // console.log(payload)

    },
    limpa(){
      this.ativoAtual.horaInicio = ''
      this.ativoAtual.horaFinal = ''
      this.ativoAtual.data = ''
      this.ativoAtual.sala_tipo_id = ''
      this.ativos.splice(0,this.ativos.length)
    }
  },
  async mounted() {
    await this.carregaUsuarios()
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