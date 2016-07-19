var INF={
	url:'http://une.moe/',

	n:'Ylune',	//name
	t:'不忘初心，方得始终',		//副标题
	av:'o/avatar.jpg',		//头像地址
	u:[
		'默认用户名',
		'默认用户名2'
	],

	c:{
		life:["日常","我是分类简介",'#46b19d'],
		photo:["照片","我是分类简介",'#f0ca4d'],
		code:["代码","我是分类简介",'#f0ca4d'],
		hide:["我是隐藏的分类",null]/*无分类简介时，当前分类将不在首页NAV显示！*/
	},

	p:[
		//	取消注释可增加自定义导航
	 	//{
	 	//	name:'VSCO',
	 	//	url:'#!vsco',
	 	//}

	],

	wb_name:null /*设置 wb_name 可以在使用多说评论时得到私信提示功能*/
};
var DS_cfg={
	id:''/*此处如留空将调用自身评论*/
};

var hitokoto = {
	api:'http://hitoapi.cc/s/',
	t:0		//是否将一言填入副标题,默认关闭，开启为1/true，一言将覆盖原标题内容
}