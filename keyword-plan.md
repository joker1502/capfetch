# ClipHub 关键词分配说明

原则：**页面内容决定关键词，不是反过来。**

每个页面有唯一的工具/内容定位，关键词就是用户搜索该功能时用的词。

---

## 首页 `/`
**标题：** `ClipHub - Free Caption & Transcript Extractor for Short Videos`（绝对标题，不用模板）

**关键词：** short video caption extractor, free caption extractor

**理由：** 首页是品牌入口兼工具页。用户搜 "short video caption extractor" 这种泛词来，看到的就是提取工具，直接能用。title 带品牌名 ClipHub，不靠模板追加。

---

## 落地页 `/features`
**标题：** `Feautres` → 模板追加 → `Features - ClipHub`

**关键词：** 不独占某个具体词，description 覆盖全品类词

**理由：** features 页是品牌介绍页，展示所有功能。它不竞争某个工具的精准词（那是各工具页的事），而是承接首页来的流量，做品牌认知转化。

---

## 工具页（13 个）
**格式：** `页面名` → 模板追加 → `页面名 - ClipHub`

每条都是 **页面的 H1 = 页面标题 = 用户搜索词**，三者一致。

### TikTok 系列

| 页面 | 关键词 | 理由 |
|:----|:------|:------|
| `/tiktok-caption-extractor` | tiktok caption extractor | 用户在搜的就是这个工具名 |
| `/tiktok-caption-downloader` | tiktok caption downloader | 下载 vs 提取，不同搜索意图 |
| `/tiktok-text-extractor` | tiktok text extractor | "text" 区别于 "caption"，分支词 |
| `/tiktok-transcript-generator` | tiktok transcript generator | "transcript" vs "caption"，另一批用户 |
| `/tiktok-video-to-text` | tiktok video to text | 转换类意图，不同词根组合 |
| `/tiktok-subtitle-extractor` | tiktok subtitle extractor | "subtitle" 分支词 |

### Reels 系列

| 页面 | 关键词 | 理由 |
|:----|:------|:------|
| `/reels-caption-extractor` | reels caption extractor | Reels 端主词 |
| `/reels-caption-downloader` | reels caption downloader | Reels 下载分支 |
| `/reels-transcript-generator` | reels transcript generator | Reels 转录分支 |
| `/reels-video-to-text` | reels video to text | Reels 转换分支 |

### Shorts 系列

| 页面 | 关键词 | 理由 |
|:----|:------|:------|
| `/shorts-transcript-extractor` | youtube shorts transcript | Shorts 端主词 |
| `/shorts-transcript-downloader` | shorts transcript downloader | Shorts 下载分支 |
| `/shorts-video-to-text` | shorts video to text | Shorts 转换分支 |

**为什么三个平台要拆开？** 因为搜索意图不一样。搜 "tiktok caption extractor" 的人不会点进 reels 的页面，分开做才能精准匹配。

**为什么一个平台要分 extractor / downloader / to text？** 同样的道理。搜 "tiktok video to text" 的人要的是转换功能，搜 "tiktok caption extractor" 要的是提取，搜 "tiktok caption downloader" 要的是下载。三个需求不同，三页比一页覆盖得更准。

---

## 触发词变体页（7 个）
**格式：** 动态路由 `/[slug]`，带 canonical → 主页面

| 页面 | 触发的关键词 | Canonical |
|:----|:------------|:----------|
| `/free-tiktok-caption-extractor` | "free tiktok caption extractor" | → /tiktok-caption-extractor |
| `/free-tiktok-transcript-generator` | "free tiktok transcript generator" | → /tiktok-transcript-generator |
| `/free-reels-caption-extractor` | "free reels caption extractor" | → /reels-caption-extractor |
| `/free-shorts-transcript-extractor` | "free shorts transcript extractor" | → /shorts-transcript-extractor |
| `/online-tiktok-caption-extractor` | "online tiktok caption extractor" | → /tiktok-caption-extractor |
| `/tiktok-caption-extractor-no-sign-up` | "tiktok caption extractor no sign up" | → /tiktok-caption-extractor |
| `/free-tiktok-video-to-text` | "free tiktok video to text" | → /tiktok-video-to-text |

**理由：** 用户可能在前面加 "free"、"online"、"no sign up" 等触发词搜同一个功能。这些变体页捕获长尾流量后 canonical 到主页面，避免重复内容惩罚。

---

## 定价页 `/pricing`
**标题：** `Pricing` → `Pricing - ClipHub`

**关键词：** 不定位于搜索引擎主词，主要收转化流量

**理由：** 用户不会搜 "pricing" 来找转录工具。定价页的流量主要来自其他页面的 CTA 按钮点击，不是 SEO 入口。

---

## 博客 `/blog` 和 `/blog/[slug]`
**标题：** 博客页 `Blog - ClipHub`，文章页 `文章名 - ClipHub`

**关键词：** 教程/策略/对比类长尾词

**理由：** 博客覆盖的是 tool pages 覆盖不了的词 — "how to extract tiktok captions"、"best free caption extractor"、"tiktok vs reels strategy" 等。这些词的搜索量比核心工具词小但转化意图更强。
