# 用途
综合`esdoc-standard-plugin`和`esdoc-ecmascript-proposal-plugin`两个 plugin，内置了因为esdoc `flow` 插件实现有不过，所以这里内置了`jsx` , `flow`插件，以避免这个坑。

配置如下代码到 `plugins`中即可。

```javascript
{
    name: "esdoc-es-plugin",
    option: {
        all: true,
        useMakdown: true // 用来决定生成物采取 markdown 还是 HTML
    }
}
```