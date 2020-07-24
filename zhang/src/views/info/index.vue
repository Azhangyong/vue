<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-row :gutter="20">
        <el-col :span="3">
          <el-form-item label="类型:">
            <el-select v-model="value" placeholder="请选择" style="width:120px">
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
              v-model="value2"
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
          <el-button type="danger" class="pull-right">新增</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { ref, reactive } from '@vue/composition-api'
export default {
  name: 'infoIndex',
  setup (props) {
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
    const value = ref('')
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
    const value2 = ref('')
    return {
      options,
      value,
      onSubmit,
      formInline,
      value2,
      searchOptions,
      search_key,
      search_input
    }
  }
}
</script>
<style scoped lang="scss"></style>
