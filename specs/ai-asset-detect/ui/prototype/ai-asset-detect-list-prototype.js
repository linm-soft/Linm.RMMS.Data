const ASSET_CLASSES = ["Biển báo","Hộ lan","Cột Km","Cột H","Đèn chiếu sáng","Camera ITS","Cống","Taluy"];
const CLASS_TO_TYPE = {"Biển báo":"GANTRY_SIGN","Hộ lan":"GUARDRAIL","Cột Km":"KM_POST","Cột H":"DELINEATOR","Đèn chiếu sáng":"LIGHTING","Cống":"CULVERT_X","Taluy":"SLOPE_PROTECT","Camera ITS":"ITS_CAMERA"};
const EXISTING = [
  {id:"TS-QL1-HL-001",type:"Hộ lan",lat:20.12857,lng:105.85542,x:18,y:22},
  {id:"TS-QL1-CS-001",type:"Đèn chiếu sáng",lat:20.09313,lng:105.85819,x:28,y:38},
  {id:"TS-QL1-CN-001",type:"Cống",lat:19.8698,lng:105.80373,x:55,y:62}
];
const SEED = () => ([
  {id:"AC-101",assetClass:"Hộ lan",score:0.92,status:"Draft",lat:20.12381,lng:105.85042,routeId:"QL1",routeLabel:"QL.1 · Km287",sectionId:"SEC-QL1-286-316",patrolTripId:"PTR-QL1-SIM-01",bbox:"[120,80,220,180]",modelVersion:"gpt-4o-vision",engine:"P1",nearbyRisk:false,nearbyOf:null,note:"Seed QL.1",assetCode:null,detectedAt:"2026-08-12T07:00:00",x:22,y:28},
  {id:"AC-102",assetClass:"Đèn chiếu sáng",score:0.87,status:"Draft",lat:20.07715,lng:105.8552,routeId:"QL1",routeLabel:"QL.1 · Km292",sectionId:"SEC-QL1-286-316",patrolTripId:"PTR-QL1-SIM-01",bbox:"[90,100,300,160]",modelVersion:"gpt-4o-vision",engine:"P1",nearbyRisk:false,nearbyOf:null,note:"Seed QL.1",assetCode:null,detectedAt:"2026-08-12T08:00:00",x:32,y:40},
  {id:"AC-103",assetClass:"Cột Km",score:0.81,status:"Draft",lat:19.98937,lng:105.84515,routeId:"QL1",routeLabel:"QL.1 · Km302",sectionId:"SEC-QL1-286-316",patrolTripId:"PTR-QL1-SIM-02",bbox:"[150,70,190,200]",modelVersion:"gpt-4o-vision",engine:"P1",nearbyRisk:false,nearbyOf:null,note:"Seed QL.1",assetCode:null,detectedAt:"2026-08-12T09:00:00",x:42,y:48},
  {id:"AC-104",assetClass:"Hộ lan",score:0.78,status:"Draft",lat:20.12389,lng:105.8505,routeId:"QL1",routeLabel:"QL.1 · Km287",sectionId:"SEC-QL1-286-316",patrolTripId:"PTR-QL1-SIM-02",bbox:"[118,82,218,178]",modelVersion:"gpt-4o-vision",engine:"P1",nearbyRisk:true,nearbyOf:"AC-101",note:"Cùng class <25m vs AC-101",assetCode:null,detectedAt:"2026-08-12T10:00:00",x:24,y:30}
]);
let rows = SEED();
let selected = null;
let formMode = "view";
let formDirty = false;
let pendingConfirmId = null;
let pendingDismissId = null;
const tbody = document.getElementById("tbody");
const filterVals = () => rows.map(r => r.id);
let filterChecked = new Set(filterVals());
const clsSel = document.getElementById("fAssetClass");
ASSET_CLASSES.forEach(c => { const o = document.createElement("option"); o.value = c; o.textContent = c; clsSel.appendChild(o); });
function toast(msg){const el=document.getElementById("toast");el.textContent=msg;el.classList.add("on");setTimeout(()=>el.classList.remove("on"),2200);}
function statusHtml(s){const m={Draft:"st-d",Confirmed:"st-ok",Dismissed:"st-x"};return '<span class="st '+(m[s]||"st-x")+'">'+s+"</span>";}
function filtered(){
  const q=(document.getElementById("q").value||"").trim().toLowerCase();
  const route=(document.getElementById("fRoute").value||"").trim().toLowerCase();
  const cls=document.getElementById("fClass").value;
  const st=document.getElementById("fStatus").value;
  const from=document.getElementById("fFrom").value;
  const to=document.getElementById("fTo").value;
  return rows.filter(r=>{
    if(filterChecked.size && !filterChecked.has(r.id)) return false;
    if(cls && r.assetClass!==cls) return false;
    if(st && r.status!==st) return false;
    if(route && route!=="all" && !(r.routeLabel.toLowerCase().includes(route)||r.routeId.toLowerCase().includes(route.replace(".","")))) return false;
    if(from && r.detectedAt.slice(0,10)<from) return false;
    if(to && r.detectedAt.slice(0,10)>to) return false;
    if(!q) return true;
    const bag=[r.id,r.assetClass,r.routeLabel,r.patrolTripId,r.sectionId,r.assetCode,r.note,r.modelVersion,r.engine].join(" ").toLowerCase();
    return bag.includes(q);
  });
}
function renderMap(list){
  const canvas=document.getElementById("mapCanvas");
  canvas.innerHTML=EXISTING.map(e=>'<button type="button" class="pin exist" style="left:'+e.x+'%;top:'+e.y+'%" title="'+e.id+'">'+e.id.replace("TS-QL1-","")+"</button>").join("")
    +list.map(r=>'<button type="button" class="pin '+(r.status==="Confirmed"?"ok":"ai")+'" data-pin="'+r.id+'" style="left:'+r.x+'%;top:'+r.y+'%">'+r.id+"</button>").join("");
}
function render(){
  const list=filtered();
  tbody.innerHTML=list.map((r,i)=>`<tr data-code="${r.id}" class="${selected===r.id?"sel":""}">
    <td class="num">${i+1}</td><td class="num"><input type="checkbox" class="row-chk" ${selected===r.id?"checked":""} /></td>
    <td><button type="button" class="code-link" style="border:0;background:0;color:#0d6efd;text-decoration:underline;cursor:pointer;font:inherit">${r.id}</button></td>
    <td>${r.assetClass}</td><td>${Math.round(r.score*100)}</td><td>${r.lat.toFixed(5)}, ${r.lng.toFixed(5)}</td>
    <td>${r.routeLabel}</td><td>${statusHtml(r.status)}</td><td>${r.engine} / ${r.modelVersion}</td>
    <td>${r.nearbyRisk?'<span class="near">risk · '+(r.nearbyOf||"")+"</span>":"—"}</td>
    <td>${r.detectedAt.replace("T"," ").slice(0,16)}</td><td>${r.assetCode||"—"}</td>
    <td class="num" data-des-id="DES-GRID-C3"><details class="menu"><summary>⋮</summary><div class="menu-panel">
      <button type="button" data-menu="view">Xem</button><button type="button" data-menu="edit">Sửa</button>
      <button type="button" data-menu="copy">Sao chép</button><button type="button" data-menu="confirm">Confirm</button>
      <button type="button" data-menu="dismiss" class="danger">Dismiss</button><button type="button" data-menu="history">Lịch sử</button>
    </div></details></td></tr>`).join("")||'<tr><td colspan="13" style="text-align:center;color:#94a3b8;padding:24px">Không có dữ liệu</td></tr>';
  document.getElementById("total").textContent=String(list.length);renderMap(list);syncSelBtns();
}
function syncSelBtns(){const on=Boolean(selected);["btn-view","btn-edit"].forEach(id=>{document.getElementById(id).disabled=!on;});}
function openModal(id){document.getElementById(id).classList.add("on");}
function closeModal(id){document.getElementById(id).classList.remove("on");}
function setFormRo(ro){
  ["fAssetClass","fScore","fEngine","fLat","fLng","fRouteId","fRouteLabel","fSection","fTrip","fBbox","fNote","fDetected"].forEach(id=>{
    const el=document.getElementById(id);if(!el)return;
    el.readOnly=!!ro&&el.tagName!=="SELECT";
    if(el.tagName==="SELECT") el.style.pointerEvents=ro?"none":"";
    el.style.background=ro?"#f8fafc":"#fff";
  });
  document.getElementById("fCandStatus").style.pointerEvents="none";
  document.getElementById("fCandStatus").style.background="#f8fafc";
}
function fillForm(row){
  document.getElementById("fId").value=row.id;
  document.getElementById("fAssetClass").value=row.assetClass;
  document.getElementById("fScore").value=row.score;
  document.getElementById("fCandStatus").value=row.status;
  document.getElementById("fEngine").value=row.engine;
  document.getElementById("fLat").value=row.lat;
  document.getElementById("fLng").value=row.lng;
  document.getElementById("fRouteId").value=row.routeId;
  document.getElementById("fRouteLabel").value=row.routeLabel;
  document.getElementById("fSection").value=row.sectionId||"";
  document.getElementById("fTrip").value=row.patrolTripId||"";
  document.getElementById("fBbox").value=row.bbox||"";
  document.getElementById("fModel").value=row.modelVersion||"";
  document.getElementById("fNearbyOf").value=row.nearbyOf||"";
  document.getElementById("fAssetCode").value=row.assetCode||"";
  document.getElementById("fNote").value=row.note||"";
  document.getElementById("fDetected").value=(row.detectedAt||"").slice(0,16);
  document.getElementById("nearWarn").hidden=!row.nearbyRisk;
}
function renderFooter(){
  const foot=document.getElementById("formFooter");
  if(formMode==="view"){
    foot.innerHTML='<button type="button" class="tb" data-slide="close">Đóng</button><button type="button" class="tb" data-slide="edit"><i class="fas fa-pen"></i> Sửa</button><button type="button" class="tb" data-slide="copy"><i class="fas fa-copy"></i> Sao chép</button><button type="button" class="tb primary" data-slide="confirm">Confirm</button><button type="button" class="tb" data-slide="dismiss">Dismiss</button>';
  } else {
    foot.innerHTML='<button type="button" class="tb" data-slide="cancel">Hủy</button><button type="button" class="tb primary" data-slide="save"><i class="fas fa-save"></i> Lưu</button>';
  }
}
function openForm(mode,row){
  formMode=mode;formDirty=false;document.getElementById("dirtyBadge").hidden=true;
  document.getElementById("modeBadge").textContent=mode;
  document.getElementById("formTitle").textContent=(mode==="create"?"Tạo candidate":mode==="copy"?"Sao chép":mode==="edit"?"Sửa":"Xem")+" · "+row.id;
  document.getElementById("formHint").textContent=mode==="view"?"View = readOnly (không disabled xám) · footer actions only":"Edit/Create/Copy · leave-confirm khi dirty · footer Hủy/Lưu only";
  fillForm(row);setFormRo(mode==="view");
  if(mode==="create"||mode==="copy"){document.getElementById("fId").value="AC-NEW";document.getElementById("fCandStatus").value="Draft";document.getElementById("fAssetCode").value="";}
  renderFooter();document.getElementById("slide-backdrop").classList.add("on");document.getElementById("slideout").classList.add("on");
}
function closeForm(force){
  if(!force&&formDirty&&formMode!=="view"){if(!confirm("Form đang dirty — rời khỏi?"))return;}
  document.getElementById("slide-backdrop").classList.remove("on");document.getElementById("slideout").classList.remove("on");formDirty=false;
}
function rowById(id){return rows.find(r=>r.id===id);}
function openConfirm(id){
  const r=rowById(id);if(!r||r.status!=="Draft"){toast("Chỉ Confirm Draft");return;}
  pendingConfirmId=id;document.getElementById("confirmText").textContent="Confirm "+id+" → Asset source=ai-asset-detect";
  document.getElementById("confirmAssetType").value=CLASS_TO_TYPE[r.assetClass]||"ITS_CAMERA";openModal("modal-confirm");
}
function openDismiss(id){
  const r=rowById(id);if(!r||r.status!=="Draft"){toast("Chỉ Dismiss Draft");return;}
  pendingDismissId=id;document.getElementById("dismissText").textContent="Dismiss "+id+" (false positive).";openModal("modal-dismiss");
}
tbody.addEventListener("click",(e)=>{
  const tr=e.target.closest("tr");if(!tr||!tr.getAttribute("data-code"))return;
  const code=tr.getAttribute("data-code");
  if(e.target.closest("[data-menu]")){
    const act=e.target.getAttribute("data-menu");selected=code;syncSelBtns();render();const row=rowById(code);
    if(act==="history"){document.getElementById("historyBody").textContent="Timeline stub · "+code+" · status="+row.status;openModal("modal-history");}
    else if(act==="confirm")openConfirm(code);else if(act==="dismiss")openDismiss(code);
    else if(act==="view"||act==="edit"||act==="copy")openForm(act,Object.assign({},row));
    return;
  }
  if(e.target.classList.contains("code-link")||e.target.classList.contains("row-chk")){selected=code;syncSelBtns();render();}
});
tbody.addEventListener("dblclick",(e)=>{const tr=e.target.closest("tr");if(!tr)return;selected=tr.getAttribute("data-code");openForm("view",Object.assign({},rowById(selected)));render();});
document.getElementById("mapCanvas").addEventListener("click",(e)=>{const pin=e.target.closest("[data-pin]");if(!pin)return;selected=pin.getAttribute("data-pin");openForm("view",Object.assign({},rowById(selected)));render();});
document.getElementById("q").addEventListener("input",render);
["fRoute","fClass","fStatus","fFrom","fTo"].forEach(id=>document.getElementById(id).addEventListener("change",render));
document.getElementById("fRoute").addEventListener("input",render);
document.querySelector('[data-action="config"]').addEventListener("click",()=>openModal("modal-config"));
document.querySelector('[data-action="history"]').addEventListener("click",()=>{document.getElementById("historyBody").textContent=selected?("Timeline stub · "+selected):"Chọn dòng trước.";openModal("modal-history");});
document.querySelector('[data-action="create"]').addEventListener("click",()=>openForm("create",{id:"AC-NEW",assetClass:"Biển báo",score:0.75,status:"Draft",lat:19.779,lng:105.799,routeId:"QL1",routeLabel:"QL.1 · new",sectionId:"",patrolTripId:"",bbox:"[]",modelVersion:"gpt-4o-vision",engine:"P1",nearbyRisk:false,nearbyOf:null,note:"",assetCode:null,detectedAt:new Date().toISOString().slice(0,16),x:50,y:50}));
document.querySelector('[data-action="refresh"]').addEventListener("click",()=>{render();toast("Đã làm mới");});
document.querySelector('[data-action="export"]').addEventListener("click",()=>toast("Xuất Excel — stub P1"));
document.querySelector('[data-action="reset-seed"]').addEventListener("click",()=>{rows=SEED();filterChecked=new Set(filterVals());selected=null;render();toast("Reset seed 4 candidates");});
document.querySelector('[data-action="sim-frame"]').addEventListener("click",()=>{
  const id="AC-"+(200+rows.length);
  rows.unshift({id,assetClass:"Camera ITS",score:0.86,status:"Draft",lat:19.85,lng:105.81,routeId:"QL1",routeLabel:"QL.1 · sim",sectionId:"SEC-QL1-286-316",patrolTripId:"PTR-SIM",bbox:"[100,100,200,200]",modelVersion:"gpt-4o-vision",engine:"P1",nearbyRisk:false,nearbyOf:null,note:"Giả lập frame",assetCode:null,detectedAt:new Date().toISOString().slice(0,16),x:60,y:55});
  filterChecked.add(id);selected=id;render();toast("Detect stub → "+id);
});
document.querySelector('[data-action="nearby"]').addEventListener("click",()=>{
  const near=rows.filter(r=>r.nearbyRisk);toast(near.length?("Nearby risk: "+near.map(r=>r.id).join(", ")):"Không có nearby risk");
  if(near[0]){selected=near[0].id;openForm("view",Object.assign({},near[0]));}render();
});
document.querySelector('[data-action="clear-filter"]').addEventListener("click",()=>{
  document.getElementById("q").value="";document.getElementById("fRoute").value="";document.getElementById("fClass").value="";
  document.getElementById("fStatus").value="";document.getElementById("fFrom").value="";document.getElementById("fTo").value="";
  filterChecked=new Set(filterVals());render();
});
document.querySelector('[data-action="fit"]').addEventListener("click",()=>toast("Fit bounds mock"));
document.querySelectorAll("[data-basemap]").forEach(btn=>btn.addEventListener("click",()=>{document.getElementById("mapMeta").textContent="Basemap: "+btn.getAttribute("data-basemap")+" · pin → View";}));
document.getElementById("btn-view").addEventListener("click",()=>selected&&openForm("view",Object.assign({},rowById(selected))));
document.getElementById("btn-edit").addEventListener("click",()=>selected&&openForm("edit",Object.assign({},rowById(selected))));
document.querySelectorAll("[data-close]").forEach(btn=>btn.addEventListener("click",()=>closeModal(btn.getAttribute("data-close"))));
document.getElementById("slide-backdrop").addEventListener("click",()=>closeForm(false));
document.getElementById("formFooter").addEventListener("click",(e)=>{
  const act=e.target.closest("[data-slide]");if(!act)return;const a=act.getAttribute("data-slide");
  if(a==="close"||a==="cancel")return closeForm(a==="close");
  if(a==="edit"&&selected)return openForm("edit",Object.assign({},rowById(selected)));
  if(a==="copy"&&selected)return openForm("copy",Object.assign({},rowById(selected)));
  if(a==="confirm"&&selected)return openConfirm(selected);
  if(a==="dismiss"&&selected)return openDismiss(selected);
  if(a==="save"){
    const id=document.getElementById("fId").value;
    const payload={id:id==="AC-NEW"?("AC-"+(300+rows.length)):id,assetClass:document.getElementById("fAssetClass").value,score:Number(document.getElementById("fScore").value),status:"Draft",lat:Number(document.getElementById("fLat").value),lng:Number(document.getElementById("fLng").value),routeId:document.getElementById("fRouteId").value||"QL1",routeLabel:document.getElementById("fRouteLabel").value,sectionId:document.getElementById("fSection").value,patrolTripId:document.getElementById("fTrip").value,bbox:document.getElementById("fBbox").value,modelVersion:document.getElementById("fModel").value||"gpt-4o-vision",engine:document.getElementById("fEngine").value,nearbyRisk:false,nearbyOf:null,note:document.getElementById("fNote").value,assetCode:null,detectedAt:document.getElementById("fDetected").value||new Date().toISOString().slice(0,16),x:48,y:52};
    const idx=rows.findIndex(r=>r.id===payload.id);if(idx>=0)rows[idx]=Object.assign({},rows[idx],payload);else{rows.unshift(payload);filterChecked.add(payload.id);}
    selected=payload.id;formDirty=false;closeForm(true);render();toast("Đã lưu Draft · "+payload.id);
  }
});
document.getElementById("formBody").addEventListener("input",()=>{if(formMode==="view")return;formDirty=true;document.getElementById("dirtyBadge").hidden=false;});
document.getElementById("btnConfirmOk").addEventListener("click",()=>{
  const type=document.getElementById("confirmAssetType").value.trim();if(!type){toast("asset-type * bắt buộc");return;}
  const r=rowById(pendingConfirmId);if(!r)return;const d=new Date();
  const code="TS-AI-"+d.getFullYear()+String(d.getMonth()+1).padStart(2,"0")+String(d.getDate()).padStart(2,"0")+"-"+String(Math.floor(Math.random()*9000)+1).padStart(4,"0");
  r.status="Confirmed";r.assetCode=code;r.note=(r.note||"")+" · type="+type+" · source=ai-asset-detect";
  closeModal("modal-confirm");closeForm(true);render();toast("Confirmed → "+code);
});
document.getElementById("btnDismissOk").addEventListener("click",()=>{
  const r=rowById(pendingDismissId);if(!r)return;r.status="Dismissed";closeModal("modal-dismiss");closeForm(true);render();toast("Dismissed · "+r.id);
});
function renderFilterList(){
  const fq=(document.getElementById("filter-q").value||"").toLowerCase();const vals=filterVals();
  const visible=vals.filter(v=>!fq||v.toLowerCase().includes(fq));
  document.getElementById("filter-list").innerHTML=visible.map(v=>`<label class="${filterChecked.has(v)?"on":""}"><input type="checkbox" data-fv="${v}" ${filterChecked.has(v)?"checked":""} /> ${v}</label>`).join("");
  const n=visible.filter(v=>filterChecked.has(v)).length;document.getElementById("filter-count").textContent="Đã chọn "+n+" mục";
  document.getElementById("filter-select-all").checked=visible.length>0&&n===visible.length;
}
document.getElementById("btn-filter-code").addEventListener("click",(e)=>{e.stopPropagation();document.getElementById("filter-pop").classList.toggle("on");renderFilterList();});
document.getElementById("filter-q").addEventListener("input",renderFilterList);
document.getElementById("filter-list").addEventListener("change",(e)=>{const t=e.target;if(!t.matches("[data-fv]"))return;if(t.checked)filterChecked.add(t.getAttribute("data-fv"));else filterChecked.delete(t.getAttribute("data-fv"));renderFilterList();});
document.getElementById("filter-select-all").addEventListener("change",(e)=>{const fq=(document.getElementById("filter-q").value||"").toLowerCase();const visible=filterVals().filter(v=>!fq||v.toLowerCase().includes(fq));if(e.target.checked)visible.forEach(v=>filterChecked.add(v));else visible.forEach(v=>filterChecked.delete(v));renderFilterList();});
document.getElementById("filter-cancel").addEventListener("click",()=>document.getElementById("filter-pop").classList.remove("on"));
document.getElementById("filter-ok").addEventListener("click",()=>{document.getElementById("filter-pop").classList.remove("on");render();});
render();