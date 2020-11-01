<template>
  <div>
    <main role="main" class="container">
      <div class="my-3 p-2 bg-white rounded shadow-xl">
        <div class="info-box-text">
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
                class="btn bnt-success"
                v-on:click="Arrumado(item)"
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
  props: ["value"],
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
          key: "id_sala",
          label: "Salas",
        },
        {
          key: "projetor",
          label: "Projetor",
        },
        {
          key: "ar_condicionado",
          label: "Ar Condicionado",
        },
        {
          key: "computador",
          label: "Computador",
        },
        {
            key: "Arrumado",
            label:"Arrumado"
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
      let dados = await this.$http.get(
        `${this.$baseUrl}/agendamento/${this.content.id}`,
        {}
      );
      this.ativos.push(...dados.data);
    },
    async Arrumado(item){
        // fazer felipe animal
    }
  },
  async mounted() {
    await this.carregaTabela();
  },
};
</script>

<style>
</style>