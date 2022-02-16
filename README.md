## 说明
极简易版的仿去哪儿移动端app,使用vue全家桶构建，非常适合初学者。简单的使用vuex和localStorage管理当前定位城市。
通过该项目可以快速入手vue, 了解到常见的移动端开发问题，例如1像素边框、移动端300ms点击延迟...

> 如果对您对此项目有兴趣，可以点 "Star" 支持一下 谢谢！

> 或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

> 如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

> 开发环境: window10专业版; nodejs v10.16.3; vsCode

> 更多探索：[原生体验移动端音乐app(进阶vuex)](https://github.com/lumengxin/vue-music.git)    [中仿饿了么app](https://github.com/lumengxin/vue4-gshop.git)

### 技术栈

vue + vue-router + vuex + axios + vue-awesome-swiper + fastclick + better-scroll + stylus

### 项目运行

```
git clone https://github.com/lumengxin/Travel.git // 获取代码
cd Travel;npm i				// 安装依赖
npm run dev 或者 npm start   // 运行
npm run lint                // 格式化代码
npm run build               // 打包上线
```

### 更多阅读

[开发笔记](./docs/note.md)

## 项目预览：

[在线演示](http://www.byooka.com/v19/travel)

**效果展示：**

<div style="display:flex;flex-wrap:wrap;">
    <img src="./docs/images/home.png" />    
    <img src="./docs/images/city.png" />
    <img src="./docs/images/detail.png" />
</div>



## 项目总结：

### 要点归纳

- 初步使用vue全家桶
- vuex 结合 本地存储 localStorage实现数据持久化
- stylus预处理器的使用
- better-scroll，fastclick等移动端开发必用的库

### 代码亮点

(1) home/HomeIcons.vue:

*一维数组处理为二维数据*

```
pages () {
  // debugger
  const pages = []
  this.list.forEach((item, index) => {
    // 将一维数组处理为二维数组
    const page = Math.floor(index / 8)
    if (!pages[page]) {
      pages[page] = []
    }
    pages[page].push(item)
  })
  return pages
}
```

(2) detail/DetailList.vue:

*递归组件的使用*

(3) city

*城市字母表左右联动效果*

## 自动化构建项目
### github actions部署到阿里云

1. 阿里云`创建SSH密钥对`，保存到电脑指定位置(xxx.pem)

2. 打开需要部署到阿里云的github项目，点击`setting - secrets - new secret`。

<p style="text-decoration: line-through;">secret名称为SERVER_SSH_KEY(命名规范)，将xxx.pem中内容赋值，点击完成。(直接用的之前远程登录生成的xxx.pem不行)</p>

登录服务器：

- ssh-keygen -t rsa -C autodeployment -f deployment。生成密钥
- cat ~/.ssh/deployment.pub >> ~/.ssh/authorized_keys。公钥保存到authorized_keys文件中。
- deployment中内容复制到secret中，名称需要符合规范，SERVER_SSH_KEY(和ci.yml中一致)
- 可能出现`Warning: Permanently added 'xx' (ECDSA) to the list of known hosts.` 
  vim ~/.ssh/config创建config文件，写入 UserKnownHostsFile ~/.ssh/known_hosts(待验证)
- 可能出现的提醒权限不够
  chmod 700 ~/.ssh/authorized_keys(待验证 - 非必须)


3. 项目下建立`.github/workflows/ci.yml`文件，填入内容：
```
name: Build app and deploy to aliyun
on:
  #监听push操作
  push:
    branches:
      # master分支，你也可以改成其他分支
      - master
jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - name: Install Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '12.16.2'
    - name: Install npm dependencies
      run: npm install
    - name: Run build task
      run: npm run build
    - name: Deploy to Server
      uses: easingthemes/ssh-deploy@v2.1.5
      env:
          SSH_PRIVATE_KEY: ${{ secrets.SERVER_SSH_KEY }}
          ARGS: '-rltgoDzvO --delete'
          SOURCE: 'travel' # 项目打包后的文件（默认为dist, 需要调整打包配置）
          REMOTE_HOST: 'xx' # 阿里云公网地址
          REMOTE_USER: 'root' # 阿里云登录后默认为 root 用户，并且所在文件夹为 root
          TARGET: '/var/www/html/v19' # 打包后的 travel 文件夹将放在 /var/www/html/v19
```

## github actions

GitHub Actions 是 GitHub 的持续集成服务，于2018年10月推出。比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。

（1）workflow （工作流程）：持续集成一次运行的过程，就是一个 workflow。

（2）job （任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。

（3）step（步骤）：每个 job 由多个 step 构成，一步步完成。

（4）action （动作）：每个 step 可以依次执行一个或多个命令（action）。

### 相关资料

- [GitHub Actions 入门教程 - 阮一峰](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
- [官方文档](https://docs.github.com/cn/actions/reference/workflow-syntax-for-github-actions)
