var INF={
	url:'http://une.moe/',

	n:'Ylune',	//name
	t:'高中生，前端、UI、拍照',		//副标题
	av:'o/avatar.jpg',		//头像地址
	u:[
		'Ylune'
	],

	c:{
		life:["日常","记录生活"],
		photo:["照片","VSCO",'RGBA(250,193,77,1)'],
		code:["代码","思路、分享、创作",'#404853','#d6d6d6'],
		hide:["我是隐藏的分类",null]/*无分类简介时，当前分类将不在首页NAV显示！*/
	},

	p:[
		{
			name:'关于 / 链接',
			url:'http://une.moe/q'

		}
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