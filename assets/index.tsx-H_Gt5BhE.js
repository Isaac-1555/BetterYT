import{r as d,j as a,g as w,a as T,c as y}from"./storage-oJWc5ht-.js";const q=({category:t})=>{const[e,r]=d.useState([]),[n,i]=d.useState(!0);return d.useEffect(()=>{i(!0),r([]),chrome.runtime.sendMessage({type:"FETCH_FEED",category:t},o=>{o&&o.success?r(o.data):(console.error("[BetterYT] Failed to fetch feed",o?.error),r([])),i(!1)})},[t.id]),n?a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"48px 24px",color:"var(--yt-spec-text-secondary, #606060)",fontSize:"16px"},children:"Loading feed..."}):e.length===0?a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"48px 24px",color:"var(--yt-spec-text-secondary, #606060)",fontSize:"16px",gap:"8px"},children:[a.jsx("span",{style:{fontSize:"32px"},children:"📺"}),a.jsxs("span",{children:["No recent videos found for ",a.jsx("strong",{children:t.name}),"."]}),a.jsx("span",{style:{fontSize:"14px"},children:'Add channels using the "Add to Feed" button on video or channel pages.'})]}):a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(310px, 1fr))",gap:"16px 16px",padding:"16px 0",width:"100%",boxSizing:"border-box"},children:e.map(o=>a.jsx("a",{href:`/watch?v=${o.id}`,style:{textDecoration:"none",color:"inherit",display:"block"},children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",cursor:"pointer"},children:[a.jsx("img",{src:o.thumbnail,alt:o.title,style:{width:"100%",aspectRatio:"16/9",borderRadius:"12px",objectFit:"cover",backgroundColor:"var(--yt-spec-10-percent-layer, #e5e5e5)"}}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",padding:"0 4px"},children:[a.jsx("h3",{style:{margin:0,fontSize:"14px",fontWeight:500,lineHeight:"20px",color:"var(--yt-spec-text-primary, #0f0f0f)",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:o.title}),a.jsx("p",{style:{margin:0,fontSize:"12px",color:"var(--yt-spec-text-secondary, #606060)"},children:o.channelName}),a.jsx("p",{style:{margin:0,fontSize:"12px",color:"var(--yt-spec-text-secondary, #606060)"},children:o.publishedTimeStr})]})]})},o.id))})},k=({channelId:t,channelName:e,onClose:r,style:n})=>{const[i,o]=d.useState([]),[c,l]=d.useState(null);d.useEffect(()=>{w().then(o)},[]);const h=async p=>{await T(p,{id:t,name:e}),l(p);const u=await w();o(u),setTimeout(()=>r(),600)};return a.jsxs("div",{style:{position:"absolute",top:"40px",left:0,background:"var(--yt-spec-base-background, #fff)",border:"1px solid var(--yt-spec-10-percent-layer, #ccc)",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0,0,0,0.3)",padding:"12px",zIndex:9999,width:"250px",color:"var(--yt-spec-text-primary, #0f0f0f)",fontFamily:"Roboto, Arial, sans-serif",...n},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[a.jsx("h4",{style:{margin:0,fontSize:"14px",fontWeight:500},children:"Add to Feed"}),a.jsx("button",{className:"betteryt-modal-close-btn",onClick:r,style:{background:"none",border:"none",cursor:"pointer",fontSize:"16px"},children:"✕"})]}),a.jsxs("p",{style:{margin:"0 0 12px 0",fontSize:"12px",color:"var(--yt-spec-text-secondary, #606060)"},children:['Select a category for "',e,'"']}),i.length===0?a.jsx("div",{style:{fontSize:"12px",color:"var(--yt-spec-text-secondary, #606060)"},children:"No categories created yet. Create one in the extension popup."}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:i.map(p=>{const u=p.channels.some(I=>I.id===t);return a.jsxs("button",{onClick:()=>!u&&h(p.id),disabled:u,className:`betteryt-modal-btn ${u?"added":""}`,children:[p.name," ",u&&"✓"]},p.id)})})]})},B=({channelId:t,channelName:e})=>{const[r,n]=d.useState(!1);return a.jsxs("div",{style:{position:"relative",display:"inline-block",marginLeft:"8px"},children:[a.jsxs("button",{onClick:()=>n(!r),className:"betteryt-add-btn",children:[a.jsx("span",{children:"➕"})," Add to Feed"]}),r&&a.jsx(k,{channelId:t,channelName:e,onClose:()=>n(!1)})]})};let C=null,m=null,b=null,s=null,S="";const f="betteryt-reset-chip",E="betteryt-hide-style",x="data-betteryt-injected",R=()=>{if(document.getElementById(E))return;const t=document.createElement("style");t.id=E,t.textContent=`
    ytd-rich-grid-renderer { display: none !important; }
    ytd-browse[page-subtype="home"] #contents.ytd-rich-grid-renderer { display: none !important; }
  `,document.head.appendChild(t)},j=()=>{document.getElementById(E)?.remove()},A=()=>{const t=document.getElementById("betteryt-feed-container");t&&(t.style.display="none")},z=t=>{let e=document.getElementById("betteryt-feed-container");if(!e){e=document.createElement("div"),e.id="betteryt-feed-container";const r=document.querySelector('ytd-browse[page-subtype="home"] ytd-rich-grid-renderer'),n=document.querySelector('ytd-browse[page-subtype="home"] ytd-two-column-browse-results-renderer #primary');if(r&&r.parentElement)r.parentElement.insertBefore(e,r.nextSibling);else if(n)n.appendChild(e);else{console.warn("[BetterYT] Could not find a container to inject feed.");return}}e.style.display="block",m||(m=y.createRoot(e)),m.render(a.jsx(q,{category:t}))},L=()=>{const[t,e]=d.useState([]),[r,n]=d.useState(null);d.useEffect(()=>{w().then(e);const o=l=>{l.categories&&e(l.categories.newValue||[])};chrome.storage.onChanged.addListener(o);const c=()=>n(null);return window.addEventListener(f,c),()=>{chrome.storage.onChanged.removeListener(o),window.removeEventListener(f,c)}},[]);const i=d.useCallback(o=>{n(c=>c===o.id?(j(),A(),null):(R(),z(o),document.querySelectorAll("ytd-feed-filter-chip-bar-renderer yt-chip-cloud-chip-renderer").forEach(l=>{l.closest("#betteryt-custom-chips")||(l.removeAttribute("selected"),l.setAttribute("aria-selected","false"))}),o.id))},[]);return t.length===0?null:a.jsx(a.Fragment,{children:t.map(o=>a.jsx("div",{onClick:()=>i(o),className:`betteryt-custom-chip ${r===o.id?"active":""}`,children:o.name},o.id))})},N=()=>{if(document.getElementById("betteryt-custom-chips"))return;const t=document.querySelector("ytd-feed-filter-chip-bar-renderer #chips yt-chip-cloud-renderer #chips")||document.querySelector("ytd-feed-filter-chip-bar-renderer #chips");if(!t)return;const e=document.createElement("div");e.id="betteryt-custom-chips",e.style.display="inline-flex",e.style.gap="8px",e.style.marginRight="8px",e.style.flexShrink="0",t.insertBefore(e,t.firstChild),C=y.createRoot(e),C.render(a.jsx(L,{}))};let g=null;const F=()=>{let t=g?.id||"",e=g?.name||"";const r=document.querySelectorAll("#owner ytd-channel-name a, #owner-name a");for(const n of Array.from(r)){const i=n.getAttribute("href")||"";if(!t&&i.includes("/channel/UC")){const c=i.match(/\/channel\/(UC[a-zA-Z0-9_-]+)/);c&&(t=c[1])}const o=n.getAttribute("data-browse-id");if(!t&&o&&o.startsWith("UC")&&(t=o),!e&&n.textContent?.trim()&&(e=n.textContent.trim()),t&&e)break}if(!t){const n=document.querySelector('link[rel="canonical"]');if(n){const o=(n.getAttribute("href")||"").match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]+)/);o&&(t=o[1])}}if(!e){const n=document.querySelector("#channel-header ytd-channel-name yt-formatted-string, #channel-name yt-formatted-string");n&&(e=n.textContent?.trim()||"")}if(!t){const n=document.querySelector('meta[itemprop="channelId"]');n&&(t=n.getAttribute("content")||"")}return t?{id:t,name:e||t}:null},D=t=>{let e="",r="";const n=t.querySelectorAll("a");for(const o of Array.from(n)){const l=(o.getAttribute("href")||"").match(/\/channel\/(UC[a-zA-Z0-9_-]+)/);l&&(e=l[1]);const h=o.getAttribute("data-browse-id");h&&h.startsWith("UC")&&(e=h)}const i=t.querySelector("ytd-channel-name a, #channel-name a, .ytd-channel-name a");return i&&i.textContent&&(r=i.textContent.trim()),e&&r?{id:e,name:r}:null},Y=()=>{if(window.location.pathname!=="/")return;document.querySelectorAll(`ytd-rich-item-renderer:not([${x}])`).forEach(e=>{e.setAttribute(x,"true");const r=D(e);if(!r)return;const n=e.querySelector("ytd-thumbnail, #thumbnail");if(!n)return;n.style.position="relative";const i=document.createElement("div");i.className="betteryt-thumb-btn",i.style.cssText=`
      position: absolute;
      bottom: 8px;
      right: 8px;
      z-index: 500;
      opacity: 0;
      transition: opacity 0.15s;
      pointer-events: auto;
    `,n.addEventListener("mouseenter",()=>{i.style.opacity="1"}),n.addEventListener("mouseleave",()=>{i.style.opacity="0"}),n.appendChild(i),y.createRoot(i).render(a.jsx(M,{channelId:r.id,channelName:r.name}))})},M=({channelId:t,channelName:e})=>{const[r,n]=d.useState(!1);return a.jsxs("div",{style:{position:"relative"},onClick:i=>{i.preventDefault(),i.stopPropagation()},children:[a.jsx("button",{onClick:i=>{i.preventDefault(),i.stopPropagation(),n(!r)},className:"betteryt-thumb-add-btn",title:`Add ${e} to a feed`,children:"➕ Feed"}),r&&a.jsx(k,{channelId:t,channelName:e,onClose:()=>n(!1),style:{top:"auto",bottom:"36px",left:"auto",right:0}})]})},W=()=>{if(window.location.pathname!=="/watch")return;const t=window.location.href;if(s&&S===t)return;s&&(s.remove(),s=null,b=null);const e=F();if(!e)return;const r=document.querySelector("#top-row #actions.ytd-watch-metadata")||document.querySelector("#actions.ytd-watch-metadata")||document.querySelector("ytd-watch-metadata #actions"),n=document.querySelector("#owner.ytd-watch-metadata")||document.querySelector("ytd-video-owner-renderer");(r||n)&&(s=document.createElement("div"),s.id="betteryt-add-btn-container",s.style.display="inline-flex",s.style.alignItems="center",r?r.insertBefore(s,r.firstChild):n&&n.appendChild(s),b=y.createRoot(s),b.render(a.jsx(B,{channelId:e.id,channelName:e.name})),S=t)},_=()=>{if(!/^\/(channel\/|@|c\/)/.test(window.location.pathname)||document.getElementById("betteryt-channel-add-btn"))return;const e=F();if(!e)return;const r=document.querySelector("ytd-c4-tabbed-header-renderer #subscribe-button")||document.querySelector("#subscribe-button");if(!r)return;const n=document.createElement("div");n.id="betteryt-channel-add-btn",n.style.display="inline-flex",n.style.alignItems="center",n.style.marginLeft="8px",r.parentElement?.insertBefore(n,r.nextSibling),y.createRoot(n).render(a.jsx(B,{channelId:e.id,channelName:e.name}))},H=t=>{const r=t.target.closest("yt-chip-cloud-chip-renderer");r&&!r.closest("#betteryt-custom-chips")&&(window.dispatchEvent(new Event(f)),j(),A())},U=t=>{if(t?.detail?.response?.playerResponse?.videoDetails){const n=t.detail.response.playerResponse.videoDetails;g={id:n.channelId,name:n.author}}else g=null;const e=document.getElementById("betteryt-custom-chips");e&&(e.remove(),C=null),s&&(s.remove(),s=null,b=null,S=""),document.getElementById("betteryt-channel-add-btn")?.remove();const r=document.getElementById("betteryt-feed-container");r&&(m&&(m.unmount(),m=null),r.remove()),document.querySelectorAll(`[${x}]`).forEach(n=>{n.removeAttribute(x),n.querySelectorAll(".betteryt-thumb-btn").forEach(i=>i.remove())}),j(),window.dispatchEvent(new Event(f))};let v=null;const $=()=>{v||(v=setTimeout(()=>{v=null,N(),W(),_(),Y()},200))},O=()=>{if(document.getElementById("betteryt-global-styles"))return;const t=document.createElement("style");t.id="betteryt-global-styles",t.textContent=`
    /* Custom Recommendation Pill Button */
    .betteryt-custom-chip {
      cursor: pointer;
      background: rgba(20, 20, 20, 0.7) !important;
      backdrop-filter: blur(8px) !important;
      -webkit-backdrop-filter: blur(8px) !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
      color: #FBFBFF !important;
      padding: 0 12px;
      height: 32px;
      border-radius: 16px !important;
      display: inline-flex;
      align-items: center;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
      transition: all 0.2s ease !important;
      flex-shrink: 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05);
    }
    
    .betteryt-custom-chip:hover {
      background: rgba(40, 40, 40, 0.8) !important;
      box-shadow: 0 4px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
      transform: translateY(-1px);
    }

    .betteryt-custom-chip.active {
      background: rgba(80, 80, 80, 0.9) !important;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);
      transform: translateY(1px);
    }

    /* Add To Feed Button */
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
      gap: 6px;
      transition: all 0.2s ease !important;
      box-shadow: 0 2px 4px rgba(184, 12, 9, 0.3), inset 0 1px 0 rgba(255,255,255,0.2);
    }

    .betteryt-add-btn:hover {
      background: #d81410 !important;
      box-shadow: 0 4px 8px rgba(184, 12, 9, 0.4), inset 0 1px 0 rgba(255,255,255,0.3);
      transform: translateY(-1px);
    }

    .betteryt-add-btn:active {
      background: #980a07 !important;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
      transform: translateY(1px);
    }
      
    /* Thumbnail add button */
    .betteryt-thumb-add-btn {
      background: #B80C09 !important;
      color: #FBFBFF !important;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px;
      padding: 4px 8px;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
      transition: all 0.2s ease !important;
      box-shadow: 0 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2);
    }
    
    .betteryt-thumb-add-btn:hover {
      background: #d81410 !important;
      box-shadow: 0 4px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.3);
      transform: translateY(-1px);
    }
    
    .betteryt-thumb-add-btn:active {
      background: #980a07 !important;
      transform: translateY(1px);
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
    }

    /* Modal buttons */
    .betteryt-modal-btn {
      padding: 6px 12px;
      border-radius: 4px;
      border: 1px solid var(--yt-spec-10-percent-layer, #ddd);
      background: transparent;
      color: var(--yt-spec-text-primary, #0f0f0f);
      cursor: pointer;
      text-align: left;
      font-size: 13px;
      transition: all 0.2s ease;
    }

    .betteryt-modal-btn:hover:not(.added) {
      background: var(--yt-spec-10-percent-layer, #f0f0f0);
    }

    .betteryt-modal-btn.added {
      background: var(--yt-spec-10-percent-layer, #f0f0f0);
      color: var(--yt-spec-text-secondary, #888);
      cursor: default;
    }
    
    .betteryt-modal-close-btn {
      color: var(--yt-spec-text-primary, #0f0f0f);
      transition: color 0.2s ease;
    }
    
    .betteryt-modal-close-btn:hover {
      color: #d81410 !important;
    }
  `,document.head.appendChild(t)};O();const P=new MutationObserver($);P.observe(document.body,{childList:!0,subtree:!0});document.addEventListener("yt-navigate-finish",U);document.addEventListener("click",H,!0);console.log("[BetterYT] Content script loaded.");
