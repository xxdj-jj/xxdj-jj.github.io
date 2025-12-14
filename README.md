# 🌐 NANYANG GLOBAL ASSET MANAGEMENT - 网站

高端展示网站，展示南洋全球资产管理公司的投资、孵化和咨询服务。

## 📋 功能特性

✨ **响应式设计**
- 移动优先的现代布局
- 完全兼容桌面、平板和手机设备
- 流畅的动画和过渡效果

🎨 **高端视觉设计**
- 深蓝色 (`#0f1729`) 主色调配合金色 (`#d4af37`) 强调
- 发光效果和渐变设计
- 优雅的排版和间距

🚀 **交互功能**
- 响应式导航菜单
- 光滑滚动导航
- 联系表单支持（可集成后端服务）
- 交集观察器动画
- 键盘可访问性支持

📱 **无障碍特性**
- 语义化 HTML
- ARIA 标签支持
- 键盘导航（Escape 关闭菜单）
- 高对比度设计
- 支持深色/浅色主题

## 📂 文件结构

```
myproject2/
├── index.html                  # 主页面
├── assets/
│   ├── css/
│   │   └── styles.css         # 全部样式（CSS 变量、响应式、动画）
│   ├── js/
│   │   └── main.js            # 交互脚本（菜单、表单、动画）
│   └── img/                   # 图片资源目录（预留）
└── README.md                  # 本文档
```

## 🎯 页面结构

### 1. 导航栏（Navbar）
- 粘性导航
- 响应式菜单切换（移动端）
- 平滑滚动链接

### 2. Hero 区（英雄区）
- 全屏介绍横幅
- 发光的太阳logo
- 主标题和副标题
- 两个 CTA 按钮（探索投资组合、成为合作伙伴）

### 3. 关于我们（About Us）
- 公司简介
- 四大核心价值卡片（精准、增长、洞察、诚信）

### 4. 投资框架（Our Pillars）
- 三列网格布局
- **投资** - 一级与二级市场
- **孵化与加速** - 创业者成长引擎
- **战略咨询** - 量身定制的解决方案
- 每个柱子包含详细的bullet points

### 5. 为何选择（Why Nanyang）
- 品牌声明区
- 深色背景 + 金色文本
- 关键价值主张

### 6. 联系与合作（Contact & Partnership）
- 联系表单（姓名、邮箱、公司、信息）
- 表单验证和反馈消息
- 提交按钮

### 7. 页脚（Footer）
- 最小化设计
- 导航链接
- 法律和版权信息

## 🚀 快速开始

### 本地预览

**方法1：直接打开文件**
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

**方法2：使用本地服务器（推荐）**

使用 Python 3：
```bash
cd c:\Users\zhang\Desktop\myproject2
python -m http.server 8000
```

然后在浏览器访问：`http://localhost:8000`

使用 Python 2：
```bash
cd c:\Users\zhang\Desktop\myproject2
python -m SimpleHTTPServer 8000
```

使用 Node.js (http-server)：
```bash
# 全局安装（首次）
npm install -g http-server

# 启动服务器
cd c:\Users\zhang\Desktop\myproject2
http-server -p 8000
```

使用 VS Code Live Server 扩展：
1. 安装 "Live Server" 扩展
2. 右键 `index.html` → "Open with Live Server"

## 🎨 自定义

### 修改颜色

编辑 `assets/css/styles.css` 中的 CSS 变量：

```css
:root {
    --primary-dark: #0f1729;      /* 深蓝色背景 */
    --secondary-dark: #1a2847;    /* 次要深蓝色 */
    --accent-gold: #d4af37;       /* 金色强调 */
    --accent-light-gold: #f4d03f; /* 浅金色 */
    --text-light: #f5f5f5;        /* 浅文本 */
    --text-muted: #b0b0b0;        /* 暗文本 */
}
```

### 修改内容

所有内容在 `index.html` 中，可直接编辑：
- 公司名称：搜索 `NANYANG`
- 部分标题和描述：编辑对应的 `<h1>`、`<h2>` 等标签
- 导航链接：编辑 `.nav-links` 中的链接

### 字体

使用 Google Fonts：
- **正文**：Poppins（现代、干净）
- **标题**：Playfair Display（优雅、高端）

若要修改，编辑 `index.html` 的 `<link>` 标签和 `styles.css` 的 `font-family`。

## 📤 部署

### GitHub Pages 部署（免费、推荐）

1. **创建 GitHub 账户**（如未有）并登录

2. **创建新仓库**
   - 仓库名：`<your-username>.github.io` 或任何名字
   - 设置为 Public

3. **上传文件**
   ```bash
   cd c:\Users\zhang\Desktop\myproject2
   git init
   git add .
   git commit -m "Initial commit: Nanyang website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

4. **启用 GitHub Pages**
   - 在仓库设置中找到 "Pages"
   - Source 选择 "main" 分支
   - 等待几分钟，网站将在 `https://<your-username>.github.io` 上线

### Netlify 部署

1. 访问 [netlify.com](https://netlify.com)
2. 用 GitHub 账户登录
3. 选择仓库并授权
4. 选择分支 `main`，构建命令留空
5. 点击 "Deploy"

### Vercel 部署

1. 访问 [vercel.com](https://vercel.com)
2. 导入 GitHub 仓库
3. 选择项目设置并部署
4. 获得自动生成的 URL

### 传统主机部署

如果使用传统虚拟主机（如 cPanel、Bluehost）：
1. 将所有文件上传到 `public_html` 文件夹
2. 访问你的域名

## 🛠️ 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 变量、Grid、Flexbox、动画
- **Vanilla JavaScript** - 无框架依赖，轻量级交互
- **Google Fonts** - 高质量字体
- **响应式设计** - Mobile-first 方法

## 📊 SEO 优化

- 语义化 HTML 标签
- Meta 描述和主题颜色
- 适当的标题层级 (H1-H3)
- 可访问的导航结构

## 🔄 表单处理

当前，联系表单显示成功消息并在浏览器控制台记录数据。

**集成后端**，编辑 `assets/js/main.js`：

```javascript
// 替换此部分以集成实际后端
const response = await fetch('https://your-api.com/submit-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

推荐服务：Formspree、EmailJS、自定义 Node.js/Python 后端

## 📱 浏览器支持

- ✅ Chrome (最新)
- ✅ Firefox (最新)
- ✅ Safari (最新)
- ✅ Edge (最新)
- ✅ iOS Safari
- ✅ Android Chrome

## 🎯 性能优化建议

1. **图片优化**：将 PNG/JPG 压缩到 < 100KB
2. **Lazy Loading**：对非首屏图片使用 `loading="lazy"`
3. **CDN**：通过 CDN 提供静态资源
4. **缓存**：添加 Service Worker 进行离线支持
5. **打包**：使用 Vite/Webpack 进行生产构建

## 🐛 故障排查

### 菜单在移动设备上不工作
- 检查 `assets/js/main.js` 是否正确加载
- 确保 JavaScript 未被禁用

### 样式显示不正确
- 清除浏览器缓存（Ctrl+Shift+Delete）
- 检查 `assets/css/styles.css` 是否正确加载

### 表单不提交
- 检查浏览器控制台错误（F12）
- 确认后端 API 端点正确（如已配置）

## 📝 许可证

此项目由南洋全球资产管理公司创建。保留所有权利。

## 📞 支持

如有问题，请联系网站团队。

---

**最后更新**：2024年12月9日  
**版本**：1.0.0 - 初始版本
