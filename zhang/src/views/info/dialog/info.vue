<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogInfo"
    width="580px"
    @close="close"
  >
    <el-form :model="form">
      <el-form-item label="类型:" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择类型">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题:" :label-width="formLabelWidth">
        <el-input v-model="form.name" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="概况:" :label-width="formLabelWidth">
        <el-input  type="textarea" v-model="form.name" placeholder="请输入内容" style="height:160px"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="danger" @click="dialogInfo = false">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { ref, reactive, watchEffect } from '@vue/composition-api'
export default {
  name: 'dialogInfo',
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const dialogInfo = ref(false)
    const form = reactive({
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    })
    const formLabelWidth = ref('120px')
    const close = () => {
      emit('update:flag', false)
      //修饰器可以监听数据变化 值发生改变 父级不需要函数 也可以拿到值flag.sync update:flag
    }
    //watch
    watchEffect(() => {
      dialogInfo.value = props.flag
    })
    return {
      dialogInfo,
      form,
      formLabelWidth,
      close
    }
  }
}
</script>
<style scoped></style>
