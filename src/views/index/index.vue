<template>
  <div>
    <div>
      <h1>Hello App!</h1>
    </div>
    <div>
      <div><router-link to="/demo" replace>Go to Demo</router-link></div>
      <div><router-link to="/login">Go to Login</router-link></div>
      <div><router-link to="/home">Go to Home</router-link></div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
div {
    text-align: center;
}
</style>
