# RUN packet — `dev` · Wave A · `csdl-so-02`

| Field | Value |
|-------|-------|
| roleOnly | `dev` |
| slash | `/agent-dev` |
| packKind | `list` |
| changeScope | `edit_page` |
| chainNext | `qa` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` |
| compactIn | `specs/csdl-so-02/handoff/team_lead-compact.md` |
| compactOut | `specs/csdl-so-02/handoff/dev-compact.md` |
| tlPack | `specs/csdl-so-02/task/csdl-so-02-cr-pdf.md` |

## DoR
Load tlPack **trước Write**. `/filter-bar-context` · Write `docs/context/features/csdl-so-02-filter-bar.md` nếu thiếu.

## T-* (chỉ CR)
| id | DoD |
|----|-----|
| T-BE-01 | `LocationText` + Schema pair CLI nếu cột mới |
| T-BE-CRUD-01 | giữ prefix `csdl-records` |
| T-BE-UISCHEMA-01 | field `locationText` catalogKind `patrol-logs` |
| T-UI-LIST-01 | cột vị trí text |
| T-UI-FILTER-01 | V10 🔍 mép phải · **cấm** grep PASS |
| T-UI-FORM-01 | Input vị trí cạnh Km · Slideout 2col footer |
| T-UI-FIELD-01 | weatherEvent Textarea |
| T-UI-ENTRIES-01 | FileRef **nếu** READY · else text-id + toast |
| T-UI-LEAVE-01 | LeaveConfirmModal |
| T-UI-LKP-01 | SearchInput road-route |
| T-UI-RESP-01 | 1280/768/375 |
| T-UI-CFG/ACT/HIST/PROD/UX | reuse · không regress |

## Build HARD
`yarn` Asset + `dotnet build` WebService. Ghi STATUS `mfeStdUrl` **alias** `/csdl-so-02` (cấm chỉ hub).

Cột DB → `/database-migration` · **cấm** Write tay Schema.

## Cấm (packet này)
QA e2e · `window.alert` · `configHint` · copy demo chrome · Wave B report code · invent API.
