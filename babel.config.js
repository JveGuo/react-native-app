module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'], // 表示哪个目录开始设置绝对路径
                alias: {
                    // 别名的配置
                    '@/pages': './src/pages',
                    '@/navigator': './src/navigator',
                    '@/utils': './src/utils',
                    '@/components': './src/components',
                    '@/assets': './src/assets',
                    '@/config': './src/config',
                    '@/model': './src/model',
                },
            },
        ],
        'react-native-reanimated/plugin',
    ],
};
