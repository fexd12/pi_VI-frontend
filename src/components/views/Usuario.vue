<template>
  <div>
    <div>
      <b-button pill variant="primary" v-b-modal.criaUser> Adicionar</b-button>
    </div>
    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
       <b-col  sm="1" lg="5" class="my-1" id="pesquisa">
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
          :title="'Editar Usuario - ' + ativoAtual.nome"
          ok-title="Alterar"
          cancel-title="Cancelar"
          @ok="editarAtivo"
        >
          <UsersForm v-model="ativoAtual" />
        </b-modal>

        <div class="info-box-text">
          <b-table
            class="table table-bordered dataTable"
            responsive :items="ativos"
            hover
            head-variant="light"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :filter-included-fields="filterOn"
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
              <b-button class="btn btn-warning" v-on:click="beforeResetPassword(item)"> 
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

export default {
  name: "Usuarios",
  components: {
    UsersForm
  },
  data: () => {
    return {
      ativoAtual: {
        nome: "",
        email: "",
        senha: "",
        id_usuario: "",
        tag_id:"",
        acesso_id:"",
        funcao_id:"",
        show_password:true
      },
      filter: null,
      sortDesc: null,
      filterOn: [],
      currentPage: 1,
      perPage: 3,
      total: 0,
      ativos: [],
      fields: [
        {
          key: "nome",
          label: "Nome"
        },
        {
          key: "email",
          label: "Email",
          class: "text-style",

        },
        {
          key: "tag",
          label: "Tag"
        },
        {
          key: "acesso",
          label: "Acesso"
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
        let payload={
          id_usuario : ativo.id_usuario
        }
        await this.$http.put(`${this.$baseUrl}/usuario/deletar/`,payload);
        await this.carregaTabela();
      } catch (err) {
        alert("erro ao excluir ativo");
      }
    },
    beforeEditaUser(ativo) {
      let selected_ativo = this.ativos.filter(x=> x.id_usuario == ativo.id_usuario)[0];
      this.ativoAtual = {
        id_usuario: selected_ativo.id_usuario,
        nome: selected_ativo.nome,
        email: selected_ativo.email,
        tag_id:selected_ativo.tag_id,
        acesso_id:selected_ativo.acesso_id,
        funcao_id:selected_ativo.funcao_id,
        show_password:false
      };
      this.$root.$emit("bv::show::modal", "editaAtivo");
    },
    async beforeResetPassword(ativo){
      let payload={
        id_usuario:ativo.id_usuario,
        senha_nova:'senac123',
        nova_senha:0,
      };
      try {
        await this.$http.post(`${this.$baseUrl}/usuario/reset_password/`,payload)
        .then(async request =>{
          await this.$http.post(`${this.$baseUrl}/email/`, {...payload,email:ativo.email,cadastro:2})
          alert("Senha Resetada com sucesso")
        })
      } catch (error) {
        alert(error.message);
      } 
    },
    async editarAtivo() {
      let payload = {
        id_usuario: this.ativoAtual.id_usuario,
        nome: this.ativoAtual.nome,
        email: this.ativoAtual.email,
        tag_id: this.ativoAtual.tag_id,
        acesso_id : this.ativoAtual.acesso_id,
        funcao_id :this.ativoAtual.funcao_id
        
      };
      try {
        await this.$http.put(`${this.$baseUrl}/usuario/editar/`,payload);
        await this.carregaTabela();
      } catch (err) {
        alert("erro ao atualizar ativo");
      }
    },
    async carregaTabela() {
      this.ativos.splice(0, this.ativos.length);
      await this.$http.get(`${this.$baseUrl}/usuario/`, {}).then(dados=>{
        
        dados.data.items.forEach(element => {
          this.ativos.push(element)
        });        
      })
      this.total = this.ativos.length;
    },
    beforeUsers() {
      this.ativoAtual.tag_id = "";
      this.ativoAtual.nome = "";
      this.ativoAtual.email = "";
      this.ativoAtual.acesso_id = "";
      this.ativoAtual.senha = "";
      this.ativoAtual.funcao_id = "";
      this.ativoAtual.show_password = true;
    },
    async saveUsers() {
      let payload = {
        nome: this.ativoAtual.nome,
        email: this.ativoAtual.email,
        senha: this.ativoAtual.senha,
        tag_id: this.ativoAtual.tag_id,
        acesso_id:this.ativoAtual.acesso_id,
        funcao_id:this.ativoAtual.funcao_id
      };
      try {
        await this.$http.post(`${this.$baseUrl}/usuario/`, payload)
        .then(async request =>{
          await this.$http.post(`${this.$baseUrl}/email/`, {...payload,cadastro:1})
        })
        
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
.text-style {
  white-space: nowrap;
  height: 100%;
  /* width: 100%;                    */
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 900px){
  #pesquisa{
    display: none;
  }
}
</style>
