<template>
  <div>
    <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
  </div>
</template>
<script>
import {
  reactive,
  ref,
  isRef,
  toRefs,
  onMounted,
  computed
} from '@vue/composition-api'
export default {
  name: 'svgIcon',
  //   props:[
  //       "iconClass","className"
  //   ],//传给来的值
  props: {
    iconClass: {
      type: String, //类型
      default: '', //如果没值 默认值
      //default:()=>[] 对象或数组
      required: true, //必填
      validator: value => {
        //验证数据 可以在内部做操作
        return value
      }
    },
    className: {
      type: String,
      required: true
    }
  },
  setup (props) {
    /**
    computed 监听属性变化，并计算属性
     */
    const iconName = computed(() => `#icon-${props.iconClass}`)
    const svgClass = computed(() => {
      if (props.className) {
        return `svg-icon ${props.className}`
      } else {
        return `svg-icon`
      }
    })
    return {
      iconName,
      svgClass
    }
  }
}
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  color: #fff;
  &.font12 {
    font-size: 12px;
  }
}
</style>
