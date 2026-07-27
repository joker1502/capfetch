# ClipHub — 短视频创作者全链路运营平台

> **域名**: cliphub.com (暂定)
> **状态**: 📋 开发就绪（域名注册后可上线）
> **模型**: 免费工具引流 → AI 分析付费

---

## 一、产品定位

### 一句话

> 短视频创作者的一站式运营工具箱：提取文案、分析爆款、优化脚本、生成内容、发布管理。

### 目标用户

| 用户画像 | 特征 | 痛点 |
|:--------|:-----|:----|
| **自媒体运营** | 社媒经理、内容运营 | 每天刷大量短视频，需要快速提取文案分析竞品 |
| **短视频创作者** | TikTok/Reels/Shorts 博主 | 想复刻爆款，需要分析话术结构 |
| **社媒营销人员** | 品牌运营、增长黑客 | 追踪竞品内容策略，批量分析 |
| **MCN/内容团队** | 多人协作 | 跨平台内容管理、排期、分析 |

### 全链路覆盖

```
文案提取/分析 → 脚本优化 → 生成短视频 → 多平台发布
   (获取灵感)    (打磨内容)   (制作成品)    (分发)

Phase 1 ──── Phase 2 ──────── Phase 3 ────────── Phase 4
```

| Phase | 功能 | 状态 |
|:----:|:----|:----:|
| **Phase 1** | 多平台文案提取 + SEO 落地页 | 🎯 **当前开发** |
| **Phase 2** | AI 爆款分析（付费核心功能） | 📋 待启动 |
| **Phase 3** | 脚本优化（从分析到创作） | 📋 远期 |
| **Phase 4** | 多平台发布管理 | 📋 远期 |

---

## 二、竞品格局

| 竞品 | 定位 | 规模 | 弱点 |
|:----|:----|:----:|:-----|
| **TokScript** | 短视频转录 + AI 写作 | 72K 用户 | 免费 5 条/天需注册，无全链路工具 |
| **TikUp.me** | TikTok 小工具集 | 小站 | 功能单一 |
| **TikNeuron** | 字幕提取 | 小站 | 单功能 |
| **SaveTo.ai** | 多用途工具 | 中等 | 不是专注短视频的工具 |
| **CaptionGrab** | Caption 抓取 | 小站 | 只提取 |

### ClipHub 的竞争优势

| 维度 | TokScript | ClipHub |
|:----|:---------|:--------|
| 免费额度 | 5条/天，要注册 | **20条/天，不注册** |
| 分析能力 | 只生成（写标题/脚本） | **反推爆款原因**（话术结构、情绪曲线、钩子评分） |
| 平台覆盖 | TikTok+Reels+Shorts | 同样三平台 |
| 变现重心 | 转录收费 | **提取免费，分析收费** |
| 产品矩阵 | 单一工具 | **全链路工具箱（逐步扩展）** |

---

## 三、免费 vs 付费模型

### 免费层（引流）

| 用户状态 | 每日额度 | 条件 |
|:--------|:--------:|:----|
| 未登录（匿名） | 20 条/天 | 无 |
| 已登录（免费） | 50 条/天 | 注册 Supabase 账号 |

### 付费层（变现）

| 层级 | 定价参考 | 功能 |
|:----|:--------|:-----|
| **Pro** | $9-15/月 | AI 爆款分析、无限制提取、批量导出 |
| **Business** | $29-49/月 | 竞品追踪（Phase 2）、API 接入（Phase 3） |

### 为什么免费额度要设限

| 理由 | 说明 |
|:----|:-----|
| 防滥用 | 不设限会被人用脚本爬 |
| 转化漏斗 | 不够用 → 注册 → 还不够 → 付费 |
| 降低成本 | 语音转文字有服务器资源成本 |

---

## 四、页面结构

### 公共页面 — Phase 1（13 个工具页）

| URL | SEO 关键词 | 词根组合 |
|:----|:----------|:--------|
| `/` | Landing Page（FAQ Schema） | — |
| `/tiktok-caption-extractor` | `tiktok caption extractor` | tiktok + extractor |
| `/tiktok-caption-downloader` | `tiktok caption downloader` | tiktok + downloader |
| `/tiktok-text-extractor` | `tiktok text extractor` | tiktok + text + extractor |
| `/tiktok-transcript-generator` | `tiktok transcript generator` | tiktok + transcriber |
| `/tiktok-video-to-text` | `tiktok video to text` | tiktok + to + text |
| `/tiktok-subtitle-extractor` | `tiktok subtitle extractor` | tiktok + subtitle + extractor |
| `/reels-caption-extractor` | `reels caption extractor` | reels + extractor |
| `/reels-caption-downloader` | `reels caption downloader` | reels + downloader |
| `/reels-transcript-generator` | `reels transcript generator` | reels + transcriber |
| `/reels-video-to-text` | `reels video to text` | reels + to + text |
| `/shorts-transcript-extractor` | `youtube shorts transcript` | shorts + extractor |
| `/shorts-transcript-downloader` | `shorts transcript downloader` | shorts + downloader |
| `/shorts-video-to-text` | `shorts video to text` | shorts + to + text |

### 触发词变体页（7 个，动态路由 `/[slug]`）

| URL | 触发词版 | Canonical |
|:----|:---------|:----------|
| `/free-tiktok-caption-extractor` | free + extractor | → `/tiktok-caption-extractor` |
| `/free-tiktok-transcript-generator` | free + transcriber | → `/tiktok-transcript-generator` |
| `/free-reels-caption-extractor` | free + reels + extractor | → `/reels-caption-extractor` |
| `/free-shorts-transcript-extractor` | free + shorts + extractor | → `/shorts-transcript-extractor` |
| `/online-tiktok-caption-extractor` | online + extractor | → `/tiktok-caption-extractor` |
| `/tiktok-caption-extractor-no-sign-up` | no sign up + extractor | → `/tiktok-caption-extractor` |
| `/free-tiktok-video-to-text` | free + to text | → `/tiktok-video-to-text` |

### 公共页面 — 其他

| URL | 页面 | 说明 |
|:----|:----|:------|
| `/pricing` | 定价页 | 免费/Pro/Business 对比 + Creem 接入 |
| `/blog/[slug]` | 博客文章 | Article Schema |
| `/blog` | 博客列表 | |
| `/sitemap.xml` | Sitemap | 全部页面 |

### 认证后页面

| URL | 页面 | 说明 |
|:----|:----|:------|
| `/dashboard` | 用户中心 | 使用统计、历史记录、额度管理 |

### 布局规则

- 所有公共页：统一 Header（Logo + 导航 + Sign In/Get Started 按钮）+ Footer
- 所有工具页共用同一个提取引擎组件，URL 决定默认选中的平台 Tab（TikTok / Reels / Shorts）

---

## 五、核心交互流程

### 提取流程

```
用户来到任意工具页
    ↓
页面默认选中对应平台 Tab
    ↓
输入框 → 粘贴视频链接 → 点击「提取文案」
    ↓
前端校验：
  - URL 格式是否正确（匹配对应平台域名）
  - 错误 → 显示 inline 错误提示
    ↓
提交到 Server Action（非阻塞）
    ↓
服务端：
  1. Zod 校验 URL
  2. 检查来源 IP 当天提取次数（匿名 20/天，登录 50/天）
  3. 创建 Task 记录（status: pending）
  4. 扣减当日额度
  5. 转录处理（通过配置的 TranscriptionProvider）
  6. 更新 Task + 保存 Extract
    ↓
Supabase Realtime 推送 → 前端自动渲染文案卡片
    ↓
文案卡片（带一键复制 + 下载按钮）
```

### 额度检查逻辑

- **未登录**：用 IP + 日期做轻量计数（Supabase UsageLog）
- **已登录**：查 UsageLog 表中当日该用户记录数
- **超出**：提示升级（登录用户 → 升级 Pro | 未登录 → 注册获得更多）

---

## 六、数据库模型

```prisma
model Profile {
  id        String    @id @default(uuid())
  userId    String    @unique @map("user_id")
  email     String?
  name      String?
  extracts  Extract[]
}

model Extract {
  id              String   @id @default(cuid())
  userId          String?  @map("user_id")
  anonymousId     String?  @map("anonymous_id")
  platform        String
  videoUrl        String   @map("video_url")
  videoTitle      String?  @map("video_title")
  transcript      String
  wordCount       Int      @map("word_count")
  durationSeconds Int?     @map("duration_seconds")
  createdAt       DateTime @default(now()) @map("created_at")
  profile         Profile? @relation(fields: [userId], references: [userId])
}

model Task {
  id              String   @id @default(cuid())
  status          String   @default("pending")
  platform        String
  videoUrl        String   @map("video_url")
  transcript      String?
  wordCount       Int?     @map("word_count")
  durationSeconds Int?     @map("duration_seconds")
  error           String?
  userId          String?  @map("user_id")
  anonymousId     String?  @map("anonymous_id")
  createdAt       DateTime @default(now()) @map("created_at")
  updatedAt       DateTime @updatedAt @map("updated_at")
}

model UsageLog {
  id         String   @id @default(cuid())
  identifier String
  usedAt     DateTime @default(now()) @map("used_at")
}
```

---

## 七、文案提取技术方案

### 架构总览

Vercel 不能跑长任务（超时 30s），所以转录必须是 异步架构：

```
用户粘贴链接 → 点提取
    ↓
Server Action（毫秒返回）：
  校验 URL → 检查额度 → 创建 pending Task → 返回 taskId
    ↓
前端订阅 Supabase Realtime → 等待 status === 'done'
    ↓
Worker（VPS）轮询 Supabase → 发现 pending 任务
    ↓
转录处理 → 更新 Task 记录
    ↓
Supabase Realtime 广播 → 前端自动渲染
```

**不轮询、不阻塞、即时推送。**

### TranscriptionProvider 抽象层

三种 Provider 共用同一接口，切换只改一行环境变量：

```typescript
interface TranscriptionProvider {
  name: string
  getTranscript(url: string, platform: string): Promise<TranscriptResult>
}
```

| Provider | 环境变量 | 适用阶段 | 月成本 |
|:--------|:--------|:--------|:-----:|
| `apify` | `APIFY_API_KEY` | 初期零流量 | **$0**（免费额度 $5/月） |
| `replicate` | `REPLICATE_API_TOKEN` | 初期备选 | **$0**（首月 $5 免费） |
| `local` | `VPS_SSH_KEY` | 日转录 > 500 | **$5-10/月**（VPS 固定费） |

切换命令：`TRANSCRIPTION_PROVIDER=local`，代码零改动。

### 启动策略（按流量演进）

| 阶段 | 日转录量 | Provider | 月成本 | 说明 |
|:---:|:--------:|:--------|:-----:|:----|
| **上线初期** | < 100 | apify | **$0** | 免费额度内 |
| **增长期** | 100-500 | apify（超出付费） | ~$5-20 | 按量计费 |
| **稳定期** | > 500 | local | **$5-10** | 自建 VPS |

### 自建方案（local provider）

```bash
pip install yt-dlp openai-whisper
python worker.py  # 轮询 pending 任务 → 转录 → 写回 Supabase
```

推荐 Whisper 模型：

| 模型 | 精度 | 速度（1 分钟音频） | 磁盘 |
|:---|:---:|:----------------:|:----:|
| `tiny` | 一般 | ~5s | 150MB |
| `base`（推荐） | 可用 | ~10-15s | 300MB |
| `small` | 好 | ~20-40s | 1.5GB |

### 成本模型推演

| 日转录量 | API 方案月费 | 自建方案月费 | 推荐 |
|:-------:|:-----------:|:-----------:|:----:|
| < 100 | $0 | — | API |
| 100-500 | $5-20 | — | API |
| 500-2000 | $20-300 | $5-10 | **自建** |
| 2000-10000 | $300-3000 | $50-200 | **自建** |

---

## 八、Server Actions

### 1. 提交转录任务（非阻塞 → 内联处理）

```typescript
// src/actions/submit.ts
export async function submitExtraction(formData: FormData): Promise<SubmitResult>
```

**流程：**
1. Zod 校验 URL 格式
2. 检查当日免费额度
3. 创建 Task 记录
4. 调用 TranscriptionProvider 转录
5. 更新 Task + 保存 Extract
6. 返回 `{ taskId }`

### 2. 查询任务状态（轮询备选）

```typescript
// src/actions/status.ts
export async function getTaskStatus(taskId: string): Promise<StatusResult>
```

### 前端状态管理

**首选：Supabase Realtime** — 创建 Task 后订阅，自动接收 done 事件。
**备选：** 降级为 `getTaskStatus` 轮询。

---

## 九、技术栈

| 层 | 技术 |
|:---|:-----|
| 框架 | Next.js 16 App Router (Turbopack) |
| 样式 | Tailwind CSS v4 + shadcn/ui |
| 数据库 | Supabase PostgreSQL + Prisma v7 ORM |
| 认证 | Supabase Auth (email OTP + OAuth) |
| AI | Vercel AI SDK v7 + OpenCodeGo (deepseek-v4-flash) |
| 支付 | Creem |
| 验证 | Zod v4 |
| 测试 | Vitest |
| 部署 | Vercel |
| 转录 | yt-dlp + Whisper（本地） / Apify API |

---

## 十、SEO 策略

### 方法论：词根组合法

参见独立文档 `keyword-root-plan.md`。

**核心公式：** `触发词(可选) + 对象词 + 功能词根 = 目标关键词`

**词根分类匹配：**

| 词根分类 | 匹配词根 | 对应阶段 |
|:--------|:--------|:--------|
| **下载提取类** ✅ | Extractor, Downloader, Grabber, Scraper | **Phase 1** |
| **转换类** ✅ | Converter, Transcriber, Parser, Translator | **Phase 1** |
| **检测分析类** 🎯 | Analyzer, Checker, Detector, Evaluator, Scanner | **Phase 2 付费** |
| **内容处理类** 🎯 | Rewriter, Summarizer, Humanizer, Improver | **Phase 3** |
| **生成创作类** 🚀 | Generator, Creator, Writer, Maker | **Phase 3** |

**触发词降竞争：** free, online, best, AI, no signup, no login, unlimited

### Phase 1 落地页覆盖

| 词根 | tiktok | reels | shorts |
|:----|:-----:|:-----:|:------:|
| extractor | ✅ | ✅ | ✅ |
| downloader | ✅ | ✅ | ✅ |
| transcriber | ✅ | ✅ | — |
| to text | ✅ | ✅ | ✅ |
| subtitle | ✅ | — | — |

共 13 个工具页 + 7 个触发词变体页 = **20 个 SEO 入口**。

### Phase 2-4 页面规划

| 阶段 | 词根方向 | 示例页面 |
|:---:|:--------|:---------|
| Phase 2 | Analyzer, Checker, Detector | `/tiktok-caption-analyzer`, `/viral-hook-checker` |
| Phase 3 | Rewriter, Generator, Summarizer | `/tiktok-caption-rewriter`, `/viral-hook-generator` |
| Phase 4 | Scheduler, Planner, Tracker | 与 socipub 协同 |

### SEO 规范

每个页面必须：

- [x] 导出 `metadata`（标题、描述）
- [x] Landing Page + 工具页：FAQ Schema (JSON-LD)
- [x] 博客文章：Article Schema (JSON-LD)
- [ ] 所有图片用 `next/image` + 描述性 alt
- [ ] 首页 title 带 `ClipHub`（直接写，不需要 template）
- [x] 子页面 title 格式 `%s - ClipHub`

---

## 十一、环境变量

```env
NEXT_PUBLIC_APP_URL=
DATABASE_URL=

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

TRANSCRIPTION_PROVIDER=apify
APIFY_API_KEY=

NEXT_PUBLIC_CREEM_API_KEY=
CREEM_API_KEY=
CREEM_WEBHOOK_SECRET=

OPENCODEGO_API_KEY=
```

---

## 十二、开发顺序

### 原则

- 不赶 MVP，每步做扎实
- 转录 Provider 第一天就抽象好，先用 `apify` 跑通
- 架构第一天就是最终架构（Task 表 + Realtime + 异步），不需要重构

### 任务分解

| # | 任务 | 产出 | 依赖 |
|:-:|:----|:----|:----:|
| 1 | **项目初始化**：Next.js 16 + Tailwind v4 + shadcn/ui + Prisma + Supabase | 可运行项目 | — |
| 2 | **核心布局**：Header + Footer + 路由框架 | 所有页面骨架 | 1 |
| 3 | **数据库 Schema**：Profile + Extract + Task + UsageLog + Prisma migrate | 数据库就绪 | 1 |
| 4 | **转录抽象层 + Apify Provider**：接口 + 实现 + 切换 | 可调用转录 | 1 |
| 5 | **异步转录流程**：Server Action + Task 表 + Realtime + 内联处理 | 端到端提取 | 3, 4 |
| 6 | **Landing Page + 工具页 UI**：输入框 + Tab + 结果展示 | 用户可用界面 | 2, 5 |
| 7 | **免费额度管理**：匿名 IP + 登录用户 | 防滥用 | 3 |
| 8 | **用户认证**：Supabase Auth + Login 页 | 登录/注册 | 3 |
| 9 | **Dashboard**：统计 + 历史 + 额度 | 用户中心 | 7, 8 |
| 10 | **SEO 落地页**：13 个工具页 + FAQ Schema + sitemap | SEO 就绪 | 6 |
| 11 | **触发词变体页**：7 个 free/online/no-signup 变体 + canonical | 长尾覆盖 | 10 |
| 12 | **Pricing 页 + Creem 支付**：定价 + 结账 + webhook | 付费功能 | 8 |
| 13 | **Blog 基础功能**：列表页 + 文章页 + Article Schema | 内容营销 | 2 |

---

## 十三、SERP 原始数据

```
数据源: Serper.dev API (via kw-research)
日期: 2026-07-24

tiktok caption extractor:    [green]  tikup.me, captiongrab.com, scrapecreators.com
tiktok text extractor:       [yellow] tokscript.com, elevenlabs.io, saveto.ai
tiktok transcript generator: [green]  tokscript.com, saveto.ai, getthescript.app
extract tiktok captions:     [yellow] tikneuron.com, tokscript.com, tikup.me
tiktok video to text:        [yellow] tokscript.com, saveto.ai, elevenlabs.io
tiktok speech to text:       [yellow] tokscript.com, tiktok.com, elevenlabs.io
tiktok caption downloader:   [yellow] dilawarpro, tikneuron.com, tikup.me
tiktok subtitle extractor:   [yellow] tikneuron.com, tokscript.com, facelessvideos.app
free tiktok caption extractor:[yellow] tikup.me, dilawarpro, tokcaption.com
online tiktok text extractor: [yellow] tokscript.com, elevenlabs.io, saveto.ai
tiktok script extractor:     [green]  tokscript.com, scrapecreators.com, hooksy.ai

汇总: 3 green / 8 yellow / 0 red
```

---

> **本文档版本**: v0.5
> **最后更新**: 2026-07-24
> **变更内容**: v0.4→v0.5 新增 7 个触发词变体落地页（动态路由 `/[slug]` + canonical）、sitemap.xml + robots.txt
> **配套文档**: `keyword-root-plan.md`（词根组合法 + 四步暴涨词发现法）
> **后续动作**: 注册 cliphub.com → 配置 Supabase + Apify → `prisma migrate dev` → 上线
