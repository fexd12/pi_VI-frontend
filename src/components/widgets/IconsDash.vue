<template>
  <div>
      <div
      class="row"
      id="Limpeza"
      v-if="content.funcao == 2 "
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
      v-if="content.funcao == 4 "
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
      v-if="content.funcao == 3 "
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
      v-if="content.funcao == 1 "
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
  </div>
</template>

<script>
export default {
  name: "UsersForm",
  props: ["value"],
  data() {
    return {
      content: {
        id_usuario:this.value.id_usuario,
        funcao: this.value.id_funcao
      }, 
    }
  },
}
</script>

<style>

</style>