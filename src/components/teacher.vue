<template>
	<!-- 教师管理 -->
	<div class="student">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>教师管理</el-breadcrumb-item>
        <el-breadcrumb-item>教师列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="BookTtop">
        <el-button class="addbtn" color="#3B8CFF" type="primary" @click="addteach">增加教师</el-button>
        <div class="BookSeach">
          <input v-model="seachinput"  placeholder="请输入内容">
          <i class="iconfont icon-sousuo BookSeachIcon" @click="seach"></i>
        </div>
      </div>
      <div>
        <el-table :data="tableData" style="width: 100%;text-align:center;">
          <el-table-column label="#" width="150">
            <template slot-scope="scope">
              {{scope.row.tnum}}
            </template>
          </el-table-column>
          <el-table-column label="姓名">
            <template slot-scope="scope">
              {{scope.row.tname}}
            </template>
          </el-table-column>
          <el-table-column label="性别">
            <template slot-scope="scope">
              {{scope.row.tsex}}
            </template>
          </el-table-column>
          <el-table-column label="联系方式">
            <template slot-scope="scope">
              {{scope.row.tpnone}}
            </template>
          </el-table-column>
          <el-table-column label="课程">
            <template slot-scope="scope">
              {{scope.row.kname}}
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <i class="el-icon-edit" @click="update(scope.$index, scope.row);dialogFormVisible = true" style="font-size:18px"></i>
              <i class="el-icon-delete" style="font-size:18px" @click="delect(scope.$index,scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination background layout="prev, pager, next" :page-size="limit" :total="pagetotal" @current-change="changepage" @click="changepage(current-change)"></el-pagination>

      <el-dialog :title="dialogtitle" :visible.sync="dialogFormVisible">
        <el-form ref="form" :label-position="labelPosition" v-model="form" label-width="100px" >
          <el-form-item label="职工号" >
            <el-input v-model="form.tnum" placeholder="必填"></el-input>
          </el-form-item>
          <el-form-item label="姓名" >
            <el-input v-model="form.tname" placeholder="必填"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.tsex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form.tpnone" ></el-input>
          </el-form-item>
          <el-form-item label="课程">
            <el-select v-model="form.kechengid" placeholder="请选择">
              <el-option v-for="(item,index) in scorearry" :key="item.kid" :label="item.kname" :value="item.kid">{{item.kname}}</el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="setstudent()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
export default{
  name:'student',
  data(){
    return{
      page:1,//第几页，默认为1
      pagetotal:'',//总页数
      limit:9,//每页条数
      tableData:[],
      seachinput:'',//搜索框value
      labelPosition: 'left',
      dialogtitle:'',
      dialogFormVisible: false,
      scorearry:[],//课程数组
      form: {
        tid:'',
        tnum:'',
        tname:'',
        tsex:'',
        tpnone:'',
        kname:'',
        kechengid:'',
        },
    }
  },
  methods:{
    //修改
    update(index,row){
      this.form = row
    },
    //删除
    delect(index,row){
      console.log(row)
      this.axios.get('api/teacher/Del',{
      params: {
        tid:row.tid
        }
      }).then((data)=> {
            this.changepage()
          })
      .catch(function (error) {
            console.log("11报错")
            console.log(error);
          });
    },
    seach(){
      this.axios.get('api/teacher/Select',{
      params: {
        content:this.seachinput,
        page:this.page,
        }
      }).then((data)=> {
        if(data.data == ""){
          this.$message({
                  message: '查询结果为空',
                  type: 'warning',
                  duration:1500
                });
        }else{
          this.tableData = data.data
        }
        console.log(data.data)
          })
      .catch(function (error) {
            console.log("11报错")
            console.log(error);
          });
    },
    addteach(){
      this.form = {
        tid:'',
        tnum:'',
        tname:'',
        tsex:'',
        tpnone:'',
        kname:'',
        kechengid:'',
        },
      this.dialogFormVisible = true
      this.dialogtitle = '新增教师'
    },
    update(index,row){
      this.dialogtitle = '修改教师信息'
      console.log(row)
      this.form = row
    },
    setstudent(){
      console.log(this.form)
      if(this.dialogtitle == "新增教师"){
        this.axios.get('api/teacher/Insert',{
            params: {
              tarry:JSON.stringify(this.form)
              }
            }).then((data)=> {
                  this.dialogFormVisible = false
                  this.changepage()
            })
            .catch(function (error) {
                  console.log(error);
                });
      }else if(this.dialogtitle == '修改教师信息'){
        this.axios.get('api/teacher/Update',{
            params: {
              tarry:JSON.stringify(this.form)
              }
            }).then((data)=> {
                  this.dialogFormVisible = false
                  this.changepage()
            })
            .catch(function (error) {
                  console.log(error);
                });
      }
    },
    //切换页码
    changepage(obj){
      if(obj!= undefined){
        this.page = obj
      }
      this.axios.get('api/teacher/GetPage',{
      params: {
        page:this.page,
        limit:this.limit
        }
    })
    .then((data)=> {
          this.tableData = data.data[0]
          this.pagetotal = data.data[1][0].pagenum
          this.scorearry = data.data[2]
          console.log(this.tableData)
        })
    .catch(function (error) {
          console.log("11报错")
          console.log(error);
        });
    },
  },
  watch:{
    page:function(Val,oldVal){
      console.log(Val)
    }
  },
  created(){
    this.changepage()
  }
}
</script>

<style scoped>
.student{
  margin: 20px;
}
.addbtn{
color:white;
background-color: #3B8CFF;
float: left;
margin-left: 5px;
}
.el-button--primary:hover{
background-color: #4c99ff;
}
.BookSeach{
float: right;
width: 234px;
height: 40px;
border-radius: 20px;
background-color: #F1F2F4;
line-height: 40px;
}
.BookSeach>input{
-moz-appearance: none;
background-color: rgba(245, 222, 179, 0);
border: none;
outline: none;
margin-left: 25px;
}
.BookSeachIcon{
cursor: pointer;
}
.BookSeachIcon:hover{
color:  #3B8CFF;
}
.el-breadcrumb{
margin-bottom: 10px;
}
.el-pagination{
  margin-top: 15px;
}
.el-table{
  font-size: 12px;
}
.el-table td, .el-table th{
  padding: 10px 0;
}
.el-icon-edit{
  margin-right: 10px;
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