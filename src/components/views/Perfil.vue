<template>
  <main role="main" class="container">
    <div class="my-3 p-3 bg-white rounded shadow-sm">
      <b-card bg-variant="light">
        <div>
          <span>
            <Gravatar alt="User" class="img"/>
          </span>
          <b-form-group
            label-cols-lg="3"
            label="Informações do Usuário:"
            label-size="lg"
            label-class="font-weight-bold pt-4"
            class="mb-0"
            id="info"
          >
            <b-form-group
              label-cols-sm="3"
              label="Nome do Usuário:"
              label-align-sm="right"
              label-for="nested-nome"
            >
              <b-form-input id="nested-nome" disabled></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Email do Usuário:"
              label-align-sm="right"
              label-for="nested-email"
            >
              <b-form-input id="nested-email" disabled></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Tipo de Acesso:"
              label-align-sm="right"
              label-for="nested-acesso"
            >
              <b-form-input id="nested-acesso" disabled></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Função do Usuário:"
              label-align-sm="right"
              label-for="nested-funcao"
            >
              <b-form-input id="nested-funcao" disabled></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Senha Atual:"
              label-align-sm="right"
              label-for="nested-senhaAtual"
            >
              <b-form-input id="nested-senhaAtual" type="password"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Nova Senha:"
              label-align-sm="right"
              label-for="nested-senhaNova"
            >
              <b-form-input id="nested-senhaNova" type="password"></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Confirme a senha:"
              label-align-sm="right"
              label-for="nested-confirmeSenha"
            >
              <b-form-input id="nested-confirmeSenha" type="password"></b-form-input>
            </b-form-group>
          </b-form-group>
        </div>
      </b-card>
    </div>
  </main>
</template>

<script>
import Gravatar from "vue-gravatar";
export default {
  components: { Gravatar },
};
</script>

<style>
.img {
    width: 150px;
    position: absolute;
    left: 62px;
    top: 150px;
}
</style>