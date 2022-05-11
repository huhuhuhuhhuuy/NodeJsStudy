const fs = require('fs') //文件模块导入
const path = require('path') //路径模块导入


fs.writeFile(path.join(__dirname , '/path1.txt'),"刘澍宇是我的小猪🐷",function(err){
    if(err != null ){
        return console.log('写入失败')
    }return console.log('写入成功', path.basename(path.join(__dirname , '/path1.txt')) , path.extname(path.join(__dirname , '/path1.txt')))
})

//path.join() 路径拼接
//path.basename() 获取路径末尾完整文件名 path1.txt
//path.extname() 获取文件拓展名