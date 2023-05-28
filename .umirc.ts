import { defineConfig } from 'umi';

export default defineConfig({
  outputPath: 'docs',
  publicPath: './',
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  extraBabelPlugins: [
    [
        "import",
        {
          libraryName: "antd-mobile",
          customName: (name: string) => `antd-mobile/es/components/${name}`,
          libraryDirectory: "es",
         
        },
      ],
  ],
});
