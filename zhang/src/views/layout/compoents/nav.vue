<template>
  <div id="navs">
    <div class="use-img">
      <img src="../../../assets/images/login.png" alt="" />
    </div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          active-text-color="#fff"
          background-color="transparent"
          text-color="#fff"
          router
        >
          <template v-for="(item, index) in routers">
            <el-submenu :key="item.id" :index="index + ''" v-if="!item.hiddle">
              <!-- 一级菜单 -->
              <template slot="title">
                <svg-icon
                  :iconClass="item.meta.icon"
                  :className="item.meta.icon"
                />
                <span slot="title">{{ item.meta.name }}</span>
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
  </div>
</template>
<script>
import {
  reactive,
  ref,
  isRef,
  toRefs,
  onBeforeMount,
  onMounted,
  computed
} from '@vue/composition-api'

export default {
  name: 'navs',
  setup (props, { root }) {
    /**
    data数据
     */
    // const isCollapse = ref(false)
    // 从router 里拿出来数据
    const routers = reactive(root.$router.options.routes)
    /**
     ***computed监听
     */
    const isCollapse = computed(() => root.$store.state.isCollapse)
    //
    // 函数
    //

    //打印store 数据
    // console.log(root.$store.state.isCollapse)
    //挂载完成后
    onMounted(() => {})
    return {
      routers,
      isCollapse
    }
  }
}
</script>

<style lang="scss">
@import '../../../styles/config';
#navs {
  position: fixed;

  height: 100vh;
  top: 0;
  left: 0;
  background: #344a5f;
  svg {
    font-size: 20px;
    margin-right: 10px;
  }
}
.use-img {
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: block;
  }
}
.open {
  #navs {
    width: $navMenu;
  }
}
.close {
  #navs {
    width:64px;
  }
}
</style>
