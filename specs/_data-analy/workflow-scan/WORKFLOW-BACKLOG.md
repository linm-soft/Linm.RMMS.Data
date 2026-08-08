# Workflow backlog — data-analy `scan_workflow`

> **Generated:** 2026-08-08 · **mode:** scan_workflow  
> **SSOT JSON:** [`workflow-backlog.json`](./workflow-backlog.json)  
> **Skill:** `data-analy-scan-workflow.md` · Confirm: `scan_run_confirm`  
> **Board:** `/qldb-workflow` · copy `workspaces/qlbd/qldb-workflow/scan-backlog.json`

## Packs

| Pack | Features | Khi chạy |
|------|----------|----------|
| **master** (ưu tiên) | org-unit · road-route · asset-type · partner-unit | Form Design đã chốt · SearchInput consumer chờ |
| **main3** | asset · ai-vision · gis | Sau master seed |
| (board tick) | bất kỳ item | User chọn trên Scan backlog |

## 1. Master — danh mục dùng chung → `Linm.Web.RMMS.Master`

| runOrder | feature | pipelineHint | recommended |
|---------:|---------|--------------|:-----------:|
| 10 | `org-unit` | design+sa+tl confirmed · **Dev blocked be/ui** | ✅ |
| 11 | `road-route` | draft PO | ✅ |
| 12 | `asset-type` | draft PO | ✅ |
| 13 | `partner-unit` | draft PO | ✅ |

## 2. Map → `Linm.Web.RMMS.Gis`

| runOrder | feature | recommended |
|---------:|---------|:-----------:|
| 30 | `gis` | ✅ |
| 31 | `gis-draw-google` | |

## 3. List / chứng từ (voucher-like)

| runOrder | feature | MFE | Class |
|---------:|---------|-----|-------|
| 40 | `asset` | Asset | list *(depends master)* |
| 41 | `pavement-section` | Asset | voucher |
| 42 | `csdl-so-sach` | Asset | voucher |
| 50 | `patrol` | Patrol | voucher |
| 51 | `attendance` | Patrol | voucher |
| 52 | `incident` | Incident | voucher |
| 53 | `maintenance` | Maintenance | voucher |
| 80 | `contract` | Contract | voucher |

## 4. AI → AiVision / Copilot

| runOrder | feature | recommended |
|---------:|---------|:-----------:|
| 60 | `ai-vision` | ✅ |
| 61 | `ai-asset-detect` | ✅ |
| 62–66 | predict · estimate · copilot · its-* | |

## 5. Báo cáo → Report

| runOrder | feature | recommended |
|---------:|---------|:-----------:|
| 70 | `dashboard` | |
| 71 | `reports` | ✅ |

## 6. Platform

integration · users · feedback · citizen · ops · workflow · drone — `recommended=false` mặc định.

## Next (user)

1. Confirm **A — run_master** (khuyến nghị)  
2. `yarn run-implement --pack=master --enqueue-only --yes`  
3. Board tick **BE + UI** (`Linm.RMMS.WebService` · `Linm.Web.RMMS.Master`) trước Dev  
4. Sau master seed → enqueue `asset` / main3

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.08.19 |
| schemaVersion | 1 |
| mode | scan_workflow |
| versionGate | ok |
