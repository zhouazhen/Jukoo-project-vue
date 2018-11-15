<template>
    <div id="app" class="view">
        <login-header title="title"></login-header>
        <main class="main">
            <div class="login-wrap">
                <h1 class="title">账号注册</h1>
                <p class="login-tip" style="display: none;">验证码已发送至手机：<i></i></p>
                <div class="login-area">
                    <form>
                        <ul class="lg-list">
                            <li class="lg-item"><input type="tel" name="tel" placeholder="请输入手机号" class="lg-input">
                                <div class="btn remove-btn" style="display: none;"><i class="icon icon-remove"></i></div>
                            </li>
                        </ul>
                        <ul class="lg-list">
                            <li class="lg-item"><input type="text" name="code" placeholder="请输入验证码" class="lg-input">
                                <div class="btn remove-btn" style="display: none;"><i class="icon icon-remove"></i></div>
                            </li>
                            <li class="lg-item"><input type="password" name="pwd" placeholder="设置6-20位密码" class="lg-input pwd-input">
                                <div class="btn remove-btn" style="display: none;"><i class="icon icon-remove"></i></div>
                            </li>
                        </ul>
                    </form>
                </div>
                <div class="login-btn"><a href="javascript:;" disabled="disabled" class="btn lg-btn">下一步</a></div>
            </div>
        </main>
        <div class="dialog" style="display: none;">
            <p class="tips-text"></p>
        </div>
    </div>
</template>


<script>
import loginHeader from "@pages/login/loginHeader";
export default {
    data () {
        return {
            title : '登录',

        }
    }
};
</script>

<style lang="scss">
.view {
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
    .login-tip {
      margin-top: 0.32rem;
      font-size: 0.32rem;
      & > i {
        color: #2b82d9;
      }
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
        }
        .remove-btn,
        .visualise-btn {
          display: flex;
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
</style>
