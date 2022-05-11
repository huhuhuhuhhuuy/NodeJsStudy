const fs = require('fs')
//fs模块是node.js官方提供的用来操作文件的模块，它提供了一系列的方法和属性，用于满足用户对文件的操作需求
//readFile（）用来读取指定文件中的内容
//fs.readFile(path[,options],callback)
//path 必选参数，字符串，表示文件的路径/option 可选参数，表示以什么编码格式来读取文件/callback必选参数，文件读取完成后，通过回调函数拿到读取的结果

// fs.readFile('./read-write.txt','utf8',function(err,dataStr){ //第一个参数是错误对象，第二个参数是成功对象
//     /* //读取成功err为null
//     console.log(err)
//     console.log('------')
//     //读取成功dataStr为读取文本中所有内容
//     console.log(dataStr) */

//     if(err){
//        return  console.log('读取失败啦err的值是：',err)
//     }
//     console.log('读取文件成功啦dataStr的内容是：',dataStr)
// })



//writeFile（）用来向指定文件中写入内容
//fs.writeFile(file,data[,options],callback)
//path 必选参数，字符串，表示文件的路径/data必选参数，表示要写入的内容/options可选参数，写入格式，默认utf8/callback回调
fs.writeFile('./read-write.txt','999999999999999','utf8',function(err){ //第一个参数是错误对象，没第二个参数

    if(err){
       return  console.log('写入失败啦err的值是：',err)
    }
    console.log('写入文件成功啦err的内容是：',err)
})