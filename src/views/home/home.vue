<template>
  <div>Hello {{ username }}</div>
</template>

<script>
import { onBeforeRouteUpdate } from 'vue-router'
export default {
  props: [
    'username'
  ],
  methods: {
    goToHome() {
      if (isAuthenticated) {
        this.$router.push("/home");
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>
