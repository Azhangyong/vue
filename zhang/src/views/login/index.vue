<template>
  <div id="login">
    <div class="backgound">
      <div class="input">
        <div v-for="item in login" :key="item.text" class="input-item">
          <input
            :type="item.type"
            :placeholder="item.text"
            v-model="item.value"
          />
          <div class="input-img"><img :src="item.img" alt="" /></div>
        </div>
        <div @click="newLogin()" class="logBut"><span>Go</span></div>
      </div>
    </div>
    <div class="main"><div class="wave"></div></div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      login: [
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
      ],
      show: [false, '']
    }
  },
  methods: {
    newLogin () {
      for (let i in this.$data.login) {
        if (this.$data.login[i].value == '') {
          this.$data.show[1] = this.$data.login[i].text
          this.$data.show[0] = true
          console.log(this.$data.show)
          return
        }
      }
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
}
.main,.wave{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.main{
  border: 3px solid blue;
  padding: 10px;
}
.wave{
  background: darkcyan;
  overflow: hidden;
}
.wave::after{
content: "";
width: 300px;
height: 300px;
background: rgba(255,255,255,0.8);
position: absolute;
left: 50%;
top: 0;
transform: translate(-50%,-60%);
border-radius:40% ;
animation:wave 5s linear infinite;
}
@keyframes wave{
  100%{
    transform: translate(-50%,-60%) rotate(360deg);
  }
}
</style>
