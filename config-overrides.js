const {
    override,
    addWebpackAlias,
    fixBabelImports,
    addLessLoader
} = require('customize-cra')
const path = require('path')
const resolve = path.join(__dirname, './src')
module.exports = override(
    // 用来配置 @ 导入
    addWebpackAlias({
        '@': resolve
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#1DA57A'
        },
    })
)