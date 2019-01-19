<template>
	<!-- 首页 -->
<div class="homepage">
    	<div class="div1">
			<div class="div1file">
				<div class="d1">
					<div class="hfile">
					    <p>本校学生</p>
					    <div class="d1img">
						<img src="../assets/icon/学生.png" width="100%" height="100%"/>
					    </div>
					    <h3>{{arrys[0][0].nbr}}人</h3>
				    </div>
		       </div>
			    <div class="d2">
					<div class="hfile">
					    <p>本校老师</p>
					    <div class="d1img">
						<img src="../assets/icon/老师.png" width="100%" height="100%"/>
					    </div>
					    <h3>{{arrys[1][0].nbr}}人</h3>
					</div>
		        </div>
		        <div class="d3">
					<div class="hfile">
					    <p>本校班级</p>
					    <div class="d1img">
						<img src="../assets/icon/班级.png" width="100%" height="100%"/>
					    </div>
					    <h3>{{arrys[2][0].nbr}}个</h3>
					</div>
		        </div>
				<div class="d4">
					<div class="hfile">
					    <p>本校总人数</p>
					    <div class="d1img">
						<img src="../assets/icon/总人数.png" width="100%" height="100%"/>
					    </div>
					    <h3>{{arrys[0][0].nbr+arrys[1][0].nbr+arrys[2][0].nbr+arrys[3][0].nbr}}人</h3>
					</div>
		        </div>
			</div>
			<div class="div2">
				<div class="leftdiv">
					<div class="file1">
						<div class="lefttext">
							<h4>学校理念</h4>
							<p>以学生的培养为本：学生的素养培养应包括学习素养、道德素养和健康素养的培养，其中，学习素养的培养包括学习态度、学习方法和学习能力的培养;</p><br />
						</div>
						<div class="rightimg">
							<img src="../assets/school.png" width="100%" height="100%"/>
						</div>
					</div>
					<div class="file2">
						<div class="leftimg">
							<img src="../assets/school2.png" width="100%" height="100%"/>
					   </div>
						<div class="righttext">
							<p>“为学生的一生发展而奠基”意味着虽然学生在校学习只有三年的时间，但是学校应不只求一时之利、眼前之得，应以生为本，从大局着手、高处立意，为其持续发展、长远发展奠定基础、提供平台，让学生走出校门能管理自我.</p>
						</div>
					</div>
				</div>
				<div class="rightdiv">
					<img src="../assets/黑板.png">
					<!-- <div class="rightnav">
						<ul>
							<li><a href="#">新闻资讯</a></li>
							<li><a href="#">技术论坛</a></li>
						</ul>
					</div><hr />
					<div class="rightt1">
						<h4>有一种奇迹，叫二中速度<span class="date">2018-05-03</span></h4>
						<p>一中与京师励耘共同体合作办学签约仪式隆重进行</p>
						<hr class="dotted1"/>
						<h4>大胆创新，区域引领，榜样担当——我校…<span class="date">2017-07-09</span></h4>
						<p>我校得到办学绩效评估组高度肯定</p>
						<hr class="dotted1"/>
						<h4>相约千年古都 学在行走间的课堂…<span class="date">2017-06-28</span></h4>
						<p>旨在拓展学生视野、增长见识、锻炼能力。</p>
						<hr class="dotted1"/>
					</div> -->
				</div>
			</div>
 		</div>	
		<div class="News">
			<div class="t">
				<button>查看更多</button>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'index',
	data(){
		return{
			arrys:[],
			student:'',
			teacher:'',
			class:'',
			user:''
		}
	},
	methods:{

	},
	created(){
		this.axios.get('api/index')
        .then((data)=> {
          console.log(data.data[0][0].nbr)
          this.arrys = data.data
        })
        .catch(function (error) {
          console.log(error);
        });
	}
}
</script>

<style scoped>
.homepage{
width: 1156px;
height: 630px;
}
.div1{
border-radius: 5px;
padding: 15px;
height: 630px;
clear: both;
}
.div1file{
width:100%;
height: 200px;
margin: 0 auto;
}
.div1file p{
font-family:"黑体";
font-size: 18px;
color: #333333;
}
.div1file h3{
color: #666666;
}
.d2,.d3{
padding-top: 0px;
width: 20%;
height: 200px;
float: left;
background-color: white;
text-align: center;
margin: 0 auto;
box-shadow:2px 2px 4px #B3B3B3;
margin-left: 74px;
}
.d4{
width: 20%;
height: 200px;
float: right;
background-color: white;
text-align: center;
margin: 0 auto;
box-shadow:2px 2px 4px #B3B3B3;
}
.d1{
padding-top: 0px;
width: 20%;
height: 200px;
float: left;
background-color: white;
text-align: center;
margin: 0 auto;
box-shadow:2px 2px 4px #B3B3B3;

}

.div2{
width: 100%;
margin-bottom: 10px;
float: left;
margin-top: 60px;
height: 350px;

}
.leftdiv{
width:60%;
height: 380px;
/*border: 1px solid #000000;*/
float: left;
margin-bottom: 10px;
}
.schooltitle{
/*text-align: center;*/
font-size: 12px;
}
.file1{
width:95%;
height: 160px;
margin:0 auto;	
}
.lefttext{
width: 50%;
height: 150px;
float: left;
}
.rightimg{
width: 250px;
height: 150px;
float: right;
}
.lefttext p{
color:#999999;
text-indent: 2rem;
/*line-height: 2rem;*/
font-family: "黑体";
}
.lefttext h4{
text-align: center;
color: #666666;
font-family:"黑体";
}
.file2{
width:95%;
height: 150px;
margin:0 auto;	
}
.leftimg{
width: 250px;
height: 150px;
float: left;
}
.righttext{
width: 50%;
height: 150px;
float: right;
text-align: center;

}
.righttext p{
color:#999999;
text-indent: 2rem;
font-family:"黑体";
}

.d1img{
margin: 0 auto;
width: 80px;
height: 80px;
margin-bottom: 0px;
margin-top: 10px;

}
.rightdiv{
padding: 20px;
width:35%;
height: 350px;

float: right;

}
.rightdiv>img{
width: 320px;
margin-left: 70px
}
.rightnav{
width: 380px;
height: 30px;

}
.rightnav ul{
list-style: none;
margin-top: 0;

}
.rightnav  ul li{

float: left;
height: 35px;
width: 80px;

text-align: center;


}
.rightt1 hr{
width: 380px;
border: solid 1px #D3D3D3;

}
.rightnav  ul li a{
color: #333333;
height: 30px;
width: 80px;
display: block;
text-decoration: none;	
}

.rightnav  ul li:hover{
background: #00549A;

}
.rightnav  ul li a:hover{
color: white;
}
.rightt1 h4{
margin-top: 10px;
font-family: "黑体";
}
.rightt1 p{

font-size: 14px;
color: #999999;
font-family: "黑体";

}
.rightt1 .date{
position: absolute;
right: 0px;
font-size: 14px;
color: #999999;
font-family: "黑体";
font-weight: normal;

}
.rightt1 .dotted1{
margin-top: 5px;
border: dotted 1px #CCCCCC;

}
.rightt1{
position: relative;
}
</style>

