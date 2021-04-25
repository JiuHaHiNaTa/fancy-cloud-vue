
<template>
  <div>
    <div>
      “喂你好，是尼克陈吗？我是叮咚买菜的送菜员，由于您电话打不通，特意在页面里跟您说一声，您菜到家了。
    </div>
    <div>
      {{ count }}
    </div>
    <div>
      {{ doneTodos }}
    </div>
    <button @click="incrementAsync()">+10</button>
  </div>
</template>
<script>
import { reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore,mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username;
    },
    ...mapGetters([
      'doneTodos'
    ]),
    ...mapState([
      'count'
    ])
  },
  methods: {
    goToDemo() {
      if (isAuthenticated) {
        this.$router.push("/demo");
      } else {
        this.$router.push("/login");
      }
    },
    increment () {
      this.$store.dispatch('incrementAsync');
    },
    ...mapActions ([
      'incrementAsync'
    ])
  },
  setup() {},
};
</script>
<style scoped>
div {
  color: yellowgreen;
}
</style>