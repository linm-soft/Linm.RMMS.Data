# User doc tracking

> **SSOT** `/run-user-doc` · root `{ProductRoot}/docs/hdsd` · first scan + headed `incident` 2026-08-29  
> `{PagesUrl}` = `http://localhost:9100`  
> `Verified=yes` chỉ sau `ud_mode=mark_verified`.

| Slug | MFE | Route | Doc folder | Usecase | Guide | Preview | Capture | Fill | Bugs | Verified |
|------|-----|-------|------------|---------|-------|---------|---------|------|------|----------|
| `dang-nhap` | — | `/` | `dang-nhap` | — | — | [preview](dang-nhap/preview.html) · [login](dang-nhap/preview.html#form-login) | ok | — | — | no |
| `incident` | `@linm/rmms-field` | `/su-co` | `su-co` | [usecase](su-co/usecase.md) `captured` | [guide](su-co/guide.md) `written` | [preview](su-co/preview.html) · [list](su-co/preview.html#form-list) · [create](su-co/preview.html#form-create) · [edit](su-co/preview.html#form-edit) | ok | fail | [0 open](su-co/bugs.md) | no |
| `patrol` | `@linm/rmms-field` | `/td-tk` | `td-tk` | — | — | — | — | — | [bugs](td-tk/bugs.md) | no |
| `maintenance` | `@linm/rmms-field` | `/sc-bt` | `sc-bt` | — | — | — | — | — | [bugs](sc-bt/bugs.md) | no |
| `ops` | `@linm/rmms-field` | `/chi-dao` | `chi-dao` | — | — | — | — | — | [bugs](chi-dao/bugs.md) | no |
| `asset` | `@linm/rmms-asset` | `/so-ts` | `so-ts` | — | — | — | — | — | [bugs](so-ts/bugs.md) | no |
| `pavement-section` | `@linm/rmms-asset` | `/so-ts/pl-mat-duong` | `so-ts/pl-mat-duong` | — | — | — | — | — | [bugs](so-ts/pl-mat-duong/bugs.md) | no |
| `csdl-so-sach` | `@linm/rmms-asset` | `/so-ts/csdl-so-sach` | `so-ts/csdl-so-sach` | — | — | — | — | — | [bugs](so-ts/csdl-so-sach/bugs.md) | no |
| `asset-kcht-dashboard` | `@linm/rmms-asset` | `/so-ts/hang-muc` | `so-ts/hang-muc` | — | — | — | — | — | [bugs](so-ts/hang-muc/bugs.md) | no |
| `ai-vision` | `@linm/rmms-ai-vision` | `/ai-kd` | `ai-kd` | — | — | [preview](ai-kd/preview.html) · [login](dang-nhap/preview.html) · [list](ai-kd/preview.html#form-list-ai-kd) · [create](ai-kd/preview.html#form-create-ai-kd) | ok | — | [0 open](ai-kd/bugs.md) | no |
| `ai-asset-detect` | `@linm/rmms-ai-vision` | `/ai-kd/phat-hien-ts` | `ai-kd` | — | — | [list](ai-kd/preview.html#form-list-phat-hien-ts) · [create](ai-kd/preview.html#form-create-phat-hien-ts) | ok | — | [0 open](ai-kd/bugs.md) | no |
| `estimate` | `@linm/rmms-ai-vision` | `/ai-kd/uoc-luong-sc` | `ai-kd` | — | — | [list](ai-kd/preview.html#form-list-uoc-luong-sc) · [create](ai-kd/preview.html#form-create-uoc-luong-sc) | ok | — | [0 open](ai-kd/bugs.md) | no |
| `predict` | `@linm/rmms-ai-vision` | `/ai-kd/du-bao-bt` | `ai-kd` | — | — | [list](ai-kd/preview.html#form-list-du-bao-bt) · [create](ai-kd/preview.html#form-create-du-bao-bt) | ok | — | [0 open](ai-kd/bugs.md) | no |
| `its-traffic-detect` | `@linm/rmms-ai-vision` | `/ai-its/bb-ct` | `ai-kd` | — | — | [list](ai-kd/preview.html#form-list-bb-ct) · [create](ai-kd/preview.html#form-create-bb-ct) | ok | — | [0 open](ai-kd/bugs.md) | no |
| `its-anpr-overload` | `@linm/rmms-ai-vision` | `/its-anpr-overload` | `ai-kd` | — | — | [list](ai-kd/preview.html#form-list-anpr) · [create](ai-kd/preview.html#form-create-anpr) · [wf](ai-kd/preview.html#form-wf) | ok | — | [0 open](ai-kd/bugs.md) | no |

## Scan meta — `incident`

| | |
|--|--|
| HĐ | PL01 mục 06 · P1-900 |
| MFE | `Linm.Web.RMMS.Field` · `@linm/rmms-field` `1.2.0-dev.91` (`_manifest.json` :9100) |
| `mfeStdRoute` | `/su-co` |
| Manifest | `GET http://localhost:9100/_manifest.json` — entry `@linm/rmms-field` · routes gồm `su-co` |
| Captures | login: `dang-nhap/captures/01-login.png` · `su-co/captures/02-su-co.png` · `03-su-co-form-create.png` |
| HDSD | [huong-dan-su-dung.md](su-co/huong-dan-su-dung.md) · [preview.html](su-co/preview.html) |
| Thiếu ảnh | edit / view / copy · giao việc · đóng · toolbar theo status (`HDSD-P2-02`) |
| Chrome 3d–3f | [bugs.md](su-co/bugs.md) — 0 open (05–09 confirmed `1.2.0-dev.91`) · **cấm** `verified=yes` ở `/fix-bug-review` |

### Nguồn đã đọc (first scan)

| # | File |
|---|------|
| 1 | `docs/context/FEATURE-TRACKING.md` |
| 2 | `docs/context/features/incident.md` |
| 3 | `specs/incident/STATUS.md` |
| 4 | `specs/incident/po/requirement.md` |
| 5 | `specs/incident/ui/design.md` |
| 6 | `specs/incident/implement/incident.md` |
| 7 | `specs/incident/task/incident.md` · `task/pilot-su-co.md` |
