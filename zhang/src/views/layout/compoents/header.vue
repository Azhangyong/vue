<template>
  <div id="headers">
    1
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
  name: 'headers',
  setup (props, context) {
    //挂载完成后
    onMounted(() => {})
    return {}
  }
}
</script>
<style scoped>
#headers {
  position: fixed;
  top: 0;
  left: 250px;
  right: 0;
  height: 75px;
  background: #fff;
  -webkit-box-shadow:0 3px 16px 0 rgba(0,0,0,.1)
}
</style>
