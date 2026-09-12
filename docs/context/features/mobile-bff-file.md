# Mobile.Bff × FileService — Feature Context

> **Slug:** `mobile-bff-file` · **Module:** Platform File · **Phase:** P1  
> **Status:** Context · pipeline `tl` / `pending`  
> **Skills:** `/init-bff-file` · `/integrate-file-upload-mobile` · `/upgrade-common-lib`  
> **Rule:** `file-attach-service.md` · **FILE-ATT-09**  
> **Host:** `Linm.RMMS.Mobile.Bff` · File API `{ApiCore}/Linm.Platform.FileService` `:5018`  
> **Cấm** local `FilesController` · **cấm** kit gọi host FileService

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | App upload/preview ảnh qua `mobile-bff/api/v1/files/*` · JWT · commit `attachmentId` |
| Persona | Field (sự cố · tuần · AI frame) |
| App hiện có | AI vision `ai-vision/uploads*` trên RMMS (giữ) · **chưa** FileService BFF |
| DoD P1 | init → PUT object → commit → `GET /files/{id}/object` bytes · form body `{ attachmentId }` |

## 2. Design / UI

Kit `LinmImageUpload` **chỉ UI** — AskQuestion `mobile_img_kit` **khi execute** `/integrate-file-upload-mobile` (**cấm** 1 OS).  
BFF task này **không** đợi kit để mount NuGet.

## 3. API

Reuse FileService. **Cấm invent** `api/v1/mobile-files`.

| App path | BFF | Downstream |
|----------|-----|------------|
| `files/*` | NuGet `Linm.Platform.FileService.Bff` + rewrite `mobile-bff` → `web-bff` (như auth) | `{FileService}/api/v1/files/*` |
| `GET /files/{id}/object` | JWT forward | bytes — **cấm** resign URL làm image src |

`ai-vision/uploads*` **giữ** RMMS proxy (không thay P1).

## 4. Database

FileService DB (không trên Mobile.Bff). RMMS entity giữ `attachmentId` / CSV guids đã có.

## 5. Events

Không.

## 6. Gaps

| ID | Default |
|----|--------|
| GAP-MOB-BFF-FILE-01 | Chưa NuGet File BFF trên Mobile.Bff |
| FILE-ATT-09 | Preview phải `GET /object` + JWT |
| FILE-ATT-06 | Execute integrate phải Ask `mobile_img_kit` |

## 7. Demo checklist

- [ ] `dotnet build` Mobile.Bff  
- [ ] curl init/commit/`GET /object` qua `:5202`  
- [ ] Dual OS form 1 slug (incident hoặc patrol) `attachmentId`

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-12T16:21:48.516Z` |
