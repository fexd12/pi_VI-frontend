<template>
  <ul class="sidebar-menu">
    <li class="header" id="teste">Funções</li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Página Inicial</span>
      </a>
    </router-link>

    <router-link
      tag="li"
      class="pageLink"
      to="/usuario"
      v-if="usuario.id_funcao == 4"
    >
      <a>
        <i class="fa fa-address-card"></i>
        <span class="page">Cadastro de Usuário</span>
      </a>
    </router-link>

    <router-link tag="li" class="pageLink" to="/salas">
      <a>
        <i class="fa fa-graduation-cap"></i>
        <span class="page">Salas</span>
      </a>
    </router-link>

    <router-link tag="li" class="pageLink" to="/agendamento" v-if="usuario.id_funcao == 1 || usuario.id_funcao == 4 ">
      <a>
        <i class="fa fa-calendar"></i>
        <span class="page">Agendamento</span>
      </a>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: "SidebarMenu",
  data: () => {
    return {
      usuario: {},
    };
  },
  methods: {
    get_usuario() {
        this.usuario = {
        ...this.$store.getters.get_usuario_logado
      };
    },
  },
  mounted() {
    this.get_usuario();
  },
};
</script>
<style>
/* override default */
.sidebar-menu > li > a {
  padding: 30px 15px 12px 17px;
}

.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}
.treeview-title {
  z-index: 1;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-90deg);
  }
}

#teste {
  padding-top: 50px;
}
</style>
