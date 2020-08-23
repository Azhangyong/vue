<template>
  <div id="infoCategory">
    <el-button type="danger" @click="addFirst">添加一级分类 </el-button>
    <hr class="hr-e9e9e9" />
    <div>
      <el-row :gutter="30">
        <el-col :span="8">
          <div class="category-wrap">
            <div class="category" v-for="item in category" :key="item.id">
              <h4>
                <svg-icon icon-class="plus" className="plus"></svg-icon>
                {{ item.category_name }}
                <div class="button-group">
                  <el-button
                    size="mini"
                    type="danger"
                    round
                    @click="bianji(item.id)"
                    >编辑</el-button
                  >
                  <el-button size="mini" type="success" round
                    >添加子项</el-button
                  >
                  <el-button size="mini" round>删除</el-button>
                </div>
              </h4>
              <ul v-if="item.children">
                <li v-for="child in item.children" :key="child.id">
                  {{ child.category_name }}
                  <div class="button-group">
                    <el-button size="mini" type="danger" round>编辑</el-button>
                    <el-button size="mini" round>删除</el-button>
                  </div>
                </li>
              </ul>
            </div>
          </div></el-col
        >
        <el-col :span="16">
          <h4 class="menu-title">一级分类编辑</h4>
          <el-form
            :label-position="labelPosition"
            label-width="142px"
            :model="formLabelAlign"
            class="form-wrap"
            ref="categoryFrom"
          >
            <el-form-item
              label="一级分类名称:"
              prop="categoryName"
              v-if="category_first_input"
            >
              <el-input v-model="formLabelAlign.categoryName"></el-input>
            </el-form-item>
            <el-form-item
              label="二级分类名称:"
              prop="secCategoryName"
              v-if="category_children_input"
            >
              <el-input v-model="formLabelAlign.secCategoryName"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="danger"
                @click="submit"
                :loading="submit_button_loading"
                >确定</el-button
              >
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { addFirstCategory, getCategory } from '@/api/new.js'
import { ref, reactive, onMounted } from '@vue/composition-api'
export default {
  name: 'infoCategory',
  setup (props, { root, refs }) {
    const labelPosition = ref('right')
    const formLabelAlign = reactive({
      categoryName: '',
      secCategoryName: ''
    })
    const category = reactive([
      {
        id: '12',
        category_name: '际信息',
        children: [
          {
            id: '13',
            category_name: '国际息'
          }
        ]
      },
      {
        id: '11',
        category_name: '国信息',
        children: [
          {
            id: '10',
            category_name: '国际信'
          }
        ]
      }
    ])
    const submit_button_loading = ref(false)
    const category_first_input = ref(true)
    const category_children_input = ref(true)
    const submit = () => {
      if (!formLabelAlign.categoryName) {
        root.$message({
          message: '分类名称不能为空',
          type: 'error'
        })
        return false
      }
      submit_button_loading.value = true
      addFirstCategory({ categoryName: formLabelAlign.categoryName })
        .then(response => {
          root.$message(response.message)
          if (response.code == 0) {
            root.$message({
              message: response.message,
              type: 'success'
            })
            // category.item.push(response)
            getCategory()
          }
          submit_button_loading.value = false
          refs.categoryFrom.resetFields()
        })
        .catch(error => {
          submit_button_loading.value = false
          refs.categoryFrom.resetFields()
        })
    }
    const addFirst = () => {
      category_first_input.value = true
      category_children_input
    }
    const getCategory = () => {
      // getCategory({})
      //   .then(response => {
      //     category = response.data
      //     // console.log(response.data)
      //   })
      //   .catch(error => {})
    }
    const bianji = e => {
      console.log(e)
      //获取item.id是否和传入的id 相等 相等会返回下标 splixe(index,1)
      // e.findIndex(item=>item.id==e)
      //filter 返回一个和条件相同的数据
      // let new= e.filter(item=>item.id!=e)
    }
    /**
    生命周期
     */
    //挂载完成时执行，（页面DON元素完成时，实例完成）
    onMounted(() => {
      getCategory()
    })
    return {
      formLabelAlign,
      labelPosition,
      submit,
      addFirst,
      category_first_input,
      category_children_input,
      category,
      submit_button_loading,
      bianji
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/config.scss';
#infoCategory {
  font-size: 15px;
}
.category-wrap {
  div:first-child {
    &:before {
      top: 20px;
    }
  }
  div:last-child {
    &:before {
      bottom: 21px;
    }
  }
}
.menu-title {
  line-height: 44px;
  background: #f3f3f3;
  padding-left: 22px;
}
.category {
  position: relative;
  line-height: 44px;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    left: 22px;
    top: 0;
    bottom: 0;
    width: 32px;
    border-left: 1px dotted #000;
  }
  h4 {
    position: relative;
    padding-left: 40px;
  }
  svg {
    position: absolute;
    left: 14px;
    top: 15px;
    background: #fff;
    font-size: 17px;
  }
  li {
    position: relative;
    padding-left: 36px;
    margin-left: 24px;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 32px;
      border-bottom: 1px dotted #000;
      transform: translate(0, -50%);
    }
  }
  li,
  h4 {
    @include webkit(transition, all 0.3s ease);
    &:hover {
      background: #f3f3f3;
      .button-group {
        display: block;
      }
    }
  }
}
.button-group {
  display: none;
  position: absolute;
  right: 11px;
  top: 0;
  z-index: 2;

  button {
    font-size: 12px;
  }
}
.form-wrap {
  width: 410px;
  padding-top: 26px;
}
.hr-e9e9e9 {
  width: calc(100%+60px);
  margin-left: -30px;
  border: none;
  margin: 30px 0;
  border-bottom: 1px solid #e9e9e9;
}
</style>
