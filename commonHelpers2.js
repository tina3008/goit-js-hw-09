import"./assets/styles-7d7ef888.js";const a=document.querySelector(".feedback-form"),o=document.querySelector("input"),s=document.querySelector("textarea"),e={email:"",message:""},r=localStorage.getItem("feedback-form-state"),m=JSON.parse(r);console.log(`infoStorage=${r}`);console.log(`parsedinfo=${m}`);e.email===""||e.message===""?a.addEventListener("input",t=>{t.preventDefault();const n=t.currentTarget.elements.email.value,l=t.currentTarget.elements.message.value;e.email=n.trim(),e.message=l.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e)),console.log(e)}):(s.value=e.message,o.value=e.email,console.log(`areainfo.value=${s.value}, inputinfo.value=${o.value}`));a.addEventListener("submit",t=>{t.preventDefault(),localStorage.removeItem("feedback-form-state"),a.reset()});
//# sourceMappingURL=commonHelpers2.js.map
