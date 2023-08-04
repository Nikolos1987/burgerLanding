import {PORT} from "./index.js"
export function renderGoods(html,data){
    const getTags=document.querySelector(html);
console.log(html);
    data.forEach(e => {
     getTags.insertAdjacentHTML("afterbegin",`<div>${e.title}</div>`)      
    });
  
   }
