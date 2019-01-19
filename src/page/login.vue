<template>
	<!-- 登录 -->
	<div>
		<div class="container">
		  <div class="info">
		    <h1>学生云管理系统</h1>
		  </div>
		</div>
		<div class="form">
		  <div class="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg"/>
		  </div>
		  <form class="login-form">
		    <input type="text" v-model="username" placeholder="username"/>
		    <input type="password" v-model="password" placeholder="password"/>
		  </form>
      <button class="loginbtn" @click="login">login</button>
		</div>
	</div>
</template>

<script>
export default{
  name:'login',
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    login(){
      console.log("登录")
      if(this.username == '' || this.password == ''){
        this.$message({
                  message: '用户名或密码不能为空',
                  type: 'warning',
                  duration:1500
                });
      }else{
        this.axios.get('api/login',{
          params: {
            username: this.username,
            password:this.password
          }
        })
        .then((data)=> {
          if(data.data == '用户名或密码错误'){
            this.$message({
                  message: data.data,
                  type: 'warning',
                  duration:1500
                });
          }else{
            this.$store.commit('ISLOGIN',data.data[0].uname)
            this.$router.replace('/index')
          }
          
        })
        .catch(function (error) {
          console.log("11报错")
          console.log(error);
        });
      }
    },
    
  },
  created(){
    }
}
</script>

<style>
.form {
  border-radius: 80px;
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 300px;
  margin: 0 auto 100px;
  padding: 30px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  text-align: center;
}
.form .thumbnail {
  background: #EF3B3A;
  width: 150px;
  height: 150px;
  margin: 0 auto 30px;
  padding: 50px 30px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  box-sizing: border-box;
}
.form .thumbnail img {
  display: block;
  width: 100%;
}
.form input {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
}
.loginbtn {
  outline: 0;
  background: dodgerblue;
  width: 100%;
  border: 0;
  padding: 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  color: #FFFFFF;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #EF3B3A;
  text-decoration: none;
}
.form .register-form {
  display: none;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}

.container .info span .fa {
  color: #EF3B3A;
}
.container .info h1{
	color: white;
}
body {
  
    /*width: 100%;*/
	height: 100%;
	background-image: url(../assets/main_bg.png);
	background-repeat:no-repeat;
}
.all{
	
	width: 360px;
	margin-left: 760px;
	height:100%;
	margin-top: 150px;
}

</style>