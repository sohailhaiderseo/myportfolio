const b=document.querySelector(".burger"),n=document.getElementById("nav"),x=document.querySelector(".nclose");
function setMenu(o){n.classList.toggle("open",o);b.setAttribute("aria-expanded",o);b.setAttribute("aria-label",o?"Close menu":"Open menu");document.body.classList.toggle("nav-open",o)}
b.addEventListener("click",()=>setMenu(!n.classList.contains("open")));
if(x)x.addEventListener("click",()=>setMenu(false));
n.addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
addEventListener("resize",()=>{if(innerWidth>900)setMenu(false)});
const f=document.getElementById("cf");if(f)f.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(f);location.href="mailto:sohailhaidermir@gmail.com?subject="+encodeURIComponent("Free audit request: "+d.get("service"))+"&body="+encodeURIComponent("Name: "+d.get("name")+"\nEmail: "+d.get("email")+"\nWebsite: "+d.get("site")+"\n\n"+d.get("message"))});
const yr=document.getElementById("yr");if(yr)yr.textContent=new Date().getFullYear();
