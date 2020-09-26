<template>
  <div>
    <div class="container">
      <b-button pill variant="primary" v-b-modal.criaSala>Nova Sala</b-button>
    </div>

    <b-modal
      id="criaSala"
      title="Nova Sala"
      ok-title="Salvar"
      cancel-title="Cancelar"
      @show="beforeSala"
      @ok="saveSala"
    >
      <SalasForm v-model="ativoAtual" />
    </b-modal>

    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <b-col sm="1" lg="5" class="my-2" id="pesquisa">
          <b-form-group
            label="Pesquisar:"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            label-for="filterInput"
            class="mb-0"
            id="barra"
          >
            <b-input-group size="sm">
              <b-form-input
                v-model="filter"
                type="search"
                id="filterInput"
                placeholder="Digite o que procura!"
              ></b-form-input>
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''" id="limpar">Limpar</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <div class="media text-muted pt-3">
          <div class="container">
            <!-- No data message -->
            <!-- Sala list -->
            <div class="info-box-text">
              <b-table
                class="table table-bordered dataTable"
                hover
                fixed
                head-variant="light"
                :items="ativos"
                :fields="fields"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
              >
                <!-- <template slot="cell(actionDelete)" slot-scope="{ item }">
                  <b-button class="btn btn-danger" v-on:click="excluirUser(item)">
                    <i class="fa fa-trash"></i>
                  </b-button>
                </template>

                <template slot="cell(actionEdit)" slot-scope="{ item }">
                  <b-button class="btn btn-warning" v-on:click="beforeEditaUser(item)">
                    <i class="fa fa-pencil-square-o"></i>
                  </b-button>
                </template> -->
              </b-table>
              <div>
                <b-pagination v-model="currentPage" :per-page="perPage" :total-rows="total" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SalasForm from "../widgets/FormSalas";
export default {
  components: {
    SalasForm,
  },
  data: () => {
    return {
      ativoAtual: {
        id_sala: "",
        numero: "",
        quantidade: "",
        sala_tipo_id: "",
      },
      filter: null,
      filterOn: [],
      currentPage: 1,
      perPage: 5,
      total: 0,
      ativos: [],
      fields: [
        {
          key: "numero",
          label: "Numero da Sala",
        },
        {
          key: "quantidade",
          label: "Quantidade",
        },
        {
          key: "salas_tipo",
          label: "Tipo de Sala",
        },
      ],
    };
  },
  methods: {
    onFiltered(filteredItems){
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    async carregaTabela() {
      this.ativos.splice(0, this.ativos.length);
      await this.$http.get(`${this.$baseUrl}/salas/`, {}).then(dados=>{
        dados.data.items.forEach(element => {
          this.ativos.push(element)
        });        
      })
      this.total = this.ativos.length;
    },
    beforeSala() {
      this.ativoAtual.id_sala = "";
      this.ativoAtual.numero = "";
      this.ativoAtual.quantidade = "";
      this.ativoAtual.sala_tipo_id = "";
    },
    async saveSala() {
      let payload = {
        numero: this.ativoAtual.numero,
        quantidade: this.ativoAtual.quantidade,
        sala_tipo_id : this.ativoAtual.sala_tipo_id
      };
      try {
        await this.$http.post(`${this.$baseUrl}/salas/`, payload);
        await this.carregaTabela();
      } catch (err) {
        alert("erro ao inserir");
      }
    },
  },
  async mounted() {
    await this.carregaTabela();
  },
};
</script>

<style>
</style>