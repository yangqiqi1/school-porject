<template>
	<!-- 课程管理 -->
	<div class="course">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>课程管理</el-breadcrumb-item>
        <el-breadcrumb-item>课程列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="div1">
        <div class="d1" v-for="(item,index) in coursearry" :value="item.kid">
          <div class="close" @click="remove(item.kid)">
            <img src="http://localhost:8888/public/image/icon/关闭.png" width="100%" height="100%"/>
          </div>
          <div class="d1img">
            <img :src="'http://localhost:8888/public/image/icon/'+item.kimg" width="100%" height="100%"/>
          </div>
          <h3>{{item.kname}}</h3>
        </div>
        <div class="d12" @click="clickdata">
          <div class="d2img">
            <img src="http://localhost:8888/public/image/icon/增加.png" width="100%" height="100%"/>
          </div>
        </div>
    </div>

    <el-dialog title="增加课程" :visible.sync="dialogFormVisible">
        <el-form ref="form" :label-position="labelPosition" label-width="100px" >
          <el-form-item label="课程名" >
            <el-input v-model="kname" placeholder="必填"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="setcourse()">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default{
  name:'course',
  data(){
    return{
      coursearry:[],//课程数组
      kname:'',//课程名
      labelPosition: 'left',
      dialogFormVisible: false,
    }
  },
  methods:{
    clickdata(){
      console.log("清除默认值")
      this.kname = ""
      this.dialogFormVisible = true
    },
    remove(obj){
      this.axios.get('api/course/Del',{
        params:{
          kid:obj
        }})
      .then(data => {
        this.getlist()
        console.log(data)
      })
      .catch(function (error) {
          console.log("报错")
          console.log(error);
        });
    },
    setcourse(){
      this.axios.get('api/course/Insert',{
        params:{
          kname:this.kname,
          kimg:'阅读.png'
        }
      })
      .then(data =>{
        this.getlist()
        console.log(data)
        this.dialogFormVisible = false
      })
      .catch(function(err){
          console.log("报错")
          console.log(error)
      })
    },
    getlist(){
      this.axios.get('api/course/GetPage')
      .then((data)=> {
          this.coursearry=data.data
          console.log(this.coursearry)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  created(){
    this.getlist()
  }
}
</script>

<style>
.course{
  padding: 20px;
}
.div1{
width: 1156px;
height: 630px;
}

.d1,.d2,.d3,.d4,.d5,.d6,.d7,.d8,.d9,.d10,.d11,.d12{
margin:15px;
float: left;
width: 154px;
height: 100px;
margin-top: 30px;
text-align: center;
margin-bottom: 20px; 
}
.div1>div:hover{
box-shadow:2px 2px 4px #B3B3B3;
}
.d1img{
margin: 0 auto;
width: 80px;
height: 80px;
margin-bottom: 0px;
margin-top: 10px;
display: inline-block; 
}
.d2img{
margin: 0 auto;
width: 60px;
height: 60px;
margin-top: 20px;

}
.close{
width: 10px;
height: 10px;
float: right;
margin-right: 10px;
visibility: hidden;
}
.div1>div:hover .close{
visibility: initial;
}
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