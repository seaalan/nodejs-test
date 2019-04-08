let fs = require("fs");

function start() {
    console.info('start');
}

function upload() {
    console.info('upload');
}

function global() {
    // 全局变量。__filename 表示当前正在执行的脚本的文件名。
    console.info('__filename: ' + __filename ); // __filename: D:\github\nodejs-test\requestHandlers.js

    // 全局变量。__dirname 表示当前执行脚本所在的目录。
    console.info('__dirname : ' + __dirname  ); // __dirname : D:\github\nodejs-test

    // 全局函数。setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。setTimeout() 只执行一次指定函数。返回一个代表定时器的句柄值。
    setTimeout(function () {
        console.info('setTimeout: 我只执行一次。');
    }, 2000);

    // 全局函数。clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器。
    let t = setTimeout(function () {
        console.info('clearTimeout: 我没办法执行了。');
    }, 2000);
    clearTimeout(t); // 清除定时器

    // 全局函数。setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
    let tt = setInterval(function () {
        console.info('setInterval: 我每2秒执行一次。');
    }, 2000);

    // 全局函数。setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
    setTimeout(function () {
        clearInterval(tt); // 清除定时器
    }, 5000);

    // 全局对象。console
    console.info('console: 我也属于global。');

    // 全局变量。global 对象的属性。process
    console.info('process 当前目录: ' + process.cwd()); // 输出当前目录
    console.info('process 当前版本: ' + process.version); // 输出当前版本
    console.info('process 平台信息: ' + process.platform); // 输出平台信息
}

function readFile() {
    console.log("读取开始。");
    // 同步读取
    var data = fs.readFileSync('read.txt', 'utf-8');
    console.log("同步读取: " + data.toString());
    // 异步读取
    fs.readFile('read.txt', 'utf-8', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取: " + data.toString());
    });
    console.log("读取结束。");
}

// fs.writeFile(filename, data[, options], callback)
function writeFile() {
    console.log("写入开始。");
    // 同步读取
    var data = fs.writeFileSync('write1.txt', '我是被写入的内容1！');
    var writeData1 = fs.readFileSync('write1.txt', 'utf-8');
    console.log("同步读取写入的内容1: " + writeData1.toString());
    // 异步读取
    fs.writeFile('write2.txt', '我是被写入的内容2！', function (err) {
        if (err) {
            return console.error(err);
        }
        var writeData2 = fs.readFileSync('write2.txt', 'utf-8');
        console.log("同步读取写入的内容2: " + writeData2.toString());
    });
    console.log("写入结束。");
}

exports.start = start;
exports.upload = upload;
exports.global = global;
exports.readFile = readFile;
exports.writeFile = writeFile;