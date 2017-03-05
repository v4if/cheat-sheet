<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="table-item">

    <el-row :gutter="20" class="table-header">
      <el-col :span="16">
        <textarea type="text" class="header-text" cols="0" rows="1" v-model="tableHeader"
                  v-on:click.capture.stop="doNothing" v-on:blur="updateTableHeader">
        </textarea>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" icon="edit" v-on:click="addItem"></el-button>
        <el-button type="danger" icon="delete" v-on:click="delTable"></el-button>
      </el-col>
    </el-row>

    <!--<div class="table-header">-->
      <!--<textarea type="text" class="header-text" cols="0" rows="1" v-model="tableHeader"-->
                <!--v-on:click.capture.stop="doNothing" v-on:blur="updateTableHeader">-->
      <!--</textarea>-->

      <!--<el-button type="primary" icon="edit" v-on:click="addItem"></el-button>-->
      <!--<el-button type="danger" icon="delete" v-on:click="delTable"></el-button>-->
    <!--</div>-->

    <div v-if="items.length > 0">
      <el-collapse v-bind:value="new Array(items.length).fill(0).map((element, idx) => {return idx;})">
        <el-collapse-item v-for="(item, index) in items" :key="index" v-bind:name="index">
          <template slot="title">
            <textarea type="text" class="title-text" cols="0" rows="1" v-model="item.tag"
                      v-on:click.capture.stop="doNothing">
            </textarea>
            <i class="el-icon-minus" v-on:click.capture.stop="delItem(index)"></i>
          </template>

          <textarea type="text" class="info-text" cols="0" rows="3" v-model="item.info"
                    v-on:click.capture.stop="doNothing">
          </textarea>
        </el-collapse-item>
      </el-collapse>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'table-item',
//  声明父组件传递的属性
    props: ['index', 'header', 'items'],
    data () {
        return {
            tableHeader: this.header
        };
    },
    methods: {
        addItem () {
            this.$emit('add-item', this.index);
        },
        delTable () {
            this.$emit('delete-table', this.index);
        },
        doNothing () {

        },
        delItem ($itemIndex) {
            this.$emit('delete-item', {
                tableIndex: this.index,
                itemIndex: $itemIndex
            });
        },
        alertTest (out) {
            alert('/' + out + '/');
        },
        updateTableHeader () {
            this.$emit('update-table-header', {
                tableIndex: this.index,
                tableHeader: this.tableHeader
            });
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  <!-- 屏幕小于 -->
  @media (max-width: 1366px) {
    .table-item {
      width: 100%;
    }
  }
  @media (min-width: 1366px) {
    .table-item {
      width: 32%;
      padding-right: 10px;
      float: left;
    }
  }

  .table-header {
    margin: 10px 0;
  }

  textarea[type="text"] {
    /* 禁止拖动、可以消除右下角图标 */
    resize: none;
    margin: 0;
    border: none;
    transition: box-shadow 0.3s, border 0.3s;
  }

  textarea[type="text"]:focus {
    outline: none;
  }

  textarea[type="text"].header-text {
    /* 禁止拖动、可以消除右下角图标 */
    resize: none;
    width: 100%;
    padding: 0;
    vertical-align: middle;
    font-weight: bold;
    font-size: large;
    border: none;
    transition: box-shadow 0.3s, border 0.3s;
  }

  textarea[type="text"].title-text {
    width: 85%;
    /* 隐藏滚动条 */
    /*overflow-y:hidden;*/
    vertical-align: middle;
    /*padding: 12px 5px 0 5px;*/
  }

  textarea[type="text"].info-text {
    padding: 0;
    width: 100%;
    background-color: #fbfdff;
  }
</style>
