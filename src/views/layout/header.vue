<template>
  <el-header height="80px">
    <el-image
      src="/img/logo.png"
      class="logo"
      fit="scale-down"
    />

    <h1>Greiða</h1>

    <!--el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px;"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>View</el-dropdown-item>
        <el-dropdown-item>Add</el-dropdown-item>
        <el-dropdown-item>Delete</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>{{name}}</span-->

  </el-header>
</template>

<script>

export default {
  data () {
    return {
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
  .el-header {
    background-color: $headerBg;
    color: #333;
    line-height: 60px;
  }
  .logo {
    width: 80px;
    height: 80px;
    float: left;
  }
  h1 {
    margin: 0;
    color: white;
  }
</style>
