<template>
  <div class="login">
    <div class="login-box">
      <div class="header">
        <label @click="clickLogin">登录</label>
        <div class="line">
          <div></div>
        </div>
        <label @click="clickRegester">注册</label>
      </div>
      <div class="content">
        <div class="logining" v-if="isLogin === true">
          <input type="text" placeholder="请输入邮箱" />
          <input type="password" placeholder="请输入密码" />
          <button>登录</button>
          <div class="bottom-content">
            <div class="remember">
              <input type="checkbox" />
              <label>记住密码</label>
            </div>
            <div class="forget">
              无法登录？
            </div>
          </div>
        </div>
        <div class="register" v-if="isLogin === false">
          <input type="text" placeholder="请输入用户名" />
          <input type="text" placeholder="请输入电话" />
          <input type="text" placeholder="请输入邮箱" />
          <div class="verify">
            <input type="text" placeholder="请输入验证码" />
            <button>发送验证码</button>
          </div>
          <input type="password" placeholder="请输入密码" />
          <button>注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      isLogin: true,
    }
  },
  methods: {
    clickLogin() {
      this.isLogin = true
    },
    clickRegester() {
      this.isLogin = false
    }
  }
}
</script>


<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .login {
    background: url('../assets/home.jpg') no-repeat;
    background-size: cover;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    /* display: flex;
    justify-content: center; */
  }
  .login-box {
    width: 320px;
    height: auto;
    margin-top: 90px;
    border: 1px solid gainsboro;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
  .header {
    width: 280px;
    height: auto;
    border-bottom: 1px solid gainsboro;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
  }
  .header label {
    display: inline-block;
    width: 45%;
    text-align: center;
    font-size: 15px;
    line-height: 51px;
  }
   .header label:hover {
     color: #0f88eb;
     cursor: pointer;
     border-bottom: 4px solid #0f88eb;

   }
  .line div {
    border-left: 1px solid gainsboro;
    height: 25px;
  }
  .content {
    width: 100%;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .logining input {
    width: 70%;
    height: 40px;
    border-radius: 5px;
    margin-top: 15px;
    padding-left: 10px;
    border: 1px solid gainsboro;
  }
  .logining button {
    width: 74%;
    height: 35px;
    border-radius: 5px;
    margin-top: 15px;
    color: white;
    background-color: #0f88eb;
    border: 1px solid #0f88eb;
    cursor: pointer;
  }
  .bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    color: rgb(161, 159, 159);
  }
  .bottom-content .remember {
    margin-left: 40px;
    display: inline-block;
    line-height: 50px;
  }
  .remember input {
    width: 15px;
    height: 15px;
    position: relative;
    top: 3px;
  }
  .remember label:hover, .forget:hover, .remember input:hover {
    color: black;
    cursor: pointer;
  }
  .forget {
    margin-right: 40px;
  }

  .register input {
    width: 70%;
    height: 40px;
    border-radius: 5px;
    margin-top: 15px;
    padding-left: 10px;
    border: 1px solid gainsboro;
  }
  .register button {
    width: 74%;
    height: 35px;
    border-radius: 5px;
    margin-top: 15px;
    color: white;
    background-color: #0f88eb;
    border: 1px solid #0f88eb;
    cursor: pointer;
  }

  .verify {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .verify input {
    width: 40%;
    margin-left: 40px;
  }
  .verify button {
    width: 27%;
    margin-right: 40px;
    cursor: pointer;
  }
</style>

