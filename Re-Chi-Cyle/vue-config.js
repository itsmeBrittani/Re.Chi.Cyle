
module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                '/': {
                    target: 'http://localhost:5000/action',
                },
            },
        },
    },
}