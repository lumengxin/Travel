# 笔记
## day01
### 1.新建远程项目
码云注册，配置ssh,新建Travel项目
### 2.本地创建vue项目
从远程克隆项目
```git
git clone git@gitee.com:marsxin/Travel.git
```
新建vue项目
```
vue webpacke init Travel
(大写不通过，改travel)
```
同步到远程
```
git add *
git commit -m "vue init"
git push
```
### 3.项目初始化
使用各种样式库，适配移动端


## day02
### 1.使用图标
iconfon官网注册
### 2.stylus样式
安装：
```
npm i stylus stylus-loader --save
```
使用：

新建 varibles.styl 配置全局样式变量

build中配置样式引用别名

### 3.新建项目管理分支
码云Travel项目创建 index-swiper分支

本地同步使用：
```
git pull  // 同步
git checkout index-swiper // 切分支
git status // 查看
```

开发：
- 使用github第三方插件，安装特定版本
(npm i vue-awesome-swiper@2.6.7 --save)
- 使用图片,去哪儿网，检查图片找到链接地址
(https://piao.qunar.com/)

合并：
先本地推送到远程
```
git chechout master
git merge origin/index-swiper
git push
```



### 相关网站

- 代码托管：[码云]( https://gitee.com/marsxin/Travel )

- 相关图标：[阿里矢量图]( https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=1490189 )

- 轮播图：[awesome]( https://github.com/surmon-china/vue-awesome-swiper )

