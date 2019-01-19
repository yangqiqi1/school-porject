import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/login',//登录
      component:function(resolve){require(['@/page/login.vue'],resolve)}
    },
    {
      path:'/homepage',//主页 
      component:function(resolve){require(['@/components/homepage.vue'],resolve)},
      children:[
            {
            path:'/index',//首页
            component:function(resolve){require(['@/components/index.vue'],resolve)}
          },
          {
            path:'/class',//班级管理
            component:function(resolve){require(['@/components/class.vue'],resolve)}
          },
          {
            path:'/student',//学生管理
            component:function(resolve){require(['@/components/student.vue'],resolve)}
          },
          {
            path:'/course',//课程管理
            component:function(resolve){require(['@/components/course.vue'],resolve)}
          },
          {
            path:'/users',//用户管理
            component:function(resolve){require(['@/components/users.vue'],resolve)}
          },
          {
            path:'/teacher',//用户管理
            component:function(resolve){require(['@/components/teacher.vue'],resolve)}
          },
      ]
    }
    
  ]
})
