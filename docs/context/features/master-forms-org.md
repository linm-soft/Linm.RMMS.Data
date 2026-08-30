# Master MFE — form SearchInput / org-tree

**Skill:** `/rmms-form-input-org-tree` · **confirm:** `searchinput_parity` 2026-08-31  
**MFE:** `Linm.Web.RMMS.Master`

| Route | Form | Org cascade 4 cấp | SearchInput mã+tên |
|-------|------|-------------------|--------------------|
| `/mas/phan-khu` | [`org-route-scope-form-org.md`](org-route-scope-form-org.md) | Có · persist parent + đoạn | Khu → VP → ĐV → Tuyến |
| `/mas/co-cau-tc` | [`org-unit-form-org.md`](org-unit-form-org.md) | Không (là cây) | Đơn vị chủ quản |
| `/mas/tuyen-duong` | [`road-route-form-org.md`](road-route-form-org.md) | Không | Tuyến chính |
| `/mas/doi-tac` | [`partner-unit-form-org.md`](partner-unit-form-org.md) | Khu → VP → Tuyến · **ẩn Đơn vị** | Schema `PartnerUnitOrgTree` |
| `/mas/loai-ts` | [`asset-type-form-org.md`](asset-type-form-org.md) | Không | — |

Field nguồn BC (`/su-co` · chấm công · tuần kiểm): đã `RmmsOrgFormFields`.
