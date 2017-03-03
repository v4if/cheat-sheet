<template>
  <div id="sheet-preview">
    <template v-if="sheet">
      <h1>{{sheet.name}}</h1>

      <div v-for="(tableItem, index) in sheet.tableItems">
        <preview-table-item v-bind:header="tableItem.header" v-bind:items="tableItem.items">
        </preview-table-item>
      </div>
    </template>

    <div v-else>
      404 Not Found
    </div>
  </div>
</template>

<script>
  import PreviewTableItem from '@/components/PreviewTableItem.vue'
  import Storage from '@/js/Storage.js'

  export default {
    data () {
      return {
        sheet: Storage.fetch()[this.$route.params.index] || null
      };
    },
    components: {
      PreviewTableItem
    }
  }
</script>

<style scoped>

</style>
