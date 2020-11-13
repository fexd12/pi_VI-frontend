<template>
  <div>
    <main role="main" class="container">
      <div class="my-3 p-2 bg-white rounded shadow-xl">
        <div class="info-box-text">
            <b-modal
              id="Limpeza"
              title="Confirmação de Limpeza"
              ok-title="Confirmar"
              cancel-title="Cancelar"
              @ok="Limpeza"
            >
              <div>
                <h5>Tem certeza que sala está limpa?</h5>
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
            <template slot="cell(Limpeza)" slot-scope="{ item }">
              <b-button
                class="btn btn-success"
                v-on:click="Save_Limpeza(item)"
                v-b-modal.Limpeza
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
  name: "SalasLimpeza",
  data: () => {
    return {
      filter:null,
      filterOn:[],
      currentPage: 1,
      perPage: 4,
      total:0,
      ativos: [],
      limpa :[],
      fields: [
          {
              key: "numero",
              label: "Numero da Sala"
          }, 
          {
              key: "sala limpa",
              label: "Sala limpa", 
              formatter: (value, key, item) => {
                  return value ? 'Sim' : ''
              },
          },
          {
              key: "limpada",
              label: "Limpeza"
          }
        
            
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
    },
    async Save_Limpeza(item){
      this.limpa.splice(0, this.limpa.length);
      this.limpa.push(item);
    },
    async Limpeza(item){
        try {
            await this.$http.put(`${this.$baseUrl}/salas/status_limpeza/`, this.limpa[0]);
            await this.carregaTabela();
      } catch (error) {
            alert("Não foi possivel confirmar a limpeza da sala");
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