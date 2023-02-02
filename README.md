项目基于 React + ant design4.x + typescript + redux-toolkit 实现的。

项目背景:

> 平时开发项目中经常用到 ant 的 table 组件, 里面 column 每次都要复制然后手动修改, 极其麻烦; 另外在没有进行接口联调的时候, 页面没数据;
>
> 于是萌生了写一个小工具去实现这些功能, 用户可以自定义随机数据, 然后生成测试数据同时可以生成 ant table 的 column 配置; **(两用: 第一仅用于生成测试数据, 第二可以生成 table 的 column 配置)**
>
> 另外平时常用的一些功能函数提取出来, 要用的时候就不必去百度找, 提高开发效率;

## 部署流程

先 fork 项目, 写代码, 执行命令, 最后发起合并请求

```shell
yarn build

git add .
git commit -m 'update'
git pull origin master
git push origin master
```

稍等几分钟就部署到 github 服务器上，可以使用 cxkyyds.xyz 域名访问了

#### 项目配置流程

[配置流程](https://blog.csdn.net/qq_39583550/article/details/128343627)

#### 如何还需要配置 prettier, eslint, styleline

[配置教程](https://blog.csdn.net/qq_39583550/article/details/125458727)
