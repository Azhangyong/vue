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
      <div class="header-icon pull-left" @click="exit">
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
  onMounted,
  computed
} from '@vue/composition-api'

export default {
  name: 'headers',
  setup (props, { root }) {
    const username = computed(() => root.$store.state.app.username)
    /**
    事件
     */
    const navMenuState = () => {
      root.$store.commit('app/SET_COLLAPSE')
    }
    const exit = () => {
      //注销
      root.$store.dispatch('app/exit').then(()=>{
        root.$router.push('/login')
      })
    }
    //挂载完成后
    onMounted(() => {})
    return { navMenuState, username, exit }
  }
}
</script>
<style lang="scss">
@import '../../../styles/config';
#headers {
  position: fixed;
  top: 0;
  left: $navMenu;
  right: 0;
  height: $layoutHeader;
  background: #fff;
  @include webkit(transition, all 0.3s ease); //config 里面兼容属性
  @include webkit(box-shadow, 0 3px 16px 0 rgba(0, 0, 0, 0.1));
  line-height: 75px;
}
.open {
  #headers {
    left: $navMenu;
  }
}
.close {
  #headers {
    left: $navMenuMin;
  }
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
