<template>
  <div class="wrapper">
    <div class="side">
      <h1>目录</h1>
      <h2>基础</h2>
      <router-link to="base_introduce">
        <h3>介绍</h3>
      </router-link>
      <router-link to="base_temSyntax">
        <h3>模版语法</h3>
      </router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  computed:{
    
  },
  created(){
    console.log(this.$route);
    
  }
});
</script>

<style>
.wrapper {
  display: flex;
}
.side{
  margin-right: 50px;
}
</style>


