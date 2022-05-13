let path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set("@", resolve("src"))
            // key,value可以自行定义，比如.set('@@', resolve('src/components'))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("utils", resolve("utils"));
    },
    devServer: {
        open: true, //是否自动弹出浏览器页面，默认未开启
        // host: "",  //表示启动的时候使用的域名，默认可以不写，则是使用localhost和本机IP，
        disableHostCheck: true,//有些公司出于安全考虑，要求页面和接口必须同主域，这时自己定义的域名，不被浏览器认可，需要设置此项
        port: 8081, // 设置端口号，默认8080
        https: false,  //是否使用https协议
        hotOnly: true, //是否开启热更新，默认开启的
        proxy: {
            '/test': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/test': ''
                }, //把api替换成''，也就是'^/api' => ''
                logLevel: "debug"  //输出跨域请求的信息
            },
            'api/': {
                target: 'https://yhxc.jtyst.zj.gov.cn/', // 需要跨域的地址 域名
                ws: false,
                changeOrigin: true, // 是否要跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}