import"./assets/styles-7d7ef888.js";const l=document.querySelector(".feedback-form"),o=document.querySelector("input"),s=document.querySelector("textarea"),t={email:"",message:""},a=JSON.parse(localStorage.getItem("feedback-form-state"));a!==null&&(s.value=a.message,o.value=a.email);l.addEventListener("input",e=>{e.preventDefault();const r=e.currentTarget.elements.email.value,n=e.currentTarget.elements.message.value;t.email=r.trim(),t.message=n.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))});l.addEventListener("submit",e=>{e.preventDefault(),s.value.length==0||o.value.length==0?console.log("please fill all field"):(console.log(t),localStorage.removeItem("feedback-form-state"),l.reset(),t.length=0)});
//# sourceMappingURL=commonHelpers2.js.map
