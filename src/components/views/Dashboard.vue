<template>
  <section class="content app">
    <!-- Info boxes -->
    <!-- <div id="Limpeza"> -->
    <div class="row" id="Limpeza" v-if="usuario.funcao == 2">
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-blue']">
              <i :class="['ion', 'ion-ios-people-outline']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{
                "Funcionarios de Limpeza Cadastrados"
              }}</span>
              <span :class="'info-box-number'">{{ limpeza.soma }}</span>
            </div>
          </div>
        </template>
        <!-- </div> -->
      </div>
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-green']">
              <i :class="['ion', 'ion-checkmark-round']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas Disponíveis " }}</span>
              <span :class="'info-box-number'">{{ tags.soma }}</span>
            </div>
          </div>
        </template>
      </div>
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-yellow']">
              <i :class="['ion', 'ion-close-round']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas Alugadas " }}</span>
              <span :class="'info-box-number'">{{ tags.soma }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="row" id="Adm" v-if="usuario.funcao == 4">
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-green']">
              <i :class="['ion', 'ion-checkmark-round']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas Disponíveis " }}</span>
              <span :class="'info-box-number'">{{ limpeza.soma }}</span>
            </div>
          </div>
        </template>
      </div>

      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-yellow']">
              <i :class="['ion', 'ion-close-round']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas Alugadas " }}</span>
              <span :class="'info-box-number'">{{ tags.soma }}</span>
            </div>
          </div>
        </template>
      </div>

      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-red']">
              <i :class="['ion', 'ion-settings']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas em Manutenção " }}</span>
              <span :class="'info-box-number'">{{ tags.soma }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="row" id="Tecnico" v-if="usuario.funcao == 3">
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-red']">
              <i :class="['ion', 'ion-settings']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas em Manutenção " }}</span>
              <span :class="'info-box-number'">{{ tags.soma }}</span>
            </div>
          </div>
        </template>
      </div>

      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-green']">
              <i :class="['ion', 'ion-checkmark-round']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas Disponíveis " }}</span>
              <span :class="'info-box-number'">{{ tags.soma }}</span>
            </div>
          </div>
        </template>
      </div>

      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-yellow']">
              <i :class="['ion', 'ion-close-round']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas Alugadas " }}</span>
              <span :class="'info-box-number'">{{ tags.soma }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="row" id="Professor" v-if="usuario.funcao == 1">
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-black']">
              <i :class="['ion', 'ion-pin']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas Alugadas" }}</span>
              <span :class="'info-box-number'">{{ tags.soma }}</span>
            </div>
          </div>
        </template>
      </div>

      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-green']">
              <i :class="['ion', 'ion-checkmark-round']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas Disponíveis" }}</span>
              <span :class="'info-box-number'">{{ tags.soma }}</span>
            </div>
          </div>
        </template>
      </div>

      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-red']">
              <i :class="['ion', 'ion-settings']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas em Manutenção " }}</span>
              <span :class="'info-box-number'">{{ tags.soma }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
    <hr />
    <div>
      <h4 class="titulo-dashboard">Agendamentos do Usuário</h4>
      <main role="main" class="container">
        <div class="my-3 p-2 bg-white rounded shadow-sm">
          <div class="info-box-text">
            <b-table
              class="table table-bordered dataTable"
              responsive
              :items="ativos"
              hover
              head-variant="light"
              filter
              :filter-included-fields="filterOn"
              :current-page="currentPage"
              :per-page="perPage"
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
            <b-pagination
              v-model="currentPage"
              :per-page="perPage"
              :total-rows="total"
            />
          </div>
        </div>
      </main>
    </div>
  </section>

  <!-- /.content -->
</template>

<script>
import TableSalas from "../widgets/TableSalas";

export default {
  name: "Dashboard",
  components: {
    TableSalas,
  },
  data: () => {
    return {
      usuario: {
        id: 1,
        acesso: "",
        funcao: "",
      },
      filterOn: [],
      currentPage: 1,
      perPage: 4,
      total: 0,
      usuarios: {
        soma: "",
      },
      tags: {
        soma: "",
      },
      limpeza: {
        soma: "",
      },
      ativos: [],
      sala: [],
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
    // async carregaUsuarios() {
    //   let dados = await this.$http.get(`${this.$baseUrl}/users/all/`, {});
    //   this.usuarios.soma = dados.data;
    // },
    // async carregaTags() {
    //   let dados = await this.$http.get(`${this.$baseUrl}/tag/all/`, {});
    //   this.tags.soma = dados.data;
    // },
    // async carregaSala() {
    //   let dados = await this.$http.get(`${this.$baseUrl}/salas/`, {});
    //   this.salas.push(...dados.data);
    //   this.salas.splice(0, 1);
    //   // console.log(this.salas);
    // },
    async get_usuario() {
      let response = await this.$http.get(
        `${this.$baseUrl}/usuario/token/`,
        {}
      );
      let data = response.data;
      this.usuario.funcao = data.id_funcao;
    },
    async get_limpeza() {
      let response = await this.$http.get(
        `${this.$baseUrl}/usuario/limpeza`,
        {}
      );
      this.limpeza.soma = response.data;
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    async carregaAgendamento() {
      let dados = await this.$http.get(`${this.$baseUrl}/agendamento/`, {});
      this.ativos.push(...dados.data.items);
      this.total = this.ativos.length;
    },
    async DeletarSala() {
      try {
        await this.$http.put(`${this.$baseUrl}/agendamento/`, this.sala[0]);
        await this.carregaAgendamento();
      } catch (error) {
        alert("nao foi possivel excluir o agendamento");
      }
    },
    async SaveUser(item) {
      this.sala.splice(0, this.sala.length);
      this.sala.push(item);
    },
  },
  computed: {},
  async mounted() {
    await this.get_usuario();
    await this.carregaAgendamento();
    await this.get_limpeza();
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

#Adm {
  justify-content: center;
}
#Limpeza {
  justify-content: center;
}
#Tecnico {
  justify-content: center;
}
#Professor {
  justify-content: center;
}
</style>
