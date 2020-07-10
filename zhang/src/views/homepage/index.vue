<template>
  <div id="homePage">

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
  name: 'homePage',

  setup (props, context) {
    //挂载完成后
    onMounted(() => {})
    return {}
  }
}
</script>
<style scoped></style>
