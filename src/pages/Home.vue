<template>
  <div id="home">
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link v-bind:to="{name:'Sheet', params: {index:'new', len:sheets.length}}">
      <el-button type="primary" icon="plus">New Cheat Sheet</el-button>
    </router-link>

    <div v-if="sheets.length > 0">
      <router-link class="square-item" v-for="(sheet, index) in sheets" :key="index" v-bind:to="'/sheet/' + index">
        <!-- 阻止冒泡，提交事件不再重载页面 -->
        <el-button class="icon-bar" type="primary" icon="close" v-on:click.stop.prevent="deleteSheet(index)"></el-button>
        <strong>{{sheet.name}}</strong>
      </router-link>
    </div>

  </div>
</template>

<script>
  import Storage from '@/js/Storage.js'

  export default {
    data () {
      return {
        sheets: Storage.fetch()
      };
    },
    methods: {
        deleteSheet (index) {
            this.sheets.splice(index, 1);
            Storage.store(this.sheets);
        }
    }
  }
</script>

<style scoped>
  #home {
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  .square-item {
    width: 200px;
    height: 200px;
    float: left;
    margin: 50px;
    position: relative;
    color: #fff;
    background-color: #58B7FF;
    border-radius: 25px;
    box-shadow: 0 5px 20px rgba(0,0,0,.1);
    transition: background-color 200ms ease-in,box-shadow 200ms ease;
  }

  .square-item strong {
    position: absolute;
    top: 50px;
    left: 25px;
  }

  .square-item .icon-bar {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
