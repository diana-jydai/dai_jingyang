# Personal Academic Website

一个基于 Vite + React + TypeScript 的 GitHub Pages 个人学术网站模板。

## 已包含内容

- 首页 Hero 区域
- 研究简介
- 代表性论文
- 研究项目
- 简历与经历
- 联系方式
- GitHub Pages 自动部署工作流

## 本地开发

1. 安装 Node.js LTS
2. 安装依赖：`npm install`
3. 启动开发环境：`npm run dev`
4. 构建生产版本：`npm run build`

## GitHub Pages 部署

1. 将代码推送到 GitHub 仓库的 `main` 分支。
2. 在仓库设置中开启 **Pages**，Source 选择 **GitHub Actions**。
3. 推送后会自动执行 [.github/workflows/deploy.yml](.github/workflows/deploy.yml)。

`vite.config.ts` 会根据 `GITHUB_REPOSITORY` 自动设置 `base` 路径，适合仓库名形式的 Pages 地址。

## 你接下来需要替换的内容

- [src/App.tsx](src/App.tsx) 中的姓名、单位、研究方向、论文、项目和联系方式
- 如需简历下载，可把 PDF 放到 `public/` 后更新链接
- 如需头像，可在 `src/` 或 `public/` 中加入图片并替换默认字母头像
