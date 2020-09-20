<template>
  <div>
    <div>
      <b-button class="btn btn-primary" v-b-modal.criaUser>
        <span>Adicionar</span>
      </b-button>
    </div>
    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
       <b-col  sm="1" lg="5" class="my-2" id="pesquisa">
          <b-form-group
            label="Pesquisar:"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            label-for="filterInput"
            class="mb-0"
          id="barra">
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
        <b-modal
          id="criaUser"
          title="Novo Usuario"
          ok-title="Salvar"
          cancel-title="Cancelar"
          @show="beforeUsers"
          @ok="saveUsers"
        >
          <UsersForm v-model="ativoAtual" />
        </b-modal>

        <b-modal
          id="editaAtivo"
          :title="'Editar Usuario - ' + ativoAtual.name"
          ok-title="Alterar"
          cancel-title="Cancelar"
          @ok="editarAtivo"
        >
          <UsersForm v-model="ativoAtual" />
        </b-modal>

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

            <template slot="cell(actionReset)" slot-scope="{ item }">
              <b-button class="btn btn-warning" v-on:click="beforeEditaUser(item)"> 
                <!-- RECRIAR FUNÇÃO PARA RESET -->
                <i class="fa fa-undo"></i>
              </b-button>
            </template>
          </b-table>
          <div>
            <b-pagination v-model="currentPage" :per-page="perPage" :total-rows="total"/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import UsersForm from "../widgets/UsersForm";
import axios from "axios";

export default {
  name: "Usuarios",
  components: {
    UsersForm
  },
  data: () => {
    return {
      ativoAtual: {
        name: "",
        email: "",
        password: "",
        id: "",
        filter: null,
        filterOn: [],
        currentPage: 1,
        perPage: 5,
        total: 0
      },
      ativos: [],
      fields: [
        {
          key: "name",
          label: "Nome"
        },
        {
          key: "email",
          label: "Email"
        },
        {
          key: "tag",
          label: "Tag do Usuario"
        },
        {
          key: "tipoAcesso",
          label: "Tipo de Acesso"
        },
        {
          key: "actionDelete",
          label: "Deletar Usuario"
        },
        {
          key: "actionEdit",
          label: "Editar Usuario "
        }, 
        {
          key: "actionReset",
          label: "Resetar Senha"

        }
      ]
    };
  },
  methods: {
    onFiltered(filteredItems){
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    async excluirUser(ativo) {
      try {
        await this.$http.delete(`${this.$baseUrl}/users/${ativo.id}`);
        await this.carregaTabela();
      } catch (err) {
        alert("erro ao excluir ativo");
      }
    },
    beforeEditaUser(ativo) {
      this.ativoAtual = {
        id: ativo.id,
        name: ativo.name,
        email: ativo.email
      };
      this.$root.$emit("bv::show::modal", "editaAtivo");
    },
    async editarAtivo() {
      let payload = {
        id: this.ativoAtual.id,
        name: this.ativoAtual.name,
        email: this.ativoAtual.email
      };
      try {
        await this.$http.put(
          `${this.$baseUrl}/users/${this.ativoAtual.id}`,
          payload
        );
        await this.carregaTabela();
      } catch (err) {
        alert("erro ao atualizar ativo");
      }
    },
    async carregaTabela() {
      this.ativos.splice(0, this.ativos.length);
      let dados = await this.$http.get(`${this.$baseUrl}/users`, {});
      this.ativos.push(...dados.data);
    },
    beforeUsers() {
      this.ativoAtual.id = "";
      this.ativoAtual.name = "";
      this.ativoAtual.email = "";
    },
    async saveUsers() {
      let payload = {
        id: this.ativoAtual.id,
        name: this.ativoAtual.name,
        email: this.ativoAtual.email
      };
      try {
        await this.$http.post(`${this.$baseUrl}/users/`, payload);
        await this.carregaTabela();
      } catch (err) {
        alert("erro ao inserir");
      }
    }
  },
  async mounted() {
    await this.carregaTabela();
  }
};
</script>

<style>
</style>
