# typescript-webpack
typescript-webpack
一个最小化的ts-webpack的配置开发环境。
```
    "html-webpack-plugin": "^4.5.0",
    "ts-loader": "^8.0.6",
    "typescript": "^4.0.3",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.11.0"
```
- npm install
- npm run server

通过设置entry和plugins-chunks来支持多入口：

        http://localhost:9000/index.html
        http://localhost:9000/about.html


webpack版本已经跟新到了5，但是webpack-dev-server依然是3.x,他们是不兼容的。如果还想要使用webpack-dev-server，就得降低webpack的版本像下面一样。
```
"webpack": "^5.1.3",
"webpack-cli": "^4.1.0",
"webpack-dev-server": "^3.11.0"
```

```
"webpack": "^4.29.6",
"webpack-cli": "^3.3.0",
"webpack-dev-server": "^3.11.0"
```


