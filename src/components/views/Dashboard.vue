<template>
  <section class="content">
    <!-- Info boxes -->
    <!-- <div id="Limpeza"> -->
    <div
      class="row"
      id="Limpeza"
      v-if="usuario.funcao == 2 "
    >
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
              <span :class="'info-box-number'">{{ usuarios.soma }}</span>
            </div>
          </div>
        </template>
        <!-- </div> -->
      </div>
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-red']">
              <i :class="['ion', 'ion-settings']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas Sujas " }}</span>
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
    <div
      class="row"
      id="Adm"
      v-if="usuario.funcao == 4 "
    >
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-blue']">
              <i :class="['ion', 'ion-ios-people-outline']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Funcionarios Cadastrados" }}</span>
              <span :class="'info-box-number'">{{ usuarios.soma }}</span>
            </div>
          </div>
        </template>
        <!-- </div> -->
      </div>
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-black']">
              <i :class="['ion', 'ion-thumbsdown']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas Sujas " }}</span>
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
              <span :class="'text'">{{ "Quantidade de Salas Alugadas " }}</span>
              <span :class="'info-box-number'">{{ tags.soma }}</span>
            </div>
          </div>
        </template>
      </div>
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-gray']">
              <i :class="['ion', 'ion-alert-circled']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas Interditadas " }}</span>
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
    <div
      class="row"
      id="Tecnico"
      v-if="usuario.funcao == 3 "
    >
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-gray']">
              <i :class="['ion', 'ion-alert-circled']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas Interditadas " }}</span>
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
    <div
      class="row"
      id="Professor"
      v-if="usuario.funcao == 1 "
    >
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-black']">
              <i :class="['ion', 'ion-pin']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Quantidade de Salas Alugadas " }}</span>
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
            <span :class="['info-box-icon', 'bg-yellow']">
              <i :class="['ion', 'ion-close-round']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas Alugadas" }}</span>
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
        <div class="my-3 p-3 bg-white rounded shadow-sm">
          <div class="info-box-text">
            <b-table
              class="table table-bordered dataTable"
              responsive="md"
              hover
              head-variant="light"
              filter="filter"
              :filter-included-fields="filterOn"
              :items="ativos"
              :fields="fields"
              @filtered="onFiltered"
            >
              <template slot="cell(DeletarAgend)" slot-scope="{ item }">
                <b-button
                  class="btn btn-danger"
                  v-on:click="excluirUser(item)"
                  v-b-modal.DeletarSala
                >
                  <i class="fa fa-trash"></i>
                </b-button>
              </template>
              <b-modal
                id="DeletarAgend"
                title="Confirmação de Calendamento"
                ok-title="Confirmar"
                cancel-title="Cancelar"
                @ok="DeletarSala"
              >
                <div>
                  <h5>Deseja mesmo cancelar o agendamento?</h5>
                </div>
              </b-modal>
            </b-table>
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
        funcao: 4,
      },
      filterOn: [],
      usuarios: {
        soma: "",
      },
      tags: {
        soma: "",
      },
      salas: [
        {
          id: "",
          nome: "",
          status: "",
          quantidade: "",
        },
      ],
      ativos:[],
      fields: [
        {
          key: "data",
          label: "Data do Agendamento",
        },
        {
          key: "hora_ini",
          label: "Horario de Inicio",
        },
        {
          key: "hora_termi",
          label: "Horario de Termino",
        },
        {
          key: "nome_sala",
          label: "Nome da Sala",
        },
        {
          key: "tipo_sala",
          label: "Tipo da Sala",
        },
        {
          key: "actionDelete",
          label: "Cancelar Agedamento",
        },
      ],
    };
  },
  methods: {
    async carregaUsuarios() {
      let dados = await this.$http.get(`${this.$baseUrl}/users/all/`, {});
      this.usuarios.soma = dados.data;
    },
    async carregaTags() {
      let dados = await this.$http.get(`${this.$baseUrl}/tag/all/`, {});
      this.tags.soma = dados.data;
    },
    async carregaSala() {
      let dados = await this.$http.get(`${this.$baseUrl}/salas`, {});
      this.salas.push(...dados.data);
      this.salas.splice(0, 1);
      // console.log(this.salas);
    },
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 800 && window.innerHeight <= 600;
    },
  },
  async mounted() {
    await this.carregaUsuarios();
    await this.carregaTags();
    await this.carregaSala();
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
