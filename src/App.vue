<template>
  <div>
    <div>
      <h1>Hello App!</h1>
    </div>
    <div>
      <div><router-link to="/demo">Go to Demo</router-link></div>
      <div><router-link to="/login">Go to Login</router-link></div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>    
div {
  text-align: center;
} 
</style>