import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        isLogin:false,
        userInfo:'',
    },
    mutations: {// state指的是state的数据，user传递过来的数据
        //弹框状态
        IsShow(state){
            state.isShow = false
        },
        //设置登录状态
        ISLOGIN(state,obj){
            state.isLogin = true;
            sessionStorage.setItem("username", obj);
            sessionStorage.setItem("isLogin", true);
        },
        //退出登录
        NOTLOGIN(state){
            state.isLogin = false;
            sessionStorage.clear()//清空session
        },
    },
    getters: {//获取数据的方法
        getbackUsername(state){// 参数列表state指的是state数据
            return state.username;
        }
    },
    actions: {//提供跟后台接口打交道的方法，并调用mutations提供的方法
         // 设置城市信息
        // 参数列表：{commit, state}
        // state指的是state数据
        // commit调用mutations的方法
        // name就是调用此方法时要传的参数
        setCityName({commit,state}, name){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("setCity", name);
        }
    }
});
