<template>
  <div id="login">
    <div class="backgound">
      <div class="input">
        <div v-for="item in login" :key="item.text" class="input-item">
          <input
            :type="item.type"
            :placeholder="item.text"
            v-model="item.value"
            @blur="item.text == '密码' ? onChange($event) : ''"
          />
          <div class="input-img"><img :src="item.img" alt="" /></div>
        </div>
        <div @click="newLogin()" class="logBut">
          <span>Go</span>
        </div>
      </div>
    </div>
    <div
      class="main"
      v-show="error"
      :style="{ opacity: opacity == true ? '1' : '0' }"
    >
      <div class="wave"></div>
      <div class="tips">{{ tips }}</div>
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
import { stripscript, loginPass } from '@/api/login'
import { requestData } from '@/utils/common'
import md5 from 'js-md5'
export default { 
  name: 'login',
  setup (props, context) {
    const login = reactive([
      {
        text: '账户',
        type: 'text',
        img: require('../../assets/images/login.png'),
        value: ''
      },
      {
        text: '密码',
        type: 'password',
        img: require('../../assets/images/password.png'),
        value: ''
      }
    ])
    const tips = ref('密码或账号错误')
    const error = ref(false)
    const opacity = ref(false)
    const onChange = () => {
      //input 失焦事件
      // let num = stripscript(login[1].value)
      // if (num != login[1].value) {
      //   login[1].value = ''
      //   tips.value = '密码格式有误'
      //   hidden()
      //   return
      // }
      let type = loginPass(login[1].value)
      if (type == false) {
        login[1].value = ''
        tips.value = '密码格式有误'
        hidden()
        return
      }
    }
    //声明方法
    const newLogin = function () {
      //点击登录
      // for (let i in login) {
      //   if (login[i].value == '') {
      //     hidden()
      //     return
      //   }
      // }
      // let t = requestData('post', '/54455454', { a: 123 })
      // console.log(123)
      // console.log(this.$md5(446))
      // console.log(md5("235"))//md5 加密
      // console.log(login)
      // let repuestData = {
      //   username:
      // }
      // root.$store.dispath('app/login', repuestData).then(res => {
        this.$router.push({ name: 'HomePage', params: { userId: 123 } })
      // })
    }
    const hidden = () => {
      //提示弹出隐藏
      error.value = true
      setTimeout(function () {
        opacity.value = true
        setTimeout(function () {
          opacity.value = false
          setTimeout(function () {
            error.value = false
          }, 300)
        }, 1000)
      }, 300)
    }
    //挂载完成后
    onMounted(() => {})
    return {
      //数据必须return 出去 才会生效
      login,
      tips,
      error,
      opacity,
      newLogin,
      hidden,
      onChange
    }
  }
}
</script>
<style scoped>
.backgound {
  position: fixed;
  background-image: url('../../assets/images/background.png');
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-item {
  margin-bottom: 20px;
  position: relative;
}
.input-item > input {
  width: 200px;
  height: 40px;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 30px;
  outline: none;
  border: none;
}
.input-img {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  width: 20px;
  height: 20px;
}
.logBut {
  text-align: center;
  text-decoration: underline;
  color: #fff;
  cursor: pointer;
}
.main,
.wave {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.main {
  border: 3px solid #4d3667;
  padding: 10px;
  transition: all 0.3s ease;
}
.wave {
  background: #4d3667;
  overflow: hidden;
}
.wave::after {
  content: '';
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -60%);
  border-radius: 40%;
  animation: wave 5s linear infinite;
}
@keyframes wave {
  100% {
    transform: translate(-50%, -60%) rotate(360deg);
  }
}
.tips {
  position: absolute;
  top: 68px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 15px;
  color: #ff6020;
}
</style>
