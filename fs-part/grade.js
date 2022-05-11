const fs=require('fs')
/* fs.readFile('/Users/yijin/NodeJsStudy/fs-part/grade.txt','utf8',function(err,dataStr){
    //fs模块操作文件，提供路径是以./或../开头的相对路径，很容易出现路径动态拼接错误的问题，代码运行时会以执行node命令时所处的目录，动态拼接出被操作文件的完整路径
    //解决方式是直接提供完整存放路径
    if(err){
        return console.log('读取失败')
    }
    //console.log('读取成功',dataStr)
    let newStr=[]
    let Str=dataStr.split(',');
    Str.map(item=>{
        newStr.push(item.replace('=',':'))
    })
    fs.writeFile('./grade2.txt',newStr.join('\n'),'utf8',function(err){
        if (err){
            return console.log('写入失败')
        }
        console.log('写入成功')})
}) */


console.log(__dirname)
//__dirname 表示当前文件所处目录
fs.readFile(__dirname+'/grade.txt','utf8',function(err,dataStr){
    //fs模块操作文件，提供路径是以./或../开头的相对路径，很容易出现路径动态拼接错误的问题，代码运行时会以执行node命令时所处的目录，动态拼接出被操作文件的完整路径
    //解决方式是直接提供完整存放路径
    if(err){
        return console.log('读取失败')
    }
    //console.log('读取成功',dataStr)
    let newStr=[]
    let Str=dataStr.split(',');
    Str.map(item=>{
        newStr.push(item.replace('=',':'))
    })
    fs.writeFile('./grade2.txt',newStr.join('\n'),'utf8',function(err){
        if (err){
            return console.log('写入失败')
        }
        console.log('写入成功')})
})