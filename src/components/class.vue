<template>
  <!-- 班级管理 -->
    <div class="myclass">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>班级管理</el-breadcrumb-item>
        <el-breadcrumb-item>班级列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="BookTtop">
        <el-button color="#3B8CFF" type="primary" @click="add">增加班级</el-button>
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
          <el-table-column label="班级名称">
            <template slot-scope="scope">
              {{scope.row.cname}}
            </template>
          </el-table-column>
          <el-table-column label="人数">
            <template slot-scope="scope">
              {{scope.row.COUNT}}
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
        <el-form ref="form" :label-position="labelPosition" :model="form" label-width="100px" >
          <el-form-item label="班级名称" >
            <el-input v-model="form.cname" placeholder="必填"></el-input>
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
    export default {
      data() {
        return{
          page:1,//第几页，默认为1
          pagetotal:'',//总页数
          limit:9,//每页条数
          tableData:[],
          seachinput:'',//搜索框value
          labelPosition: 'left',
          dialogtitle:'新增学生',
          dialogFormVisible: false,
          form:{
            cid:'',
            cname:'',
            count:'',
          }

        }
      },
      methods:{
        //增加
      add(){
        this.form = {
            cid:'',
            cname:'',
            count:'',
        }
        this.dialogtitle = "新增班级"
        this.dialogFormVisible = true
      },
      //修改
      update(index,row){
        this.dialogtitle = '修改班级信息'
        console.log(row)
        this.form = row
      },
      setstudent(){
      console.log(this.form)
      var values = JSON.stringify(this.form)
      if(this.dialogtitle == "新增班级"){
        this.axios.get('api/class/Insert',{
            params: {
              cname:this.form.cname
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
      }else if(this.dialogtitle == '修改班级信息'){
        this.axios.get('api/class/Update',{
            params: {
              carry:JSON.stringify(this.form)
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
        seach(){
          this.axios.get('api/class/Select',{
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
          this.axios.get('api/class/Del',{
          params: {
            cid:row.cid
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
          console.log(this.page)
          this.axios.get('api/class/GetPage',{
          params: {
            page:this.page,
            limit:this.limit
            }
          })
          .then((data)=> {
                this.tableData = data.data[0]
                this.pagetotal = data.data[1][0].pagenum
                console.log(this.tableData)
              })
          .catch(function (error) {
                console.log("11报错")
                console.log(error);
              });
          },
      },
      created(){
        this.axios.get('api/class/GetPage',{
          params: {
            page:this.page,
            limit:this.limit,
            }
        })
          .then((data)=>{
            this.tableData = data.data[0]
            this.pagetotal = data.data[1][0].pagenum
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    }
  </script>

<style scoped>
.myclass{
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
.el-icon-edit{
  margin-right: 10px;
}
.el-pagination{
  margin-top: 15px;
}
</style>
