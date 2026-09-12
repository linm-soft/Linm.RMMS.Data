# PLAN — Mobile.Bff integrate Map / File / Task

> **Ngày:** 2026-09-12 · `/hey-linm` · user: ưu tiên **Map + File** trước Task  
> **Host:** `Linm.RMMS.Mobile.Bff` `:5202` · prefix `mobile-bff/api/v1`  
> **Cấm** DbContext trên Mobile.Bff · **cấm** app gọi `:5101` / File `:5018` / Map `:5021` / Task `:5020`  
> **Cấm** `AddLinmMapServiceBffControllers` (trùng `gis` — parity Web `GisBffController`)  
> **Cấm** fake STATUS done

## Thứ tự

| Prio | Slug | Slash khi chạy | Blocked by |
|------|------|----------------|------------|
| **P0** | `mobile-bff-map` | `/implement-map-stack` Wave **2** `wave2_host=mobile_bff` → Wave 3 `wave3_client=mobile` | MapService clone + Web BFF pattern |
| **P0** | `mobile-bff-file` | `/init-bff-file` trên Mobile.Bff → `/integrate-file-upload-mobile` | FileService `:5018` live |
| **P1** | `mobile-bff-task` | `/integrate-task-service` `client_scope=mobile` | **sau** Map+File BFF verify · chain `/integrate-message-service` |

Không chạy 3 slug một turn. Execute = AskQuestion gate của skill (không skip).

## Gap hiện tại

| Layer | Web BFF | Mobile.Bff |
|-------|---------|------------|
| Auth | NuGet + `web-bff/auth` | **xong** rewrite `mobile-bff` → `web-bff` |
| RMMS domain | domain BFF + API | catch-all → `ApiBase` `:5101` |
| MapService `:5021` | `AddLinmMapServiceBff` + tile proxy | **thiếu** — `gis/tiles` catch-all đi RMMS, không clip MapService |
| FileService `:5018` | `AddLinmFileServiceBff` + controllers | **thiếu** |
| TaskService `:5020` | `AddLinmTaskServiceBff` + controllers | **thiếu** · P1 |

NuGet pin **parity Web** (không tự bịa version): Map `1.1.0` · File `1.1.0` · Task `1.0.0` — bump `/upgrade-common-lib` nếu Web đã mới hơn lúc chạy.

## Docs / STATUS

| Slug | Context | STATUS | Task |
|------|---------|--------|------|
| `mobile-bff-map` | [features/mobile-bff-map.md](../../context/features/mobile-bff-map.md) | [STATUS](../../../specs/mobile-bff-map/STATUS.md) | [task](../../../specs/mobile-bff-map/task/mobile-bff-map.md) |
| `mobile-bff-file` | [features/mobile-bff-file.md](../../context/features/mobile-bff-file.md) | [STATUS](../../../specs/mobile-bff-file/STATUS.md) | [task](../../../specs/mobile-bff-file/task/mobile-bff-file.md) |
| `mobile-bff-task` | [features/mobile-bff-task.md](../../context/features/mobile-bff-task.md) | [STATUS](../../../specs/mobile-bff-task/STATUS.md) | [task](../../../specs/mobile-bff-task/task/mobile-bff-task.md) |

Peer: `map-service` · `gis-osm-clip` · `gis-map` · `platform-task` · FileService `{ApiCore}/Linm.Platform.FileService`.
