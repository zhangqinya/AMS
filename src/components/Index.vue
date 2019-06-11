<template>
    <div id="layout">
      <div class="header-top">
        <header class="header">
            <div class="logo">
                <img src="" alt="这里放我们的logo">
            </div>
            <div class="user">
              <router-link to="/login">
                <button class="login">登录</button> |
                <button class="register">注册</button>
              </router-link>
            </div>
        </header>
        <nav class="nav">
            <ul class="layui-nav" lay-filter="">
                <li class="layui-nav-item" @click="clickHome" :class="{ option: this.isActive === 0 }">
                    <router-link to="/">首页</router-link>
                </li>
                <li class="layui-nav-item" @click="clickRent" :class="{ option: this.isActive === 1 }">
                    <router-link to="/rent_house">租房</router-link>
                </li>
                <li class="layui-nav-item" @click="clickSencond" :class="{ option: this.isActive === 2 }">
                    <router-link to="/second_hand_house">二手房</router-link>
                </li>
                <li class="layui-nav-item" @click="clickNew" :class="{ option: this.isActive === 3 }">
                    <router-link to="/new_house">新房</router-link>
                </li>
            </ul>
            <div class="out-house">
                <span>发布房源</span>
            </div>
        </nav>
      </div>
      <div class="content">
        <router-view/>
      </div>
      <footer class="footer">
        <div class="about-us">
          <span>关于我们</span>
          <span>租房</span>
          <span>二手房</span>
          <span>新房</span>
        </div>
        <div class="contact-us">
          <div class="phone">
            <i class="iconfont">&#xe605;</i>
            <label>17784453893</label>
          </div>
          <div class="qq">
            <i class="iconfont">&#xe65f;</i>
            <label>1601555780</label>
          </div>
        </div>
      </footer>
    </div>
</template>

<script>
import 'layui-src/src/css/layui.css'
import 'layui-src/src/layui.js'

// layui.use('element', function(){
//   var element = layui.element;

// });

export default {
    name: 'Index',
    data() {
      return {
        isActive: 0,
      }
    },

    methods: {
      clickHome() {
        this.isActive = 0
      },
      clickRent() {
        this.isActive = 1
      },
      clickSencond() {
        this.isActive = 2
      },
      clickNew() {
        this.isActive = 3
      }
    }
}
</script>

<style scoped>
    @font-face {font-family: "iconfont";
      src: url('../assets/font-family/iconfont.eot?t=1560152060409'); /* IE9 */
      src: url('../assets/font-family/iconfont.eot?t=1560152060409#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAXQAAsAAAAACtQAAAWEAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqJGIc8ATYCJAMQCwoABCAFhG0HPxslCVGUTU6L7IckCSRNLTwCpD8gMAUAAABggQgmFBDxUL/f69l7N4gOSf6J5fFRGU8gLNmoRDq0SVtbYdi149/+z2XubgjC5PmyHLJChYX89recpiPFTk+pCbkJN+E2PLvP3pH9+h3rdyKq02B0m2tzGIUwAWdjaovxdZV4SSV5818gVkComgpZBWwrFNAIPQkzoTdjJoyfMVORrqV74QS+TKDbJENvb+/kHMYkQRUoutaxD2Mus4yhhU5de8iNKZ4M6ywP5QPAo/7z8Re8GKNoq4QL9093I9j4Mfzstr40rCuVQFKeE7fbqFgHkjgPdR8amLF1A92fzCEbQKfoLJS1svnjtmm4tC/qTq6W9w+vEO0EdS+orXjlh6UstjXZMApoWqNAgRWi6cxdEDcA8f9uGSUgEPIrXDuWxB1sjQ7FDOrg0JbTSjTNZ9721P16oSyKAqwoXnOvFp9Veb30/HXPRRojSfNlw0k1ee9W4wKFOqMwHKKBaxsyDyzXH2DPi6xgpygUi0Hs1uiNKo2LBDtOklBdR8B8oGmMI9ws2/MqRQjWKGxJ9lih8ZRmWq4XnlSJJQqz4wB7kD/cfGg4c2ocFRdWWFpVJTpfp+vG5g5h2MC+t1CUpvmLEC1j3Tk7O+5M0AFKWIAJW7zZuf7ialQ0wHswVnWI/vZSGb87EDWIPKqEV+60X42KG2QZzE9BZFRc6bh8Prp4GwUEWPKI8BIWwEH+GXCDH+IHhB0BiN8KBIFXcMgqSZJRfnVgiLQI8QmbA0sIWHQcRZEgJFwBtMz1p+3t+ZPBBynIkNUAw2rl0c7rF2ccuhC0puEBNXT9cdu5I2jFOG1vqT+v054xyhNKfUob2ImB8Bb/Ww2LsRc5WEGBtcXzi+4Nvt36nomc0reD+6ACo91yetcc4zrprXfRy+2MQwo7uffl8dN9hjX6wnd+pHVBQQ72YjFWv8OWyWOoaaFtMPNpBEQyua9PJqNt1rmus6FB376A9hoKgFXb9JpJ2VS+7xpz6z3O+SNWMBdIMNQL0H370iDdL0TVkbl5JAMR08yx0DbUtDyGcSgHWVkQJD806hC0Pntdzrrs9VByP0+8fPCgMryS2MJ5y/FBg/ByonIL0pDVrzykbPOt5ea3bpkvF423bily+19hLbedwUE1/978G0SdP/15p3byjLb3D1FWd8xn2HQu7T7eCrUatermSuCS5VTgiUctRbfirh6Bjm2IlS+lUVaByPjhpZ1tWPM7ltQl2xaQpV/OSdNO7MtavNt+wOrOZnoc5NJn5GmzmmWfnl8H43G62WB5QPu7+JyH6TtNJ3NgAxRbTMzjTFhLksyzhoo6yRX27vYVEwdBRdZ5JNkSM3HziGJIvj72X6ucLZ6fuKCxdevGBYl7BZtTT98nOeSEFRaG5QwIumTh6moBxaUrRhtP85HjZuL4EGg3EZdjO9wBNOcGJwbpeuL4YG+dO8MP+TbHHXw7u/K1034TD333C/qnuoZN9R6cppLUkvNZkrInvzLBkvmWy+JfYXqHhjkxlN2ijbM4xbDfMrRjqQsJncZsKDpMQNVpnpjUdWjTowXtOm1CtzX7t/cYwQYiu7Dqk0EY9AVFv2eoBn0Tk/oDbcb9QbvBGEC3g1h8YI/F0BPbTL5QhMET6rAqlWSTCaP4lOIu99kp0xmXxK0Ooms53uQ+lcRlXNLex56IQsVVgXvsdZTnFdZcpRSKlYjUS7atwj7JCqsCJuxixCdIBAWeIC1UKSl1sJjwff8pEuvkfBzT9SN8ibCWXh+5LE4K4r66TNW1LZWtezGPUERB6lZYKaA9cpJcjFVQHb4vRULCkuSI1JbY1E+lVVv1a4slPAXdhIdllKiR0abtWD8netA07qiZ7ZdJ5wMA') format('woff2'),
      url('../assets/font-family/iconfont.woff?t=1560152060409') format('woff'),
      url('../assets/font-family/iconfont.ttf?t=1560152060409') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('../assets/font-family/iconfont.svg?t=1560152060409#iconfont') format('svg'); /* iOS 4.1- */
    }
    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    * {
        margin: 0;
        padding: 0;
    }
    .header-top {
      width: 100%;
      position: absolute;
      top: 0;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
        background-color: #f5f5f5;
    }
    .header .logo {
        display: inline-block;
        width: 50%;
        height: 60px;
        text-align: center;
    }
    .user {
        width: 50%;
        text-align: center;
    }
    .user button {
        background-color: #f5f5f5;
        border: none;
        font-size: 15px;
        display: inline-block;
        cursor: pointer;
    }
    .nav {
        width: 100%;
        background-color: #393D49;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .layui-nav {
      display: inline-block;
      width: 50%;
      padding-left: 190px;
    }
    .out-house {
        display: inline-block;
        color: white;
        width: 50%;
        text-align: center;
        opacity: 0.5;
    }
    .out-house:hover {
      opacity: 1;
      cursor: pointer;
    }
    .footer {
      width: 100%;
      height: 70px;
      background-color: #393D49;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer .about-us {
      width: 50%;
      text-align: center;
      color: white;
    }
    .footer .about-us span {
      margin-left: 20px;
      opacity: 0.5;
    }
    .footer .about-us span:hover {
      opacity: 1;
      cursor: pointer;
    }
    .footer .contact-us {
      width: 50%;
      text-align: center;
      color:white;
      opacity: 0.5;
    }
    .footer .contact-us .phone {
      display: inline-block;
      margin: 10px;
    }
    .footer .contact-us .qq {
      display: inline-block;
      margin: 10px;
    }
    .content {
      width: 100%;
      position: absolute;
      top: 120px;
      bottom: 70px;
      overflow: auto;
    }
    .content .home {
      background: url('../assets/home3.jpg') no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
    }
    .option::after {
      content: '';
      border-bottom: 5px solid #5FB878;
    }
</style>
