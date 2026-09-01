using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace GovVn
{
    public static class Rebuild
    {
        public static int Run(string rawDir, string specPath, string outA, string outB)
        {
            Encoding utf8 = new UTF8Encoding(true);
            List<Spec> specs = LoadSpecs(specPath);
            Dictionary<string, bool> routes = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);
            string tmp = Path.Combine(Path.GetTempPath(), "gov-vn-build");
            if (Directory.Exists(tmp)) Directory.Delete(tmp, true);
            Directory.CreateDirectory(tmp);
            string rPath = Path.Combine(tmp, "road_routes.csv");
            string aPath = Path.Combine(tmp, "road_assets.csv");
            string pPath = Path.Combine(tmp, "pavement_sections.csv");
            StreamWriter rw = new StreamWriter(rPath, false, utf8);
            StreamWriter aw = new StreamWriter(aPath, false, utf8);
            StreamWriter pw = new StreamWriter(pPath, false, utf8);
            rw.WriteLine("code,name,route_kind,parent_code,notes,sort_order,legacy_aliases");
            int nRoute = 0, nAsset = 0, nPav = 0;
            AddRoute(rw, routes, ref nRoute, "Khác", "KHAC", "fallback khi dump thiếu tuyến", "", "");
            bool rmdDone = false;
            Dictionary<string, bool> claimed = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);
            Dictionary<string, string[]> signTypes = new Dictionary<string, string[]>(StringComparer.OrdinalIgnoreCase);
            List<string> coverage = new List<string>();
            string[] files = Directory.GetFiles(rawDir, "*.csv");
            Array.Sort(files, StringComparer.OrdinalIgnoreCase);
            // materials_id · distance_next_post · name_km_post → DumpSpecsFromRow (GAP-KM-SPEC-01)
            aw.WriteLine("code,name,type,route,route_named,route_segment,km_from,km_to,status,lat,lng,quantity,unit_code,note,source_ref,materials_id,distance_next_post,name_km_post");
            pw.WriteLine("code,road_name,route_named,province_name,km_from,km_to,length_km,base_width_m,surface_width_m,structure_type,surface_thickness_cm,road_class,status,construction_unit,manage_unit,owner_unit,notes");

            for (int si = 0; si < specs.Count; si++)
            {
                Spec spec = specs[si];
                if (spec.Catalog == "pavement" && rmdDone) continue;
                for (int fi = 0; fi < files.Length; fi++)
                {
                    string path = files[fi];
                    string name = Path.GetFileName(path);
                    string nameLow = name.ToLowerInvariant();
                    if (nameLow.IndexOf(spec.Match) < 0) continue;
                    if (claimed.ContainsKey(path)) continue;
                    claimed[path] = true;
                    int n = 0;
                    Dictionary<string, int> fileTypes = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase);
                    using (StreamReader sr = new StreamReader(path, utf8))
                    {
                        string headerLine = sr.ReadLine();
                        if (headerLine == null) continue;
                        string[] header = SplitCsv(headerLine);
                        Dictionary<string, int> idx = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase);
                        for (int i = 0; i < header.Length; i++)
                        {
                            string h = header[i].Trim().ToLowerInvariant();
                            if (!idx.ContainsKey(h)) idx[h] = i;
                        }
                        int iName = FindExact(idx, "sign_code_number", "name_km_post", "road_sign_content", "name_intersection", "name_terminal", "name_ferry_terminal", "name_building", "name_station", "name");
                        int iOfficialName = FindOfficialName(idx);
                        int iSignCode = FindExact(idx, "sign_code_number");
                        int iSignContent = FindExact(idx, "road_sign_content");
                        int iKmPostName = FindExact(idx, "name_km_post");
                        int iNamedRoute = FindExact(idx, "long_route_name");
                        int iSegment = FindExact(idx, "name_of_route_asset");
                        int iId = FindExact(idx, "vidagis_id");
                        int iAlias = FindExact(idx, "long_route_name", "name_of_route_asset");
                        int iKmA = Find(idx, "km_from-kmlytrinh", "vitridiemdau-kmlytrinh", "lytrinh-kmlytrinh", "km_from", "km");
                        int iKmB = Find(idx, "km_to-kmlytrinh", "vitridiemcuoi-kmlytrinh", "km_to");
                        int iRoad = Find(idx, "road_name", "long_route_name", "route");
                        int iProv = Find(idx, "province_from_id", "tinhthanhpho", "province");
                        int iLen = Find(idx, "chieudaithucte", "actual_length");
                        int iW = Find(idx, "total_width_carriageway", "nen", "mat");
                        int iStruct = Find(idx, "road_structure_type_id", "ketcau");
                        int iClass = Find(idx, "road_class_id", "capduong");
                        int iMgmt = Find(idx, "donvinhaplieu");
                        int iNote = Find(idx, "ghichu", "note");
                        int iLat = Find(idx, "from_coordinatey", "lat", "vido");
                        int iLng = Find(idx, "from_coordinatex", "lng", "kinhdo");
                        int iQty = FindExact(idx,
                            "total_number_within_section",
                            "total_number_post",
                            "number_work_within_section",
                            "soluong",
                            "quantity",
                            "number");
                        int iQtyH = FindExact(idx, "h_total_number_within_section");
                        int iUnit = Find(idx, "dvt", "unit");
                        int iLoc = FindExact(idx, "installed_location_id", "location_id", "vitri");
                        int iTieuLen = FindExact(idx, "length");
                        int iHLen = FindExact(idx, "h_length");
                        int iWork = Find(idx, "name_work", "loaicongtrinh");
                        int iTypeWork = Find(idx, "type_work_id");
                        int iMaterials = FindExact(idx, "materials_id");
                        int iDistNext = FindExact(idx, "distance_next_post");
                        string line;
                        while ((line = sr.ReadLine()) != null)
                        {
                            string[] f = SplitCsv(line);
                            if (f.Length == 0) continue;
                            if (IsDumpMetaRow(f)) continue;
                            if (spec.Catalog == "route")
                            {
                                string nm = Cell(f, iName);
                                if (nm.Length == 0) continue;
                                string parentNhanh = Cell(f, iRoad);
                                if (AddRoute(rw, routes, ref nRoute, nm, spec.RouteKind, "km " + ParseKm(Cell(f, iKmA)) + "-" + ParseKm(Cell(f, iKmB)) + "; " + name, Cell(f, iAlias), parentNhanh))
                                    n++;
                            }
                            else if (spec.Catalog == "pavement")
                            {
                                string road = Cell(f, iRoad);
                                if (road.Length == 0) road = Cell(f, iName);
                                if (road.Length == 0) continue;
                                n++;
                                string id = Cell(f, iId);
                                string code = id.Length > 0 ? Trunc("PV-" + id, 64) : Trunc("PV-" + spec.Match + "-" + n.ToString(), 64);
                                string namedPav = Cell(f, iNamedRoute);
                                WritePav(pw, code, road, namedPav, Cell(f, iProv), Cell(f, iKmA), Cell(f, iKmB), Cell(f, iLen), Cell(f, iW), Cell(f, iStruct), Cell(f, iClass), Cell(f, iMgmt), Cell(f, iNote));
                                nPav++;
                                AddRoute(rw, routes, ref nRoute, road, InferKind(road), "from " + name, "", "");
                                if (namedPav.Length > 0)
                                    AddRoute(rw, routes, ref nRoute, namedPav, "KHAC", "named; " + name, road, road);
                            }
                            else
                            {
                                string id = Cell(f, iId);
                                if (!IsOfficialAssetId(id)) continue;
                                string type = spec.Type;
                                string kmA = Cell(f, iKmA);
                                string kmB = Cell(f, iKmB);
                                string named = Cell(f, iNamedRoute);
                                string segment = Cell(f, iSegment);
                                string road = Cell(f, iRoad);
                                string nm = ResolveTypeAssetName(
                                    type, f, iSignCode, iSignContent, iKmPostName, iOfficialName, iName, iRoad, kmA, id,
                                    iLoc, iTieuLen, iHLen, iQty, iQtyH);
                                if (IsJunk(nm)) continue;
                                string work = Cell(f, iWork);
                                string typeWork = Cell(f, iTypeWork);
                                if (IsParkingRow(spec.Type, typeWork, work, nm))
                                {
                                    type = "PARKING";
                                    if (IsWeakAssetName(nm) && (typeWork.Length > 0 || work.Length > 0))
                                        nm = typeWork.Length > 0 && IsParkingText(typeWork) ? (work.Length > 0 ? work : typeWork) : work;
                                }
                                if (nm.Length == 0) continue;
                                if (type == "KM_POST" && kmA.Length == 0)
                                    kmA = ParseStationKm(Cell(f, iKmPostName));
                                n++;
                                if (!fileTypes.ContainsKey(type)) fileTypes[type] = 0;
                                fileTypes[type] = fileTypes[type] + 1;
                                string pfx = Prefix(type);
                                string code = Trunc(pfx + "-" + id, 64);
                                if (named.Length > 0)
                                    AddRoute(rw, routes, ref nRoute, named, "KHAC", "named; " + name, road, road);
                                if (segment.Length > 0)
                                    AddRoute(rw, routes, ref nRoute, segment, "KHAC", "segment; " + name, named.Length > 0 ? named : road, named.Length > 0 ? named : road);
                                if (type == "TRAFFIC_SIGN")
                                {
                                    string sc = Cell(f, iSignCode);
                                    if (sc.Length > 0 && !IsJunk(sc) && !signTypes.ContainsKey(sc))
                                    {
                                        string content = Cell(f, iSignContent);
                                        int iShape = FindExact(idx, "shape_sign_id");
                                        signTypes[sc] = new string[] { content.Length > 0 ? content : sc, Cell(f, iShape) };
                                    }
                                }
                                string qty = Cell(f, iQty);
                                if (qty.Length == 0) qty = Cell(f, iQtyH);
                                string materials = type == "KM_POST" ? Cell(f, iMaterials) : "";
                                string distNext = type == "KM_POST" ? Cell(f, iDistNext) : "";
                                string nameKm = type == "KM_POST" ? Cell(f, iKmPostName) : "";
                                if (nameKm.Length == 0 && type == "KM_POST") nameKm = nm;
                                WriteAsset(aw, code, nm, type, road, named, segment, kmA, kmB, Cell(f, iLat), Cell(f, iLng), qty, Cell(f, iUnit), Cell(f, iNote), Trunc(spec.Match + ":" + id, 64), materials, distNext, nameKm);
                                nAsset++;
                                if (nAsset % 50000 == 0)
                                    Console.WriteLine("  assets " + nAsset.ToString());
                            }
                        }
                    }
                    Console.WriteLine("OK " + spec.Catalog + " " + spec.Match + " " + name + " rows=" + n.ToString());
                    if (spec.Catalog == "route")
                        coverage.Add("| ROUTE:" + spec.Match + " | " + n.ToString() + " |");
                    else if (spec.Catalog == "pavement")
                        coverage.Add("| PAVEMENT:" + spec.Match + " | " + n.ToString() + " |");
                    else if (fileTypes.Count == 0)
                        coverage.Add("| " + spec.Type + ":" + name + " | " + n.ToString() + " |");
                    else
                    {
                        foreach (KeyValuePair<string, int> kv in fileTypes)
                        {
                            string note = "";
                            if (string.Equals(kv.Key, "PARKING", StringComparison.OrdinalIgnoreCase))
                                note = " (bãi đỗ — tách khỏi REST_AREA, t37)";
                            else if (string.Equals(kv.Key, "REST_AREA", StringComparison.OrdinalIgnoreCase) && fileTypes.ContainsKey("PARKING"))
                                note = " (trạm dừng nghỉ)";
                            coverage.Add("| " + kv.Key + ":" + name + " | " + kv.Value.ToString() + note + " |");
                        }
                    }
                    if (spec.Catalog == "pavement")
                    {
                        rmdDone = true;
                        break;
                    }
                }
            }

            for (int fi = 0; fi < files.Length; fi++)
            {
                if (!claimed.ContainsKey(files[fi]))
                    Console.WriteLine("UNMAPPED " + Path.GetFileName(files[fi]));
            }

            rw.Flush(); rw.Close();
            aw.Flush(); aw.Close();
            pw.Flush(); pw.Close();
            nRoute = CountDataLines(rPath);

            string officialSigns = Path.GetFullPath(Path.Combine(rawDir, "..", "..", "..", "so-hieu-bien-bao", "traffic_sign_types.csv"));
            CopySet(rPath, aPath, pPath, outA, nRoute, nAsset, nPav, coverage, utf8, signTypes, officialSigns);
            CopySet(rPath, aPath, pPath, outB, nRoute, nAsset, nPav, coverage, utf8, signTypes, officialSigns);
            Console.WriteLine("DONE gov-vn routes=" + nRoute.ToString() + " assets=" + nAsset.ToString() + " pavement=" + nPav.ToString());
            return 0;
        }

        private static void CopySet(string r, string a, string p, string dir, int nR, int nA, int nP, List<string> coverage, Encoding utf8, Dictionary<string, string[]> signTypes, string officialSigns)
        {
            Directory.CreateDirectory(dir);
            File.Copy(r, Path.Combine(dir, "road_routes.csv"), true);
            File.Copy(a, Path.Combine(dir, "road_assets.csv"), true);
            File.Copy(p, Path.Combine(dir, "pavement_sections.csv"), true);
            WriteSignTypes(Path.Combine(dir, "traffic_sign_types.csv"), signTypes, utf8, officialSigns);
            string[] assetGit = SplitCsvForGit(Path.Combine(dir, "road_assets.csv"), utf8);
            string man =
                "{\n" +
                "  \"setName\": \"gov-vn\",\n" +
                "  \"importDate\": \"2026-08-24\",\n" +
                "  \"importVersion\": \"3\",\n" +
                "  \"description\": \"Nationwide GOV moc_dbvn. Unique road_routes. All pavement_sections. All road_assets by table-type-map. Sign types from Số hiệu biển báo.xlsx.\",\n" +
                "  \"sourceDoc\": \"Linm.RMMS.Data/data-import/Sau-sat-nhap/gov\",\n" +
                "  \"catalogs\": [\"road_routes\", \"road_assets\", \"pavement_sections\", \"traffic_sign_types\"],\n" +
                "  \"files\": [\"road_routes.csv\", \"pavement_sections.csv\", \"traffic_sign_types.csv\"" + GitFilesJson(assetGit) + "]\n" +
                "}\n";
            File.WriteAllText(Path.Combine(dir, "set.manifest.json"), man, utf8);
            StringBuilder cov = new StringBuilder();
            cov.AppendLine("# Coverage gov-vn - current moc_dbvn xlsx");
            cov.AppendLine();
            cov.AppendLine("| Catalog | Rows |");
            cov.AppendLine("| --- | --- |");
            cov.AppendLine("| road_routes | " + nR.ToString() + " |");
            cov.AppendLine("| road_assets | " + nA.ToString() + " |");
            cov.AppendLine("| pavement_sections | " + nP.ToString() + " |");
            cov.AppendLine();
            cov.AppendLine("## Per source");
            cov.AppendLine();
            cov.AppendLine("| Source | Count |");
            cov.AppendLine("| --- | --- |");
            for (int i = 0; i < coverage.Count; i++)
                cov.AppendLine(coverage[i]);
            File.WriteAllText(Path.Combine(dir, "COVERAGE-KCHT-40.md"), cov.ToString(), utf8);
        }

        private static void WriteSignTypes(string path, Dictionary<string, string[]> signTypes, Encoding utf8, string officialPath)
        {
            Dictionary<string, string> official = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            if (File.Exists(officialPath))
            {
                using (StreamReader sr = new StreamReader(officialPath, utf8))
                {
                    string header = sr.ReadLine();
                    string line;
                    while ((line = sr.ReadLine()) != null)
                    {
                        if (line.Trim().Length == 0) continue;
                        official[SplitCsv(line)[0].Trim()] = line;
                    }
                }
            }

            StreamWriter w = new StreamWriter(path, false, utf8);
            w.WriteLine("code,name,name_en,group_code,shape,width,height,sort_order");
            List<string> keys = new List<string>(official.Keys);
            keys.Sort(StringComparer.OrdinalIgnoreCase);
            for (int i = 0; i < keys.Count; i++)
                w.WriteLine(official[keys[i]]);

            int extra = 10000;
            List<string> dumpKeys = new List<string>(signTypes.Keys);
            dumpKeys.Sort(StringComparer.OrdinalIgnoreCase);
            for (int i = 0; i < dumpKeys.Count; i++)
            {
                string code = dumpKeys[i];
                if (official.ContainsKey(code)) continue;
                if (!LooksLikeSignCode(code)) continue;
                extra++;
                string[] meta = signTypes[code];
                string name = meta != null && meta.Length > 0 && meta[0].Length > 0 ? meta[0] : code;
                string shape = meta != null && meta.Length > 1 ? meta[1] : "";
                w.WriteLine(string.Join(",", new string[] { Esc(code), Esc(name), "", InferSignGroup(code), Esc(shape), "", "", extra.ToString() }));
            }
            w.Flush();
            w.Close();
        }

        private static bool LooksLikeSignCode(string code)
        {
            if (string.IsNullOrEmpty(code) || code.Length < 2 || code.Length > 32) return false;
            if (code.StartsWith("QL.", StringComparison.OrdinalIgnoreCase)) return false;
            if (code.StartsWith("CT.", StringComparison.OrdinalIgnoreCase)) return false;
            if (code.StartsWith("Km", StringComparison.OrdinalIgnoreCase)) return false;
            return code.IndexOf('.') >= 0 || char.IsLetter(code[0]);
        }

        /// <summary>GitHub 100 MiB hard limit — split into N parts (each with header) under 95 MiB.</summary>
        private static string[] SplitCsvForGit(string fullPath, Encoding utf8)
        {
            const long maxBytes = 95L * 1024 * 1024;
            string dir = Path.GetDirectoryName(fullPath);
            string name = Path.GetFileNameWithoutExtension(fullPath);
            if (dir != null && Directory.Exists(dir))
            {
                string[] old = Directory.GetFiles(dir, name + ".part*.csv");
                for (int i = 0; i < old.Length; i++)
                    File.Delete(old[i]);
            }
            FileInfo fi = new FileInfo(fullPath);
            if (!fi.Exists)
                return new string[0];
            if (fi.Length <= maxBytes)
                return new string[] { fullPath };

            int nParts = (int)Math.Ceiling((double)fi.Length / (double)maxBytes);
            if (nParts < 2) nParts = 2;

            int dataLines = 0;
            string header;
            using (StreamReader srCount = new StreamReader(fullPath, utf8))
            {
                header = srCount.ReadLine();
                if (header == null)
                    return new string[] { fullPath };
                while (srCount.ReadLine() != null)
                    dataLines++;
            }
            int per = dataLines / nParts;
            if (per < 1) per = 1;

            List<string> parts = new List<string>();
            using (StreamReader sr = new StreamReader(fullPath, utf8))
            {
                sr.ReadLine();
                int part = 1;
                int written = 0;
                StreamWriter w = OpenGitPart(dir, name, part, header, utf8, parts);
                string line;
                while ((line = sr.ReadLine()) != null)
                {
                    w.WriteLine(line);
                    written++;
                    if (written >= per && part < nParts)
                    {
                        w.Flush();
                        w.Close();
                        part++;
                        written = 0;
                        w = OpenGitPart(dir, name, part, header, utf8, parts);
                    }
                }
                w.Flush();
                w.Close();
            }
            Console.WriteLine("SPLIT " + name + " bytes=" + fi.Length.ToString() + " parts=" + parts.Count.ToString());
            return parts.ToArray();
        }

        private static StreamWriter OpenGitPart(string dir, string name, int part, string header, Encoding utf8, List<string> parts)
        {
            string path = Path.Combine(dir, name + ".part" + part.ToString() + ".csv");
            parts.Add(path);
            StreamWriter w = new StreamWriter(path, false, utf8);
            w.WriteLine(header);
            return w;
        }

        private static string GitFilesJson(string[] files)
        {
            if (files == null || files.Length == 0)
                return ", \"road_assets.csv\"";
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < files.Length; i++)
                sb.Append(", \"").Append(Path.GetFileName(files[i])).Append("\"");
            return sb.ToString();
        }

        private static string InferSignGroup(string code)
        {
            if (string.IsNullOrEmpty(code)) return "KHAC";
            char c = char.ToUpperInvariant(code[0]);
            if (c == 'P' || c == 'W' || c == 'R' || c == 'I' || c == 'S') return c.ToString();
            return "KHAC";
        }

        private static int CountDataLines(string path)
        {
            int n = -1;
            using (StreamReader sr = new StreamReader(path, new UTF8Encoding(true)))
            {
                while (sr.ReadLine() != null) n++;
            }
            return n < 0 ? 0 : n;
        }

        private static bool AddRoute(StreamWriter w, Dictionary<string, bool> routes, ref int nRoute, string name, string kind, string notes, string alias, string parent)
        {
            string code = NormCode(name);
            if (code.Length == 0) return false;
            if (routes.ContainsKey(code)) return false;
            routes[code] = true;
            nRoute++;
            if (kind == null || kind.Length == 0) kind = InferKind(name);
            string parentCode = NormCode(parent);
            if (string.Equals(parentCode, code, StringComparison.OrdinalIgnoreCase)) parentCode = "";
            w.WriteLine(string.Join(",", new string[] {
                Esc(code), Esc(name), kind, Esc(parentCode), Esc(notes), nRoute.ToString(), Esc(alias)
            }));
            return true;
        }

        private static void WriteAsset(StreamWriter w, string code, string name, string type, string route, string named, string segment, string kmA, string kmB, string lat, string lng, string qty, string unit, string note, string src, string materialsId, string distanceNextPost, string nameKmPost)
        {
            w.WriteLine(string.Join(",", new string[] {
                Esc(code), Esc(name), type, Esc(NormCode(route)), Esc(NamedCatalogCode(named, route)), Esc(segment),
                Esc(ParseKm(kmA)), Esc(ParseKm(kmB)),
                "tot", Esc(lat), Esc(lng), Esc(qty), Esc(unit),
                Esc(note), Esc(src),
                Esc(materialsId), Esc(distanceNextPost), Esc(nameKmPost)
            }));
        }

        private static void WritePav(StreamWriter w, string code, string road, string named, string prov, string kmA, string kmB, string len, string width, string structType, string rclass, string mgmt, string note)
        {
            string ww = ParseKm(width);
            w.WriteLine(string.Join(",", new string[] {
                Esc(code), Esc(road), Esc(named), Esc(prov), Esc(ParseKm(kmA)), Esc(ParseKm(kmB)), Esc(ParseKm(len)), Esc(ww), Esc(ww),
                Esc(structType), "", Esc(rclass), "tot", "", Esc(mgmt), "", Esc(note)
            }));
        }

        private static List<Spec> LoadSpecs(string path)
        {
            List<Spec> list = new List<Spec>();
            foreach (string line in File.ReadAllLines(path, new UTF8Encoding(true)))
            {
                if (line.Length == 0 || line[0] == '#') continue;
                string[] p = line.Split('\t');
                if (p.Length < 2) continue;
                Spec s = new Spec();
                s.Match = p[0].Trim().ToLowerInvariant();
                s.Catalog = p[1].Trim().ToLowerInvariant();
                s.Type = p.Length > 2 ? p[2].Trim() : "";
                s.RouteKind = p.Length > 3 ? p[3].Trim() : "";
                list.Add(s);
            }
            return list;
        }

        private static int FindExact(Dictionary<string, int> idx, params string[] names)
        {
            for (int i = 0; i < names.Length; i++)
            {
                string k = names[i].ToLowerInvariant();
                if (idx.ContainsKey(k)) return idx[k];
            }
            return -1;
        }

        private static int FindOfficialName(Dictionary<string, int> idx)
        {
            int hit = FindExact(idx,
                "sign_code_number", "name_km_post",
                "name_pontoon_bridge", "name_work", "station_name", "name_building",
                "name_underpass", "tencongchui", "parking_location_name",
                "road_sign_content", "name_intersection", "name_terminal",
                "name_ferry_terminal", "name_station");
            if (hit >= 0) return hit;
            foreach (KeyValuePair<string, int> kv in idx)
            {
                string k = kv.Key;
                if (k == "name_of_route_asset" || k == "road_name" || k == "long_route_name") continue;
                if (k.StartsWith("name_") || (k.EndsWith("_name") && k != "road_name"))
                    return kv.Value;
            }
            return -1;
        }

        private static int Find(Dictionary<string, int> idx, params string[] names)
        {
            int exact = FindExact(idx, names);
            if (exact >= 0) return exact;
            for (int i = 0; i < names.Length; i++)
            {
                string k = names[i].ToLowerInvariant();
                if (k.Length < 4) continue;
                foreach (KeyValuePair<string, int> kv in idx)
                {
                    if (kv.Key.IndexOf(k) >= 0) return kv.Value;
                }
            }
            return -1;
        }

        private static string Cell(string[] f, int i)
        {
            if (i < 0 || f == null || i >= f.Length) return "";
            return f[i].Trim().Trim('"');
        }

        private static bool IsJunk(string first)
        {
            if (first == null) return true;
            string a = first.Trim().Trim('"');
            if (a.Length == 0) return true;
            if (string.Equals(a, "parentid", StringComparison.OrdinalIgnoreCase)) return true;
            if (a.StartsWith("(1)")) return true;
            if (a.IndexOf(':') >= 0 && a.IndexOf('_') < 0) return true;
            string low = a.ToLowerInvariant();
            if (low.StartsWith("tên") || low.StartsWith("ten tai") || low.StartsWith("ten ")) return true;
            if (low.StartsWith("đơn") || low.StartsWith("don vị") || low.StartsWith("don vi")) return true;
            if (low.StartsWith("thời") || low.StartsWith("thoi gian")) return true;
            if (a.IndexOf("Tên tài sản:", StringComparison.OrdinalIgnoreCase) >= 0) return true;
            if (a.IndexOf("cung cấp dữ liệu", StringComparison.OrdinalIgnoreCase) >= 0) return true;
            if (a.IndexOf("cung cap du lieu", StringComparison.OrdinalIgnoreCase) >= 0) return true;
            return false;
        }

        private static bool IsDumpMetaRow(string[] f)
        {
            if (f == null || f.Length == 0) return true;
            return IsJunk(f[0]);
        }

        private static bool IsOfficialAssetId(string id)
        {
            if (string.IsNullOrEmpty(id)) return false;
            if (IsJunk(id)) return false;
            if (string.Equals(id, "parentid", StringComparison.OrdinalIgnoreCase)) return false;
            if (id.StartsWith("rmd_", StringComparison.OrdinalIgnoreCase)) return false;
            if (id.StartsWith("parent", StringComparison.OrdinalIgnoreCase)) return false;
            return true;
        }

        private static string ResolveAssetName(string[] f, int iOfficial, int iFallback, int iRoad)
        {
            string official = Cell(f, iOfficial);
            if (official.Length > 0 && !IsJunk(official) && !IsWeakAssetName(official))
                return official;
            string fallback = Cell(f, iFallback);
            if (fallback.Length > 0 && !IsJunk(fallback) && !IsWeakAssetName(fallback))
                return fallback;
            if (official.Length > 0 && !IsJunk(official)) return official;
            if (fallback.Length > 0 && !IsJunk(fallback)) return fallback;
            string road = Cell(f, iRoad);
            if (road.Length > 0 && !IsJunk(road)) return road;
            return "";
        }

        private static string[] SplitCsv(string line)
        {
            List<string> list = new List<string>();
            StringBuilder sb = new StringBuilder();
            bool q = false;
            for (int i = 0; i < line.Length; i++)
            {
                char c = line[i];
                if (c == '"')
                {
                    if (q && i + 1 < line.Length && line[i + 1] == '"') { sb.Append('"'); i++; }
                    else q = !q;
                }
                else if (c == ',' && !q)
                {
                    list.Add(sb.ToString());
                    sb.Length = 0;
                }
                else sb.Append(c);
            }
            list.Add(sb.ToString());
            return list.ToArray();
        }

        private static string NamedCatalogCode(string named, string route)
        {
            string namedCode = NormCode(named);
            string routeCode = NormCode(route);
            if (namedCode.Length == 0 || string.Equals(namedCode, routeCode, StringComparison.OrdinalIgnoreCase))
                return "";
            return namedCode;
        }

        private static string NormCode(string s)
        {
            if (s == null) return "";
            string formD = s.Trim().ToUpperInvariant().Normalize(NormalizationForm.FormD);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < formD.Length; i++)
            {
                char c = formD[i];
                if (CharUnicodeInfo.GetUnicodeCategory(c) == UnicodeCategory.NonSpacingMark) continue;
                if (char.IsWhiteSpace(c)) continue;
                if (c == 'Đ' || c == 'Ð') c = 'D';
                sb.Append(c);
            }
            string code = sb.ToString();
            if (code.Length <= 64) return code;
            using (SHA256 sha = SHA256.Create())
            {
                byte[] hash = sha.ComputeHash(Encoding.UTF8.GetBytes(code));
                string hex = BitConverter.ToString(hash).Replace("-", "").Substring(0, 8);
                return code.Substring(0, 55) + "-" + hex;
            }
        }

        private static string InferKind(string name)
        {
            string t = name == null ? "" : name.ToUpperInvariant();
            if (t.IndexOf("HCM") >= 0 || t.IndexOf("HO CHI MINH") >= 0 || t.IndexOf("HỒ CHÍ MINH") >= 0) return "HCM";
            if (t.IndexOf("CAO TOC") >= 0 || t.IndexOf("CAO TỐC") >= 0 || t.IndexOf("CT.") >= 0) return "CAO_TOC";
            return "QUOC_LO";
        }

        private static string ParseKm(string raw)
        {
            if (raw == null) return "";
            string s = raw.Trim().Replace(',', '.');
            if (s.Length == 0) return "";
            double n;
            if (!double.TryParse(s, NumberStyles.Any, CultureInfo.InvariantCulture, out n)) return s;
            if (n > 10000) n = n / 1000.0;
            if (Math.Abs(n - Math.Round(n)) < 1e-9) return ((int)Math.Round(n)).ToString();
            return n.ToString("0.###", CultureInfo.InvariantCulture);
        }

        private static string Trunc(string s, int max)
        {
            if (s == null) return "";
            return s.Length <= max ? s : s.Substring(0, max);
        }

        private static string Esc(string s)
        {
            if (s == null) s = "";
            if (s.IndexOfAny(new char[] { ',', '"', '\r', '\n' }) >= 0)
                return "\"" + s.Replace("\"", "\"\"") + "\"";
            return s;
        }

        private static string Prefix(string type)
        {
            if (type == "TRAFFIC_SIGN") return "BB";
            if (type == "GUARDRAIL") return "HL";
            if (type == "KM_POST") return "KM";
            if (type == "DELINEATOR") return "CT";
            if (type == "DITCH") return "CD";
            if (type == "CONVEX_MIRROR") return "GL";
            if (type == "BUS_STATION") return "BX";
            if (type == "BUS_STOP") return "DX";
            if (type == "INTERCHANGE") return "NG";
            if (type == "MEDIAN") return "PC";
            if (type == "LIGHTING") return "CS";
            if (type == "RETAINING") return "KE";
            if (type == "SLOPE_PROTECT") return "MD";
            if (type == "TOLL") return "TP";
            if (type == "UNDERPASS") return "CC";
            if (type == "FERRY") return "PH";
            if (type == "WEIGH_STATION") return "TC";
            if (type == "COUNT_STATION") return "TX";
            if (type == "RESCUE_STATION") return "CN";
            if (type == "EMS_POST") return "CCU";
            if (type == "ROW_UTIL") return "HT";
            if (type == "ITS_CAMERA") return "IT";
            if (type == "LAND_ROW") return "DT";
            if (type == "NOISE_BARRIER") return "ON";
            if (type == "PONTOON") return "CP";
            if (type == "RAIL_CROSS") return "DS";
            if (type == "RESCUE_VEHICLE") return "XH";
            if (type == "REST_AREA") return "DN";
            if (type == "PARKING") return "BD";
            if (type == "STATION_HOUSE") return "NH";
            if (type == "SPILLWAY") return "TR";
            return "AS";
        }

        private static bool IsParkingRow(string tableType, string typeWork, string work, string name)
        {
            if (tableType == null) return false;
            if (!string.Equals(tableType, "REST_AREA", StringComparison.OrdinalIgnoreCase))
                return false;
            return IsParkingText(typeWork) || IsParkingText(work) || IsParkingText(name);
        }

        private static bool IsParkingText(string raw)
        {
            if (string.IsNullOrEmpty(raw)) return false;
            string t = raw.ToLowerInvariant();
            if (t.IndexOf("parking", StringComparison.Ordinal) >= 0) return true;
            if (t.IndexOf("bai dau", StringComparison.Ordinal) >= 0) return true;
            if (t.IndexOf("bai do", StringComparison.Ordinal) >= 0) return true;
            bool bai = t.IndexOf("bãi", StringComparison.Ordinal) >= 0 || t.IndexOf("bai", StringComparison.Ordinal) >= 0;
            bool dau = t.IndexOf("đậu", StringComparison.Ordinal) >= 0 || t.IndexOf("dau", StringComparison.Ordinal) >= 0;
            bool dox = t.IndexOf("đỗ", StringComparison.Ordinal) >= 0 || t.IndexOf("đo xe", StringComparison.Ordinal) >= 0;
            return bai && (dau || dox);
        }

        private static bool IsWeakAssetName(string name)
        {
            if (string.IsNullOrEmpty(name)) return true;
            string raw = name.Trim();
            // GAP-SPW-NAME-01 — official spillway work names never weak (keep name_work)
            if (string.Equals(raw, "Đường tràn", StringComparison.OrdinalIgnoreCase)
                || string.Equals(raw, "Cầu tràn", StringComparison.OrdinalIgnoreCase)
                || string.Equals(raw, "Bến tràn", StringComparison.OrdinalIgnoreCase)
                || string.Equals(raw, "Ngầm", StringComparison.OrdinalIgnoreCase))
                return false;
            // GAP-IX-NAME-01 — generic interchange labels never weak
            if (string.Equals(raw, "Nút giao", StringComparison.OrdinalIgnoreCase)
                || string.Equals(raw, "Loại nút", StringComparison.OrdinalIgnoreCase)
                || raw.StartsWith("Nút giao ", StringComparison.OrdinalIgnoreCase))
                return false;
            // GAP-FY-NAME-01 — generic ferry labels never weak (cấm IsWeak→đoạn)
            if (string.Equals(raw, "Bến phà", StringComparison.OrdinalIgnoreCase)
                || string.Equals(raw, "Loại bến", StringComparison.OrdinalIgnoreCase)
                || string.Equals(raw, "Loại bến phà", StringComparison.OrdinalIgnoreCase)
                || raw.StartsWith("Bến phà ", StringComparison.OrdinalIgnoreCase)
                || raw.StartsWith("Phà ", StringComparison.OrdinalIgnoreCase))
                return false;
            string t = raw.ToUpperInvariant();
            if (t.StartsWith("QL.") || t.StartsWith("QL ") || t.StartsWith("CT.") || t.StartsWith("CT "))
                return true;
            return false;
        }

        private static string ResolveTypeAssetName(
            string type, string[] f,
            int iSignCode, int iSignContent, int iKmPostName,
            int iOfficial, int iFallback, int iRoad,
            string kmA, string id,
            int iLoc, int iTieuLen, int iHLen, int iQty, int iQtyH)
        {
            if (type == "TRAFFIC_SIGN")
            {
                string code = Cell(f, iSignCode);
                if (code.Length > 0 && !IsJunk(code)) return code;
                string content = Cell(f, iSignContent);
                if (content.Length > 0 && !IsJunk(content)) return content;
            }
            if (type == "KM_POST")
            {
                string kmName = Cell(f, iKmPostName);
                if (kmName.Length > 0 && !IsJunk(kmName)) return kmName;
            }
            if (type == "SPILLWAY")
            {
                // GAP-SPW-NAME-01 — name ← name_work (iOfficial); cấm fallback đoạn tuyến khi name_work hợp lệ
                string work = Cell(f, iOfficial);
                if (work.Length > 0 && !IsJunk(work)) return work;
            }
            if (type == "INTERCHANGE")
            {
                // GAP-IX-NAME-01 — name ← name_intersection; trống OK; cấm IsWeak→đoạn tuyến
                string ix = Cell(f, iOfficial);
                if (ix.Length > 0 && !IsJunk(ix)) return ix;
                return "";
            }
            if (type == "FERRY")
            {
                // GAP-FY-NAME-01 — name ← name_ferry_terminal; trống OK; cấm IsWeak→đoạn tuyến
                string fy = Cell(f, iOfficial);
                if (fy.Length > 0 && !IsJunk(fy)) return fy;
                return "";
            }
            if (type == "DELINEATOR")
            {
                bool hasTieu = Cell(f, iTieuLen).Length > 0 || Cell(f, iQty).Length > 0;
                bool hasH = Cell(f, iHLen).Length > 0 || Cell(f, iQtyH).Length > 0;
                string kind = hasTieu && hasH ? "Cọc tiêu / cọc H"
                    : hasH && !hasTieu ? "Cọc H"
                    : "Cọc tiêu";
                string km = ParseKm(kmA);
                string loc = Cell(f, iLoc);
                if (km.Length > 0) return kind + " Km " + km;
                if (loc.Length > 0 && !IsJunk(loc)) return kind + " · " + loc;
                if (id.Length > 0) return kind + " " + id;
                return kind;
            }
            return ResolveAssetName(f, iOfficial, iFallback, iRoad);
        }

        private static string ParseStationKm(string raw)
        {
            if (string.IsNullOrEmpty(raw)) return "";
            string s = raw.Trim();
            if (s.Length >= 2 && (s.StartsWith("Km", StringComparison.OrdinalIgnoreCase) || s.StartsWith("KM")))
                s = s.Substring(2).Trim();
            s = s.Replace(" ", "");
            int plus = s.IndexOf('+');
            if (plus >= 0)
            {
                string a = s.Substring(0, plus);
                string b = s.Substring(plus + 1);
                double km, m;
                if (!double.TryParse(a, NumberStyles.Any, CultureInfo.InvariantCulture, out km)) return ParseKm(raw);
                if (!double.TryParse(b, NumberStyles.Any, CultureInfo.InvariantCulture, out m)) m = 0;
                return ParseKm((km + m / 1000.0).ToString("0.###", CultureInfo.InvariantCulture));
            }
            return ParseKm(s);
        }

        private sealed class Spec
        {
            public string Match;
            public string Catalog;
            public string Type;
            public string RouteKind;
        }
    }
}
