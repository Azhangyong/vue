<template>
  <div id="header">
    1456
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
  name: 'header',
  setup (props, context) {
    //挂载完成后
    onMounted(() => {})
    return {}
  }
}
</script>
<style scoped></style>
