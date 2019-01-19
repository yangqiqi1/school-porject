<template>
    <div class="navRight">
      <div class="myright">
        <div class="left"><span>[  {{username}}  ]</span></div>
        <div class="left"><i class="iconfont icon-tuichu" @click="loginout"></i></div>
        <div class="left"><i class="iconfont icon-shuaxin" @click="fresh"></i></div>
      </div>
    </div>
</template>

<script type="es6">
    export default {
      name:'NavRight',
      data(){
        return{
          username:sessionStorage.getItem("username")
        }
      },
      methods:{
        //退出
        loginout(){
          this.$router.replace('/login')
          this.$store.commit('NOTLOGIN')
        },
        //刷新
        fresh(){
          console.log("刷新")
          history.go(0)
        }
      }
    }
</script>

<style scoped>
  .navRight{
    height: 60px;
  }
  .myright{
    float: right;
    margin-top: 20px;
    
  }
  .left{
    float: left;
    margin-right: 20px;
    cursor: pointer;
  }
  .myHead{
    width: 30px;
    height: 30px;
    border-radius: 45px;
    background-color: white;
    padding: 2px;
  }
  .myHead>img{
    width: 30px;
    height: 30px;
    border-radius: 45px;
  }
</style>
