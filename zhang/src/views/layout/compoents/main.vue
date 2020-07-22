<template>
  <div id="mains">
    <div class="main-content">
      <div class="content">
        <router-view />
      </div>
    </div>
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
  name: 'mains',
  setup (props, context) {
    //挂载完成后
    onMounted(() => {})
    return {}
  }
}
</script>
<style scoped lang="scss">
@import '../../../styles/config';
#mains {
  height: 100vh;
}
.main-content {
  width: 100%;
  height: 100%;
  // padding: 30px 30px 0 30px;
  padding-top: $layoutHeader + 30px;
  padding-left: $navMenu + 30px;
  padding-right: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.content {
  width: 100%;
  height: 100%;
  padding: 30px 30px 0 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
}
</style>
