# xiaomo-koishi-plugins
小莫的koishi插件合集(dingtalk、透群友)

# 插件列表
- dintalk集成：[adapter-dingtalk](https://github.com/houko/xiaomo-koishi-plugins/tree/main/adapter-dingtalk)
- 透群友：[tqy](https://github.com/houko/xiaomo-koishi-plugins/tree/main/tqy)


# 如何本地调试插件
在自己的项目根目录执行以下命令
```
git submodule init
git submooulde add https://github.com/houko/xiaomo-koishi-plugins.git
```

此时你的项目目录结构大概长这样，然后正常在插件配置中添加对应插件即可
```
├── docker
├── locales
├── logs
├── plugins
│   ├── adapter-dingtalk
│   │   └── src
│   └── tqy
│       └── src
└── public
```


## 所有插件
https://www.npmjs.com/search?q=%40xiaomoinfo
