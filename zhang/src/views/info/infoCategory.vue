<template>
  <div id="infoCategory">
    <el-button type="danger">添加一级分类 </el-button>
    <hr class="hr-e9e9e9" />
    <div>
      <el-row :gutter="30">
        <el-col :span="8">
          <div class="category-wrap">
            <div class="category">
              <h4>
                <svg-icon icon-class="plus" className="plus"></svg-icon> 新闻
                <div class="button-group">
                  <el-button size="mini" type="danger" round>编辑</el-button>
                  <el-button size="mini" type="success" round
                    >添加子项</el-button
                  >
                  <el-button size="mini" round>删除</el-button>
                </div>
              </h4>
              <ul>
                <li>
                  国内
                  <div class="button-group">
                    <el-button size="mini" type="danger" round>编辑</el-button>
                    <el-button size="mini" round>删除</el-button>
                  </div>
                </li>
                <li>
                  国内
                  <div class="button-group">
                    <el-button size="mini" type="danger" round>编辑</el-button>
                    <el-button size="mini" round>删除</el-button>
                  </div>
                </li>
                <li>
                  国内
                  <div class="button-group">
                    <el-button size="mini" type="danger" round>编辑</el-button>
                    <el-button size="mini" round>删除</el-button>
                  </div>
                </li>
                <li>
                  国内
                  <div class="button-group">
                    <el-button size="mini" type="danger" round>编辑</el-button>
                    <el-button size="mini" round>删除</el-button>
                  </div>
                </li>
                <li>
                  国内
                  <div class="button-group">
                    <el-button size="mini" type="danger" round>编辑</el-button>
                    <el-button size="mini" round>删除</el-button>
                  </div>
                </li>
                <li>
                  国内
                  <div class="button-group">
                    <el-button size="mini" type="danger" round>编辑</el-button>
                    <el-button size="mini" round>删除</el-button>
                  </div>
                </li>
              </ul>
            </div>
            <div class="category">
              <h4>
                <svg-icon icon-class="plus" className="plus"></svg-icon> 新闻
              </h4>
              <ul>
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
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
          >
            <el-form-item label="一级分类名称:">
              <el-input v-model="formLabelAlign.categoryName"></el-input>
            </el-form-item>
            <el-form-item label="二级分类名称:">
              <el-input v-model="formLabelAlign.secCategoryName"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="submit">确定</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { addFirstCategory } from '@/api/new.js'
import { ref, reactive } from '@vue/composition-api'
export default {
  name: 'infoCategory',
  setup (props) {
    const labelPosition = ref('right')
    const formLabelAlign = reactive({
      categoryName: '',
      secCategoryName: ''
    })
    const submit = () => {
      addFirstCategory({ categoryName: formLabelAlign.categoryName })
        .then(response => {
          console.log(response)
        })
        .catch(error => {})
    }
    return {
      formLabelAlign,
      labelPosition,
      submit
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
