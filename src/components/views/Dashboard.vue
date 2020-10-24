<template>
  <section class="content app">
    <!-- Info boxes -->
    <!-- <div id="Limpeza"> -->
    <IconsDash v-model="usuario" />
    <hr />
    <div>
      <h4 class="titulo-dashboard">Agendamentos do Usuário</h4>
      <main role="main" class="container">
        <div class="my-3 p-2 bg-white rounded shadow-sm">
          <div class="info-box-text">
            <b-table
              class="table table-bordered dataTable"
              responsive :items="ativos"
              hover
              head-variant="light"
              filter              
              :filter-included-fields="filterOn"
              
              :fields="fields"
              @filtered="onFiltered"
            >
              <template slot="cell(DeletarAgend)" slot-scope="{ item }">
                <b-button
                  class="btn btn-danger"
                  v-on:click="SaveUser(item)"
                  v-b-modal.DeletarSala
                >
                  <i class="fa fa-trash"></i>
                </b-button>
              </template>

            </b-table>
            <b-modal
                id="DeletarSala"
                title="Confirmação de Calendamento"
                ok-title="Confirmar"
                cancel-title="Cancelar"
                @ok="DeletarSala"
              >
                <div>
                  <h5>Deseja mesmo cancelar o agendamento?</h5>
                </div>
            </b-modal>
          </div>
        </div>
      </main>
    </div>
  </section>

  <!-- /.content -->
</template>

<script>
import TableSalas from "../widgets/TableSalas";
import {get_usuario} from '../../auth';
import IconsDash from '../widgets/IconsDash';

export default {
  name: "Dashboard",
  components: {
    TableSalas,
    IconsDash
  },
  data: () => {
    return {
      usuario: {
        soma:''
      },
      filterOn: [],

      ativos:[],
      sala :[],
      fields: [
        {
          key: "data",
          label: "Data do Agendamento",
        },
        {
          key: "horario_inicio",
          label: "Horario de Inicio",
        },
        {
          key: "horario_final",
          label: "Horario de Termino",
        },
        {
          key: "numero",
          label: "Nome da Sala",
        },
        {
          key: "tipo_sala",
          label: "Tipo da Sala",
        },
        {
          key: "DeletarAgend",
          label: "Cancelar Agedamento",
        },
      ],
    };
  },
  methods: {
    onFiltered(filteredItems){
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    async Usuario(){
        let response = await get_usuario(this.$baseUrl);
        this.usuario ={
            ...response
        }
        console.log(this.usuario)
    },
    async carregaAgendamento(){
      let dados = await this.$http.get(`${this.$baseUrl}/agendamento/`, {});
      this.ativos.push(...dados.data.items)
    },
    async DeletarSala(){
      try {
        await this.$http.put(`${this.$baseUrl}/agendamento/`,this.sala[0]);
        await this.carregaAgendamento();
      } catch (error) {
        alert('nao foi possivel excluir o agendamento')
      }
    },
    async SaveUser(item){
      this.sala.splice(0,this.sala.length)
      this.sala.push(item)
    },
  },
  computed: {

  },
  async mounted() {
    await this.Usuario();
    await this.carregaAgendamento();
  },
};
</script>
<style>
.info-box {
  cursor: pointer;
}
.info-box-content {
  text-align: center;
  vertical-align: middle;
  display: inherit;
}
.fullCanvas {
  width: 100%;
}

.titulo-dashboard {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 27px;
}
</style>
