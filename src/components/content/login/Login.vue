<template>

    <!-- 内容主体区域 -->
    <div>

      <div class="page">
        <div class="loginwarrp">
          <div class="logo">登陆</div>
              <div class="login_form">
            <form id="Login" name="Login" method="post" onsubmit="return false"
            action="##">
              <li class="login-item">
                <span>用户名：</span>
                <input type="text" id="username" name="account" class="login_input" >
                                              <span id="count-msg" class="error"></span>
              </li>
              <li class="login-item">
                <span>密　码：</span>
                <input type="password" id="password" name="pwd" class="login_input" >
                                              <span id="password-msg" class="error"></span>
              </li>
              <!-- <li class="login-item verify">
                <span>验证码：</span>
                <input type="text" name="CheckCode" class="login_input verify_input">
              </li>
              <img src="images/verify.png" border="0" class="verifyimg" />
              <div class="clearfix"></div> -->
              <li class="login-sub">
              <input type="button" value="登录" v-on:click="login()">
                <input type="reset" name="Reset" value="重置" />
              </li>
                 </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{

    }
  },
  mounted:function(){
      window.onload = function() {
            var config = {
              vx : 4,
              vy : 4,
              height : 2,
              width : 2,
              count : 100,
              color : "121, 162, 185",
              stroke : "100, 200, 180",
              dist : 6000,
              e_dist : 20000,
              max_conn : 10
            }
            CanvasParticle(config);
          }

  },
  methods:{
        login:function() {
          $.fn.serializeObject = function()
            {
               var o = {};
               var a = this.serializeArray();
               $.each(a, function() {
                   if (o[this.name]) {
                       if (!o[this.name].push) {
                           o[this.name] = [o[this.name]];
                       }
                       o[this.name].push(this.value || '');
                   } else {
                       o[this.name] = this.value || '';
                   }
               });
               return o;
            };



            $.ajax({
                type: "POST",
                dataType: "json",
                contentType: 'application/json',
                url: "http://139.199.59.97:8081/cloud/human/signIn" ,//url
                data: JSON.stringify($('#Login').serializeObject()),
                success: function (result) {
                    if (result.resultCode == 0) {

                        alert("登录成功");
                        sessionStorage.setItem("token",JSON.parse(JSON.stringify(result))['responseBody']['token']);
                        window.location.href='http://139.199.59.97:8111/cloud-web/';
                    }else{
                        alert("登录失败");
                      }
                    ;
                },
                error : function() {
                    alert("后台异常！");
                }
            });


        }
  }
}
</script>

<style scoped>
  @import '../../../../static/css/login.css';
  @import '../../../../static/css/reset.css';
</style>
