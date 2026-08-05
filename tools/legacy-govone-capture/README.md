# Legacy GOVOne capture (PMDB)

Login [pmdb.govone.vn](https://pmdb.govone.vn/apps.aspx#) → crawl menu/pages → extract **labels · inputs · grid columns · actions** → map sang slug QLBD (`features/{slug}.md`) làm input context migration.

## Setup

```bash
cd tools/legacy-govone-capture
cp .env.example .env.local
# Điền GOVONE_USER / GOVONE_PASS (không commit)
npm install
npm run install-browser
```

## Run local

```bash
npm run all
# hoặc: npm run capture && npm run map

npm run pipeline:deep   # deep menu trong từng app + analyze + step context
npm run pipeline:full   # full limits + vision packets + step context

# Rescan — all left-rail menus + action forms · full-reload retry · pause/manual
npm run rescan:maintenance          # master bảo trì · pause khi blank/form fail
npm run rescan:manual               # all masters · pause on fail
npm run pipeline:rescan:maintenance # rescan + map context/demo
```

### Rescan workflow

| Mục | Hành vi |
|-----|---------|
| **All menus** | Click **mọi** left-rail (TRUY CẬP NHANH · QUẢN LÝ BẢO TRÌ · BDTX…) |
| **Action forms** | Mỗi menu: Thêm/Tạo/Tạo công việc/Tạo từ sự cố… → capture form (**không** Save) |
| **Blank / empty** | Soft refresh → **full `page.reload`** → click lại (`--retry=2`) |
| **Pause manual** | Vẫn fail → stdin: user load page/form tay → Enter capture · `skip` · `abort` |
| **Filter master** | `--master=maintenance` · `maintenance,patrol` · `all` |

```bash
# Chỉ module bảo trì (slug maintenance) — headed + pause
npm run rescan:maintenance

# Tất cả menu + form · auto reload retry · không pause (batch)
npm run rescan

# Tự gõ flags
node capture.mjs --rescan --headed --master=maintenance --all-menus --pause-on-fail --retry=2
```

Từ **AI-AutoCode**:

```bash
yarn scan-qlbd-demo -- --deep --docs-root D:/AI-QLBD/Linm.RMMS.Data/docs
yarn scan-qlbd-demo -- --full --docs-root D:/AI-QLBD/Linm.RMMS.Data/docs --mfe-source D:/AI-QLBD/MFE-Source
```

Output: `docs/context/_raw/legacy-govone/`

**Tree theo tính năng** (`master` = app tile · `page` = left-rail · `action` = `view` | `create` | `tab-*`):

```
capture/{master}/{page}/{action}/
  inventory.json · screenshot.png · form-sample.json (nếu Thêm/Add)
```

Deep/full/rescan: click **all tabs · top menus · left-rail · Thêm/Add/action form** — **không** Save/Submit.  
Nếu click không phản hồi / UI trống → **Tải lại** hoặc `page.reload()` · retry · (rescan) pause manual.

| File | |
|------|--|
| `capture/{master}/…` | SSOT theo master → page → action |
| `catalog.json` · `CAPTURE-SUMMARY.md` | Index (+ `capturePath`) |
| `pages/*.json` | Flat mirror (compat map scripts) |
| `screenshots/*.png` | Flat shots (gitignored) |
| `features/{slug}.md` | Input cho `/qlbd-analy-demo` |
| `feature-map.json` | Slug index |

## CI

Workflow: `.github/workflows/legacy-govone-capture.yml`  
Secrets repo: `GOVONE_USER` · `GOVONE_PASS`  
Trigger: `workflow_dispatch` (manual).  
**CI:** không dùng `--pause-on-fail` (stdin TTY). Dùng `GOVONE_RETRY=2` + full reload.

## Downstream

1. `/docs-scan-cache` (include `_raw/legacy-govone/features`)  
2. `/qlbd-analy-demo` · `yarn scan-qlbd-demo`  
3. Sau Signed → `/qlbd-align-mfe`

Skill: `/qlbd-legacy-capture` (Linm.Development.Rules).

**Chạy từ AI-AutoCode (scan · dashboard · worker · rescan):**  
`AI-AutoCode/docs/QLBD-LEGACY-CAPTURE.md`
