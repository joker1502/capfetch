# CapFetch Deployment Guide

## GA4 Tracking

- **Measurement ID:** `G-BJS2FPTLZR`
- **Property:** `properties/547724018`

Add to `.env.local` / Vercel env vars:
```
NEXT_PUBLIC_GA_ID=G-BJS2FPTLZR
NEXT_PUBLIC_APP_URL=https://capfetch.com
```

## Cloudflare DNS (deploy后用 Vercel 域名补 apex CNAME)

| Type | Name | Content | Proxy |
|:---:|:----:|:-------|:----:|
| CNAME | `@` | `capfetch.vercel.app` | ✅ proxied |
| CNAME | `www` | `capfetch.com` | ✅ proxied |

当前已有: www CNAME + GSC 验证 TXT 记录。

## GSC

- **Property:** `sc-domain:capfetch.com` (已验证 siteOwner)
- **Sitemap:** `https://capfetch.com/sitemap.xml` (已提交)

## git config

所有 commit 前设好邮箱:
```bash
git config user.email "496976599@qq.com"
```
