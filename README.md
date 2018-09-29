# OSS
文档及对象存储服务,参考了Aliyun OSS的服务思路.扩展了简单的版本控制功能
![JieServer](http://on-img.com/chart_image/5b94691de4b0fe81b62c9ed2.png "关系图谱")

## Vol 存储卷
任何对象都必须存储在指定的存储卷里,每个存储卷可能有多个block,这些block对于后台服务有着不同的意义,例如:版本块,对象或者文档块等等.具体操作有:
- **DEL** 删除存储卷
- **GET** 获取一个存储卷的基本信息
- **PUT** 更新(创建)一个存储卷的基本信息

## Object 对象
对象访问操作:
- **GET** 获取一个或多个满足条件的对象
- **PUT** 更新(新增)一个或者多个对象
- **DEL** 删除一个或多个满足条件的对象
- **POST** 带版本更新(新增)一个或多个对象

## 文档访问
仅适用于二进制访问的数据如:媒体文件/可执行文件等,统称为文档,基本操作:
- **upload** 上传
- **download** 下载
- **delete** 删除

## Version 版本
版本控制用于需要历史比对或者时间/改动敏感的数据,
不适用于高频变化的数据,存储模式采用Current/Near/Deep三级
- **Current** 存储当前数据
- **Near** 存储有限间隔范围内的版本数据
- **Deep** 存储过去的所有数据

## *Html-Template*
~~~
<html style="height:100%">
    <head>
        <meta charset="utf-8"/>
        <style type="text/css">::-webkit-scrollbar {display:none} img {width:90%}</style>
    </head>
    <title>Object Storage Service</title>
    <body id="body" style="height:100%;background:url(_back_) no-repeat 0 0 / cover">
        <a href="_back_" target="_blank">^_^</a>
        <div id="content" style="margin:0% 20%; overflow:scroll;
            width:60%;height:86%;background: rgba(255,255,255,0.5);
            border: 20px solid rgba(255,255,255,0.05)">
            _content_
        </div>
    </body>
</html>
~~~

