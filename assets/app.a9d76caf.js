var Q=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var Z=(e,t,o)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,z=(e,t)=>{for(var o in t||(t={}))oe.call(t,o)&&Z(e,o,t[o]);if(U)for(var o of U(t))se.call(t,o)&&Z(e,o,t[o]);return e},W=(e,t)=>ee(e,te(t));import{a as B,d as q,c as ne,b as h,o as r,e as l,f as s,F as k,r as T,t as f,n as v,m as ae,g as V,h as j,i as S,w as M,u as m,j as p,k as w,l as re,p as ie,q as D,s as A,v as H,x as G,y as le,z as ce,A as ue,B as de,C as pe,D as _e,E as me,T as he,G as fe,V as ge,H as ve,I as be,J as xe,K as ye}from"./vendor.bc2ef461.js";const we=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}};we();const Ce=B.create({baseURL:"https://personalport-be.herokuapp.com"}),O=q({id:"root",state:()=>({appLoading:!1,testimonials:[]}),getters:{dataLoaded(e){const t=E();return!!e.testimonials.length&&!!t.all.length}},actions:{async initialize(){const{data:e}=await Ce.get("/testimonials");this.testimonials=e},toggleAppLoading(e){typeof e!="undefined"?this.appLoading=e:this.appLoading=!this.appLoading}}});function $e(){const e={data:null,error:null};return{async fetch(){const{toggleAppLoading:t}=O();t(!0);try{const{data:o}=await B.get("https://personalport-be.herokuapp.com/projects");e.data=o}catch(o){e.error=o}finally{t(!1)}return e}}}const E=q({id:"projects",state:()=>({all:[],categories:[],selectedCategory:"all"}),getters:{getProject:e=>t=>e.all.find(o=>o.title===t),getProjectIndex:e=>t=>e.all.findIndex(o=>o.title===t),allFiltered:e=>e.selectedCategory==="all"?e.all:e.all.filter(t=>t.category.title.toLowerCase()===e.selectedCategory.toLowerCase()?t:!1),getActiveCategoryTab(e){return e.selectedCategory}},actions:{async initialize(){const{fetch:e}=$e(),{data:t}=await e();for(const{category:o}of t)o&&!this.categories.includes(o.title)&&this.categories.push(o==null?void 0:o.title);this.all=t},setActiveCategoryTab(e){this.selectedCategory=e}}}),Le=({initialState:e,app:t,router:o})=>{const n=ne();t.use(n),n.state.value=e.pinia||{},o.beforeEach(async(a,i,c)=>{const u=E(n),d=O(n);(!u.all.length||!d.dataLoaded)&&(await u.initialize(),await d.initialize()),c()})};var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Le});const Ve="modulepreload",J={},Se="/",R=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${Se}${n}`,n in J)return;J[n]=!0;const a=n.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Ve,a||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),a)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",d)})})).then(()=>t())},Me={class:"bg-app-dark-blue border-t border-gray-600 text-white"},Ae={class:"max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"},Te={class:"-mx-5 -my-2 flex flex-wrap justify-center","aria-label":"Footer"},je=["href"],Ie={class:"mt-8 text-center text-base text-gray-300"},Pe=h({setup(e){const t={main:[{name:"About",href:"#"},{name:"Blog",href:"#"},{name:"Jobs",href:"#"},{name:"Press",href:"#"},{name:"Accessibility",href:"#"},{name:"Partners",href:"#"}]};return(o,n)=>(r(),l("footer",Me,[s("div",Ae,[s("nav",Te,[(r(!0),l(k,null,T(t.main,a=>(r(),l("div",{key:a.name,class:"px-5 py-2"},[s("a",{href:a.href,class:"text-base duration-15 text-white hover:text-app-light-blue"},f(a.name),9,je)]))),128))]),s("p",Ie," \xA9 "+f(new Date().getFullYear())+" Designed and Developed by Trayvon Northern ",1)])]))}}),Ee=["for"],Re={class:"mt-1"},ze=["id","name","value"],Be=h({props:{label:null,id:null,name:null,type:{default:"text"},autocomplete:null,error:null,modelValue:null},emits:["update:modelValue"],setup(e,{emit:t}){const o=n=>{t("update:modelValue",n.target.value)};return(n,a)=>(r(),l("div",null,[s("label",{for:e.name,class:"block text-sm font-medium text-white"},f(e.label),9,Ee),s("div",Re,[s("textarea",{id:e.id||e.name,class:v([{"border-red-600 ring-4 ring-red-400":e.error,"focus:ring-app-light-blue focus:ring-4 focus:border-app-light-blue border-gray-300":!e.error},"py-3 px-4 block w-full shadow-sm border rounded-md"]),name:e.name,value:e.modelValue,rows:"4",onInput:a[0]||(a[0]=i=>o(i))},null,42,ze)])]))}}),qe=["for"],De={class:"mt-1"},He=["id","type","name","value"],Oe=h({props:{label:null,id:null,name:null,type:{default:"text"},error:null,autocomplete:null,modelValue:null},emits:["update:modelValue"],setup(e,{emit:t}){const o=n=>{t("update:modelValue",n.target.value)};return(n,a)=>(r(),l("div",null,[s("label",{for:e.name,class:"block text-sm font-medium text-white block mb-2"},f(e.label),9,qe),s("div",De,[s("input",ae(z({},e.autocomplete&&{autocomplete:e.autocomplete}),{id:e.id||e.name,class:[{"border-red-600 ring-4 ring-red-400":e.error,"focus:ring-app-light-blue focus:ring-4 focus:border-app-light-blue border-gray-300":!e.error},"py-3 px-4 block w-full shadow-sm duration-200 rounded-md"],type:e.type,name:e.name,value:e.modelValue,onInput:a[0]||(a[0]=i=>o(i))}),null,16,He)])]))}}),Fe={class:"text-center"},Ne={class:"text-app-light-blue text-xl font-bold"},Ue={class:"text-5xl"},K=h({props:{caption:null,title:null},setup(e){return(t,o)=>(r(),l("div",Fe,[s("h4",Ne,f(e.caption),1),s("h2",Ue,f(e.title),1)]))}}),Y=V("");function I(e){return{getActiveRoute:()=>Y.value,setActiveRoute(t){t&&e&&(Y.value=e)}}}const Ze={id:"contact",class:"bg-app-dark-blue py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 text-white"},We={class:"relative max-w-xl mx-auto"},Ge={key:0,class:"text-green-500 success mt-4 mb-3"},Je={class:"grid grid-cols-1 gap-y-6"},Ke=["disabled"],Ye=h({setup(e){const t=V(""),o=V(null),n=V(!1),{setActiveRoute:a}=I("contact"),i={name:{rules:{isRequired:!0}},email:{rules:{isRequired:!0,email:{message:"^Please enter a valid email."}}},phone:{rules:{presence:!1,format:{pattern:/^$|[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,flags:"i",message:"^Please enter a valid phone number.",allowEmpty:!0}}},message:{rules:{isRequired:!0}}},c=async u=>{n.value=!0,t.value="";const d="traynorthern@yahoo.com";setTimeout(()=>{t.value=`Thank you ${u.name}, I've received your message.`,n.value=!1,o.value.initializeForm()},600);try{await B.post("https://personalport-be.herokuapp.com/email",{subject:`Message from website by: ${u.name}`,from:"foodeater563@outlook.com",to:d,html:`
        Hi Trayvon, I'm ${u.name},
        <br>
        ${u.message}
        <br>
        <br>
        Also, my email is: ${u.email}
        <br>
        ${u.phone?`My phone number is: ${u.phone}`:""}
        `})}catch(g){console.log("error",g)}};return(u,d)=>{const g=K,b=Oe,_=Be,$=j("v-generic-form"),x=S("observe-visibility");return M((r(),l("div",Ze,[s("div",We,[p(g,{title:"Let's Talk",caption:"Wanna work with me?"}),s("div",null,[p($,{ref_key:"genericForm",ref:o,class:"text-black",schema:i,onSubmit:c},{default:w(({formData:y,firstError:P})=>[t.value?(r(),l("p",Ge,f(t.value),1)):re("",!0),s("div",Je,[p(b,{id:"name",modelValue:y.name,"onUpdate:modelValue":L=>y.name=L,name:"name",label:"Name",error:P("name"),autocomplete:"given-name"},null,8,["modelValue","onUpdate:modelValue","error"]),p(b,{id:"email",modelValue:y.email,"onUpdate:modelValue":L=>y.email=L,error:P("email"),name:"email",label:"Email",autocomplete:"email"},null,8,["modelValue","onUpdate:modelValue","error"]),p(b,{id:"phone",modelValue:y.phone,"onUpdate:modelValue":L=>y.phone=L,error:P("phone"),name:"phone",label:"Phone Number(optional)",autocomplete:"phone"},null,8,["modelValue","onUpdate:modelValue","error"]),p(_,{id:"message",modelValue:y.message,"onUpdate:modelValue":L=>y.message=L,error:P("message"),name:"message",label:"Message"},null,8,["modelValue","onUpdate:modelValue","error"]),s("div",null,[s("button",{type:"submit",disabled:n.value,class:v([n.value?"opacity-40 pointer-events-none":"","w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-app-light-blue duration-200 hover:bg-opacity-87 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black"])}," Let's talk ",10,Ke)])])]),_:1},512)])])])),[[x,{callback:m(a),intersection:{threshold:.4}}]])}}}),Xe={class:"main-container pt-32 pb-28"},F=h({props:{caption:null,title:null},setup(e){return(t,o)=>{const n=K;return r(),l("div",Xe,[p(n,{title:e.title,caption:e.caption},null,8,["title","caption"]),ie(t.$slots,"default")])}}}),Qe={class:"mt-16 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-5"},et=["href"],tt={class:"w-full flex mb-4 items-center"},ot=["src","alt"],st={class:"flex-grow pl-3"},nt={class:"font-bold text-sm uppercase text-app-light-blue"},at={class:"w-full"},rt={class:"leading-tight"},it=s("span",{class:"text-lg leading-none italic font-bold text-gray-400 mr-1"},'"',-1),lt=s("span",{class:"text-lg leading-none italic font-bold text-gray-400 ml-1"},'"',-1),ct=h({setup(e){const{setActiveRoute:t}=I("testimonials"),o=O(),n=D(()=>o.testimonials);return(a,i)=>{const c=F,u=S("observe-visibility");return M((r(),A(c,{id:"testimonials",caption:"Testimonials",title:"See what people say about me"},{default:w(()=>[s("div",Qe,[(r(!0),l(k,null,T(m(n),d=>{var g;return r(),l("a",{key:d.id,href:d.url,target:"__blank",class:"w-full mx-auto rounded-lg bg-white text-black shadow-2xl border border-gray-200 p-5 font-light mb-6 duration-150 ring-2 ring-transparent hover:ring-app-light-blue transform"},[s("div",tt,[s("div",{class:v(["overflow-hidden rounded-full w-10 h-10",{"bg-gray-50 border border-gray-200":d.avatar}])},[s("img",{src:((g=d==null?void 0:d.avatar)==null?void 0:g.url)||"/avatarplaceholder.svg",alt:d.name},null,8,ot)],2),s("div",st,[s("h6",nt,f(d.name),1)])]),s("div",at,[s("p",rt,[it,H(" "+f(d.body)+" ",1),lt])])],8,et)}),128))])]),_:1})),[[u,{callback:m(t),intersection:{threshold:.2}}]])}}});const ut={class:"flex flex-wrap justify-center text-lg gap-6 mt-16 h"},dt=["onClick"],pt={class:"grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 justify-items-center pt-16 lg:min-h-[30rem] min-[19rem]"},_t=["alt"],mt={class:"bg-black text-white bg-opacity-70 absolute inset-0 h-full w-full flex justify-center items-center duration-200 opacity-0 group-hover:opacity-100"},ht={class:"text-4xl font-bold"},ft=h({setup(e){const{setActiveRoute:t}=I("works"),o=E(),{setActiveCategoryTab:n}=E(),a=["all","website","email","design","package"];return(i,c)=>{const u=j("router-link"),d=F,g=S("lazy"),b=S("observe-visibility");return M((r(),A(d,{id:"works",caption:"Portfolio",title:"My Works"},{default:w(()=>[s("div",ut,[(r(),l(k,null,T(a,_=>s("button",{key:_,class:v(["rounded-full py-2.5 w-30 duration-150 capitalize",m(o).getActiveCategoryTab===_?"bg-app-light-blue text-white":"text-gray-400 hover:bg-app-light-blue hover:text-white hover:bg-opacity-75"]),onClick:$=>m(n)(_)},f(`${_}${_!=="all"?"s":""}`),11,dt)),64))]),s("div",pt,[(r(!0),l(k,null,T(m(o).allFiltered,_=>(r(),A(u,{key:_.id,to:`/projects/${_.title}`,class:"bg-white shadow-2xl group relative rounded-md overflow-hidden w-full"},{default:w(()=>{var $,x;return[M(s("img",{loading:"/avatar.png",class:"overflow-hidden w-full",alt:_.title},null,8,_t),[[g,(x=($=_==null?void 0:_.media)==null?void 0:$[0])==null?void 0:x.url]]),s("div",mt,[s("h1",ht,f(_.title),1)])]}),_:2},1032,["to"]))),128))])]),_:1})),[[b,{callback:m(t),intersection:{threshold:.2}}]])}}});var C=(e,t)=>{const o=e.__vccOpts||e;for(const[n,a]of t)o[n]=a;return o};const gt={},vt={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},bt=s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),xt=[bt];function yt(e,t){return r(),l("svg",vt,xt)}var wt=C(gt,[["render",yt]]);const Ct={},$t={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Lt=s("path",{d:"M12 14l9-5-9-5-9 5 9 5z"},null,-1),kt=s("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"},null,-1),Vt=s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"},null,-1),St=[Lt,kt,Vt];function Mt(e,t){return r(),l("svg",$t,St)}var At=C(Ct,[["render",Mt]]);const Tt={},jt={viewBox:"0 0 22 21",class:"fill-current fill-white",xmlns:"http://www.w3.org/2000/svg"},It=s("path",{d:"M20.33 11.91C20.42 13.46 19.71 14.95 18.44 15.86L19.21 17.35C19.44 17.8 19.47 18.33 19.27 18.8C19.08 19.27 18.69 19.64 18.21 19.8L17.42 20.05C17.091 20.1608 16.7359 20.1675 16.4031 20.069C16.0702 19.9706 15.7758 19.7719 15.56 19.5L13.44 17C12.55 16.85 11.71 16.47 11 15.9C10.5 16.05 10 16.13 9.5 16.13C8.62 16.13 7.74 15.86 7 15.34C6.47 15.5 5.93 15.57 5.38 15.56C4.59 15.57 3.81 15.41 3.08 15.11C2.37734 14.7965 1.77694 14.2918 1.34728 13.6535C0.917624 13.0152 0.67601 12.269 0.65 11.5C0.57 10.78 0.69 10.05 1 9.39C0.71 8.64 0.68 7.82 0.93 7.06C1.3 6.11 2 5.32 2.87 4.82C3.45 3.13 5.08 2 6.87 2.12C8.47 0.62 10.92 0.46 12.7 1.75C13.12 1.64 13.56 1.58 14 1.58C15.36 1.55 16.65 2.15 17.5 3.22C19.54 3.75 21 5.57 21.08 7.69C21.13 8.8 20.83 9.89 20.22 10.82C20.29 11.18 20.33 11.54 20.33 11.91ZM15.33 10.5C15.9 10.57 16.35 11 16.35 11.57C16.35 11.8352 16.2446 12.0896 16.0571 12.2771C15.8696 12.4646 15.6152 12.57 15.35 12.57H14.72C14.4 13.47 13.84 14.26 13.1 14.86C13.35 14.95 13.61 15 13.87 15.07C19 15 18.4 11.87 18.4 11.82C18.3735 11.1331 18.0751 10.4849 17.5707 10.0179C17.0662 9.55094 16.3969 9.3035 15.71 9.33C15.4448 9.33 15.1904 9.22464 15.0029 9.03711C14.8154 8.84957 14.71 8.59522 14.71 8.33C14.71 8.06478 14.8154 7.81043 15.0029 7.62289C15.1904 7.43536 15.4448 7.33 15.71 7.33C16.94 7.36 18.12 7.82 19.04 8.63C19.09 8.34 19.12 8.04 19.12 7.74C19.06 6.5 18.5 5.42 16.25 5.21C15 2.25 11.85 3.89 11.85 4.81C11.82 5.04 12.06 5.53 12.1 5.56C12.3652 5.56 12.6196 5.66536 12.8071 5.85289C12.9946 6.04043 13.1 6.29478 13.1 6.56C13.1 7.11 12.65 7.56 12.1 7.56C11.57 7.54 11.07 7.34 10.67 7C10.19 7.31 9.64 7.5 9.07 7.56C8.5 7.61 8.03 7.21 8 6.66C7.98158 6.52937 7.99005 6.39636 8.02489 6.26912C8.05974 6.14189 8.12022 6.02312 8.20263 5.92011C8.28504 5.81709 8.38764 5.73201 8.50412 5.67009C8.6206 5.60816 8.74851 5.5707 8.88 5.56C9.04 5.54 9.82 5.42 9.82 4.79C9.82 4.13 10.07 3.5 10.5 3C9.58 2.75 8.59 3.08 7.59 4.29C5.75 4 5 4.25 4.45 6.2C3.5 6.67 3 7 2.78 8C3.86 7.78 4.97 7.87 6 8.25C6.5 8.44 6.78 9 6.59 9.54C6.4 10.06 5.82 10.32 5.3 10.13C4.57 9.81 3.75 9.79 3 10.07C2.68 10.34 2.68 10.9 2.68 11.34C2.68 12.08 3.05 12.77 3.68 13.17C4.21 13.44 4.8 13.58 5.39 13.57C5.24 13.31 5.11 13.04 5 12.76C4.92128 12.5031 4.94526 12.2256 5.0669 11.986C5.18854 11.7464 5.39836 11.5633 5.65223 11.4752C5.9061 11.3872 6.18423 11.401 6.42813 11.5138C6.67203 11.6265 6.86269 11.8295 6.96 12.08C7.36 13.22 8.38 14 9.58 14.13C10.95 14.06 12.17 13.25 12.77 12C13 10.62 14.11 10.5 15.33 10.5ZM17.33 17.97L16.71 16.67L16 16.83L17 18.08L17.33 17.97V17.97ZM12.68 9.36C12.6887 9.10454 12.5992 8.85545 12.43 8.66389C12.2608 8.47233 12.0246 8.35286 11.77 8.33C11.06 8.29 10.37 8.53 9.84 9C9.27 9.58 8.97 10.38 9 11.19C9 11.4552 9.10536 11.7096 9.29289 11.8971C9.48043 12.0846 9.73478 12.19 10 12.19C10.57 12.19 11 11.74 11 11.19C11 10.92 11.07 10.65 11.23 10.43C11.35 10.33 11.5 10.28 11.66 10.28C12.21 10.31 12.68 9.9 12.68 9.36Z",fill:"white"},null,-1),Pt=[It];function Et(e,t){return r(),l("svg",jt,Pt)}var Rt=C(Tt,[["render",Et]]);const zt={},Bt={viewBox:"0 0 19 18",xmlns:"http://www.w3.org/2000/svg"},qt=s("path",{d:"M13.24 8.51L14.81 6.94L11.06 3.19L9.49 4.76L5.35 0.63C4.57 -0.15 3.3 -0.15 2.52 0.63L0.62 2.53C-0.16 3.31 -0.16 4.58 0.62 5.36L4.75 9.49L0 14.25V18H3.75L8.51 13.24L12.64 17.37C13.59 18.32 14.87 17.97 15.47 17.37L17.37 15.47C18.15 14.69 18.15 13.42 17.37 12.64L13.24 8.51V8.51ZM6.18 8.07L2.04 3.94L3.93 2.04L5.2 3.31L4.02 4.5L5.43 5.91L6.62 4.72L8.07 6.17L6.18 8.07V8.07ZM14.06 15.96L9.93 11.83L11.83 9.93L13.28 11.38L12.09 12.57L13.5 13.98L14.69 12.79L15.96 14.06L14.06 15.96V15.96ZM17.71 4.04C17.8027 3.94749 17.8763 3.8376 17.9264 3.71662C17.9766 3.59565 18.0024 3.46597 18.0024 3.335C18.0024 3.20403 17.9766 3.07435 17.9264 2.95338C17.8763 2.8324 17.8027 2.72251 17.71 2.63L15.37 0.29C14.9 -0.18 14.25 2.68221e-07 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04V4.04Z",fill:"white"},null,-1),Dt=[qt];function Ht(e,t){return r(),l("svg",Bt,Dt)}var Ot=C(zt,[["render",Ht]]);const Ft={class:"flex lg:justify-between lg:space-y-0 flex-wrap justify-center md:justify-start mt-16 space-y-10"},Nt={class:"bg-app-dark-blue rounded-full p-4 hidden lg:flex items-center justify-center text-white w-20 h-20 mx-auto mb-5"},Ut={class:"lg:text-center lg:pl-0 pl-4"},Zt={class:"text-2xl mb-5"},Wt={class:"text-gray-400 block"},Gt=h({setup(e){const{setActiveRoute:t}=I("services"),o=[{title:"Website Development",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eius maiores voluptatem tenetur quos ratione libero architecto quae sequi rem.",icon:wt,iconClass:"w-10 h-10"},{title:"Tutoring",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eius maiores voluptatem tenetur quos ratione libero architecto quae sequi rem.",icon:At,iconClass:"w-9.5 h-9.5"},{title:"Consultation",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eius maiores voluptatem tenetur quos ratione libero architecto quae sequi rem.",icon:Rt,iconClass:"w-9 h-9"},{title:"UI/UX Design",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eius maiores voluptatem tenetur quos ratione libero architecto quae sequi rem.",icon:Ot,iconClass:"w-7.5 h-7.5"}];return(n,a)=>{const i=F,c=S("observe-visibility");return M((r(),A(i,{id:"services",caption:"What I Offer?",title:"My Services"},{default:w(()=>[s("div",Ft,[(r(),l(k,null,T(o,({title:u,description:d,icon:g,iconClass:b})=>s("div",{key:u,class:"w-full border-b pb-6 lg:w-[20%] lg:border-b-0 lg:pb-0"},[s("span",Nt,[(r(),A(G(g),{class:v(b)},null,8,["class"]))]),s("div",Ut,[s("h5",Zt,f(u),1),s("span",Wt,f(d),1)])])),64))])]),_:1})),[[c,{callback:m(t),intersection:{threshold:.6}}]])}}}),Jt={},Kt={class:"main-container pt-36"},Yt={class:"text-center md:text-left"},Xt=s("h1",{class:"text-app-light-blue text-lg mb-2 uppercase"}," Hello my name is Trayvon ",-1),Qt=s("p",{class:"text-5xl mb-2"}," I make and design websites. ",-1),eo=s("div",{class:"text-xl mb-6"},[s("p",null," I'm a frontend developer co-founder of Codista, a software studio in Vienna. "),s("p",null," I also write about the web on my Biogand on Twitter. ")],-1),to={href:"#contact",class:"border border-app-light-blue px-16 py-2.5 duration-150 text-xl rounded-md text-app-light-blue hover:bg-gray-100 hover:bg-opacity-10"},oo=H(" Get in touch "),so=[oo];function no(e,t){const o=S("smooth-scroll");return r(),l("div",Kt,[s("div",Yt,[Xt,Qt,eo,M((r(),l("a",to,so)),[[o]])])])}var ao=C(Jt,[["render",no]]);const N=V(!1);function X(){return{isOpen:()=>N.value,toggle:()=>N.value=!N.value}}const ro=e=>(le("data-v-22cafd92"),e=e(),ce(),e),io=["aria-expanded"],lo=ro(()=>s("svg",{width:"40",height:"40",viewBox:"0 0 100 100"},[s("path",{class:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),s("path",{class:"line line2",d:"M 20,50 H 80"}),s("path",{class:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})],-1)),co=[lo],uo=h({setup(e){const{isOpen:t,toggle:o}=X();return(n,a)=>(r(),l("button",{class:v(["menu z-35 absolute right-2 flex lg:hidden",[{opened:m(t)()}]]),"aria-expanded":m(t)(),"aria-label":"Main-mobile-menu",onClick:a[0]||(a[0]=i=>m(o)())},co,10,io))}});var po=C(uo,[["__scopeId","data-v-22cafd92"]]);const _o=h({setup(e){const{isOpen:t}=X();return(o,n)=>{const a=po;return r(),l(k,null,[s("div",{class:v([m(t)()?"opacity-100 scale-100 translate-x-0":"opacity-0 scale-0 -translate-y-100","duration-400 lg:hidden z-25 transform ease-in-out bg-app-dark-blue h-screen text-white inset-0 fixed"])},null,2),p(a)],64)}}});var mo="/avatar.png";function ho(e,t,o){ue(e)?de(e,(n,a)=>{a==null||a.removeEventListener(t,o),n==null||n.addEventListener(t,o)}):pe(()=>{e.addEventListener(t,o)}),_e(()=>{var n;(n=m(e))==null||n.removeEventListener(t,o)})}const fo=[{text:"Services",href:"#services"},{text:"Works",href:"#works"},{text:"Testimonials",href:"#testimonials"},{text:"Contact",href:"#contact",button:!0}],go=q({id:"routes",state:()=>({routes:fo})}),vo={class:"flex items-center justify-between relative"},bo=s("p",null,"Trayvon Northern",-1),xo={class:"lg:flex lg:items-center lg:gap-4 hidden"},yo=["href"],wo=h({setup(e){const{routes:t}=go(),o=me(),{getActiveRoute:n}=I(),a=D(()=>`#${n()}`),i=V(null),c=V(!1),u=D(()=>!!c.value||o.path!=="/");return typeof window!="undefined"&&ho(window,"scroll",()=>{window.scrollY>i.value.offsetTop+i.value.offsetHeight?c.value=!0:c.value=!1}),(d,g)=>{const b=j("router-link"),_=_o,$=S("smooth-scroll");return r(),l("div",null,[s("div",{class:v(["py-10 fixed z-20 top-0 w-full bg-app-dark-blue duration-250 text-white",{"shadow-2xl pt-4 pb-4 z-20":c.value}])},[s("nav",{ref_key:"navbar",ref:i,class:"main-container relative"},[s("div",vo,[p(b,{to:"/",class:"flex items-center gap-2"},{default:w(()=>[s("img",{class:v([m(u)?"w-12 h-12":"w-14 h-14","rounded-full duration-250"]),src:mo,alt:"Trayvon Northern Face"},null,2),bo]),_:1}),p(_),s("ul",xo,[(r(!0),l(k,null,T(m(t),x=>(r(),l("li",{key:x.text,class:"group"},[M((r(),l("a",{class:v([m(a)===x.href?"text-app-light-blue":"group-hover:text-app-light-blue","duration-150"]),href:x.href},[H(f(x.text),1)],10,yo)),[[$]])]))),128))])])],512)],2)])}}}),Co={class:"bg-app-dark-blue text-white relative pb-36"},$o=h({setup(e){return(t,o)=>{const n=wo,a=ao;return r(),l("div",Co,[p(n),p(a)])}}}),Lo={},ko={class:"bg-white"};function Vo(e,t){const o=$o,n=Gt,a=ft,i=ct,c=Ye,u=Pe;return r(),l("div",ko,[p(o),p(n),p(a),p(i),p(c),p(u)])}var So=C(Lo,[["render",Vo]]);const Mo=[{name:"index",path:"/",component:So,props:!0},{name:"README",path:"/readme",component:()=>R(()=>import("./README.18d2877a.js"),["assets/README.18d2877a.js","assets/vendor.bc2ef461.js"]),props:!0},{name:"projects-id",path:"/projects/:id",component:()=>R(()=>import("./_id_.4a211172.js"),["assets/_id_.4a211172.js","assets/_id_.94462d25.css","assets/vendor.bc2ef461.js"]),props:!0}],Ao={};function To(e,t){const o=j("router-view");return r(),l("main",null,[p(o,null,{default:w(({Component:n})=>[p(he,{mode:"out-in",name:"page-fade"},{default:w(()=>[(r(),A(G(n)))]),_:2},1024)]),_:1})])}var jo=C(Ao,[["render",To]]);const Io={"404":()=>R(()=>import("./404.209f11bb.js"),["assets/404.209f11bb.js","assets/vendor.bc2ef461.js"]),default:jo,home:()=>R(()=>import("./home.3817283a.js"),["assets/home.3817283a.js","assets/vendor.bc2ef461.js"])};function Po(e){return e.map(t=>{var o;return{path:t.path,component:Io[((o=t.meta)==null?void 0:o.layout)||"default"],children:[W(z({},t),{path:""})]}})}const Eo=h({setup(e){return fe({title:"Vitesse",meta:[{name:"description",content:"Opinionated Vite Starter Template"}]}),(t,o)=>{const n=j("router-view");return r(),A(n)}}});const Ro=Po(Mo);ge(Eo,{routes:Ro,base:"/",scrollBehavior(e,t,o){if(e.hash)return new Promise(n=>{setTimeout(()=>{n({el:e.hash,behavior:"smooth"})},300)})}},async e=>{const{app:t}=e;t.use(ve),t.use(be),t.use(xe),t.use(ye,{observer:!0,observerOptions:{rootMargin:"550px",threshold:.1},preLoad:1.3,attempt:5}),Object.values({"./modules/pinia.ts":ke}).map(o=>{var n;return(n=o.install)==null?void 0:n.call(o,e)})},{transformState(e){return e}});export{C as _,E as u};
