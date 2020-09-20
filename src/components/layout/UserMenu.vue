  
<template>
  <a v-on:click="logout" class="btn btn-default btn-flat-btn-block" >
    <i class="fa fa-sign-out" id="exit"></i>
    <span>Saída</span>
  </a>

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