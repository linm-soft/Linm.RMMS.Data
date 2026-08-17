/**
 * Mobile iOS prototype — OMS map pack (Leaflet live)
 * Gate: /agent-dev-oms-map · R1–R11 (basemap OSM · Fit overview · OSRM · line levels · isolate)
 */
(function (global) {
  const OSRM = 'https://router.project-osrm.org/route/v1/driving';
  const OVERVIEW_FIT_MAX_ZOOM = 13;

  /** QL.1 Chi cục II.2 — Nghệ An / Vinh (import QL 1 · Km436+800–Km457+899) */
  const PATROL_WAYPOINTS = [
    [18.6525, 105.6720],
    [18.6648, 105.6768],
    [18.6790, 105.6810],
    [18.6935, 105.6855],
  ];

  const CHECKINS = [
    { id: 'ci1', latlng: [18.6580, 105.6745], status: 'done', label: '1' },
    { id: 'ci2', latlng: [18.6710, 105.6788], status: 'done', label: '2' },
    { id: 'ci3', latlng: [18.6825, 105.6822], status: 'here', label: '3' },
    { id: 'ci4', latlng: [18.6900, 105.6845], status: 'next', label: '4' },
  ];

  const GIS_ASSETS = [
    { id: 'ts1', latlng: [18.6710, 105.6788], kind: 'ts', label: 'TS' },
    { id: 'ts2', latlng: [18.6860, 105.6835], kind: 'ts', label: 'TS' },
    { id: 'sc1', latlng: [18.6760, 105.6800], kind: 'sc', label: 'SC' },
  ];

  const state = {
    patrol: null,
    gis: null,
  };

  function decodePolyline(str, precision) {
    let index = 0;
    const len = str.length;
    let lat = 0;
    let lng = 0;
    const coordinates = [];
    const factor = Math.pow(10, precision ?? 5);
    while (index < len) {
      let result = 0;
      let shift = 0;
      let b;
      do {
        b = str.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlat = result & 1 ? ~(result >> 1) : result >> 1;
      lat += dlat;
      result = 0;
      shift = 0;
      do {
        b = str.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlng = result & 1 ? ~(result >> 1) : result >> 1;
      lng += dlng;
      coordinates.push([lat / factor, lng / factor]);
    }
    return coordinates;
  }

  async function routeAlongStreets(latLngs) {
    if (!latLngs || latLngs.length < 2) return latLngs || [];
    const coords = latLngs.map((p) => `${p[1]},${p[0]}`).join(';');
    const url = `${OSRM}/${coords}?overview=full&geometries=polyline`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('OSRM ' + res.status);
      const data = await res.json();
      const geom = data?.routes?.[0]?.geometry;
      if (!geom) throw new Error('no geometry');
      return decodePolyline(geom);
    } catch (err) {
      console.warn('[OMS] OSRM fallback straight', err);
      if (typeof global.toast === 'function') {
        global.toast('OSRM lỗi — nét thẳng tạm');
      }
      return latLngs;
    }
  }

  function makeTiles() {
    return {
      osm: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        maxNativeZoom: 19,
        attribution: '© OpenStreetMap · tiếng Việt (VN)',
      }),
      esri: L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 19, maxNativeZoom: 19, attribution: '© Esri Streets' },
      ),
      sat: L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 19, maxNativeZoom: 17, attribution: '© Esri Imagery' },
      ),
    };
  }

  function ensurePanes(map) {
    if (!map.getPane('corridorPane')) {
      map.createPane('corridorPane');
      map.getPane('corridorPane').style.zIndex = 350;
    }
    if (!map.getPane('trackPane')) {
      map.createPane('trackPane');
      map.getPane('trackPane').style.zIndex = 450;
    }
  }

  function pinIcon(status, label) {
    const cls = status === 'done' ? 'done' : status === 'here' ? 'here' : status === 'ts' ? 'ts' : status === 'sc' ? 'sc' : 'next';
    return L.divIcon({
      className: '',
      html: `<div class="ci-pin ${cls}"><span>${label}</span></div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 28],
    });
  }

  function fitOverview(map, layerOrBounds) {
    if (!map) return;
    let bounds = null;
    if (layerOrBounds && typeof layerOrBounds.getBounds === 'function') {
      bounds = layerOrBounds.getBounds();
    } else if (layerOrBounds instanceof L.LatLngBounds) {
      bounds = layerOrBounds;
    }
    if (!bounds || !bounds.isValid()) return;
    map.fitBounds(bounds.pad(0.18), { maxZoom: OVERVIEW_FIT_MAX_ZOOM, animate: true });
  }

  function wireBasemap(ctx, barEl) {
    if (!barEl) return;
    barEl.querySelectorAll('[data-base]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-base');
        Object.keys(ctx.tiles).forEach((k) => {
          if (ctx.map.hasLayer(ctx.tiles[k])) ctx.map.removeLayer(ctx.tiles[k]);
        });
        ctx.tiles[key].addTo(ctx.map);
        ctx.baseKey = key;
        barEl.querySelectorAll('[data-base]').forEach((b) => b.classList.toggle('on', b === btn));
        const cap = key === 'sat' ? 17 : 19;
        if (ctx.map.getZoom() > cap) ctx.map.setZoom(cap);
      });
    });
    const fitBtn = barEl.querySelector('[data-fit]');
    if (fitBtn) {
      fitBtn.addEventListener('click', () => {
        fitOverview(ctx.map, ctx.overviewLayer || ctx.bounds);
        if (typeof global.toast === 'function') global.toast('Đã phóng vừa toàn tuyến');
      });
    }
  }

  function wireLegend(ctx, legendEl) {
    if (!legendEl) return;
    legendEl.querySelectorAll('[data-iso]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const iso = btn.getAttribute('data-iso');
        legendEl.querySelectorAll('[data-iso]').forEach((b) => b.classList.toggle('on', b === btn));
        if (typeof ctx.applyIsolate === 'function') ctx.applyIsolate(iso);
      });
    });
  }

  async function initPatrol() {
    if (state.patrol) {
      setTimeout(() => state.patrol.map.invalidateSize(true), 80);
      return state.patrol;
    }
    const el = document.getElementById('map-patrol');
    if (!el || typeof L === 'undefined') return null;

    const map = L.map(el, {
      zoomControl: true,
      attributionControl: true,
      maxZoom: 19,
    }).setView(PATROL_WAYPOINTS[0], 12);

    ensurePanes(map);
    const tiles = makeTiles();
    tiles.osm.addTo(map);

    const routed = await routeAlongStreets(PATROL_WAYPOINTS);
    const corridor = L.polyline(routed, {
      pane: 'corridorPane',
      color: '#5AC8FA',
      weight: 14,
      opacity: 0.35,
      lineCap: 'round',
      lineJoin: 'round',
    }).addTo(map);

    const track = L.polyline(routed, {
      pane: 'trackPane',
      color: '#007AFF',
      weight: 5,
      opacity: 0.95,
      lineCap: 'round',
      lineJoin: 'round',
    }).addTo(map);

    const ciLayer = L.layerGroup();
    const markers = {};
    CHECKINS.forEach((c) => {
      const m = L.marker(c.latlng, { icon: pinIcon(c.status, c.label) });
      m.bindPopup(`Chấm điểm ${c.label} · QL.1 Nghệ An`);
      m.addTo(ciLayer);
      markers[c.id] = m;
    });
    ciLayer.addTo(map);

    const me = L.circleMarker(CHECKINS[2].latlng, {
      radius: 7,
      color: '#fff',
      weight: 3,
      fillColor: '#007AFF',
      fillOpacity: 1,
    }).addTo(map);

    const overviewLayer = L.featureGroup([corridor, track, ciLayer, me]);
    fitOverview(map, overviewLayer);

    const ctx = {
      map,
      tiles,
      baseKey: 'osm',
      corridor,
      track,
      ciLayer,
      markers,
      me,
      overviewLayer,
      bounds: overviewLayer.getBounds(),
      applyIsolate(iso) {
        const showTrack = iso === 'all' || iso === 'track';
        const showDone = iso === 'all' || iso === 'ci-done';
        const showNext = iso === 'all' || iso === 'ci-next' || iso === 'track';
        if (showTrack) {
          if (!map.hasLayer(corridor)) corridor.addTo(map);
          if (!map.hasLayer(track)) track.addTo(map);
        } else {
          map.removeLayer(corridor);
          map.removeLayer(track);
        }
        CHECKINS.forEach((c) => {
          const m = markers[c.id];
          const show =
            iso === 'all' ||
            (showDone && c.status === 'done') ||
            (showNext && (c.status === 'here' || c.status === 'next')) ||
            (iso === 'ci-done' && c.status === 'done') ||
            (iso === 'ci-next' && (c.status === 'here' || c.status === 'next'));
          if (show) {
            if (!ciLayer.hasLayer(m)) m.addTo(ciLayer);
          } else if (ciLayer.hasLayer(m)) {
            ciLayer.removeLayer(m);
          }
        });
        if (iso === 'all') {
          fitOverview(map, overviewLayer);
        } else if (iso === 'track') {
          fitOverview(map, track);
        } else {
          const pts = CHECKINS.filter((c) => {
            if (iso === 'ci-done') return c.status === 'done';
            return c.status === 'here' || c.status === 'next';
          }).map((c) => c.latlng);
          if (pts.length) fitOverview(map, L.latLngBounds(pts));
        }
      },
    };

    wireBasemap(ctx, document.getElementById('map-patrol-bar'));
    wireLegend(ctx, document.getElementById('map-patrol-legend'));
    state.patrol = ctx;
    setTimeout(() => map.invalidateSize(true), 100);
    return ctx;
  }

  async function initGis() {
    if (state.gis) {
      setTimeout(() => state.gis.map.invalidateSize(true), 80);
      return state.gis;
    }
    const el = document.getElementById('map-gis');
    if (!el || typeof L === 'undefined') return null;

    const map = L.map(el, { zoomControl: true, maxZoom: 19 }).setView(PATROL_WAYPOINTS[1], 12);
    ensurePanes(map);
    const tiles = makeTiles();
    tiles.osm.addTo(map);

    const routed = await routeAlongStreets(PATROL_WAYPOINTS);
    const corridor = L.polyline(routed, {
      pane: 'corridorPane',
      color: '#5AC8FA',
      weight: 12,
      opacity: 0.3,
    }).addTo(map);

    const tsLayer = L.layerGroup();
    const scLayer = L.layerGroup();
    const markers = {};
    GIS_ASSETS.forEach((a) => {
      const m = L.marker(a.latlng, { icon: pinIcon(a.kind, a.label) });
      m.bindPopup(a.kind === 'ts' ? 'TS-20260810-014 · Cống ngang · QL.1 Km 450+300' : 'SC-2401 · Nứt mặt đường · QL.1 Km 450+420');
      if (a.kind === 'ts') m.addTo(tsLayer);
      else m.addTo(scLayer);
      markers[a.id] = m;
    });
    tsLayer.addTo(map);
    scLayer.addTo(map);

    const overviewLayer = L.featureGroup([corridor, tsLayer, scLayer]);
    fitOverview(map, overviewLayer);

    const ctx = {
      map,
      tiles,
      baseKey: 'osm',
      corridor,
      tsLayer,
      scLayer,
      overviewLayer,
      bounds: overviewLayer.getBounds(),
      applyIsolate(iso) {
        const showC = iso === 'all' || iso === 'corridor';
        const showTs = iso === 'all' || iso === 'ts';
        const showSc = iso === 'all' || iso === 'sc';
        if (showC) {
          if (!map.hasLayer(corridor)) corridor.addTo(map);
        } else map.removeLayer(corridor);
        if (showTs) {
          if (!map.hasLayer(tsLayer)) tsLayer.addTo(map);
        } else map.removeLayer(tsLayer);
        if (showSc) {
          if (!map.hasLayer(scLayer)) scLayer.addTo(map);
        } else map.removeLayer(scLayer);
        if (iso === 'all') fitOverview(map, overviewLayer);
        else if (iso === 'corridor') fitOverview(map, corridor);
        else if (iso === 'ts') fitOverview(map, tsLayer);
        else if (iso === 'sc') fitOverview(map, scLayer);
      },
    };

    wireBasemap(ctx, document.getElementById('map-gis-bar'));
    wireLegend(ctx, document.getElementById('map-gis-legend'));
    state.gis = ctx;
    setTimeout(() => map.invalidateSize(true), 100);
    return ctx;
  }

  function onScreen(id) {
    if (id === 'patrol-map') initPatrol();
    if (id === 'gis-map') initGis();
  }

  global.MobileOmsMap = { onScreen, initPatrol, initGis, fitOverview };
})(window);
