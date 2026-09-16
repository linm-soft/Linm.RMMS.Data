# Demo parity — field-reflect

**Slash:** `/review-demo-design-mobile`  
**DemoRoot:** `specs/field-reflect/ui/prototype/{ios,android}/index.html`  
**taskId:** `task_91131e02` · `2026-09-12T10:50:00.000Z`  
**SSOT:** DA control-hint + real-data · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`)  
**Delta:** **GAP-MOB-FIELD-SESS-01** live-only · toastSessionsFail

## Must

| Check | iOS | Android | Status |
|-------|-----|---------|--------|
| Title **Ghi nhận hư hỏng** | yes | yes | OK |
| Kind pills **Hư** / **Mất** / **Hỏng** · default Hư | yes | yes | OK |
| Section **Loại phản ánh** · **Ảnh hiện trường** · **Checklist theo loại tài sản** | yes | yes | OK |
| Photo filled **Ảnh** + `#i-camera` slot | yes | yes | OK |
| Row **Nhận diện** / **Ổ gà · Mặt đường** | yes | yes | OK |
| Row **Mức** / **Cao** + badge orange | yes | yes | OK |
| Row **Vị trí đã chốt** / **QL.1 · Km 1556+040 · ±4 m** (default loaded SSOT) | yes | yes | OK |
| PAVEMENT chk: Ổ gà · Nứt dọc / ngang · Lún · sóng · Bong tróc mặt · Mờ vạch sơn | yes | yes | OK |
| Primary **Tạo vấn đề** | yes | yes | OK |
| Secondary **Lưu nháp mất sóng** | yes | yes | OK |
| Toast OK **Đã tạo vấn đề SC-2408 · gắn ca tuần** | yes | yes | OK |
| Toast draft **Đã lưu nháp · Lưu trữ** | yes | yes | OK |
| Deny title **Định vị bị tắt** | yes | yes | OK |
| Deny body mobile-p1 copy | yes | yes | OK |
| Primary **Sao chép hướng dẫn** · Secondary **Để sau** | yes | yes | OK |
| `#i-chevron-left` · `#i-camera` cùng `d=` | yes | yes | OK |
| Shell Tab 5 cùng 5 nhãn (Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi) | yes | yes | OK |
| Tab **field** active | yes | yes | OK |
| Frame 390×844 / 412×915 | 390×844 | 412×915 | OK |
| Type: label 13 · value/btn 16 · title 17 (Android title ~20 OK) | yes | yes | OK |
| `tabs: none` · không invent segment | yes | yes | OK |
| Full screen · không sheet chrome | yes | yes | OK |
| Không watermark / device label | yes | yes | OK |
| `data-des-id` DES-MOB-FIELD-REFLECT / FIELD-KIND / GPS-DENY | yes | yes | OK |
| toastSessionsFail copy dual | yes | yes | OK |

## Should

| Check | Notes | Status |
|-------|-------|--------|
| `?deny=1` mở modal · disable Create | dual | OK |
| `?empty=1` banner «Không có ca đang tuần» + empty loc `—` + toast | dual | OK |
| `?fail=1` empty loc `—` + toast «Không tải được ca tuần» | dual · **GAP-MOB-FIELD-SESS-01** | OK |
| Kind change filter checklist | dual | OK |
| Checklist ids `ak32-chk-reflect-ios` / `ak32-chk-reflect-and` | platform id OK | OK |

## DEFER (platform-OK)

| Item | Notes |
|------|-------|
| Back label «Tuần đường» vs icon-only | HIG vs Material chrome · DA dual OK |
| Toast blur vs `#323232` | platform toast surface |
| Modal radius 14 vs 28 | platform |
| Nav title 17 vs ~20 | platform |
| Pill radius 10 vs 20 | platform |

## Must open

**0**

## Verdict

**PASS** · dual parity · design_confirm **approve** (autoApprove=ON)

## Version meta

| Field | Value |
|-------|-------|
| skillId | review-demo-design-mobile |
| generatedAt | 2026-09-12T10:50:00.000Z |
| contentHash | sha256:43744be6c3dc+field-reflect-sess-live-20260912 |

---
<!-- Version meta: skillId=review-demo-design-mobile schemaVersion=1 -->
