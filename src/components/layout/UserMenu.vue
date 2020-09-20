  
<template>
  <!-- <a v-on:click="logout" class="btn btn-default btn-flat-btn-block" >

  </a> -->

  <div>
    <b-dropdown v-on:click="logout" class="btn btn-default btn-flat-btn-block">
      <b-dropdown-item>
        <i class="fa fa-sign-out" id="exit"></i>
        <span>Saída</span>
      </b-dropdown-item>

      <b-dropdown-item>
        <i class="fa fa-sign-out" id="exit"></i>
        <span>Saída</span>
      </b-dropdown-item>

      <b-dropdown-item>
        <i class="fa fa-sign-out" id="exit"></i>
        <span>Saída</span>
      </b-dropdown-item>
    </b-dropdown>

  </div>

</template>

<script>

export default {
  name: 'UserMenu',
  props: ['user'],
  methods:{
    logout(){
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>
<style>


</style>