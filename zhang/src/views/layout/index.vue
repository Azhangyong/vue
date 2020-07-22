<template>
  <div id="layout" :class="[menuStatus?'close':'open']">
    <Header />
    <Nav />
    <Main />
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
import Header from './compoents/header'
import Main from './compoents/main'
import Nav from './compoents/nav'
export default {
  name: 'layout',
  components: {
    Header,
    Main,
    Nav
  },
  setup (props, {root}) {
    const menuStatus = computed(() => root.$store.state.isCollapse)
    //挂载完成后
    onMounted(() => {})
    return { menuStatus }
  }
}
</script>
<style scoped>
#layout {
  background: #f7f7f7;
}
</style>
