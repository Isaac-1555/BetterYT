import{c as y,j as o,r as p,g as v,a as z}from"./storage-oJWc5ht-.js";let w=null,m=null,h=null,l=null,C="";const b="betteryt-reset-chip",S="betteryt-hide-style",f="data-betteryt-injected",q=()=>{if(document.getElementById(S))return;const e=document.createElement("style");e.id=S,e.textContent=`
    ytd-rich-grid-renderer { display: none !important; }
    ytd-browse[page-subtype="home"] #contents.ytd-rich-grid-renderer { display: none !important; }
  `,document.head.appendChild(e)},E=()=>{document.getElementById(S)?.remove()},B=()=>{const e=document.getElementById("betteryt-feed-container");e&&(e.style.display="none")},L=e=>{let t=document.getElementById("betteryt-feed-container");if(!t){t=document.createElement("div"),t.id="betteryt-feed-container";const n=document.querySelector('ytd-browse[page-subtype="home"] ytd-rich-grid-renderer'),r=document.querySelector('ytd-browse[page-subtype="home"] ytd-two-column-browse-results-renderer #primary');if(n&&n.parentElement)n.parentElement.insertBefore(t,n.nextSibling);else if(r)r.appendChild(t);else{console.warn("[BetterYT] Could not find a container to inject feed.");return}}t.style.display="block",m||(m=y.createRoot(t)),m.render(o.jsx(N,{category:e}))},F=({channelId:e,channelName:t,onClose:n,style:r})=>{const[a,s]=p.useState([]);p.useEffect(()=>{v().then(s)},[]);const d=async i=>{await z(i,{id:e,name:t});const c=await v();s(c),setTimeout(()=>n(),600)};return o.jsxs("div",{style:{position:"absolute",bottom:"calc(100% + 8px)",left:0,background:"var(--yt-spec-base-background, #fff)",border:"1px solid var(--yt-spec-10-percent-layer, #ccc)",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",padding:"12px",zIndex:9999,width:"250px",color:"var(--yt-spec-text-primary, #0f0f0f)",fontFamily:"Roboto, Arial, sans-serif",...r},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[o.jsx("h4",{style:{margin:0,fontSize:"14px",fontWeight:500},children:"Add to Feed"}),o.jsx("button",{className:"betteryt-modal-close-btn",onClick:n,style:{background:"none",border:"none",cursor:"pointer",fontSize:"16px"},children:"✕"})]}),o.jsxs("p",{style:{margin:"0 0 12px 0",fontSize:"12px",color:"var(--yt-spec-text-secondary, #606060)"},children:['Select a category for "',t,'"']}),a.length===0?o.jsx("div",{style:{fontSize:"12px",color:"var(--yt-spec-text-secondary, #606060)"},children:"No categories created yet. Create one in the extension popup."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:a.map(i=>{const c=i.channels.some(u=>u.id===e);return o.jsxs("button",{onClick:()=>!c&&d(i.id),disabled:c,className:`betteryt-modal-btn ${c?"added":""}`,children:[i.name," ",c&&"✓"]},i.id)})})]})},I=({channelId:e,channelName:t})=>{const[n,r]=p.useState(!1);return o.jsxs("div",{style:{position:"relative",display:"inline-block",marginLeft:"8px"},children:[o.jsxs("button",{onClick:()=>r(!n),className:"betteryt-add-btn",children:[o.jsx("svg",{className:"betteryt-add-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:o.jsx("path",{d:"M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"})}),"Add to Feed"]}),n&&o.jsx(F,{channelId:e,channelName:t,onClose:()=>r(!1)})]})},N=({category:e})=>{const[t,n]=p.useState([]),[r,a]=p.useState(!0),[s,d]=p.useState(!1);return p.useEffect(()=>{a(!0),n([]),d(!0),chrome.runtime.sendMessage({type:"FETCH_FEED",category:e},i=>{if(i&&i.success){const c=i.data;n(c),a(!1),c.length>0?chrome.runtime.sendMessage({type:"FETCH_DISCOVER",category:e,rssVideos:c},u=>{u&&u.success?n(u.data):console.error("[BetterYT] Failed to fetch discover feed",u?.error),d(!1)}):d(!1)}else console.error("[BetterYT] Failed to fetch feed",i?.error),n([]),a(!1),d(!1)})},[e.id]),r?o.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"48px 24px",color:"var(--yt-spec-text-secondary, #606060)",fontSize:"16px"},children:"Loading feed..."}):t.length===0?o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"48px 24px",color:"var(--yt-spec-text-secondary, #606060)",fontSize:"16px",gap:"8px"},children:[o.jsx("span",{style:{fontSize:"32px"},children:"📺"}),o.jsxs("span",{children:["No recent videos found for ",o.jsx("strong",{children:e.name}),"."]}),o.jsx("span",{style:{fontSize:"14px"},children:'Add channels using the "Add to Feed" button on video or channel pages.'})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(310px, 1fr))",gap:"16px 16px",padding:"55px 16px",width:"100%",boxSizing:"border-box"},children:t.map(i=>o.jsx("a",{href:`/watch?v=${i.id}`,style:{textDecoration:"none",color:"inherit",display:"block",position:"relative"},children:o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",cursor:"pointer"},children:[o.jsxs("div",{style:{position:"relative"},children:[o.jsx("img",{src:i.thumbnail,alt:i.title,style:{width:"100%",aspectRatio:"16/9",borderRadius:"12px",objectFit:"cover",backgroundColor:"var(--yt-spec-10-percent-layer, #e5e5e5)"}}),i.type==="recommendation"&&o.jsx("div",{style:{position:"absolute",top:"8px",left:"8px",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",padding:"2px 6px",borderRadius:"4px",fontSize:"11px",fontWeight:"bold",backdropFilter:"blur(4px)"},children:"✨ Discover"}),i.viewCount&&o.jsx("div",{style:{position:"absolute",bottom:"8px",right:"8px",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",padding:"2px 4px",borderRadius:"4px",fontSize:"12px"},children:i.viewCount})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",padding:"0 4px"},children:[o.jsx("h3",{style:{margin:0,fontSize:"14px",fontWeight:500,lineHeight:"20px",color:"var(--yt-spec-text-primary, #0f0f0f)",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:i.title}),o.jsx("p",{style:{margin:0,fontSize:"12px",color:"var(--yt-spec-text-secondary, #606060)"},children:i.channelName}),o.jsxs("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[o.jsx("p",{style:{margin:0,fontSize:"12px",color:"var(--yt-spec-text-secondary, #606060)"},children:i.publishedTimeStr}),i.reason&&o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{fontSize:"10px",color:"var(--yt-spec-text-secondary, #606060)"},children:"•"}),o.jsx("p",{style:{margin:0,fontSize:"12px",color:"#065fd4",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:i.reason,children:i.reason})]})]})]})]})},i.id+(i.type||"rss")))}),s&&o.jsxs("div",{style:{textAlign:"center",padding:"24px",color:"var(--yt-spec-text-secondary, #606060)",fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",gap:"8px"},children:[o.jsx("div",{className:"betteryt-spinner"}),"Finding more videos you might like..."]})]})},D=()=>{const[e,t]=p.useState([]),[n,r]=p.useState(null);p.useEffect(()=>{v().then(t);const s=i=>{i.categories&&t(i.categories.newValue||[])};chrome.storage.onChanged.addListener(s);const d=()=>r(null);return window.addEventListener(b,d),()=>{chrome.storage.onChanged.removeListener(s),window.removeEventListener(b,d)}},[]);const a=p.useCallback(s=>{r(d=>d===s.id?(E(),B(),null):(q(),L(s),document.querySelectorAll("ytd-feed-filter-chip-bar-renderer yt-chip-cloud-chip-renderer").forEach(i=>{i.closest("#betteryt-custom-chips")||(i.removeAttribute("selected"),i.setAttribute("aria-selected","false"))}),s.id))},[]);return e.length===0?null:o.jsx(o.Fragment,{children:e.map(s=>o.jsx("div",{onClick:()=>a(s),className:`betteryt-custom-chip ${n===s.id?"active":""}`,children:s.name},s.id))})},_=()=>{if(document.getElementById("betteryt-custom-chips"))return;const e=document.querySelector("ytd-feed-filter-chip-bar-renderer #chips yt-chip-cloud-renderer #chips")||document.querySelector("ytd-feed-filter-chip-bar-renderer #chips");if(!e)return;const t=document.createElement("div");t.id="betteryt-custom-chips",t.style.display="inline-flex",t.style.gap="8px",t.style.marginRight="8px",t.style.flexShrink="0",e.insertBefore(t,e.firstChild),w=y.createRoot(t),w.render(o.jsx(D,{}))};let x=null;const R=()=>{let e=x?.id||"",t=x?.name||"";const n=document.querySelectorAll("#owner ytd-channel-name a, #owner-name a");for(const r of Array.from(n)){const a=r.getAttribute("href")||"";if(!e&&a.includes("/channel/UC")){const d=a.match(/\/channel\/(UC[a-zA-Z0-9_-]+)/);d&&(e=d[1])}const s=r.getAttribute("data-browse-id");if(!e&&s&&s.startsWith("UC")&&(e=s),!t&&r.textContent?.trim()&&(t=r.textContent.trim()),e&&t)break}if(!e){const r=document.querySelector('link[rel="canonical"]');if(r){const s=(r.getAttribute("href")||"").match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]+)/);s&&(e=s[1])}}if(!t){const r=document.querySelector("#channel-header ytd-channel-name yt-formatted-string, #channel-name yt-formatted-string");r&&(t=r.textContent?.trim()||"")}if(!e){const r=document.querySelector('meta[itemprop="channelId"]');r&&(e=r.getAttribute("content")||"")}return e?{id:e,name:t||e}:null},M=e=>{let t="",n="";for(const a of Array.from(e.querySelectorAll("a"))){const d=(a.getAttribute("href")||"").match(/\/channel\/(UC[a-zA-Z0-9_-]+)/);d&&(t=d[1]);const i=a.getAttribute("data-browse-id");i&&i.startsWith("UC")&&(t=i)}const r=e.querySelector("ytd-channel-name a, #channel-name a, .ytd-channel-name a");return r?.textContent&&(n=r.textContent.trim()),t&&n?{id:t,name:n}:null},O=({channelId:e,channelName:t})=>{const[n,r]=p.useState(!1);return o.jsxs("div",{style:{position:"relative"},onClick:a=>{a.preventDefault(),a.stopPropagation()},children:[o.jsx("button",{onClick:a=>{a.preventDefault(),a.stopPropagation(),r(!n)},className:"betteryt-thumb-add-btn",title:`Add ${t} to a feed`,children:"➕ Feed"}),n&&o.jsx(F,{channelId:e,channelName:t,onClose:()=>r(!1),style:{top:"auto",bottom:"36px",left:"auto",right:0}})]})},P=()=>{if(window.location.pathname!=="/")return;document.querySelectorAll(`ytd-rich-item-renderer:not([${f}])`).forEach(t=>{t.setAttribute(f,"true");const n=M(t);if(!n)return;const r=t.querySelector("ytd-thumbnail, #thumbnail");if(!r)return;r.style.position="relative";const a=document.createElement("div");a.className="betteryt-thumb-btn",a.style.cssText="position:absolute;bottom:8px;right:8px;z-index:500;opacity:0;transition:opacity 0.15s;pointer-events:auto;",r.addEventListener("mouseenter",()=>{a.style.opacity="1"}),r.addEventListener("mouseleave",()=>{a.style.opacity="0"}),r.appendChild(a),y.createRoot(a).render(o.jsx(O,{channelId:n.id,channelName:n.name}))})},V=()=>{if(window.location.pathname!=="/watch")return;const e=window.location.href;if(l&&C===e)return;l&&(l.remove(),l=null,h=null);const t=R();if(!t)return;const n=document.querySelector("#top-row #actions.ytd-watch-metadata")||document.querySelector("#actions.ytd-watch-metadata")||document.querySelector("ytd-watch-metadata #actions"),r=document.querySelector("#owner.ytd-watch-metadata")||document.querySelector("ytd-video-owner-renderer");(n||r)&&(l=document.createElement("div"),l.id="betteryt-add-btn-container",l.style.display="inline-flex",l.style.alignItems="center",n?n.insertBefore(l,n.firstChild):r&&r.appendChild(l),h=y.createRoot(l),h.render(o.jsx(I,{channelId:t.id,channelName:t.name})),C=e)},Y=()=>{if(!/^\/(channel\/|@|c\/)/.test(window.location.pathname)||document.getElementById("betteryt-channel-add-btn"))return;const e=R();if(!e)return;const t=document.querySelector("ytd-c4-tabbed-header-renderer #subscribe-button")||document.querySelector("#subscribe-button");if(!t)return;const n=document.createElement("div");n.id="betteryt-channel-add-btn",n.style.display="inline-flex",n.style.alignItems="center",n.style.marginLeft="8px",t.parentElement?.insertBefore(n,t.nextSibling),y.createRoot(n).render(o.jsx(I,{channelId:e.id,channelName:e.name}))},H=e=>{const n=e.target.closest("yt-chip-cloud-chip-renderer");n&&!n.closest("#betteryt-custom-chips")&&(window.dispatchEvent(new Event(b)),E(),B())},j="data-betteryt-overlap-fix",W=8,U=[0,120,320,700,1400,2500];let A=[];const k=()=>{if(window.location.pathname!=="/")return;const e=document.querySelector("#frosted-glass"),t=document.querySelector('ytd-browse[page-subtype="home"] ytd-rich-grid-renderer #contents');if(!e||!t)return;const n=e.getBoundingClientRect();if(n.height<=0)return;const r=document.querySelector('ytd-browse[page-subtype="home"] ytd-rich-grid-renderer ytd-rich-item-renderer #thumbnail'),a=document.querySelector('ytd-browse[page-subtype="home"] ytd-rich-grid-renderer ytd-rich-item-renderer'),s=r||a||t,d=Math.ceil(n.bottom+W-s.getBoundingClientRect().top);if(d>0){const c=(parseInt(getComputedStyle(t).paddingTop)||0)+d;t.style.setProperty("padding-top",`${c}px`,"important"),t.setAttribute(j,"true")}},T=()=>{A.forEach(clearTimeout),A=U.map(e=>setTimeout(k,e))},$=e=>{if(e?.detail?.response?.playerResponse?.videoDetails){const r=e.detail.response.playerResponse.videoDetails;x={id:r.channelId,name:r.author}}else x=null;document.getElementById("betteryt-custom-chips")?.remove(),w=null,l&&(l.remove(),l=null,h=null,C=""),document.getElementById("betteryt-channel-add-btn")?.remove();const t=document.getElementById("betteryt-feed-container");t&&(m&&(m.unmount(),m=null),t.remove()),document.querySelectorAll(`[${f}]`).forEach(r=>{r.removeAttribute(f),r.querySelectorAll(".betteryt-thumb-btn").forEach(a=>a.remove())});const n=document.querySelector('ytd-browse[page-subtype="home"] ytd-rich-grid-renderer #contents');n?.hasAttribute(j)&&(n.style.removeProperty("padding-top"),n.removeAttribute(j)),E(),window.dispatchEvent(new Event(b)),T()};let g=null;const G=()=>{g||(g=setTimeout(()=>{g=null,k(),_(),V(),Y(),P()},200))},Z=()=>{if(document.getElementById("betteryt-global-styles"))return;const e=document.createElement("style");e.id="betteryt-global-styles",e.textContent=`
    .betteryt-custom-chip {
      cursor: pointer;
      background: rgba(20, 20, 20, 0.7) !important;
      backdrop-filter: blur(8px) !important;
      -webkit-backdrop-filter: blur(8px) !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
      color: #FBFBFF !important;
      padding: 0 12px; height: 32px; border-radius: 16px !important;
      display: inline-flex; align-items: center; font-size: 14px; font-weight: 500;
      white-space: nowrap; transition: all 0.2s ease !important; flex-shrink: 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05);
    }
    .betteryt-custom-chip:hover {
      background: rgba(40, 40, 40, 0.8) !important;
      box-shadow: 0 4px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
      transform: translateY(-1px);
    }
    .betteryt-custom-chip.active {
      background: rgba(80, 80, 80, 0.9) !important;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.5); transform: translateY(1px);
    }
    .betteryt-add-btn {
      background: #B80C09 !important;
      color: #FBFBFF !important;
      border: none;
      border-radius: 18px;
      padding: 0 16px;
      height: 36px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: background 0.2s ease !important;
      font-family: Roboto, Arial, sans-serif;
      white-space: nowrap;
    }
    .betteryt-add-btn:hover { background: #d81410 !important; }
    .betteryt-add-btn:active { background: #980a07 !important; }
    .betteryt-add-icon {
      width: 20px;
      height: 20px;
      fill: currentColor;
      display: block;
    }
    .betteryt-thumb-add-btn {
      background: #B80C09 !important; color: #FBFBFF !important;
      border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 4px 8px;
      font-size: 12px; font-weight: 500; cursor: pointer; display: flex; align-items: center;
      gap: 4px; white-space: nowrap; transition: all 0.2s ease !important;
      box-shadow: 0 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2);
    }
    .betteryt-thumb-add-btn:hover {
      background: #d81410 !important;
      box-shadow: 0 4px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.3);
      transform: translateY(-1px);
    }
    .betteryt-thumb-add-btn:active {
      background: #980a07 !important; transform: translateY(1px); box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
    }
    .betteryt-spinner {
      width: 16px; height: 16px;
      border: 2px solid var(--yt-spec-10-percent-layer, #ccc);
      border-top-color: #065fd4; border-radius: 50%;
      animation: betteryt-spin 1s linear infinite;
    }
    @keyframes betteryt-spin { to { transform: rotate(360deg); } }
    .betteryt-modal-btn {
      padding: 6px 12px; border-radius: 4px;
      border: 1px solid var(--yt-spec-10-percent-layer, #ddd);
      background: transparent; color: var(--yt-spec-text-primary, #0f0f0f);
      cursor: pointer; text-align: left; font-size: 13px; transition: all 0.2s ease;
    }
    .betteryt-modal-btn:hover:not(.added) { background: rgba(0, 0, 0, 0.06); }
    html[dark] .betteryt-modal-btn:hover:not(.added) { background: rgba(255, 255, 255, 0.10); }
    .betteryt-modal-btn.added {
      background: rgba(0, 0, 0, 0.04);
      color: var(--yt-spec-text-secondary, #888);
      cursor: default;
    }
    html[dark] .betteryt-modal-btn.added { background: rgba(255, 255, 255, 0.06); }
    .betteryt-modal-close-btn { color: var(--yt-spec-text-primary, #0f0f0f); transition: color 0.2s ease; }
    .betteryt-modal-close-btn:hover { color: #d81410 !important; }
  `,document.head.appendChild(e)};Z();const X=new MutationObserver(G);X.observe(document.body,{childList:!0,subtree:!0});document.addEventListener("yt-navigate-finish",$);document.addEventListener("click",H,!0);window.addEventListener("resize",k);T();console.log("[BetterYT] Content script loaded.");
