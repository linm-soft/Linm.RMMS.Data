# Đơn vị tổ chức (cơ cấu DRVN) — Feature Context

> **Slug:** `org-unit` · **Module:** Master · **Phase:** P1  
> **Status:** Context · **data-analy confirmed A** (2026-08-08)  
> **Feature Kind:** **B** — Catalog tree list + form  
> **packKind:** `master` — **không demo** · UI confirm ở Design  
> **Sources:** [`../20-ORG-STRUCTURE-DRVN.md`](../20-ORG-STRUCTURE-DRVN.md) · [**seed JSON (60 nodes)**](../seed/org-unit-seed.json) · [drvn.gov.vn](https://drvn.gov.vn/gioi-thieu/co-cau-to-chuc?categoryId=101875659) · data-import CUC 2  
> **Demo HTML:** **N/A**  
> **MFE:** `Linm.Web.RMMS.Master` · `/master/org-unit`  
> **Specs:** `Linm.RMMS.Data/specs/org-unit/`  
> **Hub:** [`master.md`](master.md)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | CRUD + tree + search danh mục cơ cấu tổ chức Cục Đường bộ — shared master |
| Persona | Admin hệ thống · Khu QLĐB |
| App hiện có | — (mới) |
| DoD ngắn | Tree load · SearchInput work · seed DRVN · map Chi cục II.x · View readonly |
| **Seed Design** | [`../seed/org-unit-seed.json`](../seed/org-unit-seed.json) — **REQUIRED** load trước prototype |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| List tree | Kind B + `LinTreeGridLayout` / `LinTreeNav` | A header · B toolbar · C tree+grid · D pagination (nếu flat search) |
| Form | Modal hoặc Slideout (&lt;10 fields) | code · name · parent · kind · legacyAlias |

**Seed → prototype:** render tree từ `org-unit-seed.json` (không hardcode vài node demo).  
**Confirm:** Design prototype `specs/org-unit/ui/prototype/` + reviewUrl — AskQuestion `design_confirm`.

## 3. API

Base: `api/v1/rmms/org-units` (SA chốt DOMAIN-MAP)

| Method | Path | Mô tả |
|--------|------|-------|
| GET | `/rmms/org-units/tree` | Cây đầy đủ |
| GET | `/rmms/org-units?search=` | List/search CI |
| GET | `/rmms/org-units/{id}` | Chi tiết |
| POST / PUT / DELETE | … | CRUD shared (permission approve) |

## 4. Fields (draft)

| Field | Control | Notes |
|-------|---------|-------|
| code | Text code | `VP-II.2` |
| name | Text | |
| parentCode | SearchInput org-unit | tree parent |
| kind | LOOKUP_STATIC | HQ · ADV · REG · VP · SU · ROOM |
| legacyAlias | Text optional | `Chi cục QLĐB II.2` |
| isActive | Switch | |

## 5. Gaps

| ID | Mô tả |
|----|-------|
| GAP-ORG-01 | Import có Chi cục II.1 / II.6 — không trên DRVN SSOT → keep legacy + flag |
| GAP-ORG-02 | Tên legacy Chi cục vs Văn phòng — alias map |

## 6. Consumer pages (SearchInput)

| Page | Field |
|------|-------|
| Asset list/form | `orgUnitCode` / đơn vị quản lý |
| Patrol / Attendance | đơn vị |
| Reports filter | Khu / VP |

## 7. Pipeline

`/agent-qldb-workflow` · `changeScope=new_page` · `packKind=master` · skip demo probe.
