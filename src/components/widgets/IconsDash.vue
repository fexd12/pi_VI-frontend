<template>
  <div>
    <b-modal
      size="xl"
      id="editaAtivo"
      title="Manutenção"
      ok-title="Salvar"
      @ok="get_salas_manutencao"
      cancel-title="Cancelar"
    >
      <SalasManutencao />
    </b-modal>

    <!-- TELA FUNC LIMPEZA -->
    <div class="row" id="Limpeza" v-if="content.id_funcao == 2">
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
      </div>
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-green']">
              <i :class="['ion', 'ion-checkmark-round']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{
                " Quantidade de Salas Disponíveis "
              }}</span>
              <span :class="'info-box-number'">{{
                salas_disponiveis.soma
              }}</span>
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
              <span :class="'info-box-number'">{{ salas_alugadas.soma }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- TELA FUNC ADM -->

    <div class="row" id="Adm" v-if="content.id_funcao == 4">
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-blue']">
              <i :class="['ion', 'ion-ios-people-outline']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'"> {{ "Funcionarios Cadastrados" }} </span>
              <span :class="'info-box-number'">{{ usuarios.soma }}</span>
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
              <span :class="'text'">{{
                "Quantidade de Salas Disponíveis "
              }}</span>
              <span :class="'info-box-number'">{{
                salas_disponiveis.soma
              }}</span>
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
              <span :class="'info-box-number'">{{ salas_alugadas.soma }}</span>
            </div>
          </div>
        </template>
      </div>
      <div class="col-lg-3">
        <template>
          <div class="info-box" v-on:click="conserto_sala">
            <span :class="['info-box-icon', 'bg-red']">
              <i :class="['ion', 'ion-settings']"></i>
            </span>
            <div class="info-box-content">
              <span type="'text/x-template'"
                >{{ "Salas em Manutenção" }}
                <span :class="'info-box-number'">{{
                  salas_manutencao.soma
                }}</span>
                <transition name="modal"> </transition>
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- TELA FUNC TECNICO -->

    <div class="row" id="Tecnico" v-if="content.id_funcao == 3">
      <div class="col-lg-3">
        <template>
          <div class="info-box" v-on:click="conserto_sala">
            <span :class="['info-box-icon', 'bg-red']">
              <i :class="['ion', 'ion-settings']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas em Manutenção " }}</span>
              <span :class="'info-box-number'">{{
                salas_manutencao.soma
              }}</span>
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
              <span :class="'text'">{{
                "Quantidade de Salas Disponíveis "
              }}</span>
              <span :class="'info-box-number'">{{
                salas_disponiveis.soma
              }}</span>
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
              <span :class="'info-box-number'">{{ salas_alugadas.soma }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- TELA FUNC PROFESSOR -->
    <div class="row" id="Professor" v-if="content.id_funcao == 1">
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-red']">
              <i :class="['ion', 'ion-settings']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{ "Salas em Manutenção " }}</span>
              <span :class="'info-box-number'">
                {{ salas_manutencao.soma }}</span
              >
              <template>
                <div v-b-modal.manutencao></div>
              </template>
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
              <span :class="'text'">{{
                "Quantidade de Salas Disponíveis"
              }}</span>
              <span :class="'info-box-number'">{{
                salas_disponiveis.soma
              }}</span>
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
              <span :class="'text'">{{ "Quantidade de Salas Alugadas" }}</span>
              <span :class="'info-box-number'">{{ salas_alugadas.soma }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import UsuarioVue from "../views/Usuario.vue";
import SalasManutencao from "../widgets/SalasManutencao";

export default {
  name: "UsersForm",
  components: {
    SalasManutencao,
  },
  data() {
    return {
      content: {},
      limpeza: {
        soma: "",
      },
      usuarios: {
        soma: "",
      },
      salas_disponiveis: {
        soma: "",
      },
      salas_alugadas: {
        soma: "",
      },
      salas_manutencao: {
        soma: "",
      },
    };
  },
  methods: {
    Usuario() {
      this.content = { ...this.$store.getters.get_usuario_logado };
    },
    async get_limpeza() {
      let response = await this.$http.get(
        `${this.$baseUrl}/usuario/limpeza`,
        {}
      );
      this.limpeza.soma = response.data.usuario;
    },
    async get_funcionarios() {
      let response = await this.$http.get(`${this.$baseUrl}/usuario/all`, {});
      this.usuarios.soma = response.data.usuarios;
    },
    async get_salas_alugadas() {
      let response = await this.$http.get(`${this.$baseUrl}/salas/alugada`, {});
      this.salas_alugadas.soma = response.data.salas;
    },
    async get_salas_manutencao() {
      let response = await this.$http.get(
        `${this.$baseUrl}/salas/manutencao`,
        {}
      );
      this.salas_manutencao.soma = response.data.salas;
    },
    async get_salas_disponiveis() {
      let response = await this.$http.get(
        `${this.$baseUrl}/salas/disponivel`,
        {}
      );
      salas =  response.data.salas -  parseInt(this.salas_alugadas.soma) - parseInt(this.salas_manutencao.soma);
      this.salas_disponiveis.soma = salas < 0 ? 0 : salas
    },
    conserto_sala() {
      this.$root.$emit("bv::show::modal", "editaAtivo");
    },
  },
  async mounted() {
    this.Usuario();
    await this.get_limpeza();
    await this.get_funcionarios();
    await this.get_salas_alugadas();
    await this.get_salas_manutencao();
    await this.get_salas_disponiveis();
  },
};
</script>

<style>
</style>