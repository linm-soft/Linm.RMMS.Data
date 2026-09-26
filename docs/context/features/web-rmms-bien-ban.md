# Feature context — web-rmms-bien-ban

> **Slug:** `web-rmms-bien-ban` · **Title:** Đề nghị lập biên bản  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A · master-adjacent · **cấm** demo HTML / tọa độ mẫu SSOT  
> **MFE:** `Linm.Web.RMMS.Mobile` · phone `max-width` 430px · **cấm** nhét vào MFE desktop Asset/Field  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-bien-ban` · **mfeStdUrl:** `http://localhost:9301/web-rmms-bien-ban`  
> **Queue:** `/agent-qldb-workflow` · alias `web-rmms-bien-ban` · **cấm** iOS/Android native  
> **BFF:** `Linm.RMMS.Mobile.Bff` `:5202` · `mobile-bff/api/v1` · **cấm** gọi web-bff · **cấm** Route `mobile-bff` trên web-bff controller

## 1. Mục tiêu

Màn phone **Đề nghị lập biên bản** (TT 72): tuần đường **đề nghị** người có thẩm quyền lập biên bản VPHC; tuần kiểm chọn `lap-bien-ban` hoặc `de-nghi-vphc` theo thẩm quyền. **Không** mở / nhân bản form sổ 07 CSDL. Hai lối Field: **Tuần đường (BDTX)** và **Tuần kiểm (Khu/VP)**.

Nhật ký · kết ca · tồn tại/phiếu · tần suất = peer `web-rmms-mobile-b`…`e` — **không** gộp vào slug này.

## 2. Màn (SSOT zones)

| Id | Route / zone | Việc |
|----|--------------|------|
| BB-00 | phone frame | ≤430 · Android 1-1 icon/tab/layout · **không** tab Cá nhân |
| BB-01 | `/web-rmms-bien-ban` | list đề nghị (petitions `kind=hanh-lang` + dòng/phiếu đã gắn cờ) |
| BB-02 | `/web-rmms-bien-ban/moi?from=tuan-duong` | form tạo đề nghị từ journal `hanh-lang` · set `ViolationFlag` |
| BB-03 | `/web-rmms-bien-ban/moi?from=tuan-kiem` | form từ finding `hanh-lang` · `ViolationAction` |
| BB-04 | `/web-rmms-bien-ban/:id` | detail đề nghị / petition |
| BB-05 | GPS | `navigator.geolocation` · deny → chặn nút cần tọa độ · **cấm** fake |
| BB-06 | Field entry | cửa Field → Tuần đường / Tuần kiểm · deep link peer TD-05 / TK-03 |
| BB-07 | empty / search | empty copy key · filter status/route P1 optional |

**Out:** sổ 07 form · journal CRUD · kết ca · findings full · frequency · me/profile/settings/feedback/cam-view · desktop grid · invent `BienBanController`.

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Implement | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` · TD-05 §9 · TK-03 violation |
| Gap | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` · §5 vi phạm hành lang · TT 72 |
| Peer B | `web-rmms-mobile-b` · journal-lines · `ViolationFlag` |
| Peer C | `web-rmms-mobile-c` · findings · `ViolationAction` |
| Peer D | `web-rmms-mobile-d` · petitions Live · TK-06 ≠ inbox |
| Field hub | `web-rmms-field` · hai cửa BDTX / Khu-VP |
| DOMAIN-MAP | Patrol · **GAP** slug `web-rmms-bien-ban` chưa có row |
| Live API | `patrol/journal-lines` · `patrol/findings` · `patrol/petitions` · `patrol/sessions` · `auth/profile` · `files/*` |

## 4. API (prefix)

| Surface | Path | Live? |
|---------|------|-------|
| Journal flag | `PUT api/v1/patrol/journal-lines/{id}` · `ViolationFlag` | **Live** |
| Finding action | `POST\|GET api/v1/patrol/findings` · `ViolationAction` | **Live** |
| Petition list/create/detail | `GET\|POST\|GET{id} api/v1/patrol/petitions` | **Live** |
| Session context | `GET api/v1/patrol/sessions` | **Live** |
| Profile | `auth/profile` | **Live** |
| Files | `files/*` | **Live** (ảnh hiện trường optional) |
| Mobile BFF | `mobile-bff/api/v1` · host `http://localhost:5202` | HARD client base |
| Web BFF | cite only · **không** base MFE | — |

**Enum UI (keys — label qua useFormOptions):**

| Key group | Values |
|-----------|--------|
| entryPath | `tuan-duong` · `tuan-kiem` |
| tdFlag | `de-nghi-bien-ban` (maps `ViolationFlag=true` when `kind=hanh-lang`) |
| tkAction | `lap-bien-ban` · `de-nghi-vphc` |
| petition.kind | prefer `hanh-lang` (+ peer kinds if reuse list) |
| petition.status | `moi` · (đóng peer D) |

## 5. HARD rules (product)

| Rule | |
|------|--|
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| GPS | `navigator.geolocation` · deny → chặn nút cần tọa độ · **cấm** tọa độ mẫu |
| Sổ 07 | **cấm** mở / clone form CSDL sổ 07 · chỉ đề nghị + dẫn sang sổ |
| Scope peer | nhật ký / kết ca / tồn tại / tần suất = `web-rmms-mobile-b`…`e` |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP Patrol · **cấm ERP.*** |
| MFE | **chỉ** `Linm.Web.RMMS.Mobile` · phone 430 · **cấm** desktop · **cấm** iOS/Android |
| BFF | `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · forms/init-data trên Mobile.Bff · **cấm** Route `mobile-bff` trên web-bff |
| Shell | Bỏ tab Cá nhân: me · me-profile · me-settings · feedback · cam-view |

## 6. Persona

| Ai | Lối |
|----|-----|
| NV tuần đường (BDTX) | BB-02 từ journal `hanh-lang` · đề nghị VPHC |
| Cán bộ tuần kiểm (Khu/VP) | BB-03 từ finding · `lap-bien-ban` hoặc `de-nghi-vphc` |

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| contentHashSource | IMPLEMENT-SCREENS.md TD-05/TK-03 + GAP §5 + this file |
| contentHash | `sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2` |
| writtenAt | `2026-09-26T00:25:00.000Z` |
| taskId | `task_41debbaa` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-26T01:04:01.086Z` |
| mobile | — | — | — |
