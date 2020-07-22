<template>
  <div id="headers">
    <div class="pull-left header-icon" @click="navMenuState">
      <svg-icon iconClass="meun" className="meun"></svg-icon>
    </div>
    <div class="pull-right">
      <div class="user-img pull-left">
        <img />
      </div>
      <div class="user-info pull-left">
        管理员
      </div>
      <div class="header-icon pull-left">
        <svg-icon iconClass="exit" className="exit"></svg-icon>
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
  name: 'headers',
  setup (props, {root}) {
    /**
    事件
     */
    const navMenuState = () => {
      root.$store.commit('SET_COLLAPSE')
    }
    //挂载完成后
    onMounted(() => {})
    return { navMenuState }
  }
}
</script>
<style lang="scss">
@import '../../../styles/config';
#headers {
  position: fixed;
  top: 0;
  left: 250px;
  right: 0;
  height: $layoutHeader;
  background: #fff;
  -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
  line-height: 75px;
}
.header-icon {
  padding: 0 32px;
  font-size: 25px;
  svg {
    font-size: 25px;
    // color: #c2c6c6;

    cursor: pointer;
  }
}
.user-info {
  height: 100%;
  padding: 0 32px;
  border-right: 1px solid #ededed;
  + .header-icon {
    padding: 0 28px;
  }
}
.user-img {
  height: 100%;
  > img {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    background: black;
    border-radius: 25px;
  }
}
</style>
