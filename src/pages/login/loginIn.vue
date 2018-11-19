<template>
  <div class="inview">
    <login-header :title="title" :path="path"></login-header>
    <section class="main">
      <div class="login-wrap">
        <h1 class="title">欢迎来到聚橙网</h1>
        <div class="login-area">
          <form>
            <ul class="lg-list">
              <li class="lg-item">
                <input v-show="loginmethod" @input="judgeVal('userTag',$event)" ref="user" type="text" name="user" placeholder="请输入手机号/邮箱" class="lg-input">
                <input v-show="!loginmethod" @input="judgeVal('telTag',$event)" ref="tel" type="tel" name="tel" placeholder="请输入手机号" class="lg-input" maxlength="11">
                <div class="btn remove-btn" v-if="userTag && loginmethod"><i @click="delVal('userTag',['user'],$event)" class="fas fa-times-circle"></i></div>
                <div class="btn remove-btn" v-if="telTag && !loginmethod"><i @click="delVal('telTag',['tel'],$event)" class="fas fa-times-circle"></i></div>
              </li>
              <li class="lg-item" v-show="loginmethod">
                <input v-show="!showTag" ref="pwd" @input="judgeVal('pwdTag',$event)" type="password" placeholder="请输入密码" class="lg-input pwd-input">
                <input v-show="showTag" ref="text" @input="judgeVal('pwdTag',$event)" type="text" placeholder="请输入密码" class="lg-input pwd-input">
                <div class="btn remove-btn" v-if="pwdTag"><i @click="delVal('pwdTag',['pwd','text'],$event)" class="fas fa-times-circle"></i></div>
                <div @click="showPwd" class="btn visualise-btn"><i :class="showTag ? 'fas fa-eye' : 'fas fa-eye-slash'"></i></div>
              </li>
              <li class="lg-item" v-show="!loginmethod">
                <input @input="judgeVal('codeTag',$event)" ref="code" type="number" placeholder="请输入验证码" class="lg-input code-input">
                <div class="btn send-btn"><i @click="sendCode" v-show="sendTag" ref="send">发送验证码</i> <i v-show="!sendTag">({{second}})重新获取</i></div>
              </li>
            </ul>
          </form>
        </div>
        <div class="login-toggle">
          <div v-if="loginmethod" class="tg-wrap tg-sms"><span @click="switchLoginMethod" class="tg-txt">验证码登录<i class="fa fa-angle-right"></i></span> <a href=""><span class="tg-txt">忘记密码</span></a></div>
          <div v-if="!loginmethod" class="tg-wrap tg-pwd"><span @click="switchLoginMethod" class="tg-txt">密码登录<i class="fa fa-angle-right"></i></span></div>
        </div>
        <div class="login-btn"><a @click="loginIn" href="javascript:;" ref="lgbtn" disabled="disabled" class="btn lg-btn">登录</a></div>
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
      path: "/loginup",
      loginmethod: true,
      sendTag: true,
      userTag: false,
      telTag: false,
      pwdTag: false,
      showTag: false,
      codeTag: false,
      second: 60,
      telres: false
    };
  },
  components: {
    LoginHeader
  },
  methods: {
    async loginIn() {
      let res = await this.$http(
        {
          url: "/ju/Passport/login",
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: {
            username: this.$refs.user.value,
            password: this.$refs.pwd.value,
            isCard: 1,
            isRelevance: 0,
            regFrom: 2,
            _k: "",
            next: ""
          },
          transformRequest: [
            function(data) {
              let ret = "";
              for (let it in data) {
                ret +=
                  encodeURIComponent(it) +
                  "=" +
                  encodeURIComponent(data[it]) +
                  "&";
              }
              return ret;
            }
          ]
        },
        true
      );
      if (res.data.code === 1) {
        this.$router.replace("/mine");
      }
    },
    //发送验证码
    async sendCode() {
      if (!this.telres) return;
      let res = await this.$http(
        {
          url: "/ju/Passport/sendsms",
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: {
            mobile: this.$refs.tel.value,
            type: 3
          },
          transformRequest: [
            function(data) {
              let ret = "";
              for (let it in data) {
                ret +=
                  encodeURIComponent(it) +
                  "=" +
                  encodeURIComponent(data[it]) +
                  "&";
              }
              return ret;
            }
          ]
        },
        true
      );

      this.sendTag = !this.sendTag;
      let timer = setInterval(() => {
        --this.second;
        if (this.second <= 0) {
          this.second = 60;
          this.sendTag = !this.sendTag;
          clearInterval(timer);
        }
      }, 1000);
    },
    //切换登录方式
    switchLoginMethod() {
      this.loginmethod = !this.loginmethod;
      this.judgeVal();
    },
    //判断input的值，
    judgeVal(type, e) {
      if (type) {
        let val = e.target.value;
        //是否显示删除图标
        if (val) {
          this[type] = true;
        } else {
          this[type] = false;
        }
        //验证手机号/邮箱
        let userres = false;
        if (type === "userTag") {
          userres =
            /^1[34578]\d{9}$/.test(val.trim()) ||
            /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/.test(
              val.trim()
            );
          // if () {
          // }
        } else if (type === "telTag") {
          this.telres = /^1[34578]\d{9}$/.test(val.trim());
          if (this.telres) {
            this.$refs.send.setAttribute("class", "active");
          } else {
            this.$refs.send.removeAttribute("class");
          }
        } else {
        }
      }
      //登录按钮可用
      if (this.loginmethod) {
        if (this.userTag && this.pwdTag) {
          this.$refs.lgbtn.removeAttribute("disabled");
        } else {
          this.$refs.lgbtn.setAttribute("disabled", "disabled");
        }
      } else {
        if (this.telTag && this.codeTag) {
          this.$refs.lgbtn.removeAttribute("disabled");
        } else {
          this.$refs.lgbtn.setAttribute("disabled", "disabled");
        }
      }
    },
    //显示密码
    showPwd(e) {
      this.showTag = !this.showTag;
      if (this.showTag) {
        this.$refs.text.value = this.$refs.pwd.value;
      } else {
        this.$refs.pwd.value = this.$refs.text.value;
      }
    },
    //删除input值
    delVal(tag, ref, e) {
      this[tag] = false;
      this.judgeVal();
      if (tag === "telTag") {
        this.telres = false;
        this.$refs.send.removeAttribute("class");
      }
      ref.map(item => {
        this.$refs[item].value = "";
      });
    }
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
    .login-btn .lg-btn[disabled] {
      background: rgba(255, 215, 140, 0.8);
      background-image: linear-gradient(
        135deg,
        #ffd88c 2.6666666667rem,
        #ffbc8c 6.6666666667rem
      );
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
.active {
  color: #ffb319;
}
</style>
