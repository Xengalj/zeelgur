<template>

    <el-menu
      :background-color="menuBackground"
      text-color="#fff"
      :default-active="activeLink"
      :router="true"
    >
      <template v-for="rule in this.routes">
        <el-submenu v-if="rule.children && rule.children.length > 0" :index="rule.path">
          <template slot="title">
            <i :class="rule.icon"></i>{{ rule.title }}
          </template>
          <el-menu-item v-for="child in rule.children" :index="rule.path + '/' + child.path" :key="child.title">
            {{ child.title }}
          </el-menu-item>
        </el-submenu>

        <el-menu-item v-else :index="rule.path">
          <i :class="rule.icon"></i>
          {{ rule.title }}
        </el-menu-item>
      </template>
    </el-menu>

</template>

<script>
import styles from "@/styles/variables.scss";

export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.activeLink = to.path;
    });
  },
  beforeRouteUpdate (to, from, next) {
    this.activeLink = to.path;
    next();
  },

  data() {
    return {
      menuBackground: styles.menuBg,
      routes: this.$router.options.routes,
      activeLink: null,
    };
  },
  created() {
    this.activeLink = this.$router.currentRoute.fullPath;
  },
};
</script>
