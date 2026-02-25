import{r as p,j as r,g as v,a as F,c as y}from"./storage-oJWc5ht-.js";const I=({category:e})=>{const[t,o]=p.useState([]),[n,a]=p.useState(!0),[s,d]=p.useState(!1);return p.useEffect(()=>{a(!0),o([]),d(!0),chrome.runtime.sendMessage({type:"FETCH_FEED",category:e},i=>{if(i&&i.success){const l=i.data;o(l),a(!1),l.length>0?chrome.runtime.sendMessage({type:"FETCH_DISCOVER",category:e,rssVideos:l},u=>{u&&u.success?o(u.data):console.error("[BetterYT] Failed to fetch discover feed",u?.error),d(!1)}):d(!1)}else console.error("[BetterYT] Failed to fetch feed",i?.error),o([]),a(!1),d(!1)})},[e.id]),n?r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"48px 24px",color:"var(--yt-spec-text-secondary, #606060)",fontSize:"16px"},children:"Loading feed..."}):t.length===0?r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"48px 24px",color:"var(--yt-spec-text-secondary, #606060)",fontSize:"16px",gap:"8px"},children:[r.jsx("span",{style:{fontSize:"32px"},children:"📺"}),r.jsxs("span",{children:["No recent videos found for ",r.jsx("strong",{children:e.name}),"."]}),r.jsx("span",{style:{fontSize:"14px"},children:'Add channels using the "Add to Feed" button on video or channel pages.'})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(310px, 1fr))",gap:"16px 16px",padding:"16px 0",width:"100%",boxSizing:"border-box"},children:t.map(i=>r.jsx("a",{href:`/watch?v=${i.id}`,style:{textDecoration:"none",color:"inherit",display:"block",position:"relative"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",cursor:"pointer"},children:[r.jsxs("div",{style:{position:"relative"},children:[r.jsx("img",{src:i.thumbnail,alt:i.title,style:{width:"100%",aspectRatio:"16/9",borderRadius:"12px",objectFit:"cover",backgroundColor:"var(--yt-spec-10-percent-layer, #e5e5e5)"}}),i.type==="recommendation"&&r.jsx("div",{style:{position:"absolute",top:"8px",left:"8px",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",padding:"2px 6px",borderRadius:"4px",fontSize:"11px",fontWeight:"bold",backdropFilter:"blur(4px)"},children:"✨ Discover"}),i.viewCount&&r.jsx("div",{style:{position:"absolute",bottom:"8px",right:"8px",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",padding:"2px 4px",borderRadius:"4px",fontSize:"12px"},children:i.viewCount})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",padding:"0 4px"},children:[r.jsx("h3",{style:{margin:0,fontSize:"14px",fontWeight:500,lineHeight:"20px",color:"var(--yt-spec-text-primary, #0f0f0f)",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:i.title}),r.jsx("p",{style:{margin:0,fontSize:"12px",color:"var(--yt-spec-text-secondary, #606060)"},children:i.channelName}),r.jsxs("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[r.jsx("p",{style:{margin:0,fontSize:"12px",color:"var(--yt-spec-text-secondary, #606060)"},children:i.publishedTimeStr}),i.reason&&r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{fontSize:"10px",color:"var(--yt-spec-text-secondary, #606060)"},children:"•"}),r.jsx("p",{style:{margin:0,fontSize:"12px",color:"#065fd4",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:i.reason,children:i.reason})]})]})]})]})},i.id+(i.type||"rss")))}),s&&r.jsxs("div",{style:{textAlign:"center",padding:"24px",color:"var(--yt-spec-text-secondary, #606060)",fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center",gap:"8px"},children:[r.jsx("div",{className:"betteryt-spinner"}),"Finding more videos you might like..."]})]})},E=({channelId:e,channelName:t,onClose:o,style:n})=>{const[a,s]=p.useState([]);p.useEffect(()=>{v().then(s)},[]);const d=async i=>{await F(i,{id:e,name:t});const l=await v();s(l),setTimeout(()=>o(),600)};return r.jsxs("div",{style:{position:"absolute",top:"40px",left:0,background:"var(--yt-spec-base-background, #fff)",border:"1px solid var(--yt-spec-10-percent-layer, #ccc)",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0,0,0,0.3)",padding:"12px",zIndex:9999,width:"250px",color:"var(--yt-spec-text-primary, #0f0f0f)",fontFamily:"Roboto, Arial, sans-serif",...n},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[r.jsx("h4",{style:{margin:0,fontSize:"14px",fontWeight:500},children:"Add to Feed"}),r.jsx("button",{className:"betteryt-modal-close-btn",onClick:o,style:{background:"none",border:"none",cursor:"pointer",fontSize:"16px"},children:"✕"})]}),r.jsxs("p",{style:{margin:"0 0 12px 0",fontSize:"12px",color:"var(--yt-spec-text-secondary, #606060)"},children:['Select a category for "',t,'"']}),a.length===0?r.jsx("div",{style:{fontSize:"12px",color:"var(--yt-spec-text-secondary, #606060)"},children:"No categories created yet. Create one in the extension popup."}):r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:a.map(i=>{const l=i.channels.some(u=>u.id===e);return r.jsxs("button",{onClick:()=>!l&&d(i.id),disabled:l,className:`betteryt-modal-btn ${l?"added":""}`,children:[i.name," ",l&&"✓"]},i.id)})})]})},k=({channelId:e,channelName:t})=>{const[o,n]=p.useState(!1);return r.jsxs("div",{style:{position:"relative",display:"inline-block",marginLeft:"8px"},children:[r.jsxs("button",{onClick:()=>n(!o),className:"betteryt-add-btn",children:[r.jsx("span",{children:"➕"})," Add to Feed"]}),o&&r.jsx(E,{channelId:e,channelName:t,onClose:()=>n(!1)})]})};let w=null,m=null,h=null,c=null,C="";const b="betteryt-reset-chip",j="betteryt-hide-style",f="data-betteryt-injected",z=()=>{if(document.getElementById(j))return;const e=document.createElement("style");e.id=j,e.textContent=`
    ytd-rich-grid-renderer { display: none !important; }
    ytd-browse[page-subtype="home"] #contents.ytd-rich-grid-renderer { display: none !important; }
  `,document.head.appendChild(e)},S=()=>{document.getElementById(j)?.remove()},B=()=>{const e=document.getElementById("betteryt-feed-container");e&&(e.style.display="none")},T=e=>{let t=document.getElementById("betteryt-feed-container");if(!t){t=document.createElement("div"),t.id="betteryt-feed-container";const o=document.querySelector('ytd-browse[page-subtype="home"] ytd-rich-grid-renderer'),n=document.querySelector('ytd-browse[page-subtype="home"] ytd-two-column-browse-results-renderer #primary');if(o&&o.parentElement)o.parentElement.insertBefore(t,o.nextSibling);else if(n)n.appendChild(t);else{console.warn("[BetterYT] Could not find a container to inject feed.");return}}t.style.display="block",m||(m=y.createRoot(t)),m.render(r.jsx(I,{category:e}))},q=()=>{const[e,t]=p.useState([]),[o,n]=p.useState(null);p.useEffect(()=>{v().then(t);const s=i=>{i.categories&&t(i.categories.newValue||[])};chrome.storage.onChanged.addListener(s);const d=()=>n(null);return window.addEventListener(b,d),()=>{chrome.storage.onChanged.removeListener(s),window.removeEventListener(b,d)}},[]);const a=p.useCallback(s=>{n(d=>d===s.id?(S(),B(),null):(z(),T(s),document.querySelectorAll("ytd-feed-filter-chip-bar-renderer yt-chip-cloud-chip-renderer").forEach(i=>{i.closest("#betteryt-custom-chips")||(i.removeAttribute("selected"),i.setAttribute("aria-selected","false"))}),s.id))},[]);return e.length===0?null:r.jsx(r.Fragment,{children:e.map(s=>r.jsx("div",{onClick:()=>a(s),className:`betteryt-custom-chip ${o===s.id?"active":""}`,children:s.name},s.id))})},R=()=>{if(document.getElementById("betteryt-custom-chips"))return;const e=document.querySelector("ytd-feed-filter-chip-bar-renderer #chips yt-chip-cloud-renderer #chips")||document.querySelector("ytd-feed-filter-chip-bar-renderer #chips");if(!e)return;const t=document.createElement("div");t.id="betteryt-custom-chips",t.style.display="inline-flex",t.style.gap="8px",t.style.marginRight="8px",t.style.flexShrink="0",e.insertBefore(t,e.firstChild),w=y.createRoot(t),w.render(r.jsx(q,{}))};let x=null;const A=()=>{let e=x?.id||"",t=x?.name||"";const o=document.querySelectorAll("#owner ytd-channel-name a, #owner-name a");for(const n of Array.from(o)){const a=n.getAttribute("href")||"";if(!e&&a.includes("/channel/UC")){const d=a.match(/\/channel\/(UC[a-zA-Z0-9_-]+)/);d&&(e=d[1])}const s=n.getAttribute("data-browse-id");if(!e&&s&&s.startsWith("UC")&&(e=s),!t&&n.textContent?.trim()&&(t=n.textContent.trim()),e&&t)break}if(!e){const n=document.querySelector('link[rel="canonical"]');if(n){const s=(n.getAttribute("href")||"").match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]+)/);s&&(e=s[1])}}if(!t){const n=document.querySelector("#channel-header ytd-channel-name yt-formatted-string, #channel-name yt-formatted-string");n&&(t=n.textContent?.trim()||"")}if(!e){const n=document.querySelector('meta[itemprop="channelId"]');n&&(e=n.getAttribute("content")||"")}return e?{id:e,name:t||e}:null},L=e=>{let t="",o="";const n=e.querySelectorAll("a");for(const s of Array.from(n)){const i=(s.getAttribute("href")||"").match(/\/channel\/(UC[a-zA-Z0-9_-]+)/);i&&(t=i[1]);const l=s.getAttribute("data-browse-id");l&&l.startsWith("UC")&&(t=l)}const a=e.querySelector("ytd-channel-name a, #channel-name a, .ytd-channel-name a");return a&&a.textContent&&(o=a.textContent.trim()),t&&o?{id:t,name:o}:null},N=()=>{if(window.location.pathname!=="/")return;document.querySelectorAll(`ytd-rich-item-renderer:not([${f}])`).forEach(t=>{t.setAttribute(f,"true");const o=L(t);if(!o)return;const n=t.querySelector("ytd-thumbnail, #thumbnail");if(!n)return;n.style.position="relative";const a=document.createElement("div");a.className="betteryt-thumb-btn",a.style.cssText=`
      position: absolute;
      bottom: 8px;
      right: 8px;
      z-index: 500;
      opacity: 0;
      transition: opacity 0.15s;
      pointer-events: auto;
    `,n.addEventListener("mouseenter",()=>{a.style.opacity="1"}),n.addEventListener("mouseleave",()=>{a.style.opacity="0"}),n.appendChild(a),y.createRoot(a).render(r.jsx(D,{channelId:o.id,channelName:o.name}))})},D=({channelId:e,channelName:t})=>{const[o,n]=p.useState(!1);return r.jsxs("div",{style:{position:"relative"},onClick:a=>{a.preventDefault(),a.stopPropagation()},children:[r.jsx("button",{onClick:a=>{a.preventDefault(),a.stopPropagation(),n(!o)},className:"betteryt-thumb-add-btn",title:`Add ${t} to a feed`,children:"➕ Feed"}),o&&r.jsx(E,{channelId:e,channelName:t,onClose:()=>n(!1),style:{top:"auto",bottom:"36px",left:"auto",right:0}})]})},Y=()=>{if(window.location.pathname!=="/watch")return;const e=window.location.href;if(c&&C===e)return;c&&(c.remove(),c=null,h=null);const t=A();if(!t)return;const o=document.querySelector("#top-row #actions.ytd-watch-metadata")||document.querySelector("#actions.ytd-watch-metadata")||document.querySelector("ytd-watch-metadata #actions"),n=document.querySelector("#owner.ytd-watch-metadata")||document.querySelector("ytd-video-owner-renderer");(o||n)&&(c=document.createElement("div"),c.id="betteryt-add-btn-container",c.style.display="inline-flex",c.style.alignItems="center",o?o.insertBefore(c,o.firstChild):n&&n.appendChild(c),h=y.createRoot(c),h.render(r.jsx(k,{channelId:t.id,channelName:t.name})),C=e)},M=()=>{if(!/^\/(channel\/|@|c\/)/.test(window.location.pathname)||document.getElementById("betteryt-channel-add-btn"))return;const t=A();if(!t)return;const o=document.querySelector("ytd-c4-tabbed-header-renderer #subscribe-button")||document.querySelector("#subscribe-button");if(!o)return;const n=document.createElement("div");n.id="betteryt-channel-add-btn",n.style.display="inline-flex",n.style.alignItems="center",n.style.marginLeft="8px",o.parentElement?.insertBefore(n,o.nextSibling),y.createRoot(n).render(r.jsx(k,{channelId:t.id,channelName:t.name}))},W=e=>{const o=e.target.closest("yt-chip-cloud-chip-renderer");o&&!o.closest("#betteryt-custom-chips")&&(window.dispatchEvent(new Event(b)),S(),B())},_=e=>{if(e?.detail?.response?.playerResponse?.videoDetails){const n=e.detail.response.playerResponse.videoDetails;x={id:n.channelId,name:n.author}}else x=null;const t=document.getElementById("betteryt-custom-chips");t&&(t.remove(),w=null),c&&(c.remove(),c=null,h=null,C=""),document.getElementById("betteryt-channel-add-btn")?.remove();const o=document.getElementById("betteryt-feed-container");o&&(m&&(m.unmount(),m=null),o.remove()),document.querySelectorAll(`[${f}]`).forEach(n=>{n.removeAttribute(f),n.querySelectorAll(".betteryt-thumb-btn").forEach(a=>a.remove())}),S(),window.dispatchEvent(new Event(b))};let g=null;const H=()=>{g||(g=setTimeout(()=>{g=null,R(),Y(),M(),N()},200))},O=()=>{if(document.getElementById("betteryt-global-styles"))return;const e=document.createElement("style");e.id="betteryt-global-styles",e.textContent=`
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

    .betteryt-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid var(--yt-spec-10-percent-layer, #ccc);
      border-top-color: #065fd4;
      border-radius: 50%;
      animation: betteryt-spin 1s linear infinite;
    }
    @keyframes betteryt-spin {
      to { transform: rotate(360deg); }
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
  `,document.head.appendChild(e)};O();const U=new MutationObserver(H);U.observe(document.body,{childList:!0,subtree:!0});document.addEventListener("yt-navigate-finish",_);document.addEventListener("click",W,!0);console.log("[BetterYT] Content script loaded.");
