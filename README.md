#妹Blog 主题风格v2
Version 2.1 | 最近更新：2016-07-20 | 博客预览 : [Ylune(une.moe)](http://une.moe)

第二版主打大色块，对色彩的控制都交给各位博主，尽量让博主来自定义内容

[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](http://une.moe)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://une.moe)
[![forthebadge](http://forthebadge.com/images/badges/uses-html.svg)](http://une.moe)

![theme](http://ww2.sinaimg.cn/mw1024/a15b4afegw1f5ybfrcd3hj21iq0qu7s2)

##简介
为 妹blog 打造的简约主题风格，相比 v1 本版的板式变化不大，仍然固定左栏，采用色彩明亮的背景图
如果喜欢极简可跳转到 [v1](https://github.com/Ylune/imouto-theme)

使用过程中欢迎给我邮件 (i@une.moe) / [QQ](tencent://Message/?uin=461921013)，或者提交 Issues，我会尽快回复

##主题特点
* 左栏透明并背景高斯模糊（兼容性不好，在 Safari 可见）
* 分类块提示标签
* 文章背景颜色与分类块对应
* 文章主题微内发光
* 滚动条色彩
* 更棒的动画效果（ animation.css ）
* 移动端导航自适应
* ……


##主题安装
1. 备份原版目录所有文件
2. 下载 / clone 当前代码库的所有文件，覆盖原版文件
3. 打开文件 inf.js，设置博客信息、分类
4. 设置颜色请观察 inf.js 中的 INF.c 分类
```
var INF={
……

	c:{
		life:["日常","我是分类简介",'#46b19d.95'],
		photo:["照片","我是分类简介",'#f0ca4d.95'],
		code:["代码","我是分类简介",'#f0ca4d','#666'],
		hide:["我是隐藏的分类",null]/*无分类简介时，当前分类将不在首页NAV显示！*/
	},

……

```
在每个数组的第三项([2])填入 RGBA / RGB / URL / 十六进制 色值，透明度设置要填入十六进制色值，然后加上
```
.(透明度)
```
透明度最大值为1，比如透明度是 0.95，那就写为95，默认不透明。第四项([3])用于设置字体颜色，设置方法与背景颜色相同。

##使用说明

* **本版需修改原生脚本源码、HTML结构 ，请务必对原版备份，否则造成的脚本错误概不负责，如果文件缺失、脚本报错请重新下载覆盖**
* 文章的背景颜色与分类块对应，暂不支持设置自定义分类块的背景
* 页面出现大片黑点属正常现象，这是覆盖在背景图上的蒙层造成的，略微降低亮度


##意见建议
使用过程中出现BUG或者提建议，欢迎给我邮件 (i@une.moe) / [QQ](tencent://Message/?uin=461921013)，也可以提交 Issues / Pull request

##Licence
Apache Licence
