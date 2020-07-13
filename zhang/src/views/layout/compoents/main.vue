<template>
  <div id="mains"></div>
</template>
<script>
import {
  reactive,
  ref,
  isRef,
  toRefs,
  onBeforeMount,
  onMounted
} from "@vue/composition-api";

export default {
  name: "mains",
  setup(props, context) {
    //挂载完成后
    onMounted(() => {});
    return {};
  }
};
</script>
<style scoped>
#mains {
  position: fixed;
  left: 250px;
  top: 75px;
  right: 0;
  bottom: 0;
  border: 30px solid #f7f7f7;
  margin-bottom: none;
  -webkit-box-sizing: border;
}
</style>
