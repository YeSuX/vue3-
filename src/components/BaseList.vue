<template>
  <li v-if="fruitName != 'apple'">im a {{fruitName}}</li>
</template>

<script>
export default {
  name:'BaseList',
  props:['fruitName']
}
</script>

<style>

</style>