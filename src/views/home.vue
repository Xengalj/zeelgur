<template>
  <div id="app">
    <h1>Welcome!</h1>
    <div>
      <el-button @click="this.startHacking">Start</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      timestamp: new Date(),
    };
  },
  created() {
    //console.log('BUILT');
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    },
  },
};
</script>

<style lang="scss" scoped>
/*
@import '@/../../../styles/element-variables.scss';
.app-container {
  flex: 1;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
  a.user-link {
    color: $--color-primary;
  }
  .block {
    float: left;
    min-width: 250px;
  }
  .clear-left {
    clear: left;
  }
}
*/
</style>
