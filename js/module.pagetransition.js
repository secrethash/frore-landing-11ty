export default function(i){const s=SEMICOLON.Core,e=s.getVars.elBody;if(s.initFunction({class:"has-plugin-pagetransition",event:"pluginPageTransitionReady"}),e.classList.contains("no-transition"))return!0;e.classList.contains("page-transition")||e.classList.add("page-transition"),window.onpageshow=i=>{i.persisted&&window.location.reload()};var d=document.querySelector(".page-transition-wrap");let a=e.getAttribute("data-animation-in")||"fadeIn",n=e.getAttribute("data-speed-in")||1e3,t=!1,v=e.getAttribute("data-loader-timeout"),r=e.getAttribute("data-loader"),c=e.getAttribute("data-loader-color"),l=e.getAttribute("data-loader-html"),o="",p="";v=v?(t=!0,Number(v)):t=!1,c&&(p="theme"==c?' style="--cnvs-loader-color:var(--cnvs-themecolor);"':' style="--cnvs-loader-color:'+c+';"');var u='<div class="css3-spinner"'+p+">";if(o="2"==r?'<div class="css3-spinner-flipper"></div>':"3"==r?'<div class="css3-spinner-double-bounce1"></div><div class="css3-spinner-double-bounce2"></div>':"4"==r?'<div class="css3-spinner-rect1"></div><div class="css3-spinner-rect2"></div><div class="css3-spinner-rect3"></div><div class="css3-spinner-rect4"></div><div class="css3-spinner-rect5"></div>':"5"==r?'<div class="css3-spinner-cube1"></div><div class="css3-spinner-cube2"></div>':"6"==r?'<div class="css3-spinner-scaler"></div>':"7"==r?'<div class="css3-spinner-grid-pulse"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>':"8"==r?'<div class="css3-spinner-clip-rotate"><div></div></div>':"9"==r?'<div class="css3-spinner-ball-rotate"><div></div><div></div><div></div></div>':"10"==r?'<div class="css3-spinner-zig-zag"><div></div><div></div></div>':"11"==r?'<div class="css3-spinner-triangle-path"><div></div><div></div><div></div></div>':"12"==r?'<div class="css3-spinner-ball-scale-multiple"><div></div><div></div><div></div></div>':"13"==r?'<div class="css3-spinner-ball-pulse-sync"><div></div><div></div><div></div></div>':"14"==r?'<div class="css3-spinner-scale-ripple"><div></div><div></div><div></div></div>':'<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>',l=l||o,l=u+l+"</div>",n&&s.getVars.elWrapper.style.setProperty("--cnvs-animate-duration",Number(n)+"ms"),"fadeIn"==a&&s.getVars.elWrapper.classList.add("op-1"),!d){let i=document.createElement("div");i.classList.add("page-transition-wrap"),i.innerHTML=l,e.prepend(i),d=document.querySelector(".page-transition-wrap")}const g=()=>{d.classList.remove(a),d.classList.add("fadeOut","animated"),d.ontransitionend=d.onanimationend=()=>{d.remove(),s.getVars.elWrapper.classList.add(a,"animated"),s.getVars.elWrapper.ontransitionend=s.getVars.elWrapper.onanimationend=()=>{s.getVars.elBody.classList.remove("page-transition"),s.getVars.elWrapper.classList.remove(a,"animated")}}};"complete"===document.readyState&&g(),t&&setTimeout(g,v),window.onload=()=>g()}