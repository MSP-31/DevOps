import{f as c,k as p,l as m,a as u,d,j as r,i as l,o as f}from"./index-BVV7CETK.js";import{_}from"./DepartmentForm-DFT5H-mm.js";const b={__name:"DepartmentDetail",setup(v){const a=l(),n=m(),s=c({}),o=async t=>{try{const e=await r.get(`/api/v1/university-service/departments/${t}`);Object.assign(s,e.data.items[0])}catch(e){e.response.data.code===404?(alert(e.response.data.message),a.push({name:"departments"})):alert("에러가 발생했습니다.")}},i=async t=>{try{(await r.put(`/api/v1/university-service/departments/${t.no}`,t)).data.code===200&&alert("정상적으로 수정되었습니다.")}catch(e){e.response.data.code===400?alert("학과 정보를 모두 입력해 주세요."):e.response.data.code===404?(alert(e.response.data.message),a.push({name:"departments"})):alert("에러가 발생했습니다.")}};return p(()=>{o(n.params.no)}),(t,e)=>(f(),u("div",null,[d(_,{"submit-button-text":"수정","init-form-data":s,onFormSubmit:i},null,8,["init-form-data"])]))}};export{b as default};
