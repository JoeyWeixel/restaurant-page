(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var c=n.getElementsByTagName("script");c.length&&(e=c[c.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"cd7a940eacf7747d818d.jpg",n=t.p+"ec530c5005197ddb57c6.jpeg",c=t.p+"f2d8945cfd92394423d5.jpeg";function d(t,e){const n=document.createElement("img");return n.src=t,n.alt=e,n}const a=function(){document.getElementById("homeButton").classList.add("active");const t=document.getElementById("main"),a=document.createElement("div");t.appendChild(a),a.classList.add("spotlight"),a.appendChild(d(e,"Vanilla ice cream sundae")),a.appendChild(d(n,"Bowl of chocolate ice cream")),a.appendChild(d(c,"Bowl of mint chocolate chip ice cream"));const o=document.createElement("div");t.appendChild(o),o.classList.add("slogan"),d("","scooper icon").classList.add("icon"),o.appendChild;const i=document.createElement("p");i.textContent="Lorem ipsum dolor sit amet",i.classList.add("statement","slogan"),o.appendChild(i);const s=document.createElement("p");return s.textContent="Consectetur adipiscing elit",s.classList.add("statement","aside"),o.appendChild(s),t},o=t.p+"e2ddf7ba8e82048a55c4.jpeg";function i(t,e,n){const c=document.createElement("div");c.classList.add("card");const d=document.createElement("img");d.src=t,d.alt="Image of "+e,c.appendChild(d);const a=document.createElement("p");a.classList.add("title"),a.textContent=e,c.appendChild(a);const o=document.createElement("p");return o.classList.add("price","aside"),o.textContent=n,c.appendChild(o),c}const s=function(){document.getElementById("menuButton").classList.add("active");const t=document.getElementById("main"),d=document.createElement("div");return t.appendChild(d),d.classList.add("menu"),d.appendChild(i(n,"Chocolate Scoop","$3.99")),d.appendChild(i(e,"Vanilla Scoop","$3.99")),d.appendChild(i(c,"Mint Chocolate Chip Scoop","$3.99")),d.appendChild(i(o,"Brownie Sundae","$5.99")),d},l=t.p+"76d801472f321d67cf53.png",p=t.p+"0e4aa3c40f860f0c439e.png",r=t.p+"ca31d34a59cb25923474.png",m=t.p+"5b2e5c92c4312f89a684.avif";function u(t,e){const n=document.createElement("img");return n.src=t,n.alt=e,n}const h=function t(){document.getElementById("contactButton").classList.add("active");const e=document.getElementById("main"),n=document.createElement("div");e.append(n),n.classList.add("contact");const c=document.createElement("div");c.classList.add("location"),n.appendChild(c);const d=document.createElement("p");d.textContent="Come find us at:",d.classList.add("title","greeting"),c.appendChild(d);const a=document.createElement("p");a.textContent="123 N High St, Columbus OH, 43201",c.appendChild(a);const o=u(m,"Map of 123 N High St");o.classList.add("map"),c.appendChild(o);const i=document.createElement("div");i.classList.add("socials"),n.appendChild(i);const s=document.createElement("p");s.classList.add("greeting","title"),s.textContent="Follow us on social media!",i.appendChild(s);const h=u(l,"Link to our instagram page"),C=u(p,"Link to our facebook page"),g=u(r,"Link to our twitter page");return i.appendChild(h),i.appendChild(C),i.appendChild(g),t},C=t.p+"ec7c3fad2a5f91d23c4b.svg";function g(){const t=document.createElement("div");content.appendChild(t),t.classList.add("header"),content.appendChild(t);const e=document.createElement("div");e.classList.add("selections");const n=document.createElement("p");return n.classList.add("title"),n.textContent="Ice Cream Parlor",e.appendChild(n),e.appendChild(function(){const t=document.createElement("p");return t.id="homeButton",t.textContent="Home",t.addEventListener("click",(t=>f(a))),t}()),e.appendChild(function(){const t=document.createElement("p");return t.id="menuButton",t.textContent="Menu",t.addEventListener("click",(t=>f(s))),t}()),e.appendChild(function(){const t=document.createElement("p");return t.id="contactButton",t.textContent="Contact",t.addEventListener("click",(t=>f(h))),t}()),t.appendChild(e),t}function E(){const t=document.createElement("div");content.appendChild(t),t.classList.add("footer");const e=function(t,e){const n=document.createElement("img");return n.src=t,n.alt="company logo",n}(C);e.classList.add("logo"),t.appendChild(e);const n=document.createElement("p");return n.classList.add("disclosures"),n.textContent="Trademark 2023 Joey Weixel",t.appendChild(n),t}function f(t){document.getElementById("main").innerHTML="",document.getElementById("homeButton").classList.remove("active"),document.getElementById("contactButton").classList.remove("active"),document.getElementById("menuButton").classList.remove("active"),t()}!function(){const t=document.getElementById("content");t.appendChild(g()),t.appendChild(function(){const t=document.createElement("div");return t.setAttribute("id","main"),t}()),t.appendChild(E()),f(a)}()})();