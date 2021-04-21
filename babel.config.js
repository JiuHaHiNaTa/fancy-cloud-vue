module.exports = function (api) {
    api.cache(true);
    const presets = [
        //babel配置目标浏览器转换
        [
            "@babel/preset-env", {
            "targets": [
                "defaults",
                "not ie <= 8",
                "last 2 versions",
                "> 1%",
                "iOS >= 7",
                "Android >= 4.0"
            ]}
        ]
    ];
    const plugins = [];

    return {
        presets,
        plugins
    };
}