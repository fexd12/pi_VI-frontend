<template>
  <div>
    <main role="main" class="container">
      <div class="my-3 p-2 bg-white rounded shadow-xl">
        <div class="info-box-text">
            <b-modal
              id="Arrumado"
              title="Confirmação de Conserto"
              ok-title="Confirmar"
              cancel-title="Cancelar"
              @ok="Arrumado"
            >
              <div>
                <h5>Tem certeza que sala está arrumada?</h5>
              </div>
            </b-modal>
          <b-table
            class="table table-bordered dataTable"
            hover
            fixed
            head-variant="light"
            :items="ativos"
            :fields="fields"
            :filter-ignored-fields="filterOn"
            :current-page="currentPage"
            :per-page="perPage"
            @filtered="onFiltered"
          >
            <template slot="cell(Arrumado)" slot-scope="{ item }">
              <b-button
                class="btn btn-success"
                v-on:click="Save_Arrumado(item)"
                v-b-modal.Arrumado
              >
                <i class="fa fa-check"></i>
              </b-button>
            </template>
          </b-table>
          <b-pagination
            v-model="currentPage"
            :per-page="perPage"
            :total-rows="total"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "SalasManutecao",
  data: () => {
    return {
      filter:null,
      filterOn:[],
      currentPage: 1,
      perPage: 4,
      total:0,
      ativos: [],
      fields: [
        {
            key: "numero",
            label: "Numero Sala",
        },
        {
            key: "projetor",
            label: "Projetor",
            formatter: (value, key, item) => {
              return value ? 'Sim' : 'Não'
            },
        },
        {
            key: "ar",
            label: "Ar Condicionado",
            formatter: (value, key, item) => {
              return value ? 'Sim' : 'Não'
            },
        },
        {
            key: "luzes",
            label: "Luzes",
            formatter: (value, key, item) => {
              return value ? 'Sim' : 'Não'
            },
        },
        {
            key: "Arrumado",
            label:"Arrumado",
            
        },
      ],
    };
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    async carregaTabela() {
      this.ativos.splice(0, this.ativos.length);
      let dados = await this.$http.get(`${this.$baseUrl}/salas/status_manutencao`,{});
      this.ativos.push(...dados.data.salas);
    },
    async Save_Arrumado(item){
      this.arrumado.splice(0, this.arrumado);
      this.arrumado.push(item);
    },
    async Arrumado(item){
        try {
            await this.$http.put(`${this.$baseUrl}/salas/sala_manutencao/`, this.arrumado[0]);
            await this.carregaTabela();
      } catch (error) {
            alert("nao foi possivel excluir o agendamento");
      }
    }
  },
  async mounted() {
    await this.carregaTabela();
  },
};
</script>

<style>
</style>