import{p as b,A as f,B as x}from"./modules/unplugin-icons-nTW5epsT.js";import{d as h,z as $,o as u,b as k,e as o,f as w,h as y,c as C,k as B,B as a,aa as S,l,q as A,s as P}from"./modules/vue-Bp0QC5Nk.js";import{u as d,f as z}from"./slidev/context-C9CzVYcv.js";import"./index-QnS3AvUP.js";import"./modules/shiki-xld02UP4.js";const E="/web.angular/angular2/angular.png";function p(t){return t.startsWith("/")?"/web.angular/"+t.slice(1):t}function N(t,n=!1){const r=t&&["#","rgb","hsl"].some(i=>t.indexOf(i)===0),s={background:r?t:void 0,color:t&&!r?"white":void 0,backgroundImage:r?void 0:t?n?`linear-gradient(#0005, #0008), url(${p(t)})`:`url("${p(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const O={class:"my-auto w-full"},V=h({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(t){d();const n=t,r=$(()=>N(n.background,!0));return(s,i)=>(u(),k("div",{class:"slidev-layout cover text-center",style:y(r.value)},[o("div",O,[w(s.$slots,"default")])],4))}}),G={class:"pt-12"},H={class:"abs-br m-6 flex gap-2"},I={href:"https://github.com/barais/web.angular",target:"_blank",alt:"GitHub",title:"Open in GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},R={__name:"slides.md__slidev_1",setup(t){const{$slidev:n,$nav:r,$clicksContext:s,$clicks:i,$page:T,$renderContext:q,$frontmatter:_}=d();return s.setup(),(J,e)=>{const m=b,g=f,v=x;return u(),C(V,A(P(a(z)(a(_),0))),{default:B(()=>[e[3]||(e[3]=o("h1",null,"AngularJS -> Angular",-1)),e[4]||(e[4]=o("h3",null,"A complete rewrite",-1)),e[5]||(e[5]=o("div",{align:"center"},[o("img",{src:E,width:"20%"})],-1)),o("div",G,[o("span",{onClick:e[0]||(e[0]=(...c)=>a(n).nav.next&&a(n).nav.next(...c)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[e[2]||(e[2]=S(" Press Space for next page ")),l(m,{class:"inline"})])]),o("div",H,[o("button",{onClick:e[1]||(e[1]=c=>a(n).nav.openInEditor()),title:"Open in Editor",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},[l(g)]),o("a",I,[l(v)])])]),_:1},16)}}},K=R;export{K as default};
