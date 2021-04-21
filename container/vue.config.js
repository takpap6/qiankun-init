module.exports = {
    devServer: {
        proxy: {
            '/login/baidu': {
                target: 'https://wwww.baidu.com',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/login/baidu': '',
                }
            }
        }
    },
}