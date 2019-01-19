<template>
	<!-- 基础管理 -->
	<div class="student">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>基础管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="BookTtop">
        <el-button color="#3B8CFF" type="primary" @click="add">增加用户</el-button>
        <div class="BookSeach">
          <input v-model="seachinput" placeholder="请输入内容">
          <i class="iconfont icon-sousuo BookSeachIcon" @click="seach"></i>
        </div>
      </div>
      <div>
        <el-table :data="tableData" style="width: 100%;text-align:center;">
          <el-table-column label="#" width="150">
            <template slot-scope="scope">
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column label="用户名" >
            <template slot-scope="scope">
              {{scope.row.uname}}
            </template>
          </el-table-column>
          <el-table-column label="密码" >
            <template slot-scope="scope">
              {{scope.row.upwd}}
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
      <el-pagination background layout="prev, pager, next" :page-size="limit" :total="pagetotal" @current-change="changepage"></el-pagination>

      <el-dialog :title="dialogtitle" :visible.sync="dialogFormVisible">
        <el-form ref="form" :label-position="labelPosition" :model="form" label-width="100px" >
          <el-form-item label="用户名" >
            <el-input v-model="form.uname" placeholder="必填"></el-input>
          </el-form-item>
          <el-form-item label="密码" >
            <el-input v-model="form.upwd" placeholder="必填"></el-input>
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
  name:'user',
  data(){
    return{
      page:1,//第几页，默认为1
      limit:9,//每页条数
      tableData:[],
      pagetotal:'',
      seachinput:'',
      labelPosition: 'left',
      dialogtitle:'',
      dialogFormVisible: false,
      classarry:[],//班级数组
      form: {
        uid:'',
        uname:'',
        upwd:''
        },

    }
  },
  methods:{
    //增加
    add(){
      this.form = {
        uid:'',
        uname:'',
        upwd:''
      }
      this.dialogtitle = "新增用户"
      this.dialogFormVisible = true
    },
    //修改
    update(index,row){
      this.dialogtitle = '修改用户信息'
      console.log(row)
      this.form = row
    },
    setstudent(){
      console.log(this.form)
      var values = JSON.stringify(this.form)
      if(this.dialogtitle == "新增用户"){
        console.log("新增用户")
        this.axios.get('api/user/Insert',{
            params: {
              uarry:JSON.stringify(this.form)
              }
            }).then((data)=> {
                  this.dialogFormVisible = false
                  this.changepage()
                  console.log(data)
            })
            .catch(function (error) {
                  console.log("11报错")
                  console.log(error);
                });
      }else if(this.dialogtitle == '修改用户信息'){
        this.axios.get('api/user/Update',{
            params: {
              uarry:JSON.stringify(this.form)
              }
            }).then((data)=> {
                  this.dialogFormVisible = false
                  this.changepage()
                  console.log(data)
            })
            .catch(function (error) {
                  console.log("11报错")
                  console.log(error);
                });
      }
    },
    //查询
    seach(){
      console.log(this.seachinput)
      this.axios.get('api/user/Select',{
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
    //删除
    delect(index,row){
      console.log(row.uid)
      this.axios.get('api/user/Del',{
      params: {
        uid:row.uid
        }
      }).then((data)=> {
        this.changepage()
        console.log(data)
      })
      .catch(function (error) {
            console.log("11报错")
            console.log(error);
          });
    },
    //切换页码
    changepage(obj){
      if(obj!= undefined){
        this.page = obj
      }
      console.log(obj)
      this.axios.get('api/user/GetPage',{
      params: {
        page:this.page,
        limit:this.limit
        }
    })
    .then((data)=> {
          this.tableData = data.data[0]
          console.log(this.tableData)
        })
    .catch(function (error) {
          console.log("11报错")
          console.log(error);
        });
    },
  },
  created(){
    this.axios.get('api/user/GetPage',{
          params: {
            page:this.page,
            limit:this.limit
          }
        })
        .then((data)=> {
          this.tableData = data.data[0]
          this.pagetotal = data.data[1][0].pagenum
        })
        .catch(function (error) {
          console.log(error);
        });
  }
}
</script>

<style scoped>
.student{
  margin: 20px;
}
.el-button--primary{
color:white;
background-color: #3B8CFF;
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
</style>