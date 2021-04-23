<template>
  <div>
    <div>
      <label>FancyCloud</label>
    </div>
    <div>
      <label>用户名</label>
      <input name="username" id="username" type="text" required />
    </div>
    <div>
      <label>密码</label>
      <input name="password" id="password" type="password" required />
    </div>
    <div>
      <button name="提交" type="submit" value="submit">登录</button>
    </div>
  </div>
</template>
<script>
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    function pushBackToForward(atuh) {
      router.push({
        name: "path",
        query: {
          ...route.atuh,
        },
      });
    }
  },
};
</script>

<style scoped>
</style>