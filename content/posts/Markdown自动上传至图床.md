---
thumbnail: 'http://doltt.com/img/20200814155414.png'
title: 'Markdown文章图片自动上传'
date: '2020-08-20'
tags: '奇奇怪怪'
intro: '解决md文件本地插入图片麻烦，无图床，分享同步到其他站点需要重新上传图片的问题'

---

## 原理

利用 `Typora` 编辑器 + Picgo + 七牛云实现 Markdown图床及图片自动上传

tip: 七牛云也可以换成阿里云、自己的服务器、SMMS等其他图床工具人

### 效果



## 实现步骤

### 使用 Typora 编辑器

下载一个Typora的编辑器，功能介绍、使用说明、下载地址见官网，如果已经有了这个软件的检查一下是否为最新版本，低版本不支持该功能

![image-20200816082816192](http://doltt.com/img/image-20200816082816192.png)



<a href='https://www.typora.io/' target='_blank'>Typora官网传送门</a>

### 注册七牛云

在七牛云官网进行注册、登陆、实名认证后，选择【对象存储】服务，进行【新建空间】的操作，不详细介绍

![image-20200816092357733](http://doltt.com/img/image-20200816092357733.png)

<a href='https://www.qiniu.com/' target='_blank'>七牛云官网传送门</a>

### 安装 Picgo

打开终端进行 Picgo 的安装

```python

# via npm
npm install picgo -g

# or
yarn global add picgo

```

### 修改配置

打开终端进行 Picgo `config.json` 文件配置的修改

```python

vi ~/.picgo/config.json

# 配置参数，如果是非七牛云则对应修改为其他参数
{
  "picBed": {
    "uploader": "qiniu", //图床名称
    "qiniu": {
      "accessKey": "", //七牛云-个人中心-密钥管理-复制粘贴
      "secretKey": "", //七牛云-个人中心-密钥管理-复制粘贴
      "bucket": "", //七牛云-对象存储-空间名称
      "url": "", //在七牛云中自定义的域名
      "area":  "z2", //七牛云-空间选择的存储区域编号，如华南为z2
      "options": "", //七牛云-自定义网址后缀
      "path": "img/"//七牛云-自定义存储路径，如 img/
    }
  },
  "picgoPlugins": {}
}

```

打开Typora的设置，修改图像设置为，插入图片时候上传图片，服务器设定 自定义命令

通过`which`找到对应的目录

```python

# picgo install path
which picgo
# node install path
which node

```

![image-20200816094758287](http://doltt.com/img/image-20200816094758287.png)

命令粘贴：node-install-path 空格 Picgo-install-path 空格 upload 到自定义命令栏

![image-20200816092750261](http://doltt.com/img/image-20200816092750261.png)

tip：配置好后，可以直接通过终端 `picgo -u`命令上传剪贴板中的图片，并拿到Url