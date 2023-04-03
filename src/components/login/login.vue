<template less>
  <div class="login-container">
  <div class="login-body">
    <div class="login-panel">
      <div class="login-logo">
        <span class="login-logo-i">
          I
        </span>
        <span class="login-logo-love">
            <svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="heart" aria-hidden="true"><path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path></svg>
        </span>
        <span class="login-logo-huzu">HUZU</span>
      </div>
    </div>
    <div  class="login-form" role="form" autocomplete="off">
      <div class="login-form-control">
        <span class="login-form-title">账号登录</span>
        <div class="login-input-group">
        <svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="user" aria-hidden="true"><path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
        <input class="login-form-input" type="text"  v-model="username" name="name123" placeholder="用户" autocomplete="off" required />
        </div>
        <div class="login-input-group">
        <svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="lock" aria-hidden="true"><path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"></path></svg>
        <input class="login-form-input" type="password"  v-model="password" name="password123" placeholder="密码" autocomplete="new-password" required/>
        </div>
        <button class="login-form-submit" nz-button nzType="primary" @click="login">登 录</button>
      </div>
    </div>
  </div>/
  <div class="login-footer">
    <a href="http://beian.miit.gov.cn/" target="_blank"><span class="copyright">Copyright © 2021-{{year}} 湖州师范学院 版权所有 </span>ICP证：京ICP备15010239号-3</a>
  </div>
</div>

</template>

<script>
export default {
  name:"Login",
    data(){
        return{
            username:'',
            password:'',
        }
    },
    methods:{
        login(){
            // if (this.name.trim() == '' || this.password.trim() == '' ) return;
            if(this.username==='admin'&&this.password==='123456'){
                localStorage.setItem('token','xxxxx')
                this.$router.push('/home')
            }else{
                alert('密码错误')
                localStorage.removeItem('token')
            }
        }
    }
}
</script>

<style lang="scss">
@import "@/components/login/login.component.scss"
</style>