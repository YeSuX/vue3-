<template>
    <h3>计数器</h3>
    <p>count: {{count}}</p>
    <h3>页面加载</h3>
    <p :title="hoverMessage">鼠标移动到上面看看</p>
    <h3>反转字符串</h3>
    <p>当前字符为：{{str}}</p>
    <button @click="goHell">反转</button>
    <h3>双向绑定</h3>
    <p>{{modelValue}}</p>
    <input type="text" v-model="modelValue">
    <h3>条件 循环 组件 父子通讯</h3>
    <BaseList v-for="fruit in fruits" :key="fruit.name" :fruitName="fruit.name"></BaseList>
    <h3>vue 生命周期图示</h3>
    <img src="https://v3.cn.vuejs.org/images/lifecycle.svg" alt="vue 生命周期图示" width="500">

</template>

<script>
import BaseList from '../../components/BaseList.vue'

export default {
    components:{
        BaseList
    },
    data(){
        return{
            count:0,
            hoverMessage:'首次加载页面的时间为'+new Date().toLocaleTimeString(),
            str:'go hell inspur!',
            modelValue:'go hell inspur!',
            fruits:[
                {name:'apple'},
                {name:'banana'},
                {name:'pear'}
            ]
        }
    },
    mounted(){
        setInterval(()=>{
            this.count ++;
        },1000)
    },
    methods:{
        goHell(){
            this.str = this.str.split('').reverse().join('');
        }
    }
}
</script>

<style>

</style>