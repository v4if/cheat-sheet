<template>
    <el-input v-bind:placeholder="placeholder" v-on:blur="notify" v-model="text"></el-input>
</template>

<script>
  export default {
    name: 'add-input',
//  声明父组件传递的属性
    props: ['placeholder'],
    data () {
        return {
            text: ""
        };
    },
    methods: {
      notify () {
          if (this.text.trim() != "") {
//              向父组件触发事件
              this.$emit('input-next', this.text.trim());
          }
          this.text = "";
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
