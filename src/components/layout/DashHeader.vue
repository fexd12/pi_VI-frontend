<template>
  <header class="main-header">
    <span class="logo-mini">
      <a href="/"><img src="/static/img/projetov21.png" alt="Logo" class="img-responsive center-block logo " style="height: 75px;"></a>
    </span>
    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" style='padding:20px' role="navigation">
      <!-- Sidebar toggle button-->


      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- <messages-menu></messages-menu>
          <tasks-menu></tasks-menu> -->
          <user-menu :user="user"></user-menu>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import UserMenu from './UserMenu'
export default {
  name: "DashHeader",
  components:{
    UserMenu
  },
  props: ["user"]
};
</script>

<style>


</style>