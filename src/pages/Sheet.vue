<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="sheet">

    <template v-if="sheet">
      <textarea type="text" class="info-text" cols="0" rows="1" v-model="sheet.name"
                v-on:click.capture.stop="doNothing">
      </textarea>

      <el-row :gutter="20">
        <el-col :span="4">
          <add-input placeholder="添加分类" v-on:input-next="addNewTable"></add-input>
        </el-col>
        <el-col :span="20">
          <el-button type="primary" icon="plus">New Table</el-button>
          <el-button type="primary" icon="upload" v-on:click="saveSheet">Save Sheet</el-button>
          <router-link v-bind:to="'/sheet-preview/' + this.$route.params.index">
            <el-button type="primary" icon="share">Preview</el-button>
          </router-link>
        </el-col>
      </el-row>

      <div v-for="(tableItem, index) in sheet.tableItems">
        <table-item v-bind:index="index" v-bind:header="tableItem.header" v-bind:items="tableItem.items"
                    v-on:add-item="addNewItem" v-on:delete-table="deleteTable" v-on:delete-item="deleteItem"
                    v-on:update-table-header="updateTableHeader">
        </table-item>
      </div>
    </template>

    <div v-else>
      404 Not Found
    </div>

  </div>
</template>

<script>
  import AddInput from '@/components/AddInput.vue'
  import TableItem from '@/components/TableItem.vue'
  import Storage from '@/js/Storage.js'

  export default {
    data () {
        return {
            sheet: Storage.fetch()[this.$route.params.index] || null
        };
    },
    components: {
      AddInput,
      TableItem
    },
    methods: {
//        捕获子组件触发的事件
      addNewTable (text) {
          this.sheet.tableItems.push(
            {
                header: text,
                items: []
            }
          );
      },
      addNewItem (index) {
          this.sheet.tableItems[index].items.push(
            {
                tag: "",
                info: ""
            }
          );
      },
      deleteTable (index) {
//          start,deleteCount,item1,item2...
          this.sheet.tableItems.splice(index, 1);
      },
      deleteItem (find) {
          this.sheet.tableItems[find.tableIndex].items.splice(find.itemIndex, 1)
      },
      saveSheet () {
          var upNew = Storage.fetch();
          upNew[this.$route.params.index] = {
            name: this.sheet.name,
            tableItems: this.sheet.tableItems
          };
          Storage.store(upNew);
      },
      updateTableHeader (data) {
          this.sheet.tableItems[data.tableIndex].header = data.tableHeader;
      },
      doNothing () {

      }
    }
  }
</script>

<style scoped>
  textarea[type="text"].info-text {
    /* 禁止拖动、可以消除右下角图标 */
    resize: none;
    padding: 0;
    margin-bottom: 20px;
    width: 100%;
    font-weight: bolder;
    font-size: xx-large;
    border: none;
    transition: box-shadow 0.3s, border 0.3s;
  }

  textarea[type="text"]:focus {
    outline: none;
  }
</style>
