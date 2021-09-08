<template>
  <h3>插值</h3>
  <p>{{ message1 }}</p>
  <h3>v-once</h3>
  <p v-once>{{ message2 }}</p>
  <h3>v-html</h3>
  <p v-html="message1"></p>
  <h3>注意点</h3>
  <li>动态参数</li>
  <li>修饰符</li>
</template>

<script>
export default {
  data() {
    return {
      message1: '<span style="color: red">This should be red.</span>',
      message2: "我只能改变一次哈",
    };
  },
};
</script>

<style>
</style>