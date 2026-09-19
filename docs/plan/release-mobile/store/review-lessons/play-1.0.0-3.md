# Review lessons - Play 1.0.0-3

Status: in_review (phat hanh day du, Viet Nam)  
Date: 2026-09-18  
Binary: `store/out/android/1.0.0-3/rmms-w3-release-1.0.0-3.aab` - **khong sua**

## Errors

| id | Surface | Error | Fix | Do not repeat |
|----|---------|-------|-----|---------------|
| P10 | Play upload | Ma 2 da dung | AAB 1.0.0-3 (versionCode 3) | Khong keo file -2 |
| P11 | Closed/Open testing | Ban phat hanh trong (3 loi do) | Quay buoc 1, Them tu thu vien ma 3 | Khong Next khi chua gan AAB |
| P12 | Open testing | Khong tu keo goi tu kin | Them tu thu vien hoac Promote | Khong tao release trong |
| P13 | Production | Bam Tao ban moi khi 3 da la Gan day nhat | Cho In review xong | Khong thay binary dang duyet |
| P14 | App toi uu | R8 / DEX / AGP 9 (canh bao vang) | Bo qua tren binary 3; xu ly o 1.0.0-4 | Khong minify chi de im canh bao khi da In review |
| P15 | Xuat ban | Tim che do xuat ban | Tong quan ve viec xuat ban - dang tat (duyet xong la len) | Khong bat managed neu muon len ngay khi duyet |

## Keep

- Listing / Data safety / App access: Tab 2 submit-info-play.html
- Play notes: rmms-002 · capture local: rmms-admin
- Managed publishing: tat (session nay)
