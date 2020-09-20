<template>
  <div>
    <div class="container">
      <b-button class="btn btn-secundary" v-b-modal.criaSala>
        <span>Nova Sala</span>
      </b-button>
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
                filter="filter"
                :filter-included-fields="filterOn"
                :items="ativos"
                :fields="fields"
                @filtered="onFiltered"
              >
                <template slot="cell(actionDelete)" slot-scope="{ item }">
                  <b-button class="btn btn-danger" v-on:click="excluirUser(item)">
                    <i class="fa fa-trash"></i>
                  </b-button>
                </template>

                <template slot="cell(actionEdit)" slot-scope="{ item }">
                  <b-button class="btn btn-warning" v-on:click="beforeEditaUser(item)">
                    <i class="fa fa-pencil-square-o"></i>
                  </b-button>
                </template>
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
        id: "",
        nome: "",
        quantidade: "",
        sala: "",
        filter: null,
        filterOn: [],
        currentPage: 1,
        perPage: 5,
        total: 0
      },
      ativos: [],
      fields: [
        {
          key: "nome",
          label: "nome",
        },
        {
          key: "quantidade",
          label: "quantidade",
        },
        {
          key: "tipoSala",
          label: "Tipo de Sala",
        },
      ],
    };
  },
  methods: {
    async carregaTabela() {
      this.ativos.splice(0, this.ativos.length);
      let dados = await this.$http.get(`${this.$baseUrl}/salas/`, {});
      this.ativos.push(...dados.data);
    },
    beforeSala() {
      this.ativoAtual.nome = "";
      this.ativoAtual.quantidade = "";
    },
    async saveSala() {
      let payload = {
        nome: this.ativoAtual.nome,
        quantidade: this.ativoAtual.quantidade,
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