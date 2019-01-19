<template>
	<!-- 主页 -->
	<div id="homepage">
    <el-container>
      <el-aside width="200px">
        <NavLeft></NavLeft>
      </el-aside>
      <el-container>
        <el-header>
          <NavRight></NavRight>
        </el-header>
        <el-main>
          <div class="MainDiv">
            <router-view/>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavRight from '@/components/NavRight.vue'
import NavLeft from '@/components/NavLeft.vue'
import '@/conmmon/font/iconfont.css'
export default {
name: 'homepage',
components:{
  NavLeft:NavLeft,
  NavRight:NavRight,
},
}
</script>

<style>
 .MainDiv{
    width: 99%;
    background-color: white;
    height: 630px;
    border-radius: 5px;
    border-top: 1px solid #d8dfea;
    border-left: 1px solid #d8dfea;
    border-right: 1px solid #d8dfea;
    overflow: hidden;
  }
  .el-header, .el-footer {
    background-color: #EFF4F8;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #EFF4F8;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #EFF4F8;
    padding: 0 !important;
  }

  body > .el-container {
    margin-bottom: 40px;
    overflow-x: hidden
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  body{
    margin: 0 !important;
  }
  .el-table th{
    text-align: center;
  } /*表头居中*/
.el-dialog{
  width: 40%;
}
.el-select{
  width: 100%;
  height: 35px;
}
.el-input{
  float: left;
}
.el-form-item{
  margin-bottom: 10px;
}
.el-dialog__body{
  padding: 20px 60px;
}
.el-input__inner{
  height: 35px;
}
.el-form-item__label{
  line-height: 35px;
}
.el-form-item__content{
  line-height: 35px;
}
.el-dialog__title{
  font-size: 16px;
}
</style>