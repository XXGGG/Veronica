module.exports = {
    publicPath: "./",
    devServer: {
        proxy: {
            '/api': { 
                // 此处的写法，目的是为了 将 /api 替换成 ''
                target: 'http://api.rosysun.cn/',
                // 允许跨域
                changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                ws: true,
                pathRewrite: {// 路径重写，
                    '^/api': ''// 替换target中的请求地址
                               //也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api/XXXXX即可。
                }
            }
        }
    }
}