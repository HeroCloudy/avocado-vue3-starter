# avocado-vue3-starter

基于 vue3 + vite 全家桶项目，整合了 Vue Router、Pinia、UnoCSS、SCSS 及其他常用第三方插件。 涉及到插件包括：

| 插件名                     | 版本      | 描述       | git 地址                                                   |
|-------------------------|---------|----------|----------------------------------------------------------|
| unocss                  | v       | 原子化 CSS  | https://unocss.dev/                                      |
| unplugin-vue-router     | ^0.10.8 | 自动路由     | https://github.com/posva/unplugin-vue-router             |
| unplugin-auto-import    | v       | 自动导入     | https://github.com/unplugin/unplugin-auto-import         |
| vueuse                  | v       | 常用 hooks | https://vueuse.org/                                      |
| unplugin-vue-components | v       | 组件自动注册   | https://github.com/unplugin/unplugin-vue-components      |
| vite-plugin-vue-layouts | v       | 布局       | https://github.com/JohnCampionJr/vite-plugin-vue-layouts |
| vite-plugin-pwa         | v       | pwa插件    | https://github.com/vite-pwa/vite-plugin-pwa              |
| vite-plugin-mock        | v       | mock     | https://github.com/vbenjs/vite-plugin-mock               |


## 分支介绍

- main： 开发分支，公共的内容会提交到该分支。
- basic-template： 最简分支。没有任何测试和演示代码。如果需要空工程可拉取该分支。
- component-template: 组件库最简分支。 

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
