<template>
  <div id="app">

    <trev-head />

    <el-container >
      <el-aside width="150px" style="float: left;">
        <trev-nav />
      </el-aside>

      <main class="main_content">
        <router-view />
      </main>
    </el-container>

  </div>
</template>

<script>
import styles from '@/styles/variables.scss';
import trevHead from './layout/header.vue';
import trevNav from './layout/nav.vue';

export default {
  name: 'App',
  components: {
    trevHead,
    trevNav,
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
