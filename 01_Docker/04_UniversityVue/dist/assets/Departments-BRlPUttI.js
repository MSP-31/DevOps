import{a as c,o as u,b as t,F as _,q as P,h,p as d,s as v,x as C,y as I,f as b,l as $,z as q,k as x,d as y,j as k,i as D}from"./index-BVV7CETK.js";const L={class:"table table-striped table-hover text-center"},R=["onClick"],w=["onClick"],B={__name:"DepartmentTable",props:{departments:{type:Array,required:!0}},emits:["item-click","delete-department"],setup(i,{emit:p}){const r=p,o=a=>{confirm("정말로 삭제하시겠습니까?")&&r("delete-department",a)};return(a,l)=>(u(),c("table",L,[l[0]||(l[0]=t("thead",null,[t("tr",null,[t("th",null,"학과 번호"),t("th",null,"학과 이름"),t("th",null,"계열"),t("th",null,"개설 여부"),t("th",null,"정원"),t("th",null,"삭제")])],-1)),t("tbody",null,[(u(!0),c(_,null,P(i.departments,s=>(u(),c("tr",{key:s.no,onClick:h(g=>{r("item-click",s.no)},["stop"])},[t("td",null,d(s.no),1),t("td",null,d(s.name),1),t("td",null,d(s.category),1),t("td",null,d(s.openYn),1),t("td",null,d(s.capacity),1),t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger",onClick:h(g=>{o(s.no)},["stop"])},"삭제",8,w)])],8,R))),128))])]))}},M={"aria-label":"Page navigation example"},j={class:"pagination justify-content-center"},N={class:"page-item"},z=["onClick"],F={class:"page-item"},O={__name:"Pagination",props:{pageInfo:{type:Object,required:!0}},emits:["change-page"],setup(i,{emit:p}){const r=i,o=v(()=>Math.ceil(r.pageInfo.totalCount/r.pageInfo.listLimit)),a=v(()=>r.pageInfo.pageLimit*Math.floor((r.pageInfo.currentPage-1)/r.pageInfo.pageLimit)+1),l=v(()=>{let n=a.value+r.pageInfo.pageLimit-1;return n>o.value?o.value:n}),s=v(()=>{const n=[];for(let e=a.value;e<=l.value;e++)n.push(e);return n}),g=p,f=n=>{g("change-page",{page:n,totalPages:o.value})};return(n,e)=>(u(),c("nav",M,[t("ul",j,[t("li",N,[t("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=h(m=>{f(i.pageInfo.currentPage-1)},["prevent"]))},e[2]||(e[2]=[t("span",{"aria-hidden":"true"},"«",-1)]))]),(u(!0),c(_,null,P(s.value,m=>(u(),c("li",{key:m,class:"page-item"},[t("a",{class:C(["page-link",{active:i.pageInfo.currentPage===m}]),href:"#",onClick:h(S=>{f(m)},["prevent"])},d(m),11,z)]))),128)),t("li",F,[t("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=h(m=>{f(i.pageInfo.currentPage+1)},["prevent"]))},e[3]||(e[3]=[t("span",{"aria-hidden":"true"},"»",-1)]))])])]))}},A={__name:"Departments",setup(i){const p=I([]),r=$(),o=D(),a=b({currentPage:parseInt(r.query.page)||1,totalCount:0,pageLimit:5,listLimit:0}),l=async n=>{try{const e=await k.get(`/api/v1/university-service/departments?page=${n}&numOfRows=10`);p.value=e.data.items,a.totalCount=e.data.totalCount,a.listLimit=10}catch(e){e.response.data.code===404?(alert(e.response.data.message),o.push({name:"departments"})):alert("에러가 발생했습니다.")}},s=({page:n,totalPages:e})=>{n>=1&&n<=e&&o.push({name:"departments",query:{page:n}})},g=n=>{o.push({name:"departments/no",params:{no:n}})},f=async n=>{try{(await k.delete(`/api/v1/university-service/departments/${n}`)).data.code===200&&(alert("정상적으로 삭제되었습니다."),l(a.currentPage))}catch(e){e.response.data.code===403?alert("권한이 없는 사용자입니다."):e.response.data.code===404?(alert(e.response.data.message),o.push({name:"departments"})):alert("에러가 발생했습니다.")}};return q((n,e)=>{a.currentPage=parseInt(n.query.page)||1,l(a.currentPage)}),x(()=>{l(a.currentPage)}),(n,e)=>(u(),c("main",null,[y(B,{departments:p.value,onItemClick:g,onDeleteDepartment:f},null,8,["departments"]),y(O,{pageInfo:a,onChangePage:s},null,8,["pageInfo"])]))}};export{A as default};
