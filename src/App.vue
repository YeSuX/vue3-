<template>
  <div class="wrapper">
    <div class="side">
      <h2>目录</h2>
    </div>
    <div class="content">内容</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
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


