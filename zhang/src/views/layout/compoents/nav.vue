<template>
  <div id="navs">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          active-text-color="#fff"
          background-color="transparent"
          text-color="#fff"
          router
        >
          <template v-for="(item, index) in routers">
            <el-submenu :key="item.id" :index="index+''" v-if="!item.hiddle">
              <!-- 一级菜单 -->
              <template slot="title">
                <i :class="item.meta.icon"></i>
                <span>{{ item.meta.name }}</span>
              </template>
              <!-- 子级菜单 -->
              <el-menu-item-group>
                <el-menu-item
                  v-for="subItem in item.children"
                  :key="subItem.id"
                  :index="subItem.path"
                  >{{ subItem.meta.name }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
    </el-row>
    <svg-icon iconClass="menu"  className="menu font12"/>
  </div>
</template>
<script>
import {
  reactive,
  ref,
  isRef,
  toRefs,
  onBeforeMount,
  onMounted
} from '@vue/composition-api'

export default {
  name: 'navs',
  setup (props, { root }) {
    // 数据
    const routers = reactive(root.$router.options.routes)
    console.log(routers)
    //
    // 函数
    //
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    //挂载完成后
    onMounted(() => {})
    return {
      handleOpen,
      handleClose,
      routers
    }
  }
}
</script>

<style  lang="scss">
#navs {
  position: fixed;
  width: 250px;
  height: 100vh;
  top: 0;
  left: 0;
  background: #344a5f;
}

</style>
