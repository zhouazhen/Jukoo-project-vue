<template>
  <div class="inview">
    <login-header :title="title"></login-header>
    <section class="main">
      <div class="login-wrap">
        <h1 class="title">欢迎来到聚橙网</h1>
        <div class="login-area">
          <form>
            <ul class="lg-list">
              <li class="lg-item">
                <input @input="judgeVal('userTag',$event)" type="text" name="user" :placeholder="loginmethod ? '请输入手机号/邮箱':'请输入手机号'" class="lg-input">
                <div class="btn remove-btn" v-if="userTag"><i class="fas fa-times-circle"></i></div>
              </li>
              <li class="lg-item" v-if="loginmethod">
                <input @input="judgeVal('pwdTag',$event)" type="password" name="pwd" placeholder="请输入密码" class="lg-input pwd-input">
                <input @input="judgeVal('pwdTag',$event)" type="text" name="pwd" placeholder="请输入密码" class="lg-input pwd-input" style="display: none;">
                <div class="btn remove-btn" v-if="pwdTag"><i class="fas fa-times-circle"></i></div>
                <div @click="showPwd" class="btn visualise-btn"><i :class="showTag ? 'fas fa-eye' : 'fas fa-eye-slash'"></i></div>
              </li>
              <li class="lg-item" v-if="!loginmethod"><input type="number" name="code" placeholder="请输入验证码" class="lg-input code-input">
                <div class="btn send-btn"><i class="">发送验证码</i> <i style="display: none;">(60)重新获取</i></div>
              </li>
            </ul>
          </form>
        </div>
        <div class="login-toggle">
          <div v-if="loginmethod" @click="switchLoginMethod" class="tg-wrap tg-sms"><span class="tg-txt">验证码登录<i class="fa fa-angle-right"></i></span> <a href="https://m.juooo.com/Passport/checkPassCode"><span class="tg-txt">忘记密码</span></a></div>
          <div v-if="!loginmethod" @click="switchLoginMethod" class="tg-wrap tg-pwd"><span class="tg-txt">密码登录<i class="fa fa-angle-right"></i></span></div>
        </div>
        <div class="login-btn"><a href="javascript:;" disabled="disabled" class="btn lg-btn">登录</a></div>
      </div>
    </section>
    <div class="dialog" style="display: none;">
      <p class="tips-text"></p>
    </div>
  </div>
</template>

<script>
import LoginHeader from "@pages/login/loginHeader";
export default {
  data() {
    return {
      title: "注册",
      loginmethod: true,
      userTag: false,
      pwdTag: false,
      showTag : false,
    };
  },
  components: {
    LoginHeader
  },
  methods: {
    //切换登录方式
    switchLoginMethod() {
      this.loginmethod = !this.loginmethod;
    },
    //判断input的值，是否显示删除图标
    judgeVal(type,e) {
      if (e.target.value) {
        this[type] = true;
      } else {
        this[type] = false;
      }
    },
    //显示密码
    showPwd (e) {
      this.showTag = !this.showTag
      
    },
  },
  watch: {}
};
</script>


<style lang="scss">
.inview {
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.main {
  position: relative;
  flex: 1;
  box-flex: 1;
  .login-wrap {
    padding: 0.9333333333rem 1.1066666667rem 0;
    .title {
      font-weight: normal;
      font-size: 0.64rem;
    }
    .login-area {
      margin-top: 1.2rem;
      .lg-item {
        display: flex;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        height: 1.0666666667rem;
        font-size: 0.56rem;
        border-bottom: 1px solid #e6e6e6;
        box-sizing: border-box;
        margin-bottom: 0.5333333333rem;
        .lg-input {
          display: flex;
          color: initial;
        }
        .remove-btn,
        .visualise-btn {
          display: flex;
        }
        .lg-input.pwd-input {
          width: 5.6rem;
        }
        .lg-input.code-input {
          width: 4.2666666667rem;
        }
        .lg-input {
          display: flex;
        }
        .send-btn {
          font-size: 0.3733333333rem;
          color: #d9d9d9;
        }
        .send-btn > i {
          display: inline-block;
          padding: 0.2666666667rem;
        }
      }
    }
    .login-toggle {
      font-size: 0.3733333333rem;
      color: #666;
      .tg-wrap.tg-sms {
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }
      .tg-wrap.tg-pwd {
        -webkit-box-pack: center;
        justify-content: center;
      }
      .tg-wrap {
        display: flex;
        .tg-txt {
          display: block;
          padding: 0.1333333333rem;
        }
      }
    }
    .login-btn .lg-btn {
      display: block;
      margin: 0 auto;
      width: 7.8rem;
      height: 1.2rem;
      line-height: 1.2rem;
      border-radius: 1.2rem;
      font-size: 0.4533333333rem;
      color: #fff;
      text-align: center;
      letter-spacing: 0.6em;
      background: rgba(235, 165, 45, 0.8);
      background-image: linear-gradient(
        135deg,
        #f7bb00 2.6666666667rem,
        #f89100 6.6666666667rem
      );
      margin-top: 0.8rem;
    }
  }
}
.dialog {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0.1066666667rem;
  padding: 0.3333333333rem 0.6rem;
  max-width: 6.9333333333rem;
  word-wrap: break-word;
  word-break: normal;
  position: fixed;
  z-index: 99;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.2;
  .tips-text {
    font-size: 0.32rem;
    line-height: 0.32rem;
    color: #fff;
  }
}
.fas {
  font-size: 0.4rem;
  color: #d8d8d8;
}
.fa-angle-right {
  color: #666;
  font-size: 40px;
  vertical-align: text-bottom;
  margin-left: 5px;
}
</style>
