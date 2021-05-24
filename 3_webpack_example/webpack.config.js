const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
    mode: 'development',    
    devtool: 'eval',                // 빌드속도가 빨라짐
    resolve: {
        extensions: ['.js', '.vue']         // import시 from 다음에 나오는 파일명의 확장자 제거 가능
    },
    //mode: 'production'
    entry: {
        //app: './main.js',         // 하나로 합쳐질 이름이 app
        app: path.join(__dirname, './main.js'),           // 하나로 합쳐질 이름이 app
    },
    module: {
        rules: [{                   // 어떻게 합칠 것인지를 정한다.
            test: /\.vue$/,         // .vue로 끝나는 파일
            use: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),      // module이 처리하면서 사용하는 도구
    ],
    output: {
        //filemane: '[name].js'
        filename: 'app.js',
        //path: './dist',
        path: path.join(__dirname, 'dist'),      // __dirname is current folder name
    },
};