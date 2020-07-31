<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-row :gutter="20">
        <el-col :span="3">
          <el-form-item label="类型:">
            <el-select
              v-model="categoryValue"
              placeholder="请选择"
              style="width:120px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="日期:">
            <el-date-picker
              v-model="dataValue"
              type="datetimerange"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['00:00:00', '00:00:00']"
            >
            </el-date-picker> </el-form-item
        ></el-col>
        <el-col :span="3">
          <el-form-item label="关键字:">
            <el-select
              v-model="search_key"
              placeholder="请选择"
              style="width:80px"
            >
              <el-option
                v-for="item in searchOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select> </el-form-item
        ></el-col>
        <el-col :span="4">
          <el-input v-model="search_input" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="3">
          <el-button type="danger">搜索</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="danger" @click="dialogInfo = true" class="pull-right"
            >新增</el-button
          >
        </el-col>
      </el-row>
    </el-form>
    <!--表格-->
    <div class="black-space-30">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="45"> </el-table-column>
        <el-table-column prop="title" label="标题" width="830">
        </el-table-column>
        <el-table-column prop="category" label="类型" width="130">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="237">
        </el-table-column>
        <el-table-column prop="user" label="管理人" width="115">
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button type="danger" size="mini" @click="deleteItem"
              >删除</el-button
            >
            <el-button type="success" size="mini" @click="dialogInfo = true"
              >编辑</el-button
            >
          </template></el-table-column
        >
      </el-table>
    </div>
    <!--底部分页-->

    <div class="black-space-30">
      <el-button size="medium" @click="deleteALL">批量删除</el-button>
      <el-pagination
        class="pull-right"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 50, 100]"
        layout="total,sizes,prev, pager, next,jumper"
        :total="1000"
      >
      </el-pagination>
    </div>
    <!--提示-->
    <Dialog :flag.sync="dialogInfo" />
  </div>
</template>
<script>
import Dialog from './dialog/info'
import { ref, reactive } from '@vue/composition-api'
import { global } from '@/utils/global.js'
export default {
  name: 'infoIndex',
  components: { Dialog },
  setup (props, { root }) {
    const { confirm } = global()
    //查询数据
    const options = reactive([
      {
        value: 1,
        label: '国际信息'
      },
      {
        value: 2,
        label: '国内信息'
      },
      {
        value: 3,
        label: '行业信息'
      }
    ])
    const categoryValue = ref('')
    //关键字
    const searchOptions = reactive([
      {
        value: 'id',
        label: 'ID'
      },
      {
        value: 'title',
        label: '标题'
      }
    ])
    const search_key = ref('id')
    //搜索
    const search_input = ref('')
    const formInline = reactive({
      user: '',
      region: ''
    })
    const onSubmit = () => {
      console.log('submit!')
    }
    const dataValue = ref('')
    //表格数据
    const tableData = reactive([
      {
        title: '爱神的箭拉升阶段到了凯撒的领导卢卡库撒大苏打看',
        category: '国内信息',
        date: '2016-05-02',
        user: '管理员'
      },
      {
        title: '爱神的箭拉升阶段到了凯撒的领导卢卡库撒大苏打看',
        category: '国内信息',
        date: '2016-05-02',
        user: '管理员'
      },
      {
        title: '爱神的箭拉升阶段到了凯撒的领导卢卡库撒大苏打看',
        category: '国内信息',
        date: '2016-05-02',
        user: '管理员'
      },

      {
        title: '爱神的箭拉升阶段到了凯撒的领导卢卡库撒大苏打看',
        category: '国内信息',
        date: '2016-05-02',
        user: '管理员'
      },
      {
        title: '爱神的箭拉升阶段到了凯撒的领导卢卡库撒大苏打看',
        category: '国内信息',
        date: '2016-05-02',
        user: '管理员'
      }
    ])
    //表尾
    const handleSizeChange = val => {
      console.log(`每页 ${val} 条`)
    }
    const handleCurrentChange = val => {
      console.log(`当前页: ${val}`)
    }
    //弹出层
    const dialogInfo = ref(false)
    //删除
    const deleteItem = () => {
      confirm({
        content: '确认删除当前信息，确认后将无法恢复',
        tip: '警告',
        fn: confirmDelete,
        id: '123'
      })

      // confirm({
      //   content: '确认删除当前信息，确认后将无法恢复',
      //   tip: '警告',
      //   fn: confirmDelete,
      //   id: '123'
      // })
    }
    const deleteALL = () => {
      confirm({
        content: '确认删除选择的数据，确认后将无法恢复',
        type: 'success',
        fn: confirmDelete,
        id: '321'
      })
      // confirm({
      //   content: '确认删除选择的数据，确认后将无法恢复',
      //   type: 'success',
      //   fn: confirmDelete,
      //   id: '321'
      // })
    }
    const confirmDelete = id => {
      console.log(id)
    }
    return {
      options,
      categoryValue,
      onSubmit,
      formInline,
      dataValue,
      searchOptions,
      search_key,
      search_input,
      tableData,
      handleSizeChange,
      handleCurrentChange,
      dialogInfo,
      deleteItem,
      deleteALL
    }
  }
}
</script>
<style scoped lang="scss">
.el-form-item {
    >.el-form-item__label {
        width: 60px !important;
    }
    >.el-form-item__content {
        margin-left: 60px !important;
    }
}
.el-col .el-form-item {
    margin: 0 !important;
}
</style>
