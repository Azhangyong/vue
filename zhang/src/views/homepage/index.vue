<template>
  <div id="homePage">
    <Header />
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
import Header from '../compoents/header'
export default {
  name: 'homePage',
  components: {
    Header
  },
  setup (props, context) {
    //挂载完成后
    onMounted(() => {})
    return {}
  }
}
</script>
<style scoped></style>
