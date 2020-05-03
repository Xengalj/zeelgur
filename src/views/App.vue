<template>
  <div id="app">

    <TrevHead />

    <el-container >
      <el-aside width="200px" style="float: left;">
        <TrevNav />
      </el-aside>

      <main class="main_content">
        <router-view />
      </main>
    </el-container>

  </div>
</template>

<script>
import styles from '@/styles/variables.scss';
import TrevHead from './layout/header.vue';
import TrevNav from './layout/nav.vue';

export default {
  name: 'App',
  components: {
    TrevHead,
    TrevNav,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.main_content {
  width: -webkit-fill-available;
}
</style>
