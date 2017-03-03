<template>
  <div class="preview-table-item">

    <h2>{{header}}</h2>

    <div v-if="items.length > 0">
      <el-collapse v-bind:value="new Array(items.length).fill(0).map((element, idx) => {return idx;})">
        <el-collapse-item v-for="(item, index) in items" :key="index" v-bind:name="index">
          <template slot="title">
            <strong>{{item.tag}}</strong>
          </template>

          <div>{{item.info}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>

  </div>

</template>

<script>

  export default {
    name: 'preview-table-item',
//  声明父组件传递的属性
    props: ['header', 'items'],
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  <!-- 屏幕小于 -->
  @media (max-width: 1366px) {
    .preview-table-item {
      width: 100%;
    }
  }
  @media (min-width: 1366px) {
    .preview-table-item {
      width: 32%;
      padding-right: 10px;
      float: left;
    }
  }

  strong {
    font-style: italic;
  }
</style>
